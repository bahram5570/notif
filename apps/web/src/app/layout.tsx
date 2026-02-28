import './globals.css';

import { MAX_WIDTH } from '@constants/app.constants';
import { HOST_URL, SERVER_URL } from '@constants/links.constants';
import DownloadLinksProvider from '@providers/DownloadLinksProvider';
import MuiProvider from '@providers/MuiProvider';
import { PageNavigationProvider } from '@repo/core/providers/PageNavigationProvider';
import { SystemProvider } from '@repo/core/providers/SystemProvider';
import { ToastProvider } from '@repo/core/providers/ToastProvider';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

export const metadata: Metadata = {
  openGraph: {
    title: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
    description: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
    url: HOST_URL,
    siteName: 'Impo',
    type: 'website',
    images: [
      {
        width: 500,
        height: 500,
        alt: 'image',
        url: `${SERVER_URL}/support/article/author/image/10214db39dc74768baac846c560221fd.png`,
      },
    ],
  },
};

export const YekanBakhVF = localFont({
  src: '../../public/assets/shared/fonts/YekanBakh-VF.ttf',
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning={true} className={YekanBakhVF.className}>
      <head>
        <link
          as="font"
          rel="preload"
          type="font/ttf"
          crossOrigin="anonymous"
          href="/assets/shared/fonts/YekanBakh-VF.ttf"
        />

        <meta name="msvalidate.01" content="0BDDCC0D2CF0B15B4DC64ABB84BB8526" />

        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PT95KXQ');
          `}
        </Script>

        <Script>
          {`
            var s=document.createElement("script");
            s.src="https://van.najva.com/static/js/main-script.js";
            s.defer=!0;
            s.id="najva-mini-script";
            s.setAttribute("data-najva-id","4c439ddc-6cdf-4f4d-b55a-d7962562af40");
            document.head.appendChild(s);
          `}
        </Script>

        <Script>
          {`
            !function (t, e, n) {
                t.yektanetAnalyticsObject = n, t[n] = t[n] || function () {
                    t[n].q.push(arguments)
                }, t[n].q = t[n].q || [];
                var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(),
                    c = e.getElementsByTagName("script")[0], s = e.createElement("script");
                s.id = "ua-script-R73jHTwG"; s.dataset.analyticsobject = n;
                s.async = 1; s.type = "text/javascript";
                s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/R73jHTwG/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c)
            }(window, document, "yektanet");
          `}
        </Script>

        <Script>
          {`
            var s=document.createElement("script");
            s.src="https://van.najva.com/static/js/main-script.js";
            s.defer=!0;
            s.id\="najva-mini-script";
            s.setAttribute("data-najva-id","4c439ddc-6cdf-4f4d-b55a-d7962562af40");
            document.head.appendChild(s);
          `}
        </Script>

        <Script id="theme-init" strategy="beforeInteractive">
          {`
            // # Force light mode when the app is running inside an iframe
            try {
              const isIframe = window.self !== window.top;

              if (isIframe) {
                document.documentElement.classList.remove('dark');
              } else {
                const t = localStorage.getItem('theme');

                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (t === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  const p = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', p);
                }
              }
            } catch {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
      </head>

      <body className="bg-impo_Neutral_Background">
        <noscript>
          <iframe
            width="0"
            height="0"
            style={{ display: 'none', visibility: 'hidden' }}
            src="https://www.googletagmanager.com/ns.html?id=GTM-PT95KXQ"
          />
        </noscript>

        {/* // # Scrolls to top on initial render - client-side & server-side */}
        <Script>
          {`
            window.addEventListener('load', () => {
              if (!window.location.hash) {
                window.scrollTo(0, 0);
              }
            });

            window.addEventListener('popstate', () => {
              setTimeout(() => {
                if (!window.location.hash) {
                  window.scrollTo(0, 0);
                }
              }, 0);
            });
            
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'manual';
            }
          `}
        </Script>

        <DownloadLinksProvider>
          <SystemProvider>
            {/* <UserTrackingProvider> */}
            <MuiProvider>
              <ToastProvider>
                <PageNavigationProvider>
                  <div
                    className="relative flex flex-col items-center mx-auto min-h-[100dvh]"
                    style={{ maxWidth: MAX_WIDTH }}
                  >
                    <>{children}</>
                  </div>
                </PageNavigationProvider>
              </ToastProvider>
            </MuiProvider>
            {/* </UserTrackingProvider> */}
          </SystemProvider>
        </DownloadLinksProvider>
      </body>
    </html>
  );
};

export default RootLayout;
