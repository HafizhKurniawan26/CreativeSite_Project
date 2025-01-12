import Navbar from "./components/navbar/Navbar";
import { datas, foundedClients } from "./data/datas";
import "@fontsource/poppins";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import FormData from "./components/form/FormData";
import Jumbotron from "./sections/Jumbotron";
import About from "./sections/About";
import Service from "./sections/Service";
import ContactUs from "./sections/ContactUs";

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

      {/* Contact Us */}
      <ContactUs />
    </main>
  );
}
