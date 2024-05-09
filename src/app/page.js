import NavElement from "@/components/elements/NavElement/NavElement";
import About from "@/components/section/About/About";
import Banner from "@/components/section/Banner/Banner";
import ContactUs from "@/components/section/ContactUs/ContactUs";
import Services from "@/components/section/Services/Services";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";


export default function Home() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Header />
          {/* page content  */}
          <div className="container mx-auto">
            <Banner />
            <About />
            <Services />
            <ContactUs />
            <Footer />
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <NavElement />
          </ul>
        </div>
      </div>


    </>
  );
}
