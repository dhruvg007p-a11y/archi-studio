import {useEffect,useState} from 'react';
import {Link,NavLink,useLocation} from 'react-router-dom';
import {Menu,X} from 'lucide-react';
import {site,nav,waLink} from '../data/siteData';
export default function Nav(){
  const[open,setOpen]=useState(false);const[solid,setSolid]=useState(false);const{pathname}=useLocation();
  useEffect(()=>{const f=()=>setSolid(window.scrollY>60);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
  useEffect(()=>setOpen(false),[pathname]);
  const light=solid||open;
  return(<header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${light?'bg-cream/95 py-3 text-ink shadow-sm backdrop-blur':'py-6 text-white'}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
      <Link to="/" className="font-serif text-2xl tracking-wide">{site.name}</Link>
      <nav aria-label="Main" className="hidden items-center gap-9 text-xs uppercase tracking-[.2em] lg:flex">
        {nav.filter(n=>n.to!=='/contact').map(n=><NavLink key={n.to} to={n.to} end={n.to==='/'} className={({isActive})=>`border-b pb-1 transition-colors ${isActive?'border-gold':'border-transparent hover:border-gold'}`}>{n.label}</NavLink>)}
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`btn ${light?'border-ink hover:bg-ink hover:text-cream':'border-white hover:bg-white hover:text-ink'}`}>Book a consultation</a>
      </nav>
      <button className="p-1 lg:hidden" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<nav aria-label="Mobile" className="flex flex-col gap-4 bg-cream px-6 pb-8 pt-6 font-serif text-3xl text-ink lg:hidden">
      {nav.map(n=><NavLink key={n.to} to={n.to} end={n.to==='/'} className={({isActive})=>isActive?'text-gold':''}>{n.label}</NavLink>)}</nav>}
  </header>);
}
