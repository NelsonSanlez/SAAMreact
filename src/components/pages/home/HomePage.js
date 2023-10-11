
import Navbar from "../../navbar/Navbar";
import Cards from "../../cards/Cards";
import HeroSection from "../../herosection/Herosection";
import {Footer} from "../../Template/Footer";
import '../RootHome/index.css';

const HomePage = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <HeroSection />
                <Cards />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default HomePage;