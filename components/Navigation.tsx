'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
        <div className="text-xl font-bold text-deep">
          Dan Chayes
        </div>
        <ul className="flex gap-8 text-slate font-medium">
          <li>
            <a href="#lessons" className="hover:text-sage transition-colors">
              Lessons
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sage transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sage transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
