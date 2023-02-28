import { FC, useState } from "react";

import Link from "next/link";
import Image from 'next/image';

import { Navbar } from "@/app/components";

import { dataLinks } from "./dataLinks";

import logo from "@/app/assets/shared/logo.svg";
import hamburger from "@/app/assets/shared/icon-hamburger.svg";

import styles from "./style.module.css";

export const Header: FC = () => {
    const [isClose, setIsClose] = useState(false);

    return (
        <header className={styles.header}>
            <Link href="/">
                <Image src={logo} alt="logo" />
            </Link>
            <div className={styles.line}></div>
            <Image
                src={hamburger}
                alt="hamburger"
                className={styles.hamburger}
                onClick={() => setIsClose(true)}
            />
            <Navbar isClose={isClose} setIsClose={setIsClose} data={dataLinks} />
        </header>
    );
};
