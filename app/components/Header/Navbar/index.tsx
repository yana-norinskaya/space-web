import React, { FC } from "react";

import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

import close from "@/app/assets/shared/icon-close.svg";

import styles from "./style.module.css";

interface IDataLinks {
    id: number;
    name: string;
    link: string;
}

interface INavbar {
    isClose: boolean;
    setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
    data: IDataLinks[];
}

export const Navbar: FC<INavbar> = ({ isClose, setIsClose, data }) => {
    const router = useRouter();
    return (
        <nav className={isClose ? styles.nav_mobile : styles.nav}>
            <Image
                src={close}
                alt="close"
                className={styles.close}
                onClick={() => setIsClose(false)}
            />
            <ul className={styles.nav_list}>
                {data.map(({ name, link }, i) => (
                    <>
                        <li>
                            <Link
                                href={link}
                                className={router.pathname === link  ? styles.active : ""}
                            >
                                <span>0{i}</span> {name}
                            </Link>
                        </li>
                    </>
                ))}
            </ul>
        </nav>
    );
};
