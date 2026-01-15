import Adventurepackeges from "../componets/Adventure/Adventurepackeges";
import Hero from "../componets/Adventure/Hero";
import Footer from "../componets/Footer";
import Navbar from "../componets/luxury/Navbar";
import { useState } from "react";

function AdventurePage() {
    const [searchTerm, setSearchTerm] = useState("");
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