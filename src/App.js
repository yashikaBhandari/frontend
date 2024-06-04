//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <> 
   <Navbar title="Textutils22" abouttext="abouttextutils"/>
   {/*<div className="container my-3"><TextForm heading="enter your text to analyse"/></div>
   {/* div container ke andar likhne se centre mein aajayega hamare text area */}
   <div className="container my -3"><About/></div>
  


    </>
  );
}

export default App;
