import moon from "@/app/assets/dest/image-moon.png";
import mars from "@/app/assets/dest/image-mars.png";
import europa from "@/app/assets/dest/image-europa.png";
import titan from "@/app/assets/dest/image-titan.png";

export const planetsData = [
    {
        id: 1,
        name: "Moon",
        image: moon,
        description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
    {
        id: 2,
        name: "Mars",
        image: mars,
        description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
    },
    {
        id: 3,
        name: "Europa",
        image: europa,
        description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
    },
    {
        id: 4,
        name: "Titan",
        image: titan,
        description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
    },
];

export interface IDestinations {
    id: number;
    name: string;
    image: string;
    description: string;
    distance: string;
    travel: string;
}
