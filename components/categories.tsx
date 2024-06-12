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
import { useComputerScienceMenuStore, useDevMenuStore } from "@/stores/menu-info";
import { useParamsStore } from "@/stores/params";

export default function CategoriesDropdown() {
    const csMenu = useComputerScienceMenuStore((state) => state.menu);
    const devMenu = useDevMenuStore((state) => state.menu);
    const post = useParamsStore((state) => state.post);

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                >
                    {post}
                </Button>
            </DropdownTrigger>

            <DropdownMenu
                aria-label="Dropdown menu with description"
                variant="faded"
                disallowEmptySelection
                selectionMode="single"
            >

                <DropdownSection title="Computer Science" showDivider>
                    {
                        csMenu.map((item) => (
                            <DropdownItem key={item.post} startContent={item.icon} href={`/categories/${item.subject}/${item.post}`}>
                                {item.label}
                            </DropdownItem>
                        ))
                    }
                </DropdownSection>

                <DropdownSection title="Web dev">
                    {
                        devMenu.map((item) => (
                            <DropdownItem key={item.post} startContent={item.icon} href={`/categories/${item.subject}/${item.post}`}>
                                {item.label}
                            </DropdownItem>
                        ))
                    }
                </DropdownSection>


            </DropdownMenu>
        </Dropdown>
    );
}
