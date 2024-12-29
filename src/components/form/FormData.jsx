import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

const FormData = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-12">
          <Input label="First Name" name="firstname" register={register} />
          <Input label="Last Name" name="lastname" register={register} />
          <Input label="Email" name="email" register={register} type="email" />
          <Input label="Phone Number" name="phone" register={register} />
          <Input
            label="Message"
            name="message"
            register={register}
            placeholder="Write Your Message..."
            className="col-span-2"
          />
          <div className="flex justify-end col-span-2">
            <button
              type="submit"
              className="bg-blue-700 py-3 text-center px-10 rounded text-white"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormData;
