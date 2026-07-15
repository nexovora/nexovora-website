import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;