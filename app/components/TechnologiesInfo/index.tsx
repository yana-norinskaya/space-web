import { FC } from "react";

import Image, {StaticImageData} from "next/image";

import { useAnimate } from "@/app/hooks/useAnimate";

import styles from "./style.module.css";

interface ITechnologiesData {
    id: number;
    name: string;
    images: StaticImageData;
    imageMobile: StaticImageData;
    description: string;
}

interface ITechnologiesInfo {
    data: ITechnologiesData[];
}

export const TechnologiesInfo: FC<ITechnologiesInfo> = ({ data }) => {
    const { index, handleClick, animate } = useAnimate();

    const { name, images, description, imageMobile } = data[index];

    return (
        <div className={styles.technology}>
            <div className={styles.wrap}>
                <div className={styles.slide}>
                    {data.map(({ id }, i) => (
                        <div
                            key={id}
                            className={
                                index === i
                                    ? `${styles.slide_item} bg-white text-black`
                                    : `${styles.slide_item} text-white`
                            }
                            onClick={() => handleClick(i)}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
                <div>
                    <p className={styles.title}>THE TERMINOLOGY ...</p>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
            <div className={styles.wrap_img}>
                <Image
                    src={images}
                    alt={name}
                    className={`${styles.img_lg} ${animate}`}
                />
                <Image
                    src={imageMobile}
                    alt={name}
                    className={`${styles.img_sm} ${animate}`}
                />
            </div>
        </div>
    );
};
