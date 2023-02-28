import Link from "next/link";

import {Header, Meta} from "@/app/components";

import styles from "./style.module.css";
import {FC} from "react";

export const Main: FC = () => {
  return (
    <>
        <Meta title="Home" description="Travel to space"/>
        <div className={styles.main_bg}>
            <Header/>
            <section className={styles.main}>
                <div>
                    <h1 className={styles.title}>
                        So, you want to travel to
                        <span>space</span>
                    </h1>
                    <p className={styles.description}>
                        Let’s face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the edge of it.
                        Well sit back, and relax because we’ll give you a truly out of this
                        world experience!
                    </p>
                </div>
                <Link href="/app/components/Destination">
                    <div className={styles.explore}>explore</div>
                </Link>
            </section>
        </div>
    </>
  )
}
