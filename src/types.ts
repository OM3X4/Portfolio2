import type { JSX } from "react";

export type ProjectType = {
    name: string;
    images: string[];
    video: string | null;
    logo: string;
    backgroundColor: string;
    date: string;
    mainHeadline: string;
    secondParagraph: string;
    mainParagraph: string;
    thirdParagraph: string;
    quote: string;
    websiteLink: string | null;
    codeLink: string | null;
    engineer: string | null;
    stack: {
        name: string;
        icon: JSX.Element;
    }[];
};