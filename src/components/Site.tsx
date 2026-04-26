import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, Instagram, Menu, X, ArrowRight, Clock, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Section = ({ id, children, className = "", dark = false }: any) => (
  <section id={id} className={`py-32 md:py-40 px-8 lg:px-24 border-b border-editorial-border ${dark ? 'bg-editorial-accent/5' : 'bg-editorial-bg'} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const SectionHeader = ({ tag, title, description, center = false }: any) => (
  <div className={`mb-20 md:mb-32 ${center ? 'text-center' : ''}`}>
    <p className="text-small-caps text-editorial-accent mb-6">{tag}</p>
    <h2 className="text-6xl md:text-8xl lg:text-9xl mb-8 font-serif leading-[0.9] tracking-tighter">
      {title}
    </h2>
    {description && <p className={`max-w-xs text-sm opacity-50 leading-relaxed font-light ${center ? 'mx-auto' : ''}`}>{description}</p>}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const bookingLink = "https://getsquire.com/booking/book/top-fades-barbershop-mississauga";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-editorial-bg/95 backdrop-blur-md py-4 border-b border-editorial-border' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center text-editorial-text">
        <motion.a href="#" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-editorial-text/20">
             <img src="https://lh3.googleusercontent.com/geougc/AF1QipMOMzrOF-kz_8BavR3wK-IXnok0zDzmQXQcNPPg=w400" alt="Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
          </div>
          <span className="text-2xl font-serif italic tracking-tighter">Top Fades</span>
        </motion.a>

        <div className="hidden lg:flex items-center gap-16">
          <div className="flex gap-10 text-small-caps font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-editorial-accent transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-editorial-accent transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
          <a href={bookingLink} target="_blank" rel="noreferrer" className="px-8 py-3 bg-editorial-text text-editorial-bg text-small-caps hover:bg-editorial-accent transition-all rounded-full">Book Session</a>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, x: '100vw' }} animate={{ opacity: 1, x: 0 }} className="lg:hidden fixed inset-0 bg-editorial-bg z-40 p-12 flex flex-col">
          <div className="flex justify-end"><button onClick={() => setIsOpen(false)}><X size={32} /></button></div>
          <div className="space-y-12 mt-12 mb-auto">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-5xl font-serif italic border-b border-editorial-border pb-4">{link.name}</a>
            ))}
          </div>
          <a href={bookingLink} target="_blank" rel="noreferrer" className="w-full py-6 bg-editorial-text text-editorial-bg text-center text-small-caps font-bold rounded-full">Secure Appointment</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden border-b border-editorial-border">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src="https://lh3.googleusercontent.com/geougc/AF1QipMOMzrOF-kz_8BavR3wK-IXnok0zDzmQXQcNPPg=w2000" className="w-full h-full object-cover scale-105" alt="Hero" />
      </motion.div>
      <div className="relative z-20 text-center text-white px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ opacity }}>
          <p className="text-small-caps tracking-[0.6em] mb-12 opacity-80">Mississauga — Ontario</p>
          <h1 className="text-[14vw] lg:text-[160px] leading-[0.8] tracking-tighter">TOP <span className="serif-italic">FADES</span></h1>
          <a href="https://getsquire.com/booking/book/top-fades-barbershop-mississauga" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-4 text-small-caps font-bold mt-20">
            Start Curation
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"><ArrowRight size={16} /></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <Section id="philosophy">
    <div className="flex flex-col lg:flex-row gap-24 items-center">
      <div className="lg:w-1/2">
        <SectionHeader tag="The Ethos" title={<>Perspective <br/> is <span className="serif-italic">Everything.</span></>} />
        <div className="space-y-8 max-w-lg -mt-12 md:-mt-20">
          <p className="text-xl font-serif italic text-editorial-text/80 leading-relaxed">"Looking for a barbershop where the barbers actually care about the outcome of your cut? That’s us."</p>
          <p className="text-lg opacity-60 leading-loose font-light">We navigate the boundary between classic barbering and contemporary visual systems. Our precision is the fabric of our archive.</p>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="aspect-[4/5] rounded-[40px] md:rounded-[80px] overflow-hidden border border-editorial-border shadow-2xl">
          <img src="https://lh3.googleusercontent.com/geougc/AF1QipMOMzrOF-kz_8BavR3wK-IXnok0zDzmQXQcNPPg=w1200" alt="Original" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
      </div>
    </div>
  </Section>
);

const Services = () => (
  <Section id="services">
    <div className="flex flex-col md:flex-row justify-between items-end mb-32">
      <SectionHeader tag="Service Archive" title="Mastery." />
      <p className="max-w-xs text-sm opacity-50 leading-relaxed font-light mb-8">Refined grooming protocols designed for longevity and character.</p>
    </div>
    <div className="space-y-1">
      {[
        { n: "SIGNATURE FADE", p: "$40+", d: "Precision led taper or skin fade curated for your profile." },
        { n: "BEARD SCULPTURE", p: "$25+", d: "Architectural shaping with traditional hot towel & oil." },
        { n: "THE ROYAL TREATMENT", p: "$60+", d: "Signature haircut paired with masterful beard curation." },
        { n: "KID'S CURATION", p: "$25+", d: "Sharp aesthetics for the next generation (under 12)." },
      ].map((s, i) => (
        <motion.div key={i} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-t border-editorial-border hover:bg-white transition-all duration-700 px-8 -mx-8">
          <div>
            <span className="text-[10px] opacity-30 font-bold mb-4 block">0{i+1}</span>
            <h3 className="text-4xl md:text-5xl font-serif italic">{s.n}</h3>
          </div>
          <div className="md:text-right mt-4 md:mt-0">
            <p className="text-2xl font-serif mb-1">{s.p}</p>
            <p className="text-sm opacity-40 font-light max-w-xs">{s.d}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Reviews = () => (
  <Section id="reviews" dark>
    <SectionHeader tag="Client Narrative" title="Refined Choice." center />
    <div className="flex justify-center gap-1 text-editorial-accent mb-20 -mt-20">
      {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {[
        { q: "Real barbering done right. Smooth fades, precise tapers. Definitely my new go-to spot.", n: "John D." },
        { q: "Best fade in all of Mississauga. Attention to detail is unmatched, no rush cuts here.", n: "Michael T." },
        { q: "They actually care about the outcome of your cut. Perfect beard work and grooming experience.", n: "Sam K." }
      ].map((r, i) => (
        <div key={i} className="relative">
          <p className="text-xl font-serif italic opacity-80 mb-6">"{r.q}"</p>
          <div className="w-8 h-px bg-editorial-accent/30 mb-4" />
          <p className="text-small-caps font-bold opacity-40">— {r.n}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact">
    <div className="flex flex-col lg:flex-row gap-32">
      <div className="lg:w-1/2">
        <SectionHeader tag="Inquiry" title={<>Stay in <br/> <span className="serif-italic">Motion.</span></>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 -mt-16 md:-mt-24">
          <div>
            <p className="text-small-caps opacity-30 mb-6 flex items-center gap-2 font-bold"><MapPin size={12}/> Localization</p>
            <p className="text-2xl font-serif">3476 Glen Erin Dr #9<br /> Mississauga, ON L5L 3R4</p>
            <a href="https://maps.google.com" target="_blank" className="text-editorial-accent text-[11px] uppercase font-bold border-b border-editorial-accent w-fit mt-6 block">Launch Navigator</a>
          </div>
          <div>
            <p className="text-small-caps opacity-30 mb-6 flex items-center gap-2 font-bold"><Phone size={12}/> Signal</p>
            <p className="text-2xl font-serif">(905) 820-1077</p>
            <p className="text-small-caps opacity-30 mt-12 mb-6 flex items-center gap-2 font-bold"><Clock size={12}/> Access</p>
            <ul className="text-sm font-light opacity-60 space-y-2">
              <li className="flex justify-between border-b border-editorial-border pb-1"><span>Mon-Fri</span> <span>10:00 — 20:00</span></li>
              <li className="flex justify-between border-b border-editorial-border pb-1"><span>Sat</span> <span>09:00 — 18:00</span></li>
              <li className="flex justify-between"><span>Sun</span> <span>10:00 — 17:00</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 bg-editorial-text p-12 md:p-16 rounded-[40px] text-editorial-bg flex flex-col justify-between">
        <div>
          <h3 className="text-4xl mb-8 font-serif italic">Scheduling Archive</h3>
          <p className="text-lg opacity-70 mb-12 font-light">Secure your timeslot through our digital portal for the most efficient grooming session.</p>
          <a href="https://getsquire.com/booking/book/top-fades-barbershop-mississauga" target="_blank" className="w-full py-6 bg-editorial-bg text-editorial-text rounded-full text-center text-small-caps font-bold block hover:bg-editorial-accent hover:text-editorial-bg transition-all">Enter Booking Portal</a>
        </div>
        <div className="mt-16 pt-12 border-t border-editorial-bg/10 flex justify-between items-center whitespace-nowrap">
           <p className="text-small-caps opacity-40">Artifacts on Instagram</p>
           <a href="#" className="hover:text-editorial-accent transition-colors"><Instagram size={24}/></a>
        </div>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-20 px-8 lg:px-24 bg-editorial-bg border-t border-editorial-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
      <div>
        <div className="text-5xl md:text-6xl font-serif italic tracking-tighter mb-4">Top Fades.</div>
        <p className="text-small-caps opacity-40 text-[10px]">© {new Date().getFullYear()} Toronto — ON. ALL RIGHTS RESERVED.</p>
      </div>
      <div className="flex gap-12 text-[10px] uppercase font-bold opacity-40 tracking-widest">
        <a href="#" className="hover:opacity-100 italic transition-opacity">To Top</a>
      </div>
    </div>
  </footer>
);

export { Navbar, Hero, Philosophy, Services, Reviews, Contact, Footer };
