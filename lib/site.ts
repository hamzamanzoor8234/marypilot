export const site={
 name:'Marypilot',
 description:'Business-aware review replies. Give every location its own voice, draft thoughtful responses, and approve every reply before it is published.',
 email:process.env.NEXT_PUBLIC_SUPPORT_EMAIL||'hamzamanzoor8234@gmail.com',
 operator:'Hamza Manzoor / Marysys',
 updated:'15 October 2026',
};
const rawOrigin=process.env.NEXT_PUBLIC_SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:'http://localhost:3001');
export const siteUrl=new URL(rawOrigin).origin;
const configuredApp=process.env.NEXT_PUBLIC_APP_URL;
export const appUrl=configuredApp?new URL(configuredApp).toString():null;
export const appLink=appUrl||'/contact';
