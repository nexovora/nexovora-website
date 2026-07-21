import Footer from "./Footer";
import Navbar from "./Navbar";
import PageTransition from "../animations/PageTransition";

function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </div>
  );
}

export default PageLayout;
