import Image from "next/image";
import Searchbar from "./search/Searchbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-6 mx-2">
        <h1 className="font-bold text-4xl text-center text-white">Weather App</h1>
      <Searchbar />
    </main>
  );
}
