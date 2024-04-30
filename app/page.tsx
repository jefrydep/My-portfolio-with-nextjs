import { Hero } from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex   min-h-screen flex-col items-center    justify-between ">
      <section className="border-b w-full     ">
        <div className="     container">
          <Navbar />
        </div>
      </section>
      <section>
        <Hero />
      </section>
    </main>
  );
}
