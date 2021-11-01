import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";

import { Service } from "../../types/Service";

export const services: Service[] = [
    {
        Icon: FaServer,
        title: "Backend  Development",
        about:
            "handle database, server, api using <b>Spring Boot</b>, <b>Express</b> & other popular frameworks",
    },
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>, <b>React.js</b> and  <b>Next.js</b>",
    }
];