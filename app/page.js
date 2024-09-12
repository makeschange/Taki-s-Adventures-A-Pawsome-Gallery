import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

export default function Home() {
  return (
    <main>
      <figure className="max-w-[500px] w-full mx-auto mt-[10%] text-center">
        <Image
          className="mx-auto"
          width={300}
          height={300}
          src={Logo}
          alt="A server surrounded by magic sparkles."
        />
      </figure>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to this Tiketing System</h1>
        <Link
          className="bg-violet-500 block px-4 py-2 rounded w-32 mx-auto mt-8 hover:bg-violet-600 transition-all duration-300"
          href="/"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
