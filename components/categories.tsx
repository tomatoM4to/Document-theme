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
import { useComputerScienceMenuStore, useDevMenuStore } from "@/stores/globalStore";

export default function CategoriesDropdown() {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["Categories"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", "),
        [selectedKeys]
    );


    const csMenu = useComputerScienceMenuStore((state) => state.menu);
    const devMenu = useDevMenuStore((state) => state.menu);


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
                    {
                        csMenu.map((item) => (
                            <DropdownItem key={item.label} startContent={item.icon}>
                                {item.label}
                            </DropdownItem>
                        ))
                    }
                </DropdownSection>

                <DropdownSection title="Web dev">
                    {
                        devMenu.map((item) => (
                            <DropdownItem key={item.label} startContent={item.icon}>
                                {item.label}
                            </DropdownItem>
                        ))
                    }
                </DropdownSection>


            </DropdownMenu>
        </Dropdown>
    );
}
