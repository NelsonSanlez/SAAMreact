import { Outlet } from "react-router";
import Navbar from "../../navbar/Navbar";
import {Footer} from "../../Template/Footer";


const HomePage = ({handleLogin}) => {
    handleLogin(0)
    return (
        <div>
            <Navbar handleLogin={handleLogin}/>
            <Outlet/>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default HomePage;