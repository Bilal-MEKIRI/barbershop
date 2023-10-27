import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Template from './components/Template/Template';
import StickyNavBar from './components/StickyNavBar/StickyNavBar';
import ContactForm from './components/ContactForm/ContactForm';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <Routes>

      <Route path="/" element={<StickyNavBar />}>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
