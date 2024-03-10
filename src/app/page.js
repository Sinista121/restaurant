import Nav from "@/components/Nav";
import { Poppins } from "next/font/google";

const big = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col gap-3 p-20 m-20 justify-center items-center">
        <h1 className={`${big.className} text-6xl font-heavy`}>
          Restaurant Savory
        </h1>
        <p className="text-2xl font-bold">
          The best management software for restaurants!
        </p>
      </div>
    </div>
  );
}
