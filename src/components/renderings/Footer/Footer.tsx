import { memo } from "react";

export interface FooterProps {
  title: string;
}
const Footer = ({ title }: FooterProps) => {
  return <footer>{title}</footer>;
};

export default memo(Footer);
