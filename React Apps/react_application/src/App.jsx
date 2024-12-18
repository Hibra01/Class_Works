import './App.css'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/navbar'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Section1>
      <Card></Card>
    </Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Footer></Footer>
    {/* <nav className='navbar'></nav>
    <section className='section1'></section>
    <section className='section2'></section>
    <section className='section3'></section>
    <footer className='footer'></footer> */}
    </>
  )
}

export default App
