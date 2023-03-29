import Header from "@/components/Header";
import Desc from "src/pages/sections/landing/Desc";
import Hero from "src/pages/sections/landing/Hero";

const Homepage = () => {
  return (
    <main
      id="home"
      data-testid="homepage"
      className={`min-h-screen bg-[url('/BG.jpg')] bg-cover bg-no-repeat`}
    >
      <Header />

      <div className="w-full h-screen relative">
        <Hero />
        <Desc />
      </div>
    </main>
  );
};

export default Homepage;
