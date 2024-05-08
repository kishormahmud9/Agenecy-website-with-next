import HeaderWithBanner from "@/components/elements/HeaderWithBanner/HeaderWithBanner";
import About from "@/components/section/About/About";
import Banner from "@/components/section/Banner/Banner";
import ContactUs from "@/components/section/ContactUs/ContactUs";
import Services from "@/components/section/Services/Services";
import Footer from "@/components/shared/Footer/Footer";


export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeaderWithBanner />
        <About />
        <Services />
        <ContactUs />
        <Footer />
      </div>

    </>
  );
}
