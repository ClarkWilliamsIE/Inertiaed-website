
import React from 'react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white text-slate-900 rounded-[3rem] md:rounded-[5rem] -mt-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-4">Case Studies</h3>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Proof of <span className="text-slate-300">Possibility</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-lg font-light">
            Our residencies yield high-fidelity prototypes that bridge the digital divide and solve real community problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-xl font-black mb-3">{project.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Curriculum</p>
                    <div className="flex flex-wrap gap-2">
                      {project.curriculum.map((c, i) => (
                        <span key={i} className="px-2 py-1 bg-white text-slate-600 text-[10px] font-bold rounded border border-slate-200 uppercase">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((s, i) => (
                        <span key={i} className="px-2 py-1 bg-sky-100 text-sky-700 text-[10px] font-bold rounded uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
