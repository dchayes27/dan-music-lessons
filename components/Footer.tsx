export default function Footer() {
  return (
    <footer className="bg-deep text-mist py-12 px-6 lg:px-8 text-center">
      <p className="text-lg">
        Dan Chayes | Music Lessons in Astoria, NY
      </p>
      <p className="mt-2">
        Teaching through{' '}
        <a 
          href="https://www.justaccessiblemusic.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-honey hover:underline"
        >
          Just Accessible Music
        </a>
      </p>
      <p className="mt-4 text-sm opacity-75">
        © {new Date().getFullYear()} Dan Chayes. All rights reserved.
      </p>
    </footer>
  );
}
