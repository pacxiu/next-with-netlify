import { Global } from '@emotion/core';
import { AppProps } from 'next/app';
import React from 'react';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import Head from 'next/head';

const globalStyles = `
  html,
  body,
  body > div:first-of-type,
  div#__next {
    height: 100%;
    width: 100%;
  }

  div#__next {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
  }

  html {
    overflow-x: hidden
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...{ theme }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,500,700i&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
