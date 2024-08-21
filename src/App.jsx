import React from 'react'
import Nav from './components/Navbar/navbar'
import Caraosel from './components/home/Home'
import Mainpage from './components/home/mainpage'
import Content from './components/Content/content'
import Footer from "./components/Footer/footer"
const App = () => {
  return (
    <div>
      <Nav/>
      <Caraosel/>
      <Mainpage/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
