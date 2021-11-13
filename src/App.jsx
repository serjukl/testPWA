import React , {useEffect} from 'react';
import './App.sass';
import Iframe from 'react-iframe'

const App = () => {
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
  });

  const installHandler = async() => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(outcome)
      if (outcome === 'accepted') {
          deferredPrompt = null;
      }
    }
  }

  return (
    <div className="App">
      <button onClick={installHandler} className="installApp">install app</button>
      <Iframe csp="default-src 'https://test10jklger.xyz/?start=index&domain=mbchainhrates.xyz&description=1111&cip=222&fbclid=123&GCLID=123&utm_source=123&utm_campaign=345&utm_content=678&pixel=test&ttq=test&term=test&ym=228';" url="https://test10jklger.xyz/?start=index&domain=mbchainhrates.xyz&description=1111&cip=222&fbclid=123&GCLID=123&utm_source=123&utm_campaign=345&utm_content=678&pixel=test&ttq=test&term=test&ym=228"
        className="iframeContainer"
        data-src="https://adretarget.net/go/504612f7d805426b17f5e4242aaa9b3e365b64d1eb0a0b0b/"
        />
        
    </div>
  )
}

export default App