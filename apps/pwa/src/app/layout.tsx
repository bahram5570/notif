import './globals.css';

// import AnalyticsProvider from '@providers/AnalyticsProvider';
import CultureProvider from '@providers/CultureProvider';
import ErrorProvider from '@providers/ErrorProvider';
import ModalsQueryParamsProvider from '@providers/ModalsQueryParamsProvider';
import PreviewImageProvider from '@providers/PreviewImageProvider';
import ServiceWorkerProvider from '@providers/ServiceWorkerProvider';
import ToastProvider from '@providers/ToastProvider';
import WidgetActionsProvider from '@providers/WidgetActionsProvider';
import { MAX_SCREEN_WIDTH, PORTAL_ID, PORTAL_SPLASH_ID } from '@repo/core/constants/app.contants';
import { OperatingSystemProvider } from '@repo/core/providers/OperatingSystemProvider';
import { PageNavigationProvider } from '@repo/core/providers/PageNavigationProvider';
import { ReactQueryProvider } from '@repo/core/providers/ReactQueryProvider';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'وب اپلیکیشن ایمپو',
  description: 'وب اپلیکیشن ایمپو',
  robots: { follow: false, index: false },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
};

const YekanBakhVF = localFont({
  display: 'swap',
  src: '../../public/assets/shared/fonts/YekanBakh-VF.ttf',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa" dir="ltr" suppressHydrationWarning={true} className={YekanBakhVF.className}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            const t = localStorage.getItem('theme');
            if (t === 'dark') {
              document.documentElement.classList.add('dark');
            } else if (t === 'light') {
              document.documentElement.classList.remove('dark');
            } else {
              const p = window.matchMedia("(prefers-color-scheme: dark)").matches;
              document.documentElement.classList.toggle('dark', p);
            }
          `}
        </Script>
      </head>

      <body
        className="bg-impo_Neutral_Background"
        style={{ maxWidth: MAX_SCREEN_WIDTH, width: '100%', height: '100dvh', margin: 'auto' }}
      >
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

        <main>
          {/* <AnalyticsProvider> */}
            <OperatingSystemProvider>
              <CultureProvider>
                <ReactQueryProvider>
                  <ErrorProvider>
                    <ToastProvider>
                      <PageNavigationProvider>
                        <WidgetActionsProvider>
                          <ServiceWorkerProvider>
                            <>{children}</>
                            <ModalsQueryParamsProvider />
                            <PreviewImageProvider />
                            <div id={PORTAL_SPLASH_ID} />
                            <div id={PORTAL_ID} />
                          </ServiceWorkerProvider>
                        </WidgetActionsProvider>
                      </PageNavigationProvider>
                    </ToastProvider>
                  </ErrorProvider>
                </ReactQueryProvider>
              </CultureProvider>
            </OperatingSystemProvider>
          {/* </AnalyticsProvider> */}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
