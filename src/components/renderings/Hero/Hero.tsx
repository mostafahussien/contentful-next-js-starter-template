import { memo } from "react";

import Image from "next/image";

import { ContentfulAsset } from "@app/features/contentful/contentful";

export interface HeroProps {
  title: string;
  description: string;
  image: ContentfulAsset;
}

const Hero = ({ title, description, image }: HeroProps) => {
  return (
    <div>
      {!!title && <h1>{title}</h1>}
      {!!description && <p>{description}</p>}
      {image && (
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          layout="responsive"
          quality={100}
          alt={image.description}
          title={image.title}
        />
      )}
    </div>
  );
};

export default memo(Hero);
