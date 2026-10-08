import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Instagram,Mail,MapPin,MessageCircle,Phone,Check,AlertCircle} from 'lucide-react';
import {site,services,waLink} from '../data/siteData';
import PageHead from '../components/PageHead';import usePageMeta from '../components/usePageMeta';

const budgets=['Under 2,000','2,000 – 4,000','4,000 – 7,000','7,000+','Not sure yet'];
const empty={name:'',email:'',phone:'',date:'',location:'',service:'',budget:'',message:''};
function validate(v){const e={};
  if(v.name.trim().length<2)e.name='Enter your name.';
  if(!/^\S+@\S+\.\S+$/.test(v.email))e.email='Enter a valid email address.';
  if(v.phone&&v.phone.replace(/\D/g,'').length<7)e.phone='Enter a valid phone number, or leave it blank.';
  if(!v.date)e.date='Choose your wedding date.';
  if(!v.location.trim())e.location='Enter your wedding location.';
  if(!v.service)e.service='Select a service.';
  if(v.message.trim().length<10)e.message='Tell us a little more (10+ characters).';
  return e}

export default function Contact(){
  usePageMeta('Contact','Book a free consultation for your wedding photography or film.');
  const[params]=useSearchParams();
  const[v,setV]=useState({...empty,service:services.find(s=>s.title===params.get('service'))?.title||''});
  const[err,setErr]=useState({});const[status,setStatus]=useState('idle');
  const set=k=>e=>{setV({...v,[k]:e.target.value});if(err[k])setErr({...err,[k]:undefined})};
  async function submit(e){
    e.preventDefault();const er=validate(v);setErr(er);
    if(Object.keys(er).length){document.querySelector('[aria-invalid="true"]')?.focus();return}
    setStatus('sending');
    try{
      const url=import.meta.env.VITE_FORM_ENDPOINT;
      if(url){const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(v)});if(!r.ok)throw new Error('failed')}
      else await new Promise(r=>setTimeout(r,900)); // demo mode: set VITE_FORM_ENDPOINT to send real emails
      setStatus('success');setV(empty);
    }catch{setStatus('error')}
  }
  const field=(k,label,type='text',extra={})=><div className={extra.wide?'sm:col-span-2':''}>
    <label htmlFor={k} className="mb-1 block text-sm text-ink/70">{label}</label>
    {type==='select'?<select id={k} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} className="inp"><option value="">Select…</option>{extra.options.map(o=><option key={o}>{o}</option>)}</select>
    :type==='textarea'?<textarea id={k} rows={5} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} className="inp"/>
    :<input id={k} type={type} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} className="inp" autoComplete={extra.ac}/>}
    {err[k]&&<p role="alert" className="mt-1 text-sm text-red-700">{err[k]}</p>}</div>;
  const L='flex items-center gap-3 border-b border-ink/15 py-4 transition-colors hover:text-gold';
  return(<><PageHead note="Let’s talk" title="Book a consultation"/>
    <style>{`.inp{width:100%;background:transparent;border:0;border-bottom:1px solid rgba(22,19,15,.3);padding:.6rem 0;font:inherit;border-radius:0}.inp:focus{outline:none;border-color:#a8854f}.inp[aria-invalid="true"]{border-color:#b91c1c}`}</style>
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-5">
      <div className="lg:col-span-3">
        {status==='success'?<div role="status" className="border border-gold p-10 text-center"><Check className="mx-auto text-gold" size={36}/>
          <h2 className="h2 mt-4 !text-4xl">Thank you, we’ve got your message.</h2><p className="mt-3 text-ink/70">We’ll reply within one working day.</p>
          <button onClick={()=>setStatus('idle')} className="btn-dark mt-8">Send another enquiry</button></div>
        :<form onSubmit={submit} noValidate className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {field('name','Full name','text',{ac:'name'})}{field('email','Email','email',{ac:'email'})}
          {field('phone','Phone (optional)','tel',{ac:'tel'})}{field('date','Wedding date','date')}
          {field('location','Wedding location')}{field('service','Service required','select',{options:services.map(s=>s.title)})}
          {field('budget','Budget (optional)','select',{options:budgets})}
          {field('message','Tell us about your day','textarea',{wide:true})}
          {status==='error'&&<p role="alert" className="flex items-center gap-2 text-red-700 sm:col-span-2"><AlertCircle size={18}/>Your message did not send. Check your connection and try again, or email us directly.</p>}
          <div className="sm:col-span-2"><button type="submit" disabled={status==='sending'} className="btn-gold disabled:opacity-60">{status==='sending'?'Sending…':'Send enquiry'}</button></div></form>}
      </div>
      <aside className="lg:col-span-2"><h2 className="font-serif text-4xl">Prefer to chat?</h2><p className="mt-2 mb-6 text-ink/70">We’re happy to talk through ideas by message or call.</p>
        <a className={L} href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/>Message on WhatsApp</a>
        <a className={L} href={`tel:${site.phoneTel}`}><Phone size={20}/>Call {site.phone}</a>
        {site.email&&<a className={L} href={`mailto:${site.email}`}><Mail size={20}/>{site.email}</a>}
        {site.instagram&&<a className={L} href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20}/>Instagram</a>}
        <a className={L} href={site.map} target="_blank" rel="noopener noreferrer"><MapPin size={20}/>{site.address}</a></aside>
    </section></>);
}
