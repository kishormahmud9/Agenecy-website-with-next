import Banner from "@/components/section/Banner/Banner";
import Header from "@/components/shared/Header/Header";

const HeaderWithBanner = () => {
  return (
    <div className="">
      <Header className="fixed top-0 left-0 z-50 w-[95%]" />
      <div className="relative">
        <Banner />
      </div>
    </div>
  );
};

export default HeaderWithBanner;
