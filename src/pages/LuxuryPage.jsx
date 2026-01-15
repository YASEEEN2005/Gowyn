import Footer from "../componets/Footer";
import Hero from "../componets/luxury/Hero";
import Navbar from "../componets/luxury/Navbar";
import ResortCollection from "../componets/luxury/ResortCollection";
import { useState,useEffect } from "react";

function LuxuryPage() {
      const [searchTerm, setSearchTerm] = useState("");
      useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    return <div>
        
  


  <Navbar setSearchTerm={setSearchTerm} />
  <Hero />
      <ResortCollection searchTerm={searchTerm} />
     
        <Footer />
    </div>;
}

export default LuxuryPage