import Footer from "../componets/Footer";
import Hero from "../componets/luxury/Hero";
import Navbar from "../componets/luxury/Navbar";
import ResortCollection from "../componets/luxury/ResortCollection";
import { useState } from "react";

function LuxuryPage() {
      const [searchTerm, setSearchTerm] = useState("");
    return <div>
        
  


  <Navbar setSearchTerm={setSearchTerm} />
  <Hero />
      <ResortCollection searchTerm={searchTerm} />

     
        <Footer />
    </div>;
}

export default LuxuryPage