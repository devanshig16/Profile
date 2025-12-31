import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Devanshi Gupta",
  description: "Third year Computer Science student at Penn State. Building AI solutions and data systems. President of HackPSU.",
  openGraph: {
    title: "Devanshi Gupta",
    description: "Third year Computer Science student at Penn State. Building AI solutions and data systems. President of HackPSU.",
    url: "https://devanshigupta.com",
    siteName: "Devanshi Gupta",
    images: [
      {
        url: "https://devanshigupta.com/preview%20image.png",
        width: 1200,
        height: 630,
        alt: "Devanshi Gupta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devanshi Gupta",
    description: "Third year Computer Science student at Penn State. Building AI solutions and data systems. President of HackPSU.",
    images: ["https://devanshigupta.com/preview%20image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans text-near-black dark:text-dark-text bg-white dark:bg-dark-surface antialiased transition-colors duration-300">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = theme === 'dark' || (!theme && systemPrefersDark);
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

