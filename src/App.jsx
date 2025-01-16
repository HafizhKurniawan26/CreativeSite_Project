import Navbar from "./components/navbar/Navbar";
import "@fontsource/poppins";
import Jumbotron from "./sections/Jumbotron";
import About from "./sections/About";
import Service from "./sections/Service";
import ContactUs from "./sections/ContactUs";
import Team from "./sections/Team";

export default function App() {
  return (
    <main className="mx-20 font-poppins">
      <Navbar />

      {/* Jumbotron */}
      <Jumbotron />

      {/* About Company */}
      <About />

      {/* Services */}
      <Service />

      <Team />

      {/* Contact Us */}
      <ContactUs />
    </main>
  );
}
