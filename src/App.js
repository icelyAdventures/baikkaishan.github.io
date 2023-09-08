import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import SocialLinks from "./components/SocialLinks";
const App = () => {
  useEffect(() => {
    const animate_elementsLeft = document.querySelectorAll(".enterFromLeft");
    const animate_elementsRight = document.querySelectorAll(".enterFromRight");
    const animate_elementsBottom =
      document.querySelectorAll(".enterFromBottom");
    const animate_elementsLeftSlower = document.querySelectorAll(
      ".enterFromLeftSlower"
    );

    const observerLeft = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("enterFromLeft");
          } else {
            entry.target.classList.remove("enterFromLeft");
          }
        });
      },
      {
        threshold: 0,
      }
    );
    const observerLeftSlower = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("enterFromLeftSlower");
          } else {
            entry.target.classList.remove("enterFromLeftSlower");
          }
        });
      },
      {
        threshold: 0,
      }
    );

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("enterFromRight");
          } else {
            entry.target.classList.remove("enterFromRight");
          }
        });
      },
      {
        threshold: 0,
      }
    );

    const observerBottom = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("enterFromBottom");
          } else {
            entry.target.classList.remove("enterFromBottom");
          }
        });
      },
      {
        threshold: 0,
      }
    );

    for (let i = 0; i < animate_elementsLeft.length; i++) {
      const elementLeft = animate_elementsLeft[i];
      observerLeft.observe(elementLeft);
    }
    for (let i = 0; i < animate_elementsLeftSlower.length; i++) {
      const elementLeftSlower = animate_elementsLeftSlower[i];
      observerLeftSlower.observe(elementLeftSlower);
    }
    for (let i = 0; i < animate_elementsRight.length; i++) {
      const elementRight = animate_elementsRight[i];
      observerRight.observe(elementRight);
    }
    for (let i = 0; i < animate_elementsBottom.length; i++) {
      const elementBottom = animate_elementsBottom[i];
      observerBottom.observe(elementBottom);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <SocialLinks />
    </div>
  );
};

export default App;
