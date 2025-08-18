import './globals.css';

import { MAX_WIDTH } from '@constants/app.constants';
import { HOST_URL, SERVER_URL } from '@constants/links.constants';
import CustomToastProvider from '@providers/CustomToastProvider';
import MuiProvider from '@providers/MuiProvider';
import PageNavigationProvider from '@providers/PageNavigationProvider';
import UserTrackingProvider from '@providers/UserTrackingProvider';
import { Metadata } from 'next';
import Script from 'next/script';

import OperatingSystemProvider from '../providers/OperatingSystemProvider';

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa" dir="rtl">
      <head>
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
      </head>

      <body>
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

        <UserTrackingProvider>
          <MuiProvider>
            <OperatingSystemProvider>
              <CustomToastProvider>
                <PageNavigationProvider>
                  <div
                    className="relative flex flex-col items-center mx-auto min-h-[100dvh]"
                    style={{ maxWidth: MAX_WIDTH }}
                  >
                    <>{children}</>
                  </div>
                </PageNavigationProvider>
              </CustomToastProvider>
            </OperatingSystemProvider>
          </MuiProvider>
        </UserTrackingProvider>
      </body>
    </html>
  );
};

export default RootLayout;

// !function (t, e, n) {
//     t.yektanetAnalyticsObject = n, t[n] = t[n] || function () {
//         t[n].q.push(arguments)
//     }, t[n].q = t[n].q || [];
//     var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(),
//         c = e.getElementsByTagName("script")[0], s = e.createElement("script");
//     s.id = "ua-script-R73jHTwG"; s.dataset.analyticsobject = n;
//     s.async = 1; s.type = "text/javascript";
//     s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/R73jHTwG/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c)
// }(window, document, "yektanet");
