import React , {useEffect, useState} from 'react';
import './App.sass';
import Iframe from 'react-iframe'
import Header from './components/Header/Header';
import usePWA from 'react-pwa-install-prompt'


const App = () => {
  const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA()
  const [isDownloaded, setIsDownloaded] = useState(false)
  const domain = 'https://test10jklger.xyz/'

  const onClickInstall = async () => {
    const didInstall = await promptInstall()
    if (didInstall) {
      // User accepted PWA install
      localStorage.setItem('link', window.location.search)
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
        </div>
      }
      
    </div>
  )
}

export default App