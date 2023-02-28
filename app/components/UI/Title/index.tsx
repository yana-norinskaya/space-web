import { FC } from "react";

import styles from "./style.module.css";

interface ITitle {
    score: string;
    title: string;
}

export const Title: FC<ITitle> = ({ score, title }) => {
    return (
        <>
            <h2 className={styles.title}>
                <span>{score}</span> {title}
            </h2>
        </>
    );
};
