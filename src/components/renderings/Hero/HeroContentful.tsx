import { memo } from "react";

import { ContenfulWrapperProps } from "@app/features/contentful/contentful";
import useSingleEntry from "@app/features/contentful/hooks/useSingleEntry";

import Hero, { HeroProps } from "./Hero";

const HeroContentful = ({ contentfulId }: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<HeroProps>(contentfulId);

  if (!entry) return null;

  return <Hero {...entry} />;
};

export default memo(HeroContentful);
