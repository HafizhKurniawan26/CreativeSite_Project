import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormData = () => {
  const schema = z.object({
    firstname: z.string().min(3, "Minimal terdiri dari 3 karakter"),
    lastname: z.string().min(3, "Minimal terdiri dari 3 karakter"),
    email: z.string().email("Email tidak valid"),
    phone: z.string().regex(/^\d{10,}$/, "Minimal terdiri dari 10 angka"),
    message: z.string().optional(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-12">
          <Input
            label="First Name"
            name="firstname"
            register={register}
            errors={errors}
          />
          <Input
            label="Last Name"
            name="lastname"
            register={register}
            errors={errors}
          />
          <Input
            label="Email"
            name="email"
            register={register}
            type="email"
            errors={errors}
          />
          <Input
            label="Phone Number"
            name="phone"
            register={register}
            errors={errors}
          />
          <Input
            label="Message"
            name="message"
            register={register}
            placeholder="Write Your Message..."
            className="col-span-2"
            errors={errors}
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
