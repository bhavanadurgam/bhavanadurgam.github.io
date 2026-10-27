// Shared behaviour for every page. Runs on each `astro:page-load`.

const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => [...el.querySelectorAll<T>(s)];
export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Toast ─────────────────────────────────────────────── */
let toastTimer = 0;
export function toast(msg: string) {
  const t = $('.toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => t.classList.remove('show'), 2200);
}

/* ── Paper sounds (Web Audio, no files) ───────────────── */
let ctx: AudioContext | null = null;
const soundOn = () => {
  try { return localStorage.getItem('bd-sound') === 'on'; } catch { return false; }
};
export function paper(kind: 'open' | 'tap' = 'tap') {
  if (!soundOn()) return;
  ctx ??= new AudioContext();
  const dur = kind === 'open' ? 0.32 : 0.12;
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length) ** 2;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const band = ctx.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.value = kind === 'open' ? 2400 : 3600;
  band.Q.value = 0.8;
  const gain = ctx.createGain();
  gain.gain.value = kind === 'open' ? 0.22 : 0.14;
  src.connect(band).connect(gain).connect(ctx.destination);
  src.start();
}

function bindSound() {
  const btn = $<HTMLButtonElement>('.sound-btn');
  if (!btn) return;
  const sync = () => {
    const on = soundOn();
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', `Paper sounds: ${on ? 'on' : 'off'}`);
  };
  sync();
  btn.addEventListener('click', () => {
    try { localStorage.setItem('bd-sound', soundOn() ? 'off' : 'on'); } catch { /* storage blocked */ }
    sync();
    paper('open');
    toast(soundOn() ? 'Paper sounds on' : 'Paper sounds off');
  });
}

/* ── Modals: focus trap, Esc, click outside ───────────── */
let lastFocus: HTMLElement | null = null;
export function openModal(m: HTMLElement) {
  lastFocus = document.activeElement as HTMLElement;
  m.classList.add('open');
  m.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const first = $<HTMLElement>('.modal-close, button, a', m);
  requestAnimationFrame(() => first?.focus());
}
export function closeModal(m: HTMLElement) {
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastFocus?.focus();
}
function bindModals() {
  $$('.modal').forEach((m) => {
    if (m.dataset.bound) return;
    m.dataset.bound = '1';
    m.setAttribute('aria-hidden', 'true');
    m.addEventListener('click', (e) => {
      if (e.target === m || (e.target as Element).closest('.modal-close')) closeModal(m);
    });
    m.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal(m);
      if (e.key !== 'Tab') return;
      const f = $$<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"], audio', m).filter((x) => x.offsetParent);
      if (!f.length) return;
      const [a, z] = [f[0], f[f.length - 1]];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    });
  });
}

/* ── Mobile menu ───────────────────────────────────────── */
function bindMenu() {
  const sheet = $('#menu-sheet');
  const open = $('.menu-btn');
  if (!sheet || !open) return;
  const set = (on: boolean) => {
    sheet.classList.toggle('open', on);
    sheet.setAttribute('aria-hidden', String(!on));
    open.setAttribute('aria-expanded', String(on));
    document.body.style.overflow = on ? 'hidden' : '';
    if (on) $<HTMLElement>('.menu-close', sheet)?.focus();
    else open.focus();
  };
  open.addEventListener('click', () => set(true));
  $('.menu-close', sheet)?.addEventListener('click', () => set(false));
  sheet.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
  $$('a', sheet).forEach((a) => a.addEventListener('click', () => { document.body.style.overflow = ''; }));
}

/* ── Scroll reveal (fade + 20px rise, 70ms stagger) ───── */
function reveal() {
  const els = $$('.reveal:not(.in)');
  if (reducedMotion() || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.filter((e) => e.isIntersecting).forEach((e, i) => {
      (e.target as HTMLElement).style.setProperty('--d', `${i * 70}ms`);
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((e) => io.observe(e));
}

/* ── Copy email with fallback ──────────────────────────── */
function bindCopy() {
  $$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
    const email = b.dataset.copy!;
    const target = $('[data-email-text]');
    try {
      await navigator.clipboard.writeText(email);
      toast('✓ Email copied');
    } catch {
      if (target) {
        const range = document.createRange();
        range.selectNodeContents(target);
        const sel = getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      toast('Selected — press ⌘C to copy');
    }
    paper('tap');
  }));
}

/* ── Résumé links not ready yet ────────────────────────── */
function bindResumes() {
  $$('[data-resume="soon"]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    toast('Résumé coming soon');
  }));
}

/* ── Easter egg: type "bhavana", or tap the footer logo 5× ── */
let typed = '';
let taps: number[] = [];
function openSecret() {
  const m = $('#secret');
  if (m && !m.classList.contains('open')) { paper('open'); openModal(m); }
}
function bindSecret() {
  $('.secret-trigger')?.addEventListener('click', () => {
    const now = Date.now();
    taps = [...taps.filter((t) => now - t < 2500), now];
    if (taps.length >= 5) { taps = []; openSecret(); }
  });
}
function globalOnce() {
  document.addEventListener('keydown', (e) => {
    const el = e.target as HTMLElement;
    if (el.matches('input, textarea, [contenteditable]') || e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-7);
    if (typed === 'bhavana') openSecret();
  });
  document.addEventListener('click', (e) => {
    if ((e.target as Element).closest('[data-sound="open"]')) paper('open');
    else if ((e.target as Element).closest('[data-sound]')) paper('tap');
  });
}

let initialised = false;
export function initShared() {
  if (!initialised) { initialised = true; globalOnce(); }
  bindModals();
  bindMenu();
  bindSound();
  bindCopy();
  bindResumes();
  bindSecret();
  reveal();
}
