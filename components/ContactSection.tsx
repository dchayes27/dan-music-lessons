'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate">
            Questions about lessons? Send me a message.
          </p>
        </div>

        <form 
          action="https://formspree.io/f/YOUR_FORM_ID" 
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-deep mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 border-2 border-mist rounded-lg focus:border-sage focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-deep mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 border-2 border-mist rounded-lg focus:border-sage focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-deep mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-mist rounded-lg focus:border-sage focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your musical background and what you're looking to learn..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sage text-white py-4 rounded-lg font-semibold hover:bg-sage/90 transition-all hover:shadow-lg"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-sm text-slate mt-8">
          Or book directly through{' '}
          <a 
            href="https://www.justaccessiblemusic.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage font-semibold hover:underline"
          >
            Just Accessible Music
          </a>
        </p>

      </div>
    </section>
  );
}
