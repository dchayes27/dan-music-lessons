// Icon components
const GuitarIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45 12L52 5M52 5L50 8M52 5L49 7" stroke="#7A9B76" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="20" cy="44" rx="12" ry="16" stroke="#7A9B76" strokeWidth="2.5" fill="none"/>
    <line x1="32" y1="32" x2="45" y2="19" stroke="#7A9B76" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="26" cy="38" r="1.5" fill="#7A9B76"/>
    <circle cx="22" cy="42" r="1.5" fill="#7A9B76"/>
    <circle cx="18" cy="46" r="1.5" fill="#7A9B76"/>
    <line x1="14" y1="40" x2="14" y2="48" stroke="#7A9B76" strokeWidth="1.5"/>
  </svg>
);

const PianoIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="40" height="28" rx="2" stroke="#7A9B76" strokeWidth="2.5" fill="none"/>
    <line x1="20" y1="20" x2="20" y2="48" stroke="#7A9B76" strokeWidth="2"/>
    <line x1="28" y1="20" x2="28" y2="48" stroke="#7A9B76" strokeWidth="2"/>
    <line x1="36" y1="20" x2="36" y2="48" stroke="#7A9B76" strokeWidth="2"/>
    <line x1="44" y1="20" x2="44" y2="48" stroke="#7A9B76" strokeWidth="2"/>
    <rect x="18" y="20" width="4" height="14" rx="1" fill="#7A9B76"/>
    <rect x="26" y="20" width="4" height="14" rx="1" fill="#7A9B76"/>
    <rect x="38" y="20" width="4" height="14" rx="1" fill="#7A9B76"/>
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
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep mb-4">
            What I Teach
          </h2>
          <p className="text-lg text-slate">
            Exploring the music you love through hands-on learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="p-8 border-2 border-mist rounded-xl hover:border-sage hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-deep mb-3">
                {item.title}
              </h3>
              <p className="text-slate leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
