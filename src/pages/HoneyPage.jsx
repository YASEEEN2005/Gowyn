import { useState } from "react";
import Footer from "../componets/Footer";
import Hero from "../componets/Honeymoon/Hero";
import HoneymoonPackages from "../componets/Honeymoon/honeymoonpackeges";
import Navbar from "../componets/luxury/Navbar";

function HoneyPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      <Hero />
      <HoneymoonPackages searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default HoneyPage;
