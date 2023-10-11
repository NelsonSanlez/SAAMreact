import Navmenu from '../../components/navbar/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './index.css';
// import HomePage from '../home/HomePage';



export default function Root() {
    return (
        <div>
            <header>
                <Navmenu />
            </header>
            <main>
               
                <Outlet/>
                {/* <HomePage /> */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}