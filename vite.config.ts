import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'inject-safe-fetch',
        transformIndexHtml() {
          return [
            {
              tag: 'script',
              attrs: { type: 'text/javascript' },
              injectTo: 'head-prepend',
              children: `(function(){try{if(typeof window!=='undefined'){window.addEventListener('error',function(e){if(e&&(e.message||'').indexOf('fetch')!==-1&&(e.message||'').indexOf('getter')!==-1){if(e.preventDefault)e.preventDefault();if(e.stopImmediatePropagation)e.stopImmediatePropagation();return true;}},true);var o=window.onerror;window.onerror=function(m,s,l,c,e){var msg=String(m||(e&&e.message)||'');if(msg.indexOf('fetch')!==-1&&msg.indexOf('getter')!==-1){return true;}if(typeof o==='function')return o.apply(this,arguments);};var w=window;var cur=typeof w.fetch==='function'?w.fetch.bind(w):w.fetch;var d={get:function(){return cur;},set:function(v){cur=v;},configurable:true,enumerable:true};var p=w;while(p){try{if(Object.getOwnPropertyDescriptor(p,'fetch'))Object.defineProperty(p,'fetch',d);}catch(x){}try{p=Object.getPrototypeOf(p);}catch(x){break;}}[w,w.globalThis,w.self].forEach(function(t){if(t){try{Object.defineProperty(t,'fetch',d);}catch(x){}}});}}catch(err){}})();`,
            },
          ];
        },
      },
      {
        name: 'api-health',
        configureServer(server) {
          server.middlewares.use('/api/health', (_req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 'ok' }));
          });
        },
      },
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
