
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ImpactSection from './components/ImpactSection';
import Assistant from './components/Assistant';
import { TEAM } from './constants.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', id: '#vision' },
    { name: 'Impact', id: '#impact' },
    { name: 'Projects', id: '#projects' },
    { name: 'Team', id: '#team' }
  ];

  return (
    <div className="min-h-screen relative bg-slate-950">
      {/* Professional Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 py-6 px-6 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-4' : ''}`}>
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-slate-950 font-black">I</div>
            <span className="font-heading font-black text-xl tracking-tighter text-white uppercase">INERTIA</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.id} 
                className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-accent transition-all"
              >
                {link.name}
              </a>
            ))}
            <a href="#partner" className="px-6 py-3 bg-white text-slate-950 font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-accent transition-colors shadow-lg shadow-white/5">
              Partner
            </a>
          </div>
        </div>
      </nav>

      <Hero />

      {/* Modern Vision Section */}
      <section id="vision" className="py-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] bg-slate-900 rounded-[4rem] overflow-hidden border border-white/10 group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop" 
                  alt="Students building" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 p-10 bg-accent rounded-[3rem] text-slate-950 shadow-2xl z-20">
                <div className="text-6xl font-black italic tracking-tighter">62m²</div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Mobile Innovation Lab</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-10">
              <h3 className="text-accent font-bold tracking-[0.4em] text-xs uppercase">The Catalyst</h3>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
                MOMENTUM<br/><span className="text-slate-800">IS LIFE.</span>
              </h2>
              <div className="h-1.5 w-32 bg-accent rounded-full"></div>
              <p className="text-2xl text-slate-400 leading-relaxed font-light">
                Education is often static, but talent is everywhere. We don't wait for the youth to find opportunity—we bring the future to their doorstep in a high-stakes, year-long residency.
              </p>
              <div className="pt-6">
                <div className="flex gap-4 items-center p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-slate-950">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Social Change First</h4>
                    <p className="text-slate-400 text-sm">We close the digital divide by embedding high-end tech where it's needed most.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactSection />

      <Projects />

      {/* Grid-based Team Section */}
      <section id="team" className="py-40 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-6">Who Leads Us</h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white italic">
              Built by <span className="text-slate-800">Experience</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-xl font-light">
              Our governance board brings together decades of educational strategy and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="group bg-slate-900/50 p-8 rounded-[3rem] border border-white/5 hover:bg-slate-900 transition-all hover:border-accent/20">
                <div className="relative mb-8">
                  <div className="aspect-square rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 shadow-xl">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="partner" className="py-40 bg-accent text-slate-950 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter italic mb-12">PARTNER<br/>WITH US.</h2>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium mb-16 opacity-80 leading-snug">
            We are looking for strategic partners who value deep social impact over surface-level charity. Join the movement to ignite Aotearoa's next wave of innovators.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
             <a href="mailto:info@inertia.edu.nz" className="px-14 py-8 bg-slate-950 text-white font-black uppercase tracking-[0.3em] text-sm rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl">
               Become a Sponsor
             </a>
             <a href="#" className="px-14 py-8 border-2 border-slate-950/10 text-slate-950 font-black uppercase tracking-[0.3em] text-sm rounded-full hover:bg-slate-950/5 transition-all">
               Our Impact Vision
             </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black opacity-[0.03] select-none pointer-events-none italic tracking-tighter">
          IMPACT
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="py-24 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-accent">I</div>
                <span className="font-heading font-black text-xl tracking-tighter text-white">INERTIA</span>
              </div>
              <p className="text-slate-600 text-xs font-bold uppercase tracking-widest leading-loose">
                © {new Date().getFullYear()} INERTIA EDUCATION INITIATIVE.<br/>
                PROUDLY BASED IN HAWKE'S BAY, AOTEAROA.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10">
               {['Vision', 'Impact', 'Projects', 'Team', 'Partner'].map(item => (
                 <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors">{item}</a>
               ))}
            </div>
            
            <div className="flex gap-6">
               <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-slate-950 transition-all text-slate-500">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
               <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-slate-950 transition-all text-slate-500">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <Assistant />
    </div>
  );
};

export default App;
