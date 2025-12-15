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
  title: "Ring to Kitchen AI | Restaurant Voice AI That Never Misses an Order",
  description: "AI phone answering for restaurants that takes orders, handles reservations, and answers calls 24/7. 99% accuracy, bilingual support (English & Spanish). Trusted by 100+ restaurants.",
  keywords: [
    // Primary Keywords
    "AI phone answering for restaurants",
    "restaurant voice AI",
    "AI order taking system",
    // Secondary Keywords
    "restaurant call automation",
    "AI reservation system",
    "phone ordering system for restaurants",
    "automated restaurant phone service",
    // Long-tail Keywords
    "24/7 AI phone answering for pizza restaurants",
    "bilingual restaurant AI voice agent",
    "AI that takes food orders by phone",
    "restaurant phone system with AI",
    "never miss restaurant order AI",
    "voice AI for fast casual restaurants",
    "AI phone system for multi-location restaurants"
  ],
  authors: [{ name: "Ring to Kitchen AI" }],
  openGraph: {
    title: "Ring to Kitchen AI | Restaurant Voice AI That Never Misses an Order",
    description: "AI phone answering for restaurants. Take orders, manage reservations, and answer calls 24/7 with 99% accuracy. Bilingual support. Trusted by 100+ restaurants.",
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
    title: "Ring to Kitchen AI | Restaurant Voice AI That Never Misses an Order",
    description: "AI phone answering for restaurants. Take orders 24/7 with 99% accuracy. Bilingual support. Join 100+ restaurants.",
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

        {/* Schema.org Organization Markup */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ring to Kitchen AI",
            "description": "Restaurant voice AI that handles phone orders, reservations, and customer calls 24/7 with 99% accuracy",
            "url": "https://ringtokitchen.ai",
            "logo": "https://ringtokitchen.ai/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "telephone": "+1-916-759-3687"
            },
            "sameAs": [
              "https://www.linkedin.com/company/ringtokitchen-ai"
            ]
          })}
        </Script>

        {/* Schema.org FAQ Markup */}
        <Script id="schema-faq" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is AI phone answering for restaurants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI phone answering is an automated voice system that handles incoming calls to your restaurant 24/7. It takes food orders, manages reservations, answers common questions about your menu and hours, and sends order details directly to your kitchen—all without requiring staff intervention."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is AI order taking compared to human staff?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ring to Kitchen AI achieves 99% order accuracy—often higher than human order takers during busy periods. Our restaurant-trained AI is specifically designed to understand food orders, including complex modifications, dietary requests, and multi-item orders."
                }
              },
              {
                "@type": "Question",
                "name": "Does the AI work with my existing POS system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Ring to Kitchen AI can integrate seamlessly with most popular restaurant POS systems, sending orders directly into your existing workflow. We also offer a standalone solution if you prefer to receive orders separately."
                }
              },
              {
                "@type": "Question",
                "name": "Can the AI answer calls in Spanish and English?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Ring to Kitchen AI provides fully bilingual support in English and Spanish, automatically detecting which language your customer prefers."
                }
              },
              {
                "@type": "Question",
                "name": "How much does restaurant AI phone answering cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our plans start at $299/month for small restaurants handling up to 500 calls. Most restaurants see ROI within the first month by capturing orders from previously missed calls."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if a customer has a complex request the AI can't handle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While our AI handles 95%+ of typical restaurant calls, it's designed to recognize when human assistance is needed. In those rare cases, the AI can seamlessly transfer the call to your staff or take a message for callback."
                }
              }
            ]
          })}
        </Script>

        {/* Schema.org SoftwareApplication Markup */}
        <Script id="schema-software" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Ring to Kitchen AI",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Cloud-based",
            "offers": {
              "@type": "Offer",
              "price": "299",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "100"
            }
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
