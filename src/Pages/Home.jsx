import React from "react";
// import "./LandingPage.css";
import Navbar from "../components/HomeComps/LandNavBar/Navbar";
import Welcome from "../components/HomeComps/Welcome/Welcome";
import Mission from "../components/HomeComps/Mission/Mission";
import Programs from "../components/HomeComps/Programs/Programs";
import ContactUs from "../components/HomeComps/ContactUs/ContactUs";
import Footer from "../components/HomeComps/Footer/Footer"

function Home() {
  return (
    <div className="body-div">
      <header>
       <Navbar />
      </header>
      <section className="welcome-section">
       <Welcome />
      </section>
      <section className="mt-8">
       <Mission />
      </section>
      <section className="mt-8">
        <Programs />
      </section>
      <section className="contact-us-section mt-8">
        <ContactUs />
      </section>
      <section className="footer-section">
       <Footer />
      </section>
    </div>
  );
}

export default Home;
