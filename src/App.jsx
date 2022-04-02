import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the Home!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">go About</Link>
      </nav>
    </>
  );
};
const About = () => {
  return (
    <>
      <main>
        <h2>Welcome to the About!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">go Home</Link>
      </nav>
    </>
  );
};

export default function () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
