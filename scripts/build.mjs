import {mkdir,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','styles.css','app.js','plan.html','plan-data.js']) await cp(file,'dist/'+file);
await cp('assets','dist/assets',{recursive:true});
console.log('Sitio preparado en dist.');
