import React from "react";
// import "./LandingPage.css";
import Navbar from "../components/HomeComps/LandNavBar/Navbar";
import Welcome from "../components/HomeComps/Welcome/Welcome";
import Mission from "../components/HomeComps/Mission/Mission";
import Programs from "../components/HomeComps/Programs/Programs";
import ContactUs from "../components/HomeComps/ContactUs/ContactUs";
import Footer from "../components/HomeComps/Footer/Footer";

function Home() {
  return (
    <div className="body-div">
      <header>
        <Navbar></Navbar>
      </header>
      <section className="welcome-section">
        <Welcome></Welcome>
      </section>
      <section style={{ marginTop: "40px" }}>
        <Mission></Mission>
      </section>
      <section style={{ marginTop: "40px" }}>
        <Programs></Programs>
      </section>
      <section className="contact-us-section" style={{ marginTop: "40px" }}>
        <ContactUs></ContactUs>
      </section>
      <section className="footer-section">
        <Footer></Footer>
      </section>
    </div>
  );
}

export default Home;
