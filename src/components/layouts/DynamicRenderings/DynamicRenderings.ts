// eslint-disable-next-line filenames/match-regex
import { ReactNode } from "react";

import HeroContenful from "@app/components/renderings/Hero/HeroContentful";
import TextContentful from "@app/components/renderings/Text/TextContentful";

const DynamicRenderings: Record<string, ReactNode> = {
  Hero: HeroContenful,
  TextComponent: TextContentful,
};

export default DynamicRenderings;
