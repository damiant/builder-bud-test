import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
