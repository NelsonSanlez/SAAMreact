import styles from './index.module.css';
import Cards from "../../cards/Cards";
import HeroSection from "../../herosection/Herosection";
import { LoginContext } from "../../../context/LoginContext";
import { useContext, useEffect } from "react";

export default function MainHome() {

    const { login, checkLogin } = useContext(LoginContext);

    useEffect(() => {
        if (login.id && login.status) {
            checkLogin({})
        }
    })

    return (
        <main className={styles.homeMain}>
            <HeroSection />
            <Cards />
        </main>
    )
}