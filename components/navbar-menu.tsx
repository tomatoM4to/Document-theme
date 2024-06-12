'use client';

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { useComputerScienceMenuStore, useDevMenuStore, useSelectedKey } from "@/stores/menu-info";
import { MenuItem } from "@/types";


const AccordionCard = ({
    content
}: {
    content: MenuItem[]
}) => {
    return (
        <div className="flex flex-col">
            <Listbox
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
            >
                {
                    content.map((item) => (
                        <ListboxItem key={item.post} startContent={item.icon} href={`/categories/${item.subject}/${item.post}`}>
                            {item.label}
                        </ListboxItem>
                    ))
                }


            </Listbox >
        </div >
    );
}

export default function NavbarAccordion() {
    const csMenu = useComputerScienceMenuStore((state) => state.menu);;
    const devMenu = useDevMenuStore((state) => state.menu);;

    return (
        <Accordion isCompact>
            <AccordionItem key="1" aria-label="Categories" title="Categories">
                <Accordion isCompact>
                    <AccordionItem key="1" aria-label="Computer Science" title="Accordion Computer Science">
                        <AccordionCard content={csMenu} />
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Dev" title="Dev">
                        <AccordionCard content={devMenu} />
                    </AccordionItem>
                </Accordion>
            </AccordionItem>
        </Accordion>
    );
}