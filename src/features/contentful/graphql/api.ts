import { ENV } from "../constants/contentful.env";
import { ENTRY_GRAPHQL_FIELDS, PAGE_GRAPHQL_FIELDS } from "./queries";

const fetchGraphQL = async (query: string) => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${ENV.SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ENV.DELIVERY_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then(response => response.json());
};

const extractPages = fetchResponse => {
  return fetchResponse?.data?.webPageCollection?.items[0];
};

const extractEntries = fetchResponse => {
  return fetchResponse?.data?.entryCollection?.items[0];
};

export const getPageBySlug = async (slug: string) => {
  const page = await fetchGraphQL(
    `query {
      webPageCollection(where: { slug: "${slug}" }) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractPages(page);
};

export const getEntryById = async (id: string) => {
  const entry = await fetchGraphQL(
    `query {
      entryCollection(where: { sys: {id: "${id}"} }) {
        items {
          ${ENTRY_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractEntries(entry);
};
