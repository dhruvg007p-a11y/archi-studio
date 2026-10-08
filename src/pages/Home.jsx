import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Instagram} from 'lucide-react';
import {site,waLink,stories,services,testimonials,portfolio} from '../data/siteData';
import Img from '../components/Img';import Reveal from '../components/Reveal';import usePageMeta from '../components/usePageMeta';

export default function Home(){
  usePageMeta('Wedding Photography & Films','Luxury wedding photography and cinematic films for couples who value the moments in between.');
  const[y,setY]=useState(0);
  useEffect(()=>{const f=()=>setY(window.scrollY);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
  return(<>
    <section className="relative flex h-screen min-h-[600px] items-end overflow-hidden bg-ink text-white">
      <div className="absolute inset-0" style={{transform:`translateY(${Math.min(y,900)*.3}px) scale(1.1)`}}>
        <Img id={site.hero} alt="Bride and groom at their wedding" w={2200} loading="eager" className="h-full w-full object-cover"/></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/30"/>
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
        <p className="note fade-up">{site.tagline}</p>
        <h1 className="fade-up mt-3 max-w-4xl font-serif text-5xl font-light leading-[1.02] sm:text-7xl lg:text-8xl" style={{animationDelay:'.2s'}}>Your day, remembered the way it felt.</h1>
        <p className="fade-up mt-6 max-w-md text-white/85" style={{animationDelay:'.4s'}}>Unposed photographs and cinematic films for couples who want to relive the moments in between.</p>
        <div className="fade-up mt-9 flex flex-col gap-4 sm:flex-row" style={{animationDelay:'.6s'}}>
          <Link to="/portfolio" className="btn-gold">View our work</Link><a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-line">Book a consultation</a></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-28">
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4"><h2 className="h2">Recent weddings</h2>
        <Link to="/stories" className="border-b border-gold pb-1 text-sm text-gold">See all weddings</Link></Reveal>
      <div className="grid gap-10 md:grid-cols-3">
        {stories.map((s,i)=><Reveal key={s.slug} delay={i*150} className={i===1?'md:mt-16':''}>
          <Link to={`/stories/${s.slug}`} className="group block"><div className="overflow-hidden"><Img id={s.cover} alt={`${s.couple} wedding`} w={900} className="aspect-[3/4] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"/></div>
            <h3 className="mt-5 font-serif text-3xl">{s.couple}</h3><p className="text-sm text-ink/60">{s.location}, {s.date}</p></Link></Reveal>)}
      </div>
    </section>

    <section className="bg-sand/60 px-6 py-28"><div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
      <Reveal><Img id={site.aboutImg} alt="Studio founders at work" w={1000} className="aspect-[4/5] w-full object-cover"/></Reveal>
      <Reveal delay={150}><p className="note">Meet the studio</p><h2 className="h2 mt-2">We keep the camera quiet and the day yours.</h2>
        <p className="mt-6 max-w-lg leading-relaxed text-ink/75">{site.founders} leads a small team of photographers and filmmakers. Over ten years and 250 weddings, we have learned that the best images come from relaxed people, so we spend time getting to know you first.</p>
        <Link to="/about" className="btn-dark mt-8">Our story</Link></Reveal></div></section>

    <section className="mx-auto max-w-7xl px-6 py-28">
      <Reveal><h2 className="h2 mb-14 max-w-xl">What we offer</h2></Reveal>
      <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s,i)=><Reveal key={s.title} delay={(i%3)*120}><Link to="/services" className="group block border-t border-ink/20 py-8 transition-colors hover:border-gold">
          <h3 className="font-serif text-3xl transition-colors group-hover:text-gold">{s.title}</h3><p className="mt-2 text-ink/65">{s.desc}</p></Link></Reveal>)}
      </div>
    </section>

    <section className="bg-ink px-6 py-28 text-cream"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
      {testimonials.map((t,i)=><Reveal key={t.name} delay={i*150}><figure><blockquote className="font-serif text-2xl font-light leading-snug">“{t.text}”</blockquote>
        <figcaption className="note mt-5">{t.name}</figcaption></figure></Reveal>)}</div></section>

    <section className="px-6 py-28"><div className="mx-auto max-w-7xl">
      <Reveal className="mb-10 flex flex-wrap items-center justify-between gap-4"><h2 className="h2">{site.instagram?'On Instagram':'Recent moments'}</h2>
        {site.instagram&&<a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gold"><Instagram size={18}/>Follow us</a>}</Reveal>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
        {portfolio.slice(0,6).map(p=>{const Tag=site.instagram?'a':'div';const link=site.instagram?{href:site.instagram,target:'_blank',rel:'noopener noreferrer','aria-label':`${p.title} on Instagram`}:{};return <Tag key={p.id} {...link} className="group block overflow-hidden">
          <Img id={p.id} alt={p.title} w={500} className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"/></Tag>})}</div></div></section>

    <section className="relative overflow-hidden bg-ink px-6 py-32 text-center text-white">
      <Img id="1519225421980-715cb0215aed" alt="" w={1800} className="absolute inset-0 h-full w-full object-cover opacity-30"/>
      <Reveal className="relative"><h2 className="h2 mx-auto max-w-3xl">Tell us about your wedding.</h2>
        <p className="mx-auto mt-5 max-w-md text-white/80">We reply within one working day, and a first call is always free.</p>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold mt-9">Book a consultation</a></Reveal></section>
  </>);
}
