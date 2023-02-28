import { useState, useEffect } from "react";

export const useAnimate = () => {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState("");

    useEffect(() => {
        setAnimate("animate-toggleOpacity");
        return () => setAnimate("");
    }, [index, animate]);

    const handleClick = (i: number) => {
        setIndex(i);
        setAnimate("");
    };
    return { handleClick, index, animate };
};
