import './App.css';
import { AboutMe, Companies, Contact, Footer, Home, Navbar, Portfolio, Skills } from './components'


function App() {
  return (


    <div className=' bg-[#0a192f] scroll-smooth'>

      <Navbar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
