import { ArrowDown, QrCode, ShoppingBag, Sparkles } from 'lucide-react';
import { images } from '../../data/slides';

export function CoverSlide() {
  return <section className="slide cover-slide">
    <img className="cover-image slow-zoom" src={images.hero} alt="BOKUJIの手描き陶器" />
    <div className="cover-shade" />
    <div className="cover-copy reveal">
      <p className="eyebrow light">BUSINESS VISION · 2026</p>
      <h1><span className="jp-mark">房空路</span><span>BOKUJI</span></h1>
      <div className="gold-rule" />
      <h2>次のステージへ</h2>
      <p>すでにある価値を、もっと届く形へ。</p>
    </div>
    <p className="vertical-note">HAND PAINTED · ONE OF A KIND</p>
  </section>;
}

export function ShiftSlide() {
  return <section className="slide paper-slide">
    <header className="slide-heading reveal"><p className="eyebrow">05 · SHIFT THE PERSPECTIVE</p><h2>発想を変える</h2></header>
    <div className="shift-layout">
      <article className="shift-card before stagger"><span>BEFORE</span><p>陶器を置いて、<br/>売れるのを待つ</p><small>PRODUCT FIRST</small></article>
      <div className="shift-arrow stagger"><span>視点を変える</span><ArrowDown/></div>
      <article className="shift-card after stagger"><span>AFTER</span><p>欲しくなる<br/><em>「理由」</em>をつくる</p><small>STORY &amp; EXPERIENCE</small><Sparkles/></article>
    </div>
    <p className="side-caption">商品を変えるのではなく、<br/>出会い方をデザインする。</p>
  </section>;
}

export function SeasonsSlide() {
  const labels=['SPRING','SUMMER','AUTUMN','CHRISTMAS'];
  return <section className="slide season-slide">
    <div className="season-gallery">{images.seasons.map((src,i)=><img key={src} src={src} alt={`${labels[i]}のBOKUJI季節提案`} style={{'--i':i}}/>)}</div>
    <div className="season-shade"/>
    <div className="season-copy reveal"><p className="eyebrow light">07 · SEASONAL STORY</p><h2>季節ごとに<br/><em>「買う理由」</em>をつくる</h2><p>ディスプレイも、推す商品も、贈り方も。<br/>季節が変わるたび、新しい出会いを。</p></div>
    <div className="season-tabs">{labels.map((x,i)=><span key={x} style={{'--i':i}}>{x}</span>)}</div>
  </section>;
}

export function JourneySlide() {
  const steps=[['STORE','店舗'],['POP / QR','きっかけ'],['STORY','物語'],['WEB','理解'],['BUY','購入'],['SNS','共感'],['RETURN','再来店']];
  return <section className="slide paper-slide journey-slide">
    <header className="slide-heading reveal"><p className="eyebrow">10 · CONNECT THE EXPERIENCE</p><h2>店舗からWebへつなぐ</h2><p>一度の出会いを、次の購入と再来店へ。</p></header>
    <div className="journey-path"><div className="draw-line"/>{steps.map(([en,jp],i)=><div className="journey-step stagger" key={en}><i>{i===1?<QrCode/>:i===4?<ShoppingBag/>:String(i+1).padStart(2,'0')}</i><strong>{en}</strong><span>{jp}</span></div>)}</div>
    <div className="journey-note"><Sparkles/><span>すべての接点で、<b>BOKUJIの物語</b>が続いていく。</span></div>
  </section>;
}

export function ClosingSlide() {
  return <section className="slide closing-slide">
    <img className="closing-image slow-zoom" src={images.closing} alt="BOKUJIの手描き陶器"/>
    <div className="closing-shade"/>
    <div className="closing-copy reveal"><p className="eyebrow light">BOKUJI · FROM HERE</p><h2>価値あるものを、<br/>価値が伝わる形へ。</h2><div className="gold-rule"/><p>今あるものを捨てるのではなく、<br/>今ある価値の届け方を変える。</p><span>房空路 <b>BOKUJI</b></span></div>
  </section>;
}
