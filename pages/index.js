import Head from "next/head";
import "tailwindcss/tailwind.css";
import MyImage from "../components/image";
import LinkButtons from "../components/buttons";

export default function Home() {
  return (
    <div>
      {/* Set title  */}
      <Head>
        <title>Your Name</title>
      </Head>
      <main>
        <MyImage />
        <div>
          {/* customize all you want */}
          <h1 className="text-3xl text-center mt-1 pb-3 font-light text-purple-600">
            Your Name
          </h1>
        </div>
        <LinkButtons />
      </main>
    </div>
  );
}
