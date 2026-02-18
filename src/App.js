import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const PythonClass1 = lazy(() => import("./components/PythonCourse/PythonClass1/PythonClass1"));
const PythonCourse = lazy(() => import("./components/PythonCourse/PythonCourse"));
const PythonClass2 = lazy(() => import("./components/PythonCourse/PythonClass2/PythonClass2"));
const PythonClass3 = lazy(() => import("./components/PythonCourse/PythonClass3/PythonClass3"));

function App() {
  return (
      <BrowserRouter>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/python" element={<PythonCourse />} />
            <Route path="/python/iargh4937208gj2jf0382fewk9k0961470h46" element={<PythonClass1 />} />
            <Route path="/python/class2" element={<PythonClass2 />} />
            <Route path="/python/class3" element={<PythonClass3 />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
