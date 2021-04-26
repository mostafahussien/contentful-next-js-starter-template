import { memo } from "react";

import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import cx from "classnames";

import styles from "./RichText.module.scss";

export interface RichTextProps {
  className?: string;
  content: Document;
}

const RichText = ({ className, content }: RichTextProps) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
  };
  return (
    <div className={cx(styles.container, className)}>
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default memo(RichText);
