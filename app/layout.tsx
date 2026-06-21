import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SECURE Tool Company',
  description:
    'SECURE Tool Company is the parent company for SECURE Blue and SECURE Cargo Control. We solve the world\'s greatest challenges by delivering technical solutions to water security and supply chain Cargo Control.',
  keywords:
    'SECURE Tool Company, SECURE Blue, SECURE Cargo Control, water security, cargo tracking, IoT, industrial tools',
  authors: [{ name: 'SECURE Tool Company' }],
  openGraph: {
    title: 'SECURE Tool Company',
    description:
      'Parent company of SECURE Blue and SECURE Cargo Control.',
    images: [
      {
        url: '/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'SECURE Tool Company',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
