import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./SupaBase/Login";
import Register from "./SupaBase/Register";
import { AuthProvider } from "./context/AuthContext";

const Home = lazy(() => import("./components/Home"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const About = lazy(() => import("./components/About"));

const PythonCourse = lazy(
  () => import("./components/PythonCourse/PythonCourse"),
);
const PythonClass1 = lazy(
  () => import("./components/PythonCourse/PythonClass1/PythonClass1"),
);

const PythonClass2 = lazy(
  () => import("./components/PythonCourse/PythonClass2/PythonClass2"),
);
const PythonClass3 = lazy(
  () => import("./components/PythonCourse/PythonClass3/PythonClass3"),
);
const PythonClass4 = lazy(
  () => import("./components/PythonCourse/PythonClass4/PythonClass4"),
);
const PythonClass5 = lazy(
  () => import("./components/PythonCourse/PythonClass5/PythonClass5"),
);
const PythonClass6 = lazy(
  () => import("./components/PythonCourse/PythonClass6/PythonClass6"),
);
const PythonClass7 = lazy(
  () => import("./components/PythonCourse/PythonClass7/PythonClass7"),
);
const PythonClass8 = lazy(
  () => import("./components/PythonCourse/PythonClass8/PythonClass8"),
);
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
            <Route path="/python" element={<PythonCourse />} />
            <Route
              path="/python/iargh4937208gj2jf0382fewk9k0961470h46"
              element={<PythonClass1 />}
            />
            <Route
              path="/python/6srjha93g208gj2jf0382fewk9k09fkiyvnt7"
              element={<PythonClass2 />}
            />
            <Route
              path="/python/cagr7kcggkuogj2jf0382fewk9k096ksboq78"
              element={<PythonClass3 />}
            />
            <Route
              path="/python/fbt43vd8632bi43grgedaauy4ds8v742bo081"
              element={<PythonClass4 />}
            />
            <Route
              path="/python/hj297vao8whefbeakjghlkaqxvnuwffh665ah"
              element={<PythonClass5 />}
            />
            <Route
              path="/python/grejobghrorurnhphuhp5m2iqfvfbeakjghlk"
              element={<PythonClass6 />}
            />
            <Route
              path="/python/glkorurnhphuhejobbphr5m2iqfvfgreakjgh"
              element={<PythonClass7 />}
            />
            <Route
              path="/python/jha93g208ag7kcgekglkqxnh52inhuh5m32wk"
              element={<PythonClass8 />}
            />
            <Route
              path="/data-science"
              element={<DataScienceCourse />}
            />
            <Route
              path="/django"
              element={<DjangoCourse />}
            />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
