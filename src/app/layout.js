'use client'

import localFont from "next/font/local";
import './globals.css';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from 'stylis';
import stylisRTLPlugin from "stylis-plugin-rtl";
import { createTheme } from "@mui/material";
import 'swiper/css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const myFont = localFont({src: './fonts/vazirmatn/Vazirmatn-Light.ttf', variable: '--font-vazirmatn'});

export default function RootLayout({ children }) {
  const cachRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, stylisRTLPlugin]
  });

  const theme = createTheme({
    typography: {
      fontFamily: myFont.style.fontFamily
    }
  });

  return (
    <html lang="en">
      <body
        className={`antialiased ${myFont.className}`}
      >
        <AppRouterCacheProvider>
          <CacheProvider value={cachRtl}>
            <ThemeProvider theme={theme}>
            {children}
            </ThemeProvider>
          </CacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
