'use client';

import { useState } from 'react';

export default function Hero() {
  const [isGuitarHovered, setIsGuitarHovered] = useState(false);
  return (
    <section className="mt-20 pt-20 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <span className="inline-block bg-honey text-deep px-5 py-2 rounded-full text-sm font-semibold mb-6">
              Based in Astoria, NY
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-deep leading-tight mb-4">
              Music Lessons in Astoria
            </h1>
            
            <p className="text-2xl text-slate mb-3">
              Guitar. Keys. Production.
            </p>
            
            <p className="text-lg text-slate leading-relaxed mb-8">
              Experienced teaching for Kids 4+ and Adults, anyone with a passion for music. 
              Learn technique, theory and master your instrument while exploring the genres 
              you love and how they get their sound.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.justaccessiblemusic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage text-white px-8 py-4 rounded-lg font-semibold hover:bg-sage/90 transition-all hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-100"
              >
                Book Through JAM →
              </a>

              <a
                href="#about"
                className="bg-white text-mauve border-2 border-mauve px-8 py-4 rounded-lg font-semibold hover:bg-mauve hover:text-white transition-all hover:scale-105 active:scale-100"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Visual - Guitar + Vinyl + Waveform */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            
            {/* Vinyl record - background left with rotation */}
            <div className="absolute top-0 left-0 w-36 h-36 rounded-full border-[3px] border-honey/40 animate-spin-slow">
              <div className="absolute inset-4 rounded-full border-2 border-honey/40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-honey/70" />
            </div>

            {/* Sampler grid - background right with pulse */}
            <div className="absolute bottom-0 right-0 grid grid-cols-4 gap-1 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-sm ${i % 2 === 0 ? 'bg-mauve' : 'bg-honey'} animate-pulse-gentle`}
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>

            {/* Guitar illustration */}
            <div
              className="relative w-[280px] h-[320px] cursor-pointer transition-transform hover:scale-105"
              onMouseEnter={() => setIsGuitarHovered(true)}
              onMouseLeave={() => setIsGuitarHovered(false)}
            >
              {/* Strings with vibration on hover */}
              <div className={`absolute top-0 left-[120px] w-0.5 h-60 bg-slate ${isGuitarHovered ? 'animate-vibrate' : ''}`} />
              <div className={`absolute top-0 left-[130px] w-0.5 h-60 bg-slate ${isGuitarHovered ? 'animate-vibrate' : ''}`} style={{ animationDelay: '50ms' }} />
              <div className={`absolute top-0 left-[140px] w-0.5 h-60 bg-slate ${isGuitarHovered ? 'animate-vibrate' : ''}`} style={{ animationDelay: '100ms' }} />
              <div className={`absolute top-0 left-[150px] w-0.5 h-60 bg-slate ${isGuitarHovered ? 'animate-vibrate' : ''}`} style={{ animationDelay: '150ms' }} />
              
              {/* Neck */}
              <div className="absolute top-0 left-[110px] w-[60px] h-[140px] border-4 border-sage border-b-0 rounded-t-lg" />
              
              {/* Body */}
              <div className="absolute top-20 left-[70px] w-[140px] h-[180px] border-4 border-sage rounded-full" />
              
              {/* Sound hole */}
              <div className="absolute top-[145px] left-[115px] w-[50px] h-[50px] border-[3px] border-mauve rounded-full" />
              
              {/* Accent dot */}
              <div className="absolute top-5 right-5 w-10 h-10 bg-honey/80 rounded-full" />
            </div>

            {/* Waveform accent - bottom with pulse */}
            <div className="absolute bottom-4 left-4 right-4 h-12 opacity-20">
              <div className="h-full flex items-end justify-around gap-0.5">
                {[3, 8, 5, 12, 7, 10, 4, 11, 6, 9, 5, 7, 12, 6, 8, 4].map((height, i) => (
                  <div
                    key={i}
                    className="w-1 bg-slate rounded-sm animate-pulse-gentle"
                    style={{ height: `${height * 4}px`, animationDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
