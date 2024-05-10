"use client";

import { useState, useMemo } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import {
    VscCommentDiscussion,
    VscShield,
    VscTerminalLinux,
} from "react-icons/vsc";
import { GiMeshNetwork } from "react-icons/gi";
import { FaKey, FaDatabase } from "react-icons/fa";
import { TbApi, TbVariable } from "react-icons/tb";
import { PiGraphThin, PiComputerTowerBold } from "react-icons/pi";

export default function CategoriesDropdown() {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["Categories"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("-", " "),
        [selectedKeys]
    );

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                >
                    {selectedValue}
                </Button>
            </DropdownTrigger>

            <DropdownMenu
                aria-label="Dropdown menu with description"
                variant="faded"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >

                <DropdownSection title="Computer Science" showDivider>
                    <DropdownItem key="Data-Structure-&-Algorithm" startContent={<PiGraphThin size={25} />}>Data Structure & Algorithm</DropdownItem>
                    <DropdownItem key="Operate-system" startContent={<VscTerminalLinux size={25} />}>Operate system</DropdownItem>
                    <DropdownItem key="Computer-Structure" startContent={<PiComputerTowerBold size={25} />}>Computer Structure</DropdownItem>
                    <DropdownItem key="Database" startContent={<FaDatabase size={25} />}>Database</DropdownItem>
                    <DropdownItem key="Security" startContent={<VscShield size={25} />}>Security</DropdownItem>
                    <DropdownItem key="Network" startContent={<GiMeshNetwork size={25} />}>Network</DropdownItem>
                    <DropdownItem key="Programming-theory" startContent={<TbVariable size={25} />}>Programming theory</DropdownItem>
                </DropdownSection>

                <DropdownSection title="Web dev">
                    <DropdownItem key="Auth" startContent={<FaKey size={25} />}>Just auth</DropdownItem>
                    <DropdownItem key="Realtime-Chat" startContent={<VscCommentDiscussion size={25} />}>Realtime Chat app</DropdownItem>
                    <DropdownItem key="CRUD-app" startContent={<TbApi size={25} />}>REST full app</DropdownItem>
                </DropdownSection>


            </DropdownMenu>
        </Dropdown>
    );
}
