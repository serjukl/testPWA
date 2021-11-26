import React , {useEffect, useState} from 'react';
import './App.sass';
import Iframe from 'react-iframe'
import Header from './components/Header/Header';
import usePWA from 'react-pwa-install-prompt'
import {SliderComp} from "./components/Slider/Slider";
import {Description} from "./components/Description/Description";
import {New} from "./components/New/New";
import {Reviews} from "./components/Reviews/Reviews";
import {Footer} from "./components/Footer/Footer";


const App = () => {
  const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA()
  const [isDownloaded, setIsDownloaded] = useState(false)
  const domain = 'https://yuchainmontgf.xyz/'

  const onClickInstall = async () => {
    const didInstall = await promptInstall()
    if (didInstall) {
      // User accepted PWA install
      let location = window.location.search
      // location = location.split('?')
      // localStorage.setItem('link3', '&' + location[1])
      localStorage.setItem('link', location)
    }
  }

  // let deferredPrompt;

  // window.addEventListener('beforeinstallprompt', (e) => {
  //     deferredPrompt = e;
  // });

  // const installHandler = async() => {
  //   if (deferredPrompt !== null) {
  //     deferredPrompt.prompt();
  //     const { outcome } = await deferredPrompt.userChoice;
  //     console.log(outcome)
  //     if (outcome === 'accepted') {
  //         deferredPrompt = null;
  //     }
  //   }
  // }

  return (
    <div className="App">
      
      {/* <button onClick={onClickInstall} className="installApp">install app</button> */}
      {
        localStorage.getItem('link')
          ? <Iframe url={domain + localStorage.getItem('link')}
          className="iframeContainer"
          />
          : <div className="container">
          <Header 
            onClickInstall={() => onClickInstall()}
          />
          <SliderComp/>
          <Description/>
          <div className={'line'}></div>
          <New/>
          <div className={'line'}></div>
          <Reviews/>
          <div className={'line'}></div>
          <Footer/>
        </div>
      }
      
    </div>
  )
}

export default App