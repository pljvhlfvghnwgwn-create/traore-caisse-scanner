// Traoré Caisse Scanner — fonctionne hors connexion après la première visite
const CACHE='traore-caisse-v1';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  // Page et fichiers du site : réseau d'abord (mises à jour), cache si hors ligne
  e.respondWith(fetch(r).then(res=>{if(res&&res.status===200&&(new URL(r.url).origin===location.origin||r.url.includes('unpkg.com'))){const c=res.clone();caches.open(CACHE).then(x=>x.put(r,c))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));
});
