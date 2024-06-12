import React, { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type MenuItem = {
  label: string;
  icon: React.ReactNode;
  description: string;
  subject: string;
  post: string;
}

export type Menu = {
  menu: MenuItem[];
};

export type SelectedKeys = {
  selectedKey: string;
  setSelectedKey: (keys: string) => void;
};

export type Params = {
  subject: string;
  post: string;
  setSubject: (subject: string) => void;
  setPost: (post: string) => void;
};