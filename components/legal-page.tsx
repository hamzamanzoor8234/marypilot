import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {site} from '../lib/site';
export default function LegalPage({title,intro,children}:{title:string,intro:string,children:React.ReactNode}){return <main id="main" className="container legal-page"><Link href="/" className="quiet-link"><ArrowLeft size={15}/>Back to Marypilot</Link><div className="eyebrow">MARYPILOT · TRUST & TRANSPARENCY</div><h1>{title}</h1><p className="legal-intro">{intro}</p><div className="legal-date">Last updated {site.updated} · Operated by {site.operator}</div><div className="legal-content">{children}</div><div className="legal-contact">Questions about this page? <a href={`mailto:${site.email}`}>{site.email}</a></div></main>;}
