import { useEffect, useState } from "react";
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator)
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('./sw.js').then(
            (registration) =>
                console.log(
                    'Service Worker registration successful with scope: ',
                    registration.scope
                ),
            (err) => console.log('Service Worker registration failed: ', err)
        )
    );
  }, []);
  
  return <Component {...pageProps} />
}

export default MyApp
