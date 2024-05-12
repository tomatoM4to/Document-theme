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
        },
        {
            label: "Operate system",
            icon: <VscTerminalLinux size={25} />,
        },
        {
            label: "Computer Structure",
            icon: <PiComputerTowerBold size={25} />,
        },
        {
            label: "Database",
            icon: <FaDatabase size={25} />,
        },
        {
            label: "Security",
            icon: <VscShield size={25} />,
        },
        {
            label: "Network",
            icon: <GiMeshNetwork size={25} />,
        },
        {
            label: "Programming theory",
            icon: <TbVariable size={25} />,
        },
    ],
}));

export const useDevMenuStore = create<Menu>((set) => ({
    menu: [
        {
            label: "Just Auth",
            icon: <FaKey size={25} />,
        },
        {
            label: "Realtime Chat app",
            icon: <VscCommentDiscussion size={25} />,
        },
        {
            label: "RESTful API",
            icon: <TbApi size={25} />,
        }
    ],
}));

export const useSelectedKey = create<SelectedKeys>((set) => ({
    selectedKey: "Categories",
    setSelectedKey: (key: string) => set({ selectedKey: key }),
}));