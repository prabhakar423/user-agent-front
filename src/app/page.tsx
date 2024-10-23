import CustomFooter from "./parse/Footer";
import CustomNavbar from "./parse/Navbar";
import ParsePage from "./parse/page";

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <ParsePage />
      <CustomFooter />
    </div>
  );
}
