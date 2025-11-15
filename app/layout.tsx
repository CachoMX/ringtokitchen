import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ringtokitchen.ai'),
  title: "Ring to Kitchen AI | AI Voice Agent for Restaurants",
  description: "Let your AI handle calls, reservations, and orders. Your team focuses on hospitality. 24/7 AI support for restaurants.",
  keywords: ["AI phone system for restaurants", "restaurant AI voice agent", "restaurant call answering AI", "AI reservation system", "restaurant automation"],
  authors: [{ name: "Ring to Kitchen AI" }],
  openGraph: {
    title: "Ring to Kitchen AI | AI Voice Agent for Restaurants",
    description: "Let your AI handle calls, reservations, and orders. Your team focuses on hospitality.",
    url: "https://ringtokitchen.ai",
    siteName: "Ring to Kitchen AI",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ring to Kitchen AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ring to Kitchen AI | AI Voice Agent for Restaurants",
    description: "Let your AI handle calls, reservations, and orders. Your team focuses on hospitality.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}

        {/* Meta Pixel */}
        {PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Schema.org Markup */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ring to Kitchen AI",
            "description": "AI voice agent service for restaurants",
            "url": "https://ringtokitchen.ai",
            "logo": "https://ringtokitchen.ai/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "email": "hello@ringtokitchen.ai"
            },
            "sameAs": [
              "https://www.linkedin.com/company/ringtokitchen-ai"
            ]
          })}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Meta Pixel (noscript) */}
        {PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        {children}
      </body>
    </html>
  );
}
