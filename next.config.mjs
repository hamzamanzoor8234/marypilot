import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

export default {poweredByHeader:false,async headers(){return [{source:'/:path*',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'X-Frame-Options',value:'DENY'}]}];
