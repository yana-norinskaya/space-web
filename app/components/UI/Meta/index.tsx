import { FC } from "react";
import Head from "next/head";

interface IMeta{
    title: string;
    description: string;
}

export const Meta: FC<IMeta> = ({ title, description }) => {
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.svg" />
        </Head>
    )
}