import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	SearchIcon,
} from "@/components/icons";
import CategoriesDropdown from "./categories";
import NavbarAccordion from "./navbar-menu";
import { Logo } from "./Logo";

export const Navbar = () => {
	const searchInput = (
		<Input
			isDisabled
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="full">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<Logo />
				<ul className="hidden md:flex gap-4 justify-start ml-2 items-center">
					<NavbarItem>
						<NextLink className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")} color="foreground" href="/">
							Home
						</NextLink>
					</NavbarItem>
					<NavbarItem>
						<CategoriesDropdown />
					</NavbarItem>
					<NavbarItem>
						<NextLink className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")} color="foreground" href="/">
							About
						</NextLink>
					</NavbarItem>
				</ul >
			</NavbarContent >

			<NavbarContent
				className="hidden md:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={"/"} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden md:flex">{searchInput}</NavbarItem>
			</NavbarContent>

			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={"/"} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<NavbarItem className="px-2">
					<NavbarMenuItem key={1}>
						<Link color="foreground" size="lg" href="/">
							Home
						</Link>
					</NavbarMenuItem>
				</NavbarItem>
				<NavbarMenuItem key={2}>
					<NavbarAccordion />
				</NavbarMenuItem>
				<NavbarMenuItem className="px-2" key={1}>
					<Link color="foreground" size="lg" href="/">
						About
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</NextUINavbar >
	);
};
