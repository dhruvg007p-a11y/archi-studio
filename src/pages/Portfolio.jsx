import {useState} from 'react';
import {categories,portfolio} from '../data/siteData';
import Img from '../components/Img';import Lightbox from '../components/Lightbox';import PageHead from '../components/PageHead';import usePageMeta from '../components/usePageMeta';

export default function Portfolio(){
  usePageMeta('Portfolio','Browse wedding, pre-wedding, engagement and film work from our studio.');
  const[cat,setCat]=useState('All');const[open,setOpen]=useState(null);
  const items=cat==='All'?portfolio:portfolio.filter(p=>p.cat===cat);
  return(<><PageHead note="Selected work" title="Portfolio"/>
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div role="tablist" aria-label="Filter portfolio" className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map(c=><button key={c} role="tab" aria-selected={cat===c} onClick={()=>setCat(c)}
          className={`border px-5 py-2 text-sm transition-colors ${cat===c?'border-ink bg-ink text-cream':'border-ink/20 hover:border-gold hover:text-gold'}`}>{c}</button>)}</div>
      {items.length===0&&<p className="py-20 text-center text-ink/60">Nothing here yet. Pick another category.</p>}
      <div key={cat} className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((p,i)=><button key={p.id} onClick={()=>setOpen(i)} aria-label={`Open ${p.title}`} className="fade-up group relative mb-4 block w-full break-inside-avoid overflow-hidden text-left" style={{animationDelay:`${i*60}ms`}}>
          <Img id={p.id} alt={`${p.title}, ${p.location}`} w={900} className={`w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 ${i%3===0?'aspect-[3/4]':i%3===1?'aspect-[4/5]':'aspect-square'}`}/>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/70 to-transparent p-5 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
            <p className="font-serif text-2xl">{p.title}</p><p className="text-sm text-white/80">{p.location}</p></div></button>)}</div>
    </section>
    {open!==null&&<Lightbox items={items} index={open} setIndex={setOpen} onClose={()=>setOpen(null)}/>}</>);
}
