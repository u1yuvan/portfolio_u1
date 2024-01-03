import './App.css';
import {  AboutMe, Companies, Contact, Footer, Home, Navbar, Portfolio, Skills } from './components'
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
    
  });
});

const hiddenElements = document.querySelectorAll('.animation_hidden')
hiddenElements.forEach((el) => observer.observe(el));

function App() {
  return (

  
    <div className=' primary_gradient'>

    <Navbar />
    <Home />
    <AboutMe />
    <Companies />
    <Contact />
    <Footer />
    <Portfolio />
    <Skills />
    </div>
  );
}

export default App;
