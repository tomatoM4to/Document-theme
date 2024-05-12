"use client";

import { useState, useMemo, useEffect } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { useComputerScienceMenuStore, useDevMenuStore, useSelectedKey } from "@/stores/menu-info";

export default function CategoriesDropdown() {
    const key = useSelectedKey((state) => state.selectedKey);
    const setKey = useSelectedKey((state) => state.setSelectedKey);
    const csMenu = useComputerScienceMenuStore((state) => state.menu);
    const devMenu = useDevMenuStore((state) => state.menu);

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                >
                    {key}
                </Button>
            </DropdownTrigger>

            <DropdownMenu
                aria-label="Dropdown menu with description"
                variant="faded"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={key}

                // @ts-ignore
                onSelectionChange={setKey}
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
