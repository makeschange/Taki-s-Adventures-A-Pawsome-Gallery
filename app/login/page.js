"use client";
import LoginForm from "@/components/login/loginForm";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import signinUser from "@/lib/http_request/userHttp";
import Modal from "@/components/ui/modal";
import { useEffect, useState } from "react";

export default function Login() {
  const [isError, setIsError] = useState(false);
  const { data, isPending, error, mutate } = useMutation({
    mutationFn: signinUser,
    onError: (error) => {
      console.log("data in:", error.response.data);
    },
  });

  useEffect(() => {
    if (error && error.response.data) {
      setIsError(true);
    }
  }, [error]);

  console.log("isError:", isError);

  const onSubmitHandler = (data) => {
    console.log(data);

    mutate(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="pt-[12vh]"
    >
      {isError && (
        <Modal
          onClose={() => setIsError(false)}
          title="Error: "
          message={error && error.response.data.message}
        />
      )}
      <h2 className="text-center pr-[60px] mb-8 text-5xl font-extrabold font-chicle tracking-widest">
        Taki's Adventures <span className="block">a Pawsome Gallery</span>
      </h2>
      <LoginForm isSubmitting={isPending} onSubmit={onSubmitHandler} />
    </motion.div>
  );
}
