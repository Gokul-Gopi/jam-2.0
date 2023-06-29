import '@/styles/globals.css';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import Color from 'color';
import type { AppProps } from 'next/app';

const primary = Color('#3474FF');

export const emotionCache = createEmotionCache({ key: 'mantine', prepend: false });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={emotionCache}
      theme={{
        colorScheme: 'light',
        colors: {
          primary: [
            primary.lighten(0.9).hex(),
            primary.lighten(0.8).hex(),
            primary.lighten(0.7).hex(),
            primary.lighten(0.5).hex(),
            primary.lighten(0.3).hex(),
            primary.lighten(0.1).hex(),
            primary.hex(),
            primary.darken(0.2).hex(),
            primary.darken(0.3).hex(),
            primary.darken(0.4).hex(),
          ],
        },
        primaryColor: 'primary',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;
