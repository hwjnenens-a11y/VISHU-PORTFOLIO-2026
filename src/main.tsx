// Robust safeguard against "Cannot set property fetch of #<Window> which has only a getter"
(() => {
  try {
    const w = typeof window !== 'undefined' ? window : null;
    if (!w) return;

    // 1. Capture and prevent any "Cannot set property fetch" error from surfacing
    w.addEventListener(
      'error',
      (e: ErrorEvent) => {
        const msg = String((e && e.message) || '');
        if (msg.includes('fetch') && (msg.includes('getter') || msg.includes('Cannot set property'))) {
          if (e.preventDefault) e.preventDefault();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
          return true;
        }
      },
      true,
    );

    const prevOnError = w.onerror;
    w.onerror = function (msg, source, lineno, colno, error) {
      const sMsg = String(msg || (error && error.message) || '');
      if (sMsg.includes('fetch') && (sMsg.includes('getter') || sMsg.includes('Cannot set property'))) {
        return true;
      }
      if (typeof prevOnError === 'function') {
        return prevOnError.apply(this, [msg, source, lineno, colno, error]);
      }
    };

    const targets: (Window | typeof globalThis)[] = [w, w.globalThis, w.self].filter(Boolean);

    let rawFetch: typeof fetch | undefined;
    try {
      if (typeof w.fetch === 'function') {
        rawFetch = w.fetch.bind(w);
      }
    } catch {}

    let currentFetch = rawFetch;
    const safeDescriptor: PropertyDescriptor = {
      get() {
        return currentFetch;
      },
      set(newFetch: typeof fetch) {
        currentFetch = newFetch;
      },
      configurable: true,
      enumerable: true,
    };

    // 2. Traverse the full prototype chain to repair any getter-only descriptor
    targets.forEach((t) => {
      let p: object | null = t;
      while (p) {
        try {
          const desc = Object.getOwnPropertyDescriptor(p, 'fetch');
          if (desc && desc.get && !desc.set) {
            Object.defineProperty(p, 'fetch', safeDescriptor);
          }
        } catch {}
        try {
          p = Object.getPrototypeOf(p);
        } catch {
          break;
        }
      }
    });

    // 3. Ensure own property on window / globalThis is writable and configurable
    targets.forEach((t) => {
      try {
        const ownDesc = Object.getOwnPropertyDescriptor(t, 'fetch');
        if (!ownDesc || (ownDesc.get && !ownDesc.set) || !ownDesc.writable) {
          Object.defineProperty(t, 'fetch', safeDescriptor);
        }
      } catch {}
    });
  } catch {}
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
