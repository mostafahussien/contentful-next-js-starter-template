import { memo } from "react";

import Link from "next/link";

export interface HeaderProps {
  title: string;
  menuLinksCollection: {
    items: {
      sys: {
        id: string;
      };
      label: string;
      link: string;
    }[];
  };
}
const Header = ({ title, menuLinksCollection }: HeaderProps) => {
  return (
    <header>
      <div>{title}</div>
      {menuLinksCollection.items && (
        <ul>
          {menuLinksCollection.items.map(item => (
            <li key={item.sys.id}>
              <Link href={item.link}>
                <a>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default memo(Header);
