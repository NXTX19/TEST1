import { useState } from 'react';
import { Heart, Sparkles, Gift, Music2, X, ArrowDown, Cake, Mail, Stars } from 'lucide-react';
const memories = [
  {
    date: 'THE BEGINNING',
    title: 'The day our story began',
    caption: 'Some beginnings turn into your favourite chapters.',
    image: '/photos/H1.jpg'
  },
  {
    date: 'A LITTLE HAPPINESS',
    title: 'That beautiful smile',
    caption: 'Proof that the smallest moments can mean the most.',
    image: '/photos/H2.jpg'
  },
  {
    date: 'ONE FOR THE CAMERA',
    title: 'A moment worth keeping',
    caption: 'If I could save a feeling, it would be this one.',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85'
  },
  {
    date: 'MY FAVOURITE DAYS',
    title: 'Ordinary, but ours',
    caption: 'You make everyday things feel a little magical.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85'
  },
  {
    date: 'A SOFT MEMORY',
    title: 'The kind I replay',
    caption: 'A tiny moment that somehow stayed with me.',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=85'
  },
  {
    date: 'STILL MY FAVOURITE',
    title: 'And then there is us',
    caption: 'One page ends, another begins. I hope we keep writing.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85'
  },
];
const surprises = [
  { icon: '💌', title: 'A tiny confession', message: 'You have a way of making a normal day feel like something I want to remember. I hope you never underestimate how special you are.' },
  { icon: '🌙', title: 'A wish for you', message: 'I hope this year brings you peaceful mornings, brave dreams, loud laughter, kind people, and a hundred reasons to feel proud of yourself.' },
  { icon: '🎞️', title: 'A little reminder', message: 'You do not have to be perfect to be loved, celebrated, or appreciated. Being you is already something wonderful.' },
];

function App() {
  const [entered, setEntered] = useState(false);
  const [activeSurprise, setActiveSurprise] = useState(null);
  const [candlesOut, setCandlesOut] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [toast, setToast] = useState('');

  const makeWish = () => {
    setCandlesOut(true);
    setWishMade(true);
    setToast('Your wish is officially on its way ✨');
    window.setTimeout(() => setToast(''), 3000);
  };

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#home"><Heart size={15} fill="currentColor" /> <span>for my favorite person</span> <Heart size={15} fill="currentColor" /></a>
      <nav><a href="#home">Home</a><a href="#memories">Memory lane</a><a href="#surprises">Surprises</a><a href="#cake">Cake</a><a href="#letter">Letter</a></nav>
      <button className="music-button" onClick={() => { setMusicOn(!musicOn); setToast(musicOn ? 'Music paused in our imagination ♡' : 'Imagine your favourite song playing here ♡'); window.setTimeout(() => setToast(''), 2600); }}><Music2 size={15}/>{musicOn ? 'Music on' : 'Our soundtrack'}</button>
    </header>

    <main>
      <section className={`hero ${entered ? 'hero-entered' : ''}`} id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><Sparkles size={13}/> A LITTLE STORY, MADE JUST FOR YOU <Sparkles size={13}/></p>
          <h1>{entered ? <>Today, the world<br/><em>celebrates you.</em></> : <>Happy Birthday,<br/><em>my love.</em></>}</h1>
          <p className="hero-copy">A few memories, a few secrets, and a whole lot of love.<br/>I made this little corner of the internet just for you.</p>
          <button className="primary-button" onClick={() => { setEntered(true); document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' }); }}><Heart size={16} fill="currentColor"/> {entered ? 'Revisit our story' : 'Enter our story'} <span>↗</span></button>
          <div className="hero-footnote"><span className="tiny-line"/> SCROLL SLOWLY · THIS ONE IS YOURS <ArrowDown size={13}/></div>
        </div>
        <div className="hero-side-note">A DAY AS SPECIAL AS YOU ARE <span>♡</span></div>
      </section>

      <section className="intro section-wrap">
        <p className="eyebrow rose">CHAPTER 01 · LITTLE MOMENTS, BIG FEELINGS</p>
        <h2>Some things deserve<br/><em>to be remembered.</em></h2>
        <p className="section-intro">Not every memory needs a grand occasion. Sometimes, it's just a laugh, a look, a walk, or a moment that quietly becomes important.</p>
        <div className="ornament"><span/><Heart size={14} fill="currentColor"/><span/></div>
      </section>

      <section className="memories section-wrap" id="memories">
        <div className="section-heading"><div><p className="eyebrow rose">CHAPTER 02 · OUR LITTLE FILM</p><h2>Memory <em>lane.</em></h2></div><p className="heading-note">A few frames I'd keep<br/>if I could pause time.</p></div>
        <div className="memory-grid">{memories.map((memory, i) => <article className={`memory-card memory-${i + 1}`} key={memory.title}>
          <div className="photo-frame"><img src={memory.image} alt={memory.title} loading="lazy"/><span className="photo-number">0{i + 1} / 06</span><span className="photo-heart"><Heart size={16}/></span></div>
          <div className="memory-text"><p className="memory-date">{memory.date}</p><h3>{memory.title}</h3><p>{memory.caption}</p></div>
        </article>)}</div>
        <p className="photo-tip"><Sparkles size={14}/> These are sample photos for now — replace them with your own favourite 5–10 pictures.</p>
      </section>

      <section className="surprise-section" id="surprises"><div className="section-wrap surprise-inner">
        <p className="eyebrow">CHAPTER 03 · OPEN WHEN YOU FEEL LIKE SMILING</p><h2>Little things I<br/><em>saved for you.</em></h2><p className="section-intro">Three tiny envelopes. Three things I wanted you to know.</p>
        <div className="surprise-grid">{surprises.map((item, i) => <button className="surprise-card" key={item.title} onClick={() => setActiveSurprise(item)}><span className="envelope-icon">{item.icon}</span><span className="envelope-label">A LITTLE SURPRISE · 0{i + 1}</span><strong>{item.title}</strong><span className="open-note">Tap to open <span>↗</span></span></button>)}</div>
      </div></section>

      <section className="cake-section section-wrap" id="cake"><p className="eyebrow rose">CHAPTER 04 · MAKE A WISH</p><h2>One wish, just <em>for you.</em></h2><p className="section-intro">Close your eyes, think of something beautiful, and tap the cake when you're ready.</p>
        <button className={`cake-button ${candlesOut ? 'candles-out' : ''}`} onClick={makeWish} aria-label="Make a birthday wish">
          <div className="cake-glow"/><div className="candles">{[0,1,2,3,4].map(n => <span className="candle" key={n}><i/></span>)}</div><div className="icing"><span className="icing-drip d1"/><span className="icing-drip d2"/><span className="icing-drip d3"/><span className="cake-heart">♥</span></div><div className="cake-layer layer-top"/><div className="cake-layer layer-bottom"/><div className="cake-plate"/>
        </button>
        <p className="cake-hint">{wishMade ? 'Wish made. May the sweetest things find you. ♡' : '✦  TAP THE CAKE TO BLOW OUT THE CANDLES  ✦'}</p>
        {wishMade && <div className="wish-message"><Stars size={17}/><span>Whatever you wished for, I hope life surprises you in the loveliest ways.</span><Heart size={17} fill="currentColor"/></div>}
      </section>

      <section className="letter-section" id="letter"><div className="letter-backdrop"/><div className="letter-card"><p className="eyebrow rose">THE LAST CHAPTER · BUT NEVER THE END</p><Mail size={25} className="letter-icon"/><h2>One last thing,<br/><em>from my heart.</em></h2><p className="section-intro">Some feelings are easier to write down. So I saved you a letter.</p><button className="primary-button dark-button" onClick={() => setLetterOpen(true)}>Open your letter <Mail size={16}/></button><div className="letter-signature">made with love <Heart size={13} fill="currentColor"/></div></div></section>
    </main>
    <footer><a className="brand" href="#home"><Heart size={14} fill="currentColor"/> made for you, always ♡</a><p>One more trip around the sun. So many more memories to make.</p><a href="#home" className="back-top">BACK TO THE BEGINNING ↑</a></footer>

    {(activeSurprise || letterOpen) && <div className="modal-backdrop" onClick={() => { setActiveSurprise(null); setLetterOpen(false); }}><div className="modal-card" onClick={e => e.stopPropagation()}><button className="close-button" onClick={() => { setActiveSurprise(null); setLetterOpen(false); }} aria-label="Close"><X size={18}/></button>
      {activeSurprise && <><span className="modal-emoji">{activeSurprise.icon}</span><p className="eyebrow rose">A LITTLE NOTE FOR YOU</p><h2>{activeSurprise.title}</h2><p className="modal-message">{activeSurprise.message}</p><div className="modal-signoff">always cheering for you ♡</div></>}
      {letterOpen && <><span className="modal-emoji">💌</span><p className="eyebrow rose">TO MY FAVOURITE PERSON</p><h2>Happy birthday, <em>my love.</em></h2><div className="letter-body"><p>My love,</p><p>Today is about celebrating you — your heart, your laugh, your dreams, and all the little things that make you who you are.</p><p>Thank you for being a part of my world. I hope this new chapter brings you gentleness on hard days, courage when you need it, and happiness that finds you in the most unexpected places.</p><p>If I could wish one thing for you, it would be that you see yourself the way I see you: someone worth celebrating, today and every ordinary day after.</p><p>Happy birthday, beautiful. Here's to more memories, more laughter, and more little moments that become our favourites.</p><p className="letter-love">With all my love, <br/><em>your person ♡</em></p></div></>}
    </div></div>}
    {toast && <div className="toast"><Heart size={15} fill="currentColor"/>{toast}</div>}
  </div>;
}

export default App;
