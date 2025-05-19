
import './globals.css';
import Providers from './theme-provider';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Yakob Beshahwered | Full-Stack Developer',
  description:
    'I’m Yakob Beshahwered, a passionate full-stack developer specializing in Next.js, JavaScript, MongoDB, and Tailwind CSS. Explore my portfolio, projects, and professional experience.',
  keywords: [
    'Yakob Beshahwered',
    'Full-Stack Developer',
    'Next.js Portfolio',
    'Web Developer Ethiopia',
    'JavaScript Developer',
    'MongoDB',
    'Tailwind CSS',
    'Software Engineer Portfolio',
  ],
  authors: [{ name: 'Yakob Beshahwered' }],
  creator: 'Yakob Beshahwered',
  robots: 'index, follow',

  openGraph: {
    title: 'Yakob Beshahwered Portfolio',
    description:
      'Explore Yakob Beshahwered’s projects, skills, and professional experience in full-stack development.',
    url: 'https://yakobb.com', // Replace with your real deployed domain
    siteName: 'Yakob Beshahwered Portfolio',
    images: [
      {
        url: '/link.JPG', // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: 'Yakob Beshahwered Portfolio Preview',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Yakob Beshahwered | Full-Stack Developer',
    description:
      'Explore Yakob Beshahwered’s projects, skills, and professional experience in full-stack development.',
    images: ['/profile.JPG'], // Same image as Open Graph for consistency
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
