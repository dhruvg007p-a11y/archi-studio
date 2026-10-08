import {useState} from 'react';
import {img} from '../data/siteData';
// Photo with graceful fallback so a bad URL never shows a broken icon.
export default function Img({id,alt,w=1200,className='',...rest}){
  const[bad,setBad]=useState(false);
  if(bad)return <div role="img" aria-label={alt} className={`aspect-[4/5] bg-sand ${className}`}/>;
  return <img src={img(id,w)} alt={alt} loading="lazy" decoding="async" onError={()=>setBad(true)} className={className} {...rest}/>;
}
