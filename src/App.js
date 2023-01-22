import './App.css';
import Banner from './components/banner/Banner';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Banner />
      <Skills />
      <marquee>
        <h4 className='text-center text-info'>* Blog not yet fully completed get back soon quickly * </h4>
      </marquee>
    </>
  );
}

export default App;
