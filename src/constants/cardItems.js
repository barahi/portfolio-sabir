import {experiencePoints, lookbook, schoolPoints, sns, japExperiencePoints, japLookbook, japSchoolPoints, japSns} from "../constants/bulletPoints";
import {links} from "../constants/links"; 
import douzo from "../assets/douzo.png";
import reshub from "../assets/reshub.jpeg"
import { spaceInvasion, japSpaceInvasion } from './bulletPoints';

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

export const japExpCard = [
    {
        id: 7,
        name: "株式会社DOUZO",
        points: {id: 'p7', pts:japExperiencePoints},
        img: douzo,
        link: links.douzo,
    },

    {
        id: 8,
        name: "東京デザインテクノロジーセンタ専門学校",
        points: {id: 'p8', pts:japSchoolPoints},
        link: links.school,
    }
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


export const japProjectcard = [
    {
        id: 9,
        name: "Reshub",
        points: {id: 'p9', pts: japSchoolPoints},
        img: reshub,
        link: links.reshub,
    },

    {
        id: 10,
        name: "Basic-SnS",
        points: {id: 'p10', pts: japSns},
        link: links.sns,
    },

    {
        id: 11,
        name: "Space Invasion",
        points: {id: 'p11', pts: japSpaceInvasion},
        link: links.spaceInvasion,
    },

    {
        id: 12,
        name: "Lookbook",
        points: {id: 'p12', pts: japLookbook},
        link: links.lookbook
    }
]


export const japLanding = {
    top: 'バラヒサビルです。',
    bot: 'ソフトウェアエンジニアです。',
}

export const landing = {
    top: 'Hi! I am Sabir Barahi',
    mid:  'Eager and Energetic',
    bot: 'Software Engineer'
}

export const japAbout = "中学生の時にHTMLを学んで以来、ソフトウェアエンジニアリングのキャリアを追求することに魅了され、わくわくしています。フルスタックアプリケーションを構築して人々を助けること、そして新しい技術を学ぶことを楽しんでいます。";
export const about = "Ever since learning HTML in middle school, I've been fascinated and and excited to persue a career in Software Engineering. I enjoy building Full Stack applications that help other people and learning new technologies.";
