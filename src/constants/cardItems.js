import {experiencePoints, lookbook, schoolPoints, sns} from "../constants/bulletPoints";
import {links} from "../constants/links"; 
import douzo from "../assets/douzo.png";
import reshub from "../assets/reshub.jpeg"
import { spaceInvasion } from './bulletPoints';

export const expcard = [
    {
        id: 1,
        name: "株式会社DOUZO",
        points: {id: 'p1', pts:experiencePoints},
        img: douzo,
        link: links.douzo,
    },

    {
        id: 2,
        name: "東京デザインテクノロジーセンタ専門学校",
        points: {id: 'p2', pts:schoolPoints},
        link: links.school,
    },

]

export const projectcard = [
    {
        id: 3,
        name: "Reshub",
        points: {id: 'p3', pts: schoolPoints},
        img: reshub,
        link: links.reshub,
    },

    {
        id: 4,
        name: "Basic-SnS",
        points: {id: 'p4', pts: sns},
        link: links.sns,
    },

    {
        id: 5,
        name: "Space Invasion",
        points: {id: 'p5', pts: spaceInvasion},
        link: links.spaceInvasion,
    },

    {
        id: 6,
        name: "Lookbook",
        points: {id: 'p6', pts: lookbook},
        link: links.lookbook
    }
]