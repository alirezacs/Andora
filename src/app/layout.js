'use client'

import localFont from "next/font/local";
import './globals.css';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from 'stylis';
import stylisRTLPlugin from "stylis-plugin-rtl";
import { createTheme } from "@mui/material";

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

const myFont = localFont({src: './fonts/vazirmatn/Vazirmatn-Black.ttf'});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${myFont.className}`}
      >
        <AppRouterCacheProvider>
          <CacheProvider value={cachRtl}>
            {children}
          </CacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
