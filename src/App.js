import React from "react";
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import PythonCourse from "./components/PythonCourse/PythonCourse";
import PythonClass1 from "./components/PythonCourse/PythonClass1/PythonClass1";
import PythonClass2 from "./components/PythonCourse/PythonClass2/PythonClass2";
import PythonClass3 from "./components/PythonCourse/PythonClass3/PythonClass3";


function App() {
  return (
    // <CartContextProvider>
      <BrowserRouter>
        <Header />
        <main id="main-content">
          {/* <Suspense fallback={<Loading />}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/python" element={<PythonCourse />} />
            <Route path="/python/iargh4937208gj2jf0382fewk9k0961470h46" element={<PythonClass1 />} />
            <Route path="/python/class2" element={<PythonClass2 />} />
            <Route path="/python/class3" element={<PythonClass3 />} />
            <Route path="/About" element={<About />} />
          </Routes>
          {/* </Suspense> */}
        </main>
        <Footer />
      </BrowserRouter>
    // </CartContextProvider>
  );
}

export default App;
