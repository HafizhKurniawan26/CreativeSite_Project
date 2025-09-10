import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import FormData from "../components/form/FormData";

const ContactUs = () => {
  return (
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
                <p className="text-sm">+6281234567890</p>
              </div>

              <div className="flex text-white gap-2 items-center">
                <IoMdMail />
                <p className="text-sm">someone@gmail.com</p>
              </div>

              <div className="flex text-white gap-2 items-center">
                <MdLocationPin />
                <p className="text-sm">Tangerang</p>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <FormData />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
