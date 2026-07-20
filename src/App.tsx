import Nav from "./landing/Nav";
import Hero from "./landing/Hero";
import Features from "./landing/Features";
import Audiences from "./landing/Audiences";
import Examples from "./landing/Examples";
import Pricing from "./landing/Pricing";
import Footer from "./landing/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Audiences />
        <Examples />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
