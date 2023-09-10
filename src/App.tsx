import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dictaphone from './Dictaphone'
import VideoCapture from './VideoCapture'
import { useUnityContext } from 'react-unity-webgl'

// import 

function App() {
  const [count, setCount] = useState(0)

  const {}=useUnityContext({
    codeUrl:'public/build/build.wasm',
    frameworkUrl:'public/build/build.framework.js',
    dataUrl:'public/build/webgl.data',
    loaderUrl:'public/build/Ne.loader.js'
  })

  return (
    <>
      <div>
        <span>speek</span>

        <Dictaphone/>
        <VideoCapture/>
      </div>
    </>
  )
}

export default App
