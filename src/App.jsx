import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Grid3X3, Maximize2, X } from 'lucide-react';
import { slides } from './data/slides';
import { ClosingSlide, CoverSlide, JourneySlide, SeasonsSlide, ShiftSlide } from './components/slides/SampleSlides';

const samples={cover:CoverSlide,shift:ShiftSlide,seasons:SeasonsSlide,journey:JourneySlide,closing:ClosingSlide};

function Placeholder({slide}) { return <section className="slide placeholder-slide"><div><p className="eyebrow">{slide.number} · BOKUJI VISION</p><span className="pending">FULL DECK · NEXT PHASE</span><h2>{slide.title}</h2><p>{slide.summary}</p><small>サンプル確認後に展開するスライドです</small></div></section> }

export default function App(){
  const [index,setIndex]=useState(0), [overview,setOverview]=useState(false); const touch=useRef(null);
  const go=useCallback(n=>setIndex(i=>Math.max(0,Math.min(slides.length-1,typeof n==='function'?n(i):n))),[]);
  useEffect(()=>{ const key=e=>{ if(e.key==='Escape')setOverview(v=>!v); if(!overview&&(e.key==='ArrowRight'||e.key===' '))go(i=>i+1); if(!overview&&e.key==='ArrowLeft')go(i=>i-1); }; addEventListener('keydown',key); return()=>removeEventListener('keydown',key)},[go,overview]);
  const Slide=samples[slides[index].type];
  return <main className="deck" onTouchStart={e=>touch.current=e.touches[0].clientX} onTouchEnd={e=>{const d=touch.current-e.changedTouches[0].clientX;if(Math.abs(d)>45)go(i=>i+(d>0?1:-1))}}>
    <div className="stage" key={index}>{Slide?<Slide/>:<Placeholder slide={slides[index]}/>}</div>
    <button className="brand-button" aria-label="一覧を表示" onClick={()=>setOverview(true)}><Grid3X3/> BOKUJI</button>
    <div className="counter"><b>{slides[index].number}</b><span>/ 19</span></div>
    <nav className="controls" aria-label="スライド操作"><button onClick={()=>go(i=>i-1)} disabled={!index} aria-label="前へ"><ArrowLeft/></button><button onClick={()=>document.documentElement.requestFullscreen?.()} aria-label="フルスクリーン"><Maximize2/></button><button onClick={()=>go(i=>i+1)} disabled={index===18} aria-label="次へ"><ArrowRight/></button></nav>
    <div className="progress"><i style={{width:`${(index+1)/19*100}%`}}/></div>
    {overview&&<div className="overview"><header><div><p className="eyebrow light">BOKUJI PRESENTATION</p><h2>全体を見る</h2></div><button onClick={()=>setOverview(false)} aria-label="一覧を閉じる"><X/></button></header><div className="overview-grid">{slides.map((s,i)=><button key={s.number} className={i===index?'active':''} onClick={()=>{setIndex(i);setOverview(false)}}><span>{s.number}</span><strong>{s.title}</strong><small>{samples[s.type]?'DESIGNED':'NEXT PHASE'}</small></button>)}</div></div>}
  </main>
}
