import BannerImage from "../components/BannerImage";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTopBtn from "../components/ScollToTopBtn";

export default function Home() {
  return (
    <>
      <Header />
      <Expertise />
      <BannerImage />
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}
