'use client';

import { NavbarBrand } from "@nextui-org/navbar";
import NextLink from "next/link";
import { GithubIcon } from "@/components/icons";
import { useParamsStore } from "@/stores/params";

export const Logo = () => {
    const params = useParamsStore((state) => state.setPost);
    const setParams = () => params("Home");

    return (
        <NavbarBrand as="li" className="gap-3 max-w-fit" onClick={setParams}>
            <NextLink className="flex justify-start items-center gap-1" href="/">
                <GithubIcon />
                <p className="font-bold text-inherit">tomatoM4to</p>
            </NextLink>
        </NavbarBrand>
    )
}