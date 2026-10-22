import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
const allowed=new Set(['/index.html','/styles.css','/app.js','/plan.html','/plan-data.js','/assets/logo.svg']);
const types={html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8',svg:'image/svg+xml'};
createServer(async(req,res)=>{const url=new URL(req.url,'http://127.0.0.1:4180');const path=url.pathname==='/'?'/index.html':url.pathname;if(!allowed.has(path)){res.writeHead(404);res.end('No encontrado');return;}try{const b=await readFile('.'+path);res.writeHead(200,{'Content-Type':types[path.split('.').pop()],'Cache-Control':'no-store'});res.end(b);}catch{res.writeHead(404);res.end('No encontrado');}}).listen(4180,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4180'));
