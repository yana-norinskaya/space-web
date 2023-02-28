import {Header, Meta, TechnologiesInfo, Title} from "@/app/components";

import { dataTechnologies } from "./data";

import styles from "./style.module.css";

export default function Technologies() {
    return (
        <>
        <Meta title="Technologies" description="Space launch 101"/>
        <div className={styles.techno_bg}>
            <Header />
            <section className={styles.techno}>
                <Title score="03" title="SPACE LAUNCH 101" />
                <TechnologiesInfo data={dataTechnologies} />
            </section>
        </div>
        </>
    );
};
