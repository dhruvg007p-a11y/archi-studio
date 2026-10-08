import {Link} from 'react-router-dom';
import {stories} from '../data/siteData';
import Img from '../components/Img';import Reveal from '../components/Reveal';import PageHead from '../components/PageHead';import usePageMeta from '../components/usePageMeta';

export default function Stories(){
  usePageMeta('Real Weddings','Read the stories behind our favourite weddings, with full galleries and films.');
  return(<><PageHead note="Real weddings" title="Wedding stories"/>
    <div className="mx-auto max-w-7xl space-y-24 px-6 py-24">
      {stories.map((s,i)=><Reveal key={s.slug}><Link to={`/stories/${s.slug}`} className="group grid items-center gap-10 md:grid-cols-5">
        <div className={`overflow-hidden md:col-span-3 ${i%2?'md:order-2':''}`}><Img id={s.cover} alt={`${s.couple} wedding`} w={1400} className="aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"/></div>
        <div className="md:col-span-2"><p className="note">{s.location}, {s.date}</p><h2 className="h2 mt-2">{s.couple}</h2>
          <p className="mt-4 text-ink/70">{s.story.slice(0,130)}…</p><span className="mt-6 inline-block border-b border-gold pb-1 text-gold">Read their story</span></div></Link></Reveal>)}
    </div></>);
}
