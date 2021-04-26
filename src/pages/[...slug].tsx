import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";

import { memo } from "react";

import DynamicLayout from "@app/components/layouts/DynamicLayout/DynamicLayout";
import RenderingLoader from "@app/components/renderings/RenderingLoader/RenderingLoader";
import {
  getPageBySlug,
  WebPageProps,
} from "@app/features/contentful/contentful";

const WebPage: NextPage<WebPageProps> = memo(props => {
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
