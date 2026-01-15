import Adventurepackeges from "../componets/Adventure/Adventurepackeges";
import Hero from "../componets/Adventure/Hero";
import Footer from "../componets/Footer";
import Navbar from "../componets/luxury/Navbar";
import { useState,useEffect } from "react";

function AdventurePage() {
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    return (
        <div>
        <Navbar setSearchTerm={setSearchTerm} />
          <Hero />
          <Adventurepackeges searchTerm={searchTerm}/>
          <Footer />
        </div>
    );
}

export default AdventurePage;