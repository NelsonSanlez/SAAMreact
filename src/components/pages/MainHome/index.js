import styles from './index.module.css';
import Cards from "../../cards/Cards";
import HeroSection from "../../herosection/Herosection";



export default function MainHome() {
    return (
        <main className={styles.homeMain}>
            <HeroSection />
            <Cards />
        </main>
    )
}