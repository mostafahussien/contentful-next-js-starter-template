import { NextPage, GetServerSideProps } from "next";

import { memo } from "react";

import DynamicLayout from "@app/components/layouts/DynamicLayout/DynamicLayout";
import RenderingLoader from "@app/components/renderings/RenderingLoader/RenderingLoader";
import {
  getPageBySlug,
  WebPageProps,
} from "@app/features/contentful/contentful";

const Home: NextPage<WebPageProps> = memo(props => {
  const { renderingsCollection, pageLayout } = props;
  return (
    <div>
      {pageLayout && (
        <DynamicLayout contentfulId={pageLayout.sys.id}>
          <RenderingLoader renderings={renderingsCollection.items} />
        </DynamicLayout>
      )}
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
