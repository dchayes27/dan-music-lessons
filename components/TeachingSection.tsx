import ScrollFadeIn from './ScrollFadeIn';

// Icon components
const GuitarIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Guitar body */}
    <ellipse cx="24" cy="42" rx="14" ry="16" stroke="#7A9B76" strokeWidth="2.5" fill="none"/>
    {/* Sound hole */}
    <circle cx="24" cy="42" r="5" stroke="#7A9B76" strokeWidth="2" fill="none"/>
    {/* Neck */}
    <rect x="28" y="8" width="8" height="28" stroke="#7A9B76" strokeWidth="2.5" fill="none"/>
    {/* Headstock */}
    <rect x="26" y="4" width="12" height="6" rx="1" stroke="#7A9B76" strokeWidth="2" fill="none"/>
    {/* Tuning pegs */}
    <circle cx="29" cy="7" r="1.5" fill="#7A9B76"/>
    <circle cx="35" cy="7" r="1.5" fill="#7A9B76"/>
    {/* Strings */}
    <line x1="30" y1="10" x2="20" y2="35" stroke="#7A9B76" strokeWidth="0.5" opacity="0.6"/>
    <line x1="32" y1="10" x2="22" y2="35" stroke="#7A9B76" strokeWidth="0.5" opacity="0.6"/>
    <line x1="34" y1="10" x2="26" y2="35" stroke="#7A9B76" strokeWidth="0.5" opacity="0.6"/>
  </svg>
);

const PianoIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Piano frame */}
    <rect x="12" y="22" width="40" height="24" rx="2" stroke="#7A9B76" strokeWidth="2.5" fill="none"/>
    {/* White key dividers - 7 white keys */}
    <line x1="18.7" y1="22" x2="18.7" y2="46" stroke="#7A9B76" strokeWidth="1.5"/>
    <line x1="25.3" y1="22" x2="25.3" y2="46" stroke="#7A9B76" strokeWidth="1.5"/>
    <line x1="32" y1="22" x2="32" y2="46" stroke="#7A9B76" strokeWidth="1.5"/>
    <line x1="38.7" y1="22" x2="38.7" y2="46" stroke="#7A9B76" strokeWidth="1.5"/>
    <line x1="45.3" y1="22" x2="45.3" y2="46" stroke="#7A9B76" strokeWidth="1.5"/>
    {/* Black keys - groups of 2 and 3 */}
    <rect x="16.5" y="22" width="3" height="14" rx="0.5" fill="#7A9B76"/>
    <rect x="23" y="22" width="3" height="14" rx="0.5" fill="#7A9B76"/>
    <rect x="36.5" y="22" width="3" height="14" rx="0.5" fill="#7A9B76"/>
    <rect x="43" y="22" width="3" height="14" rx="0.5" fill="#7A9B76"/>
  </svg>
);

const ProductionIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="24" width="44" height="24" rx="2" stroke="#7A9B76" strokeWidth="2.5" fill="none"/>
    <circle cx="20" cy="36" r="4" stroke="#7A9B76" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="36" r="4" stroke="#7A9B76" strokeWidth="2" fill="none"/>
    <circle cx="44" cy="36" r="4" stroke="#7A9B76" strokeWidth="2" fill="none"/>
    <line x1="20" y1="30" x2="20" y2="28" stroke="#7A9B76" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="32" y1="30" x2="32" y2="26" stroke="#7A9B76" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="44" y1="30" x2="44" y2="27" stroke="#7A9B76" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function TeachingSection() {
  const offerings = [
    {
      icon: <GuitarIcon />,
      title: 'Guitar',
      description: 'Acoustic, electric, and bass. From first chords to understanding progressions that make your favorite songs work.',
    },
    {
      icon: <PianoIcon />,
      title: 'Piano/Keyboard',
      description: 'Beginner to intermediate. Learn chords, theory, and how keys drive everything from pop to hip-hop production.',
    },
    {
      icon: <ProductionIcon />,
      title: 'Production Basics',
      description: 'Rhythm, sampling, arrangement, and gear. Understand what makes beats hit and how genres get their signature sound.',
    },
  ];

  return (
    <section id="lessons" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep mb-4">
              What I Teach
            </h2>
            <p className="text-lg text-slate">
              Exploring the music you love through hands-on learning
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <ScrollFadeIn key={item.title} delay={idx * 100}>
              <div className="p-8 border-2 border-mist rounded-xl hover:border-sage hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-deep mb-3">
                  {item.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
