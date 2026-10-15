import type {MetadataRoute} from 'next';
import {siteUrl} from '../lib/site';
export default function sitemap():MetadataRoute.Sitemap{return ['','/privacy','/terms','/contact','/data-deletion'].map(path=>({url:`${siteUrl}${path}`,lastModified:new Date('2026-10-15T00:00:00Z'),changeFrequency:'monthly',priority:path?0.5:1}));}
