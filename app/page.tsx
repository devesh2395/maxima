import Hero from "@/components/Hero";
import Mern from "@/components/Mern";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Process2 from "@/components/Process2";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import { GetStaticProps } from "next";
import { getPosts } from "@/lib/service";

export default function Home() {
  return (
    <>
      <Hero />
      <Mern />
      <Services />
      <Process />
      <Process2 />
      <Testimonial />
      <Blog />
    </>
  );
}


