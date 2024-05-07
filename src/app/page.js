import About from "@/components/section/About/About";
import Banner from "@/components/section/Banner/Banner";
import ContactUs from "@/components/section/ContactUs/ContactUs";
import Services from "@/components/section/Services/Services";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}
