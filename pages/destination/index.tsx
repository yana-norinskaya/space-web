import {Header, Meta, Planets, Title} from "@/app/components";

import { planetsData } from "./mockData";

import styles from "./style.module.css";

export default function Destination() {
    return (
        <>
        <Meta title="Destination" description="Pick your destination"/>
        <div className={styles.destination_bg}>
            <Header />
            <section className={styles.destination}>
                <Title score="01" title="PICK YOUR DESTINATION" />
                <Planets data={planetsData} />
            </section>
        </div>
        </>
    );
};
