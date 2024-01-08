import './App.css';
import { AboutMe, Companies, Contact, Footer, Home, Navbar, Portfolio, Skills } from './components'


function App() {
  return (


    <div className=' primary_gradient scroll-smooth'>

      <Navbar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Companies  />
      <Contact />
      <Footer />
      <Skills />
    </div>
  );
}

export default App;
