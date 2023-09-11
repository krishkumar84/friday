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
    codeUrl:'public/'
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
