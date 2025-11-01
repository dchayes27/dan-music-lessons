import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TeachingSection from '@/components/TeachingSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TeachingSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
