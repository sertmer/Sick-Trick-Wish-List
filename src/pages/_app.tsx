import { AppProps } from 'next/app';
import NavBar from '../components/NavBar'; // Adjust the path as necessary
// import '../styles/globals.css'; // Your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;