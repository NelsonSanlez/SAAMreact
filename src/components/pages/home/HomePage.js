import { Outlet } from "react-router";
import Navbar from "../../navbar/Navbar";
import {Footer} from "../../Template/Footer";

const HomePage = () => {
    
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default HomePage;