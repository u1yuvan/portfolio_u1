import './App.css';
import {  AboutMe, Companies, Contact, Footer, Home, Navbar, Portfolio, Skills } from './components'
 


function App() {
  return (
    <div className=' primary_gradient'>

    <Navbar />
    <Home />
    {/* <AboutMe />
    <Companies />
    <Contact />
    <Footer />
    <Portfolio />
    <Skills /> */}
    </div>
  );
}

export default App;
