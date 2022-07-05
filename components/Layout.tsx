import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function Layout({ seo, children }: any) {
  return (
    <>
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3044114,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YVP4FD6510"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YVP4FD6510');
        `}
      </Script>
      <Head>
        <title>{seo?.metaTitle}</title>
        <meta property="title" content={seo?.metaTitle} />
        <meta name="description" content={seo?.metaDesc} />
        <meta property="og:title" content={seo?.metaTitle} />
        <meta name="og:description" content={seo?.metaDesc} />
        <meta name="keywords" content={seo?.keywords?.join(", ")} />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-500 mb-8 py-[5px]">
          <div className="container mx-auto flex sm:justify-start justify-center">
            <Link href="/">
              <a>
                <img
                  src="/images/code-bugs.svg"
                  alt="Picture of the author"
                  width={100}
                  height={60}
                />
              </a>
            </Link>
          </div>
        </header>
        <main className="container mx-auto flex-1 p-2">{children}</main>
        <footer className="bg-blue-500 mt-8 py-4">
          <div className="container mx-auto flex justify-center">
            &copy; 2022 code-bugs.com
          </div>
        </footer>
      </div>
    </>
  );
}
