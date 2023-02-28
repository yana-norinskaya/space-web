import { FC } from "react";

import Image, {StaticImageData} from "next/image";

import { useAnimate } from "@/app/hooks/useAnimate";

import styles from "./style.module.css";

interface IDestinations {
    id: number;
    name: string;
    image: StaticImageData;
    description: string;
    distance: string;
    travel: string;
}

interface IPlanets {
    data: IDestinations[];
}

export const Planets: FC<IPlanets> = ({ data }) => {
    const { index, handleClick, animate } = useAnimate();

    const { image, name, description, distance, travel } = data[index];

    return (
        <div className={`${styles.planets} ${animate}`}>
            <Image src={image} alt={name} className={styles.img} />
            <div className={styles.info}>
                <div className={styles.wrap_name}>
                    {data.map(({ name }, i) => (
                        <p
                            className={i === index ? styles.active_name : styles.name}
                            key={i}
                            onClick={() => handleClick(i)}
                        >
                            {name}
                        </p>
                    ))}
                </div>
                <p className={styles.title}>{name}</p>
                <p className={styles.description}>{description}</p>
                <div className={styles.distance}>
                    <div>
                        <p className={styles.distance_title}>AVG. DISTANCE</p>
                        <p className={styles.distance_txt}>{distance}</p>
                    </div>
                    <div>
                        <p className={styles.distance_title}>EST. TRAVEL TIME</p>
                        <p className={styles.distance_txt}>{travel}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
