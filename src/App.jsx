import React , {useEffect} from 'react';
import './App.sass';
import Iframe from 'react-iframe'
import Header from './components/Header/Header';

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
      <div className="container">
        <Header />
      </div>
      {/* <button onClick={installHandler} className="installApp">install app</button> */}
      {/* <Iframe url="https://test10jklger.xyz/?start=index&domain=mbchainhrates.xyz&description=1111&cip=222&fbclid=123&GCLID=123&utm_source=123&utm_campaign=345&utm_content=678&pixel=test&ttq=test&term=test&ym=228"
        className="iframeContainer"
        /> */}
    </div>
  )
}

export default App