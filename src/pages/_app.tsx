import type { AppProps } from 'next/app'

import { GlobalStyles, Container } from '../styles/global'

import { Header } from '../components/Header';

import { DefaultLayout } from '../layouts/DefaultLayout';

import { Footer } from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {

  GlobalStyles();

  return (
    <Container>
      <DefaultLayout>
        <Header />
        <Component {...pageProps} />
      </DefaultLayout>
      <Footer />
    </Container>
  )
}
