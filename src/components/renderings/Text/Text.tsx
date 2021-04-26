import { memo } from "react";

import { Document } from "@contentful/rich-text-types";

import RichText from "@app/components/atoms/RichText/RichText";

export interface TextProps {
  title: string;
  text: { json: Document };
}

const Text = ({ title, text }: TextProps) => {
  return (
    <div>
      {!!title && <h1>{title}</h1>}
      {text && <RichText content={text.json} />}
    </div>
  );
};

export default memo(Text);
