import {FC} from "react";

import {Header, CrewInfo, Title, Meta} from "@/app/components";

import { crewData } from "./crewData";

import styles from "./style.module.css";

export const Crew: FC = () => {
    return (
        <>
        <Meta title="Crew" description="Meet your crew"/>
        <div className={styles.crew_bg}>
            <Header />
            <section className={styles.crew}>
                <Title score="02" title="MEET YOUR CREW" />
                <CrewInfo data={crewData} />
            </section>
        </div>
        </>
    );
};
