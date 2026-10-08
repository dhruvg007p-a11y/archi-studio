import {Link} from 'react-router-dom';
import {Check} from 'lucide-react';
import {services} from '../data/siteData';
import Img from '../components/Img';import Reveal from '../components/Reveal';import PageHead from '../components/PageHead';import usePageMeta from '../components/usePageMeta';

export default function Services(){
  usePageMeta('Services','Wedding photography, videography, pre-wedding, engagement, cinematic films, albums and prints.');
  return(<><PageHead note="How we can help" title="Services"/>
    <div className="mx-auto max-w-7xl space-y-28 px-6 py-24">
      {services.map((s,i)=><Reveal key={s.title}><article className="grid items-center gap-12 md:grid-cols-2">
        <div className={i%2?'md:order-2':''}><Img id={s.img} alt={s.title} w={1000} className="aspect-[4/3] w-full object-cover"/></div>
        <div><h2 className="h2">{s.title}</h2><p className="mt-4 max-w-md text-ink/70">{s.desc}</p>
          <p className="note mt-8">What’s included</p>
          <ul className="mt-3 space-y-2">{s.inc.map(x=><li key={x} className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0 text-gold"/>{x}</li>)}</ul>
          <Link to={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-dark mt-9">Enquire about this</Link></div></article></Reveal>)}
    </div></>);
}
