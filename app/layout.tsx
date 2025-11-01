import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music Lessons in Astoria, NY | Guitar, Piano & Production - Dan Chayes",
  description: "Professional music lessons in Astoria, NY for kids (4+) and adults. Learn guitar, piano, and music production. Explore music theory, technique, and the genres you love.",
  keywords: [
    "music lessons Astoria",
    "guitar lessons Astoria NY",
    "piano lessons Astoria",
    "kids music lessons Astoria",
    "music teacher Astoria",
    "guitar teacher Astoria",
    "piano teacher Astoria",
    "music production lessons",
    "Astoria music school",
    "Queens music lessons",
  ],
  authors: [{ name: "Dan Chayes" }],
  creator: "Dan Chayes",
  publisher: "Dan Chayes Music",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://astoriamusiclessons.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Music Lessons in Astoria, NY - Guitar, Piano & Production",
    description: "Professional music lessons for kids (4+) and adults in Astoria. Learn guitar, piano, and production while exploring the music you love.",
    url: "https://astoriamusiclessons.com",
    siteName: "Dan Chayes Music Lessons",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/dan-photo.jpg",
        width: 600,
        height: 800,
        alt: "Dan teaching guitar to a student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Lessons in Astoria, NY - Guitar, Piano & Production",
    description: "Professional music lessons for kids (4+) and adults. Learn guitar, piano, and production in Astoria, NY.",
    images: ["/dan-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    "name": "Dan Chayes Music Lessons",
    "description": "Professional music lessons for kids and adults in Astoria, NY. Guitar, piano, and music production instruction.",
    "image": "https://astoriamusiclessons.com/dan-photo.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Astoria",
      "addressRegion": "NY",
      "postalCode": "11102",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7722",
      "longitude": "-73.9301"
    },
    "url": "https://astoriamusiclessons.com",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Astoria",
      "containedInPlace": {
        "@type": "State",
        "name": "New York"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Music Lesson Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Guitar Lessons",
            "description": "Acoustic, electric, and bass guitar lessons for all skill levels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Piano Lessons",
            "description": "Piano and keyboard lessons from beginner to intermediate"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Music Production",
            "description": "Music production basics including rhythm, sampling, and arrangement"
          }
        }
      ]
    },
    "instructor": {
      "@type": "Person",
      "name": "Dan Chayes",
      "jobTitle": "Music Instructor"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
