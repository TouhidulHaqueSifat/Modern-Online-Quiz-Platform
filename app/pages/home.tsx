import { Link } from "react-router";
import type { Route } from "../pages/+types/home";
import Hero from "~/components/hero";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Modern Quiz App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
   
    <div className=" w-[1280px] mx-auto">
      <Hero />
    </div>
  );
}

