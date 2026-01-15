import Cabs from "../componets/Cab/cabs";
import Hero from "../componets/Cab/Hero";
import Footer from "../componets/Footer";
import Navbar from "../componets/luxury/Navbar";
import { useState } from "react";

function CabPage() {
const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
           <Navbar setSearchTerm={setSearchTerm} />
           <Hero />
           <Cabs  searchTerm={searchTerm}/>
           <Footer />
        </div>
    );
}

export default CabPage