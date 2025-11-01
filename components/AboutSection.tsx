export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Waveform background decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-mist/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        <h2 className="text-4xl lg:text-5xl font-bold text-deep text-center mb-12">
          About Dan
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5 text-lg text-slate leading-relaxed">
            <p>
              I teach private music lessons in Astoria through{' '}
              <a 
                href="https://www.justaccessiblemusic.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage font-semibold hover:underline"
              >
                Just Accessible Music
              </a>.
            </p>
            
            <p>
              I work primarily with kids (ages 4+) and adults who want to understand 
              music beyond just playing notes. We learn through songs you actually 
              care about—whether that's pop, hip-hop, Radiohead, or classical.
            </p>
            
            <p>
              I pull in theory as we go, so you understand why progressions work, 
              how genres get their signature sound, and what makes certain rhythms 
              feel right. From D'Angelo to Madvillain, Weezer to Chopin—we explore 
              what makes it tick.
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="aspect-[4/3] rounded-xl overflow-hidden border-[3px] border-sage bg-mist/30 flex items-center justify-center text-slate italic">
            [Dan + niece photo coming soon]
          </div>

        </div>

      </div>
    </section>
  );
}
