import React from "react";
import Image from "next/image";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import DogPrint from "@/public/dog-print.png";
import DogPrintBg from "@/public/dog-print.svg";

function LoginForm({ onSubmit, isSubmitting }) {
  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email!")
      .required("Email is required!"),
    password: yup.string().required("Password is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onHandleSubmit = async (data) => {
    onSubmit(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className="relative border-4 border-takiBrown-500 max-w-[500px] w-full mx-auto px-6 py-8 bg-takiBrown-300 shadow-xl rounded-lg"
    >
      <Image
        className="absolute -left-[310px] -rotate-90  -top-[130px] -z-[1]"
        src={DogPrintBg}
        alt="dog foot print"
        width={500}
        height={500}
      />
      <div className="relative mb-8">
        <h2 className="text-center pr-[60px] text-4xl font-extrabold font-chicle tracking-widest">
          Go to Dashboard
        </h2>
        <Image
          className="absolute right-[20px] -top-[20px]"
          src={DogPrint}
          alt="dog foot print"
          width={100}
          height={100}
        />
      </div>
      <div className="">
        <label
          className="block mb-1 font-chicle tracking-widest text-lg"
          htmlFor="email"
        >
          Email:
        </label>
        <Input id="email" type="text" {...register("email")} className="mb-2" />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block mb-1 mt-2 font-chicle tracking-widest text-lg"
          htmlFor="password"
        >
          Password:
        </label>
        <Input
          id="password"
          type="text"
          {...register("password")}
          className="mb-2"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <Button className="mx-auto mt-6">
        {isSubmitting ? "Submitting..." : "Enter"}
      </Button>
    </form>
  );
}

export default LoginForm;
