import Navbar from "./Components/Navbar/Navbar";
import'./App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Portfolio/>
    
    <Contact/>
    <Footer />

    </div>
  );
}

export default App;
