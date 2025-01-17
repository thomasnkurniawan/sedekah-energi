import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Sedekah Energi - Dukung Energi Terbarukan untuk Masjid di Indonesia</title>
        <meta name="description" content="Sedekah Energi adalah inisiatif untuk mendukung pemasangan solusi energi terbarukan di masjid-masjid Indonesia. Donasi Anda membantu menjaga lingkungan, meningkatkan kesejahteraan masyarakat, dan memberikan manfaat spiritual. Bergabunglah bersama kami untuk masa depan yang lebih hijau dan berkelanjutan!" />
        <meta name="keywords" content="sedekah energi, energi terbarukan, donasi masjid, solusi energi bersih, energi berkelanjutan, sedekah ramah lingkungan, pemasangan solar panel, inisiatif hijau, solar panel" />
        <meta property="og:title" content="Sedekah Energi - Dukung Energi Terbarukan untuk Masjid" />
        <meta
          property="og:description"
          content="Donasi untuk mendukung solusi energi terbarukan di masjid-masjid Indonesia. Bersama kita wujudkan masa depan berkelanjutan."
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="canonical" href="https://sedekahenergi.mosaic-indonesia.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
        <Link rel="preload" fetchpriority="high" as="image" href="energi-asset-vector/solar-left.svg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-REWT9YNS6K"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-REWT9YNS6K');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
