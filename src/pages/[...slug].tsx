import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";

import { memo } from "react";

import Link from "next/link";

import { getPageBySlug } from "@app/features/contentful/contentful";
import { IWebPageFields } from "@app/types/generated/contentful";

const WebPage: NextPage<IWebPageFields> = memo(props => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
      <Link href="/">
        <a>home</a>
      </Link>
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
