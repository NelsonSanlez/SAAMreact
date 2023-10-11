
import Navbar from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";
import HeroSection from "../../components/herosection/Herosection";
import Footer from "../../components/footer/Footer";
import '../root/index.css';

const HomePage = () => {
    return ( 
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <HeroSection/>
                <Cards/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
     );
}
 
export default HomePage;