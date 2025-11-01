import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Waveform background decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-mist/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        <h2 className="text-4xl lg:text-5xl font-bold text-deep text-center mb-12">
          About Dan
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">

          <div className="space-y-5 text-lg text-slate leading-relaxed max-w-xl">
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

          {/* Photo */}
          <div className="rounded-xl overflow-hidden border-[3px] border-sage shadow-lg max-w-md mx-auto lg:mx-0">
            <Image
              src="/dan-photo.jpg"
              alt="Dan teaching guitar to a young student"
              width={600}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}
