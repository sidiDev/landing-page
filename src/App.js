import { BrowserRouter } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
}

export default App;