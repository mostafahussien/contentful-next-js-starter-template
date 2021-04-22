import { NextPage, GetServerSideProps } from "next";

import { memo } from "react";

import Link from "next/link";

import { getPageBySlug } from "@app/features/contentful/contentful";
import { IWebPageFields } from "@app/types/generated/contentful";

const Home: NextPage<IWebPageFields> = memo(props => {
  console.log(props);
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
      <Link href="/about">
        <a>about</a>
      </Link>
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
