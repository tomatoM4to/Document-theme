import { create } from "zustand";

import {
    VscCommentDiscussion,
    VscShield,
    VscTerminalLinux,
} from "react-icons/vsc";
import { GiMeshNetwork } from "react-icons/gi";
import { FaKey, FaDatabase } from "react-icons/fa";
import { TbApi, TbVariable } from "react-icons/tb";
import { PiGraphThin, PiComputerTowerBold } from "react-icons/pi";
import { Menu, SelectedKeys } from "@/types";


export const useComputerScienceMenuStore = create<Menu>((set) => ({
    menu: [
        {
            label: "Data Structure & Algorithm",
            icon: <PiGraphThin size={25} />,
            description: "Learn about data structure and algorithm",
            subject: "computer-science",
            post: "data-structure-algorithm",
        },
        {
            label: "Operating System",
            icon: <VscTerminalLinux size={25} />,
            description: "Learn about operating systems",
            subject: "computer-science",
            post: "operating-system",
        },
        {
            label: "Computer Structure",
            icon: <PiComputerTowerBold size={25} />,
            description: "Learn about computer structure",
            subject: "computer-science",
            post: "computer-structure",
        },
        {
            label: "Database",
            icon: <FaDatabase size={25} />,
            description: "Learn about databases",
            subject: "computer-science",
            post: "database",
        },
        {
            label: "Security",
            icon: <VscShield size={25} />,
            description: "Learn about computer security",
            subject: "computer-science",
            post: "security",
        },
        {
            label: "Network",
            icon: <GiMeshNetwork size={25} />,
            description: "Learn about computer networks",
            subject: "computer-science",
            post: "network",
        },
        {
            label: "Programming Theory",
            icon: <TbVariable size={25} />,
            description: "Learn about programming theory",
            subject: "computer-science",
            post: "programming-theory",
        },
    ],
}));

export const useDevMenuStore = create<Menu>((set) => ({
    menu: [
        {
            label: "Just Auth",
            icon: <FaKey size={25} />,
            description: "Learn about authentication",
            subject: "development",
            post: "just-auth",
        },
        {
            label: "Realtime Chat app",
            icon: <VscCommentDiscussion size={25} />,
            description: "Learn about building a realtime chat application",
            subject: "development",
            post: "realtime-chat-app",
        },
        {
            label: "RESTful API",
            icon: <TbApi size={25} />,
            description: "Learn about building RESTful APIs",
            subject: "development",
            post: "restful-api",
        }
    ],
}));

export const useSelectedKey = create<SelectedKeys>((set) => ({
    selectedKey: "Categories",
    setSelectedKey: (key: string) => set({ selectedKey: key }),
}));