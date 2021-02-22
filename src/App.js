import logo from './logo.svg';
import umacodes from './assets/images/Umacodes.png';
import umacodeslogo from './assets/images/logo.png';

import { SocialIcon } from 'react-social-icons';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-div">

          <div style={{background: 'white', borderRadius: '5px'}}>
            <img src={umacodeslogo} className="umacodes-logo" alt="logo" />
          </div>
          <p>
            I am Uma, a Software Engineer who loves to code. I work on cool programming projects and make videos explaining the process of making these projects.
        </p>
          <p>
            Check out my Youtube Channel and other projects below.
        </p>
        </div>
        <div style={{marginTop: '5px', marginBottom: '30px', background: 'white', borderRadius: '5px'}}>        
          <a className="App-link" target="_blank" href="https://one-music.azurewebsites.net/">Latest Project: One Music</a>
        </div>
        <div style={{marginTop: '5px', marginBottom: '30px', display: 'block', background: 'white', borderRadius: '5px'}}>        
          <a className="App-link" target="_blank" href="https://umaabu.com">Other Projects</a>
        </div>
        <div style={{ background: 'white', borderRadius: '5px' }}>
          <SocialIcon target="_blank" url="https://www.youtube.com/channel/UCvDqylEzCZJHNea6k1XMkQw" network="youtube" style={{ margin: '5px' }} />
          <SocialIcon target="_blank" url="https://www.instagram.com/umacodes/?igshid=7fb4ipoir4xc" network="instagram" bgColor="#000000" style={{ margin: '5px' }} />
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/umaabu/" network="linkedin" style={{ margin: '5px' }} />
          <SocialIcon target="_blank" url="https://github.com/ueabu" network="github" bgColor="#000000" style={{ margin: '5px' }} />
        </div>
        <img src={umacodes} className="bubble-head" alt="logo" />
      </header>
    </div>
  );
}

export default App;
