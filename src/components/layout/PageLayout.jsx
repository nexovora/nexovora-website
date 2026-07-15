import Footer from "./Footer";
import Navbar from "./Navbar";

function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;