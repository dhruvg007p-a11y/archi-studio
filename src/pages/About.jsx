import {site,waLink} from '../data/siteData';
import Img from '../components/Img';import Reveal from '../components/Reveal';import PageHead from '../components/PageHead';import usePageMeta from '../components/usePageMeta';

const stats=[['10+','years photographing weddings'],['250+','weddings and films delivered'],['14','countries travelled to']];
const beliefs=[['Be present','We stay close, move quietly and let moments happen.'],['Edit with restraint','Natural colour, true skin tones, nothing that will date.'],['Care for everyone','Parents, grandparents and children are part of the story.']];
export default function About(){
  usePageMeta('About the Studio','Meet the photographers and filmmakers behind Archi Studio, and how we work.');
  return(<><PageHead note="The studio" title="About us"/>
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
      <Reveal><Img id={site.aboutImg} alt={site.founders} w={1000} className="aspect-[4/5] w-full object-cover"/></Reveal>
      <Reveal delay={150}><h2 className="h2">Hello, I’m {site.founders}.</h2>
        <p className="mt-6 max-w-lg leading-relaxed text-ink/75">I began with one camera, shooting weddings for people I knew. A decade later we are a small studio of photographers, filmmakers and editors, still working in the same way: slowly, honestly and with a lot of tea.</p>
        <p className="mt-4 max-w-lg leading-relaxed text-ink/75">Every wedding is led by me from your first call to final delivery, so you always know who is looking after your day.</p></Reveal></section>
    <section className="bg-sand/60 px-6 py-20"><div className="mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-3">
      {stats.map(([n,l])=><Reveal key={l}><p className="font-serif text-6xl text-gold">{n}</p><p className="mt-2 text-ink/70">{l}</p></Reveal>)}</div></section>
    <section className="mx-auto max-w-7xl px-6 py-24"><Reveal><h2 className="h2 mb-12 max-w-xl">How we work</h2></Reveal>
      <div className="grid gap-10 md:grid-cols-3">{beliefs.map(([t,d],i)=><Reveal key={t} delay={i*120}><div className="border-t border-gold pt-6">
        <h3 className="font-serif text-3xl">{t}</h3><p className="mt-3 text-ink/70">{d}</p></div></Reveal>)}</div>
      <div className="mt-16 text-center"><a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">Book a consultation</a></div></section></>);
}
