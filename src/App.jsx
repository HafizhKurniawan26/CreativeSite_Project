import Navbar from "./components/navbar/Navbar";
import Jumbotron from "./assets/images/Jumbotron.png";
import AboutCompany from "./assets/images/AboutCompany.png";
import { datas, foundedClients } from "./data/datas";
import "@fontsource/poppins";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import FormData from "./components/form/FormData";

export default function App() {
  return (
    <main className="mx-20 font-poppins">
      <Navbar />

      {/* Jumbotron */}
      <section
        className="h-[80dvh] flex justify-between items-center mt-4"
        id="home"
      >
        <div className="h-[50%] my-auto flex flex-col justify-between pr-16">
          <div className="text-6xl font-bold">
            <h1>Creative</h1>
            <h1 className="text-blue-800 underline underline-offset-8">Site</h1>
          </div>
          <p className="text-xl">
            Twiscode specializes in developing high-performing mobile and web
            applications.
          </p>
        </div>
        <img src={Jumbotron} alt="" className="h-[500px]  rounded-lg" />
      </section>

      {/* About Company */}
      <section className="mt-32 grid grid-cols-2" id="about">
        <div>
          <img src={AboutCompany} alt="" className="w-[450px]" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">
            About <span className="text-blue-800">Company</span>
          </h1>
          <p className="text-lg">
            Innovative Solutions is a cutting-edge technology company that
            provides innovative solutions for businesses of all sizes. Founded
            in 2010, we are dedicated to helping our clients achieve their goals
            through our customized and effective technology solutions. With over
            a decade of experience, we have built a reputation for delivering
            high-quality services to our clients.
          </p>
          <div className="flex gap-16 mt-8">
            {foundedClients.map((item, index) => (
              <div className="flex flex-col items-center italic" key={index}>
                <h1 className="text-3xl font-semibold">{item.value}</h1>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mt-32 mb-40" id="services">
        <div>
          <h1 className="text-4xl font-bold text-center">What We Do?</h1>
        </div>
        <div className="flex justify-between mt-12">
          {datas.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 hover:scale-105 transition-all cursor-pointer"
            >
              <img src={item.image} />
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
        <h3 className="text-center mx-28 mt-12">
          Our services are tailored to meet the unique needs of each client,
          ensuring that we deliver effective solutions that help businesses
          grow.
        </h3>
      </section>

      {/* Contact Us */}
      <section className="mb-20" id="contact">
        <div>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-center">
              Contact <span className="text-blue-800">Us</span>
            </h1>
            <h3 className="text-center">
              Any question or remarks? Just write us a message!
            </h3>
          </div>

          <div className="grid grid-cols-5 gap-4 mt-16">
            <div className="flex flex-col bg-blue-800 col-span-2 p-12 rounded-xl  justify-between h-[430px] relative">
              <div className="absolute bg-white h-28 w-28 rounded-full opacity-20 -bottom-6 right-12"></div>
              <div className="absolute bg-white h-32 w-32 rounded-full opacity-20 -bottom-20 -right-4"></div>
              {/* Header */}
              <div>
                <h1 className="text-xl font-bold text-white">
                  Contact Information
                </h1>
                <p className="text-gray-400">
                  Say something to start a live chat!
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex text-white gap-2 items-center">
                  <BsFillTelephoneFill />
                  <p className="text-sm">+62728383838383</p>
                </div>

                <div className="flex text-white gap-2 items-center">
                  <IoMdMail />
                  <p className="text-sm">hahjajajajaj@gmail.com</p>
                </div>

                <div className="flex text-white gap-2 items-center">
                  <MdLocationPin />
                  <p className="text-sm">lajajshjskskskkssksk</p>
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <FormData />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
