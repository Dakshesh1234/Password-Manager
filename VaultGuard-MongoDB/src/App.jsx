import { useState } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-w-max'>
      <Navbar />
      <div className='
      bg-blue-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
        <Manager />
      </div>
      <Footer />
    </div>
  )
}

export default App
