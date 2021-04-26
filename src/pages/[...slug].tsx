import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";

import { memo } from "react";

import Link from "next/link";

import RenderingLoader from "@app/components/renderings/RenderingLoader/RenderingLoader";
import {
  getPageBySlug,
  WebPageProps,
} from "@app/features/contentful/contentful";

const WebPage: NextPage<WebPageProps> = memo(props => {
  const { title, renderingsCollection } = props;
  return (
    <div>
      <h1>{title}</h1>
      <Link href="/">
        <a>home</a>
      </Link>
      <RenderingLoader renderings={renderingsCollection.items} />
    </div>
  );
});

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const pageSlug = context.query.slug?.toString().replace(/,/g, "/");

  const page = await getPageBySlug(pageSlug);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return { props: { ...page } };
};

export default WebPage;
