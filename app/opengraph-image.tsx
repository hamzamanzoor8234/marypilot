import {ImageResponse} from 'next/og';
export const alt='Marypilot — Thoughtful replies. Your business voice.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#f8f7f2',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'68px',color:'#183b32',justifyContent:'space-between'}}><div style={{display:'flex',fontSize:40,fontWeight:700}}>marypilot<span style={{color:'#e87b54'}}>.</span></div><div style={{display:'flex',flexDirection:'column',fontSize:76,letterSpacing:-3,lineHeight:1.1}}><span>Your business voice.</span><span>A thoughtful reply.</span><span style={{color:'#d77550'}}>Every time.</span></div><div style={{display:'flex',fontSize:22,color:'#6d7e72'}}>Business-aware drafts. Approved by you.</div></div>,size);}
