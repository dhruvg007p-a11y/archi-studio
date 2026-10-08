import {useEffect} from 'react';
import {X,ChevronLeft,ChevronRight} from 'lucide-react';
import {img} from '../data/siteData';
export default function Lightbox({items,index,setIndex,onClose}){
  const n=items.length,it=items[index];
  useEffect(()=>{
    const k=e=>{if(e.key==='Escape')onClose();if(e.key==='ArrowRight')setIndex((index+1)%n);if(e.key==='ArrowLeft')setIndex((index-1+n)%n)};
    window.addEventListener('keydown',k);document.body.style.overflow='hidden';
    return()=>{window.removeEventListener('keydown',k);document.body.style.overflow=''};
  },[index,n,onClose,setIndex]);
  const stop=e=>e.stopPropagation();
  return(<div role="dialog" aria-modal="true" aria-label={it.title} onClick={onClose} className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-white">
    <button aria-label="Close gallery" className="absolute right-4 top-4 z-10 p-2"><X/></button>
    <div className="flex min-h-0 flex-1 items-center justify-center px-2 pt-14" onClick={stop}>
      <button aria-label="Previous photo" onClick={()=>setIndex((index-1+n)%n)} className="p-2"><ChevronLeft size={32}/></button>
      <img key={it.id} src={img(it.id,2000)} alt={it.title} className="fade-up max-h-full min-w-0 max-w-full object-contain"/>
      <button aria-label="Next photo" onClick={()=>setIndex((index+1)%n)} className="p-2"><ChevronRight size={32}/></button>
    </div>
    <div className="p-5 text-center" onClick={stop}><p className="font-serif text-2xl">{it.title}</p>
      <p className="text-sm text-gold">{it.location}</p>{it.desc&&<p className="mt-1 text-sm text-white/70">{it.desc}</p>}</div>
  </div>);
}
