import ScrollFadeIn from './ScrollFadeIn';

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-sage text-white text-center">
      <ScrollFadeIn>
        <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Ready to Start?
        </h2>
        <p className="text-xl mb-8 opacity-95">
          All lessons are booked through Just Accessible Music in Astoria.
        </p>
        <a
          href="https://www.justaccessiblemusic.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-sage px-10 py-4 rounded-lg font-semibold text-lg hover:bg-honey hover:text-deep transition-all hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-100"
        >
          Book Your Lesson
        </a>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
