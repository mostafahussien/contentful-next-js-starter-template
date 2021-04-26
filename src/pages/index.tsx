import { NextPage, GetServerSideProps } from "next";

import { memo } from "react";

import Link from "next/link";

import RenderingLoader from "@app/components/renderings/RenderingLoader/RenderingLoader";
import {
  getPageBySlug,
  WebPageProps,
} from "@app/features/contentful/contentful";

const Home: NextPage<WebPageProps> = memo(props => {
  const { title, renderingsCollection } = props;
  return (
    <div>
      <h1>{title}</h1>
      <Link href="/about">
        <a>about</a>
      </Link>
      <RenderingLoader renderings={renderingsCollection.items} />
    </div>
  );
});

export const getServerSideProps: GetServerSideProps = async () => {
  const page = await getPageBySlug("/");

  if (!page) {
    return {
      notFound: true,
    };
  }

  return { props: { ...page } };
};

export default Home;
