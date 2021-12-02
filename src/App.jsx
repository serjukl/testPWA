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
  let [isLoad, setIsLoad] = useState('Установить')
  let [isLoadAnim, setLoadAnim] = useState(false)
  let  linkTest = 'link8'
  const onClickInstall = async () => {
    await (function (){
      setIsLoad('Запустить')
      return true
    })()
    const didInstall = await promptInstall()


    if (didInstall) {
      // User accepted PWA install
      setLoadAnim(true)
      let location = window.location.search
      // location = location.split('?')
      // localStorage.setItem('link3', '&' + location[1])
      localStorage.setItem(linkTest , location)
      // setTimeout(()=>setLoadAnim(false), 3000)
    }else {
      setIsLoad('Запустить')
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
  useEffect(()=>{
    if(isStandalone){
      setIsLoad('Запустить')
    }
  }, [])
  return (
    <div className="App">
      
      {/* <button onClick={onClickInstall} className="installApp">install app</button> */}
      {
        localStorage.getItem(linkTest )
          ? <Iframe url={domain + localStorage.getItem(linkTest )}
          className="iframeContainer"
          />
          : <div className="container">
          <Header 
            onClickInstall={() => onClickInstall()}
            isLoad={isLoad}
            isLoadAnim={isLoadAnim}
            setLoadAnim={setLoadAnim}
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