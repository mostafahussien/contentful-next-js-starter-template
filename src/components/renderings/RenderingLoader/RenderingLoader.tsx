import { memo } from "react";

import DynamicRenderings from "@app/components/layouts/DynamicRenderings/DynamicRenderings";

interface RenderingDef {
  sys: { id: string };
  __typename: string;
}
interface RenderingLoaderProps {
  renderings: RenderingDef[];
}

const RenderingLoader = ({ renderings }: RenderingLoaderProps) => {
  return (
    <>
      {renderings.map(rendering => {
        // eslint-disable-next-line no-underscore-dangle
        const contentType = rendering.__typename;

        if (!contentType) return null;

        const Rendering = DynamicRenderings[contentType] as React.ElementType;

        if (!Rendering) return null;

        return (
          <Rendering key={rendering.sys.id} contentfulId={rendering.sys.id} />
        );
      })}
    </>
  );
};

export default memo(RenderingLoader);
