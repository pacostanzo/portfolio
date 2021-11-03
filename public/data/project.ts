import { IProject } from "../../types/Project";

export const projects: IProject[] = [
    {
        id: 0,
        name: "Jandchase Clothing",
        description: "A progressive web application, which implements e-commerce in a portfolio project.",
        image_path: "/images/janchase-clothing.jpg",
        deployed_url: "https://jandchase-clothing-live.herokuapp.com/",
        github_url: "https://github.com/costanzopa/jandchase-clothing",
        category: ["react"],
        key_techs: ["React", "Redux", "Stripes", "Express", "Firebase"],
    },
    {
        id: 1,
        name: "Netflix Clone",
        description: "This app is a Netflix Clone. It was built using React and Styled Components for the frontend and Firebase for the backend.",
        image_path: "/images/netflix-clone.jpg",
        deployed_url: "https://netflix-clone-nu-one.vercel.app",
        github_url: "https://github.com/costanzopa/netflix-clone",
        category: ["react"],
        key_techs: ["React", "Styled Components", "Firebase"],
    },
]