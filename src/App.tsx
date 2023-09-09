import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dictaphone from './Dictaphone'
import VideoCapture from './VideoCapture'
import { Unity,useUnityContext } from 'react-unity-webgl'

// import 

function App() {
  const [count, setCount] = useState(0)

  const {unityProvider,isLoaded,loadingProgression}=useUnityContext({
    codeUrl:'public/m.wasm.gz',
    frameworkUrl:'public/m.framework.js.gz',
    dataUrl:'public/m.data.gz',
    loaderUrl:'public/m.loader.js'
  })

  console.log(unityProvider,isLoaded,loadingProgression)

  return (
    <>
      <div>
        <span>speek</span>
        <Unity
        unityProvider={unityProvider}
        style={{ width: 800, height: 600 }}
        />



        {/* <Dictaphone/>
        <VideoCapture/> */}

      </div>
    </>
  )
}

export default App
