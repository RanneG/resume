import './App.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import { Navbar } from './components/Navbar/Navbar'
import { Contact } from './components/Contact/Contact'
import { Routes, Route} from "react-router-dom"
import { Home } from './routes/home';

function App() {
  return (
    <>
      <script type="module">
        import RefreshRuntime from 'http://localhost:5173/@react-refresh'
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () = {}
        window.$RefreshSig$ = () = (type) = type
        window.__vite_plugin_react_preamble_installed__ = true
      </script>
      <script type="module" src="http://localhost:5173/@vite/client"></script>
      <script type="module" src="http://localhost:5173/main.tsx"></script>
      <link rel="stylesheet" href="/assets/{{ manifest['main.tsx'].css }}" />
      <script type="module" src="/assets/{{ manifest['main.tsx'].file }}"></script>
      <Navbar />
      <div className='home'>
        <h1>
          Hello, <br />
          I’m Ranne, Software Engineer
        </h1>
          <p>Backend Developer</p>
      </div>
      <Contact />
      <div className='about'>
        <h1>
          About Me
        </h1>
        <p>Lorem ipsum dolor sit amet. At officiis optio ut harum repellat sit quia officia. In voluptatem laudantium qui expedita neque aut blanditiis iusto. Est sint illo qui dolorem molestias qui dolorem dolores vel totam repudiandae. Read more on My CV.</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <div className='projects'>
        <h1>
          My Projects
        </h1>
        <h2>
          Site Reliability for Markdown Edge
        </h2>
        <p>
          Lorem ipsum dolor sit amet. At officiis optio ut harum repellat sit quia officia. In voluptatem laudantium qui expedita neque aut blanditiis iusto. Est sint illo qui dolorem molestias qui dolorem dolores vel totam repudiandae. Read more on My CV.
        </p>
        <h2>
          KYC Flow
        </h2>
        <p>
          Lorem ipsum dolor sit amet. At officiis optio ut harum repellat sit quia officia. In voluptatem laudantium qui expedita neque aut blanditiis iusto. Est sint illo qui dolorem molestias qui dolorem dolores vel totam repudiandae. Read more on My CV.
        </p>
      </div> */}
    </>
  )
}

export default App
