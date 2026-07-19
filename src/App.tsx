import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import LinkButton from "./components/LinkButton";
import ProductCard from "./components/ProductCard";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { profile } from "./data/profile";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Header />

      <main className="relative z-10">
        <ProfileCard profile={profile} />
        <LinkButton label={profile.ctaLabel} href={profile.ctaHref} />

        {/* Xizmat kartalari */}
        <section className="relative z-10 mx-auto mt-16 w-full max-w-5xl px-5">
          <h2 className="text-center font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Bizning xizmatlar
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {profile.services.map((s) => (
              <ProductCard key={s.id} service={s} />
            ))}
          </div>
        </section>

        <WhyUs />
        <Testimonials testimonials={profile.testimonials} />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
