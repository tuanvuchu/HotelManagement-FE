// import Spinner from "../Spinner/Spinner";
import Header from "../Header/Header";
import PageHeader from "../PageHeader/PageHeader";
import Promotion from "../Promotion/Promotion";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";

const PromotionPage = () => {
  const pageHeaderProps = {
    title: "Promotion",
  };
  return (
    <div>
      {/* <Spinner /> */}
      <Header />
      <PageHeader {...pageHeaderProps} />
      <Promotion />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PromotionPage;
