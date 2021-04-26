import { memo } from "react";

import { ContenfulWrapperProps } from "@app/features/contentful/contentful";
import useSingleEntry from "@app/features/contentful/hooks/useSingleEntry";

import Text, { TextProps } from "./Text";

const TextContentful = ({ contentfulId }: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<TextProps>(contentfulId);

  if (!entry) return null;

  return <Text {...entry} />;
};

export default memo(TextContentful);
