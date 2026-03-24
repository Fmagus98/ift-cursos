import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./SupaBase/Login";
import Register from "./SupaBase/Register";
import Algorithms from "./components/Algorithms/Algorithms";
import SortingAlgorithms from "./components/Algorithms/SortingAlgorithms";

const Home = lazy(() => import("./components/Home"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const About = lazy(() => import("./components/About"));

const Course = lazy(()=> import("./components/Course/Course"))
const Class = lazy(()=> import("./components/Course/Class"))

const DataScienceCourse = lazy(
  () => import("./components/DataScienceCourse/DataScienceCourse"),
);
const DjangoCourse = lazy(
  () => import("./components/DjangoCourse/DjangoCourse"),
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route
              path="/course/:courseId/class/:classId"
              element={<Class />}
            />
            <Route path="/data-science" element={<DataScienceCourse />} />
            <Route path="/django" element={<DjangoCourse />} />
            <Route path="/About" element={<About />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/algorithms/sorting" element={<SortingAlgorithms />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
