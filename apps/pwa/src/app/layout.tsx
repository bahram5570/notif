import './globals.css';

import { getCultureCookie } from '@actions/userCookies.actions';
import { FIREBASE_CONFIG, FIREBASE_VAPID_KEY, PORTAL_SPLASH_ID } from '@constants/app.constants';
import ErrorProvider from '@providers/ErrorProvider';
import ModalsQueryParamsProvider from '@providers/ModalsQueryParamsProvider';
import PwaWidgetActionsProvider from '@providers/PwaWidgetActionsProvider';
import { MAX_SCREEN_WIDTH, PORTAL_FEEDBACK_TOAST_ID, PORTAL_ID } from '@repo/core/constants/app.constants';
import { CultureProvider } from '@repo/core/providers/CultureProvider';
import { MonitoringProvider } from '@repo/core/providers/MonitoringProvider';
import { PageNavigationProvider } from '@repo/core/providers/PageNavigationProvider';
import { PermissionsProvider } from '@repo/core/providers/PermissionsProvider';
import { PreviewImageProvider } from '@repo/core/providers/PreviewImageProvider';
import { ReactQueryProvider } from '@repo/core/providers/ReactQueryProvider';
import { ServiceWorkerProvider } from '@repo/core/providers/ServiceWorkerProvider';
// import { AnalyticsProvider } from '@repo/core/providers/AnalyticsProvider';
import { SystemProvider } from '@repo/core/providers/SystemProvider';
import { ToastProvider } from '@repo/core/providers/ToastProvider';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

export const dynamic = 'force-dynamic';

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

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const culture = await getCultureCookie();

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
          {/* <AnalyticsProvider> */}
          <MonitoringProvider>
            <SystemProvider appName="PWA">
              <CultureProvider defaultValues={culture}>
                <ReactQueryProvider>
                  <ErrorProvider>
                    <ToastProvider>
                      <PageNavigationProvider>
                        <PwaWidgetActionsProvider>
                          <ServiceWorkerProvider firebaseConfigs={FIREBASE_CONFIG}>
                            <>{children}</>
                            <ModalsQueryParamsProvider />
                            <PreviewImageProvider />
                            <div id={PORTAL_SPLASH_ID} />
                            <div id={PORTAL_ID} />
                            <div id={PORTAL_FEEDBACK_TOAST_ID} />
                            <PermissionsProvider firebaseConfigs={FIREBASE_CONFIG} vapidKey={FIREBASE_VAPID_KEY} />
                          </ServiceWorkerProvider>
                        </PwaWidgetActionsProvider>
                      </PageNavigationProvider>
                    </ToastProvider>
                  </ErrorProvider>
                </ReactQueryProvider>
              </CultureProvider>
            </SystemProvider>
            {/* </AnalyticsProvider> */}
          </MonitoringProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
