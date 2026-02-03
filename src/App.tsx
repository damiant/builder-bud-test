import Header from './components/Header';
import Hero from './components/Hero';
import WhatsNew from './components/WhatsNew';
import OurBeersTop from './components/OurBeersTop';
import OurBeer from './components/OurBeer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero heroImageUrl="https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2Fcc3dbf9ecf804247b1c003e3c9b4511f?format=webp&width=800&height=1200" />
        <WhatsNew />
        <OurBeersTop />
        <OurBeer />
      </main>
    </div>
  );
}

export default App;
