import type { Metadata } from 'next';
import './globals.css';
import { Alegreya_Sans } from 'next/font/google';
import Script from 'next/script';

const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  style: ['normal', 'italic'],
});

const GA_TRACKING_ID = 'AW-16770491094';

export const metadata: Metadata = {
  title: 'Продай жилье — Быстрая покупка квартиры за 1-2 дня',
  description:
    'Срочно продать квартиру? Мы, финансовые инвесторы, предлагаем полную оплату за 1-2 дня. Покупка на собственные деньги, не риелторы.',
  keywords:
    'срочная продажа квартиры, выкуп жилья, финансовые инвесторы, продажа недвижимости',
  authors: [{ name: 'Продай жилье' }],
  openGraph: {
    title: 'Продай жилье — Быстрая продажа квартиры',
    description:
      'Срочно продать квартиру? Мы покупаем за наличные в течение 1-2 дней. Обращайтесь к нам для быстрого решения!',
    url: 'https://prodayzhilye.kz/', // Replace with actual URL
    type: 'website',
    images: [
      {
        url: 'https://prodayzhilye.kz/favicon.ico', // Replace with relevant image
        width: 800,
        height: 600,
        alt: 'Продай жилье — Быстрая продажа квартиры',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Продай жилье',
            description: metadata.description,
            url: 'https://prodayzhilye.kz', // Replace with actual URL
            logo: 'https://prodayzhilye.kz/favicon.ico', // Replace with actual logo URL
            areaServed: 'Kazakhstan',
          })}
        </script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
        </Script>
      </head>
      <body className={`${alegreyaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
