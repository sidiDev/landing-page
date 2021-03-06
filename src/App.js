import { BrowserRouter } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousel />
      <section className="mt-28 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="text-center space-y-3">
          <span className="block text-4xl font-semibold">From the blog</span>
          <p className="m-auto text-gray-400 sm:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="mt-12 gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <Blog />
        </div>
      </section>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;