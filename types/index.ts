import React, { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface MenuItem {
  label: string;
  icon: React.ReactNode;
  description?: string;
}

export type Menu = {
  menu: MenuItem[];
};
