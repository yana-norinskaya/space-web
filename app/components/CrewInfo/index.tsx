import { FC } from "react";
import Image, {StaticImageData} from "next/image";

import { useAnimate } from "@/app/hooks/useAnimate";

import styles from "./style.module.css";

interface ICrewData {
    id: number;
    name: string;
    images: StaticImageData;
    role: string;
    bio: string;
}

interface ICrewInfo {
    data: ICrewData[];
}

export const CrewInfo: FC<ICrewInfo> = ({ data }) => {
    const { index, handleClick, animate } = useAnimate();

    const { name, bio, role, images } = data[index];

    return (
        <div className={`${styles.crew} ${animate}`}>
            <div className={styles.crew_info}>
                <h3 className={styles.title}>{role}</h3>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.description}>{bio}</p>
                <div className={styles.wrap_slide}>
                    {data.map(({ id }, i) => (
                        <div
                            key={id}
                            className={index === i ? styles.active_slide : styles.slide}
                            onClick={() => handleClick(i)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="justify-self-center">
                <Image src={images} alt={name} />
            </div>
        </div>
    );
};
