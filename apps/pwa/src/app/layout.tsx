import './globals.css';

import { MAX_SCREEN_WIDTH, PORTAL_ID, PORTAL_SPLASH_ID } from '@constants/app.constants';
import AnalyticsProvider from '@providers/AnalyticsProvider';
import CultureProvider from '@providers/CultureProvider';
import ErrorProvider from '@providers/ErrorProvider';
import ModalsQueryParamsProvider from '@providers/ModalsQueryParamsProvider';
import OperatingSystemProvider from '@providers/OperatingSystemProvider';
import PageNavigationProvider from '@providers/PageNavigationProvider';
import PreviewImageProvider from '@providers/PreviewImageProvider';
import ReactQueryProvider from '@providers/ReactQueryProvider';
import RouteSequenceProvider from '@providers/RouteSequenceProvider';
import ScrollToTopProvider from '@providers/ScrollToTopProvider';
import ServiceWorkerProvider from '@providers/ServiceWorkerProvider';
import ThemeModeProvider from '@providers/ThemeModeProvider';
import ToastProvider from '@providers/ToastProvider';
import WidgetActionsProvider from '@providers/WidgetActionsProvider';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import D from './D';

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
        <main>
          <D />
          <ScrollToTopProvider />

          <AnalyticsProvider>
            <OperatingSystemProvider>
              <CultureProvider>
                <ThemeModeProvider>
                  <ReactQueryProvider>
                    <ErrorProvider>
                      <ToastProvider>
                        <PageNavigationProvider>
                          <RouteSequenceProvider>
                            <WidgetActionsProvider>
                              <ServiceWorkerProvider>
                                <>{children}</>
                                <ModalsQueryParamsProvider />
                                <PreviewImageProvider />
                                <div id={PORTAL_SPLASH_ID} />
                                <div id={PORTAL_ID} />
                              </ServiceWorkerProvider>
                            </WidgetActionsProvider>
                          </RouteSequenceProvider>
                        </PageNavigationProvider>
                      </ToastProvider>
                    </ErrorProvider>
                  </ReactQueryProvider>
                </ThemeModeProvider>
              </CultureProvider>
            </OperatingSystemProvider>
          </AnalyticsProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
