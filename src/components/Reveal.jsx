import {useEffect,useRef,useState} from 'react';
export default function Reveal({children,delay=0,className=''}){
  const r=useRef(null);const[v,setV]=useState(false);
  useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:.12});o.observe(r.current);return()=>o.disconnect()},[]);
  return <div ref={r} style={{transitionDelay:`${delay}ms`}} className={`transition-all duration-1000 ease-out ${v?'translate-y-0 opacity-100':'translate-y-8 opacity-0'} ${className}`}>{children}</div>;
}
