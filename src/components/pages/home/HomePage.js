import { Outlet } from "react-router";
import Navbar from "../../navbar/Navbar";
import {Footer} from "../../Template/Footer";
import '../MainHome/index.css';

const HomePage = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main  className="mb-5">
            <Outlet/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default HomePage;