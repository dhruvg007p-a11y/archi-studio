import {Link} from 'react-router-dom';
import {Instagram,Mail,MapPin,MessageCircle,Phone} from 'lucide-react';
import {site,nav,waLink} from '../data/siteData';
export default function Footer(){
  const L='flex items-center gap-2 transition-colors hover:text-gold';
  return(<footer className="bg-ink px-6 py-16 text-cream/80"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
    <div><p className="font-serif text-3xl text-cream">{site.name}</p><p className="mt-3 max-w-xs">{site.tagline}. Timeless storytelling for couples who value the moments in between.</p></div>
    <div><p className="note mb-3">Explore</p><ul className="space-y-2">{nav.map(n=><li key={n.to}><Link className="hover:text-gold" to={n.to}>{n.label}</Link></li>)}</ul></div>
    <div><p className="note mb-3">Say hello</p><ul className="space-y-2">
      <li><a className={L} href={`tel:${site.phoneTel}`}><Phone size={16}/>{site.phone}</a></li>
      {site.email&&<li><a className={L} href={`mailto:${site.email}`}><Mail size={16}/>{site.email}</a></li>}
      <li><a className={L} href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={16}/>WhatsApp</a></li>
      {site.instagram&&<li><a className={L} href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16}/>Instagram</a></li>}
      <li><a className={L} href={site.map} target="_blank" rel="noopener noreferrer"><MapPin size={16}/>{site.address}</a></li></ul></div>
  </div><p className="mx-auto mt-12 max-w-7xl border-t border-cream/15 pt-6 text-sm text-cream/50">© {new Date().getFullYear()} {site.name}. All rights reserved.</p></footer>);
}
