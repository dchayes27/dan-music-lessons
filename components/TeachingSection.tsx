export default function TeachingSection() {
  const offerings = [
    {
      emoji: '🎸',
      title: 'Guitar',
      description: 'Acoustic, electric, and bass. From first chords to understanding progressions that make your favorite songs work.',
    },
    {
      emoji: '🎹',
      title: 'Piano/Keyboard',
      description: 'Beginner to intermediate. Learn chords, theory, and how keys drive everything from pop to hip-hop production.',
    },
    {
      emoji: '🎛️',
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
              <div className="text-5xl mb-4">{item.emoji}</div>
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
