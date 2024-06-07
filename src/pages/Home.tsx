import React from "react";
import styles from '../../assets/css/Home.module.css'
import Lanche from "./home/Lanche.tsx";
import Gota from "./home/Gota.tsx"
import Franqueado from "./home/Franqueado.tsx";


const Home = () => {
    return(
        <div>
            <Gota/>
            <Lanche/>
            <Franqueado/>
        </div>
    )
}
export default Home;