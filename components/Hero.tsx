
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop" 
          alt="Inertia Lab" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-accent"></span>
            <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase">Momentum for Change</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black leading-[0.9] mb-8 tracking-tighter">
            INERTIA<br/>
            <span className="text-accent">EDUCATION</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-slate-300 mb-12 max-w-2xl leading-relaxed">
            Moving the barriers that keep brilliance stationary. A mobile innovation lab creating <span className="text-white font-medium italic">equitable STEAM pathways</span> across Aotearoa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="#partner" className="px-10 py-5 bg-accent text-slate-950 font-black uppercase tracking-widest text-sm rounded-full transition-all hover:scale-105 hover:bg-sky-400 shadow-xl shadow-sky-500/10">
              Partner with Us
            </a>
            <a href="#impact" className="px-10 py-5 bg-white/5 text-white font-bold uppercase tracking-widest text-sm rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
              Explore Impact
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
