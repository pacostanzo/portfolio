import { IoLanguageSharp } from "react-icons/io5";
import { SiRobotframework } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { AiFillApi } from "react-icons/ai";
import { MdComputer } from "react-icons/md";

import { Service } from "../../types/Service";

export const services: Service[] = [
    {
        Icon: IoLanguageSharp,
        title: "Programming Languages",
        about: "Java, Javascript, C, C++ and Python.",
    },
    {
        Icon: SiRobotframework,
        title: "Frameworks",
        about: "Spring, NodeJs y Express.",
    },
    {
        Icon: FaDatabase,
        title: 'Databases',
        about: 'Oracle, Postgresql, MySql, MongoDB, SapHana and Redis.',
    },
    {
        Icon: ImLibrary,
        title: 'Libraries',
        about: 'React, Redux, Jest, JUnite Hibernate.',
    },
    {
        Icon: AiFillApi,
        title: 'Infrastructure',
        about: 'Heroku, Cloud Foundry, Docker, CircleCI, DevOps, Docker Swarm, Kubernetes and AWS.',
    },
    {
        Icon: MdComputer,
        title: 'Applications',
        about: 'Intellij Idea, Visual Studio, Git, Maven, Perforce, Jira and Confluence.',
    },
];