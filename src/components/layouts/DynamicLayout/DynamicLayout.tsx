import { memo, ReactNode } from "react";

import FooterContentful from "@app/components/renderings/Footer/FooterContentful";
import HeaderContentful from "@app/components/renderings/Header/HeaderContentful";
import { useSingleEntry } from "@app/features/contentful/contentful";

interface DynamicLayoutProps {
  children: ReactNode;
  contentfulId: string;
}

interface Layout {
  header: { sys: { id: string } };
  footer: { sys: { id: string } };
}

const DynamicLayout = ({ contentfulId, children }: DynamicLayoutProps) => {
  const { entry } = useSingleEntry<Layout>(contentfulId);

  if (!entry) return null;

  const { header, footer } = entry;

  return (
    <div>
      <HeaderContentful contentfulId={header.sys.id} />
      <main>{children}</main>
      <FooterContentful contentfulId={footer.sys.id} />
    </div>
  );
};

export default memo(DynamicLayout);
