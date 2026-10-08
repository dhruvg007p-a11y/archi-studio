import {useEffect,useState} from 'react';
import {Routes,Route,useLocation} from 'react-router-dom';
import {ArrowUp,MessageCircle} from 'lucide-react';
import {waLink} from './data/siteData';
import Nav from './components/Nav';import Footer from './components/Footer';
import Home from './pages/Home';import Portfolio from './pages/Portfolio';import Services from './pages/Services';
import About from './pages/About';import Stories from './pages/Stories';import Story from './pages/Story';import Contact from './pages/Contact';

function ScrollTop(){const{pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[pathname]);return null}
function BackToTop(){
  const[show,setShow]=useState(false);
  useEffect(()=>{const f=()=>setShow(window.scrollY>700);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
  return <button aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
    className={`fixed bottom-6 right-6 z-30 border border-gold bg-cream p-3 text-gold transition-all duration-500 hover:bg-gold hover:text-white ${show?'opacity-100':'pointer-events-none opacity-0'}`}><ArrowUp size={18}/></button>;
}
function WhatsApp(){
  return <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
    className="fixed bottom-6 left-6 z-30 flex items-center gap-2 border border-ink bg-ink px-4 py-3 text-xs uppercase tracking-[.2em] text-cream transition-colors duration-500 hover:border-gold hover:bg-gold"><MessageCircle size={18}/><span className="hidden sm:inline">WhatsApp</span></a>;
}
export default function App(){
  return(<><ScrollTop/><Nav/>
    <main><Routes>
      <Route path="/" element={<Home/>}/><Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/services" element={<Services/>}/><Route path="/about" element={<About/>}/>
      <Route path="/stories" element={<Stories/>}/><Route path="/stories/:slug" element={<Story/>}/>
      <Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/>
    </Routes></main><Footer/><WhatsApp/><BackToTop/></>);
}
