import assert from 'node:assert/strict';
const base=process.env.CHECK_SITE_URL||'http://localhost:3001';
for(const path of ['/','/privacy','/terms','/contact','/data-deletion','/robots.txt','/sitemap.xml','/brand/marypilot-logo.png','/opengraph-image']){
 const r=await fetch(base+path);assert.equal(r.status,200,path);
 if(path==='/brand/marypilot-logo.png')assert.match(r.headers.get('content-type'),/image\/png/);
}
const home=await (await fetch(base)).text();assert.match(home,/Marypilot|marypilot/);assert.match(home,/href="\/privacy"/);assert.match(home,/href="\/terms"/);assert.match(home,/href="\/contact"/);assert.match(home,/Illustrative preview/);
const privacy=await (await fetch(base+'/privacy')).text();assert.match(privacy,/business.manage/);assert.match(privacy,/Limited Use/);assert.match(privacy,/OpenAI/);assert.match(privacy,/hamzamanzoor8234@gmail.com/);
console.log('PASS: public pages, privacy/terms/support links, logo PNG, metadata image, sitemap, robots and data-use disclosures.');
