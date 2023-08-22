import HeroSection from './Front-end/components/HeroSection';
import Navbar from './Front-end/components/Navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className='max-w-6xl m-auto border'>
  {/* Header */}
  <header>
      <Navbar/>
      <HeroSection/>
      
    </header>

      </div>
  
    </div>
  );
}

export default App;
