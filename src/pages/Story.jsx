import {useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import {stories} from '../data/siteData';
import Img from '../components/Img';import Lightbox from '../components/Lightbox';import Reveal from '../components/Reveal';import usePageMeta from '../components/usePageMeta';

export default function Story(){
  const{slug}=useParams();const i=stories.findIndex(s=>s.slug===slug);const s=stories[i]||stories[0];
  const prev=stories[(i-1+stories.length)%stories.length],next=stories[(i+1)%stories.length];
  const[open,setOpen]=useState(null);
  usePageMeta(s.couple,`${s.couple} wedding in ${s.location}. ${s.story.slice(0,110)}`);
  const items=s.gallery.map((id,k)=>({id,title:`${s.couple}, photo ${k+1}`,location:s.location}));
  return(<><section className="relative flex h-[70vh] min-h-[420px] items-end bg-ink text-white">
      <Img id={s.cover} alt={`${s.couple} wedding`} w={2000} loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-70"/>
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14"><p className="note fade-up">{s.location}, {s.date}</p><h1 className="h2 fade-up mt-2 !text-6xl md:!text-8xl">{s.couple}</h1></div></section>
    <section className="mx-auto max-w-3xl px-6 py-20 text-center"><Reveal><p className="font-serif text-2xl font-light leading-relaxed md:text-3xl">{s.story}</p></Reveal></section>
    <section className="mx-auto grid max-w-7xl gap-3 px-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it,k)=><button key={it.id} onClick={()=>setOpen(k)} aria-label={`Open photo ${k+1}`} className={`group overflow-hidden ${k===0?'sm:col-span-2 lg:row-span-2':''}`}>
        <Img id={it.id} alt={it.title} w={1000} className="h-full min-h-[260px] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"/></button>)}</section>
    <section className="mx-auto max-w-5xl px-6 py-24"><Reveal><h2 className="h2 mb-8 text-center">The film</h2>
      <div className="aspect-video bg-ink"><iframe className="h-full w-full" src={s.video} title={`${s.couple} wedding film`} loading="lazy" allowFullScreen/></div></Reveal></section>
    <nav aria-label="More weddings" className="grid border-t border-ink/15 sm:grid-cols-2">
      <Link to={`/stories/${prev.slug}`} className="group flex items-center gap-4 p-8 transition-colors hover:bg-sand/60"><ChevronLeft className="text-gold"/><span><span className="block text-sm text-ink/60">Previous</span><span className="font-serif text-3xl">{prev.couple}</span></span></Link>
      <Link to={`/stories/${next.slug}`} className="group flex items-center justify-end gap-4 p-8 text-right transition-colors hover:bg-sand/60"><span><span className="block text-sm text-ink/60">Next</span><span className="font-serif text-3xl">{next.couple}</span></span><ChevronRight className="text-gold"/></Link></nav>
    {open!==null&&<Lightbox items={items} index={open} setIndex={setOpen} onClose={()=>setOpen(null)}/>}</>);
}
