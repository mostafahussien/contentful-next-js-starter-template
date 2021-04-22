export const PAGE_GRAPHQL_FIELDS = `
slug
title
renderingsCollection {
  items {
    ... on Hero {
      sys {
        id
      }
    }
    ... on TextComponent {
      sys {
        id
      }
    }
    ... on Entry {
      sys {
        id
      }
    }
  }
}`;

export const ENTRY_GRAPHQL_FIELDS = `      
... on Hero {
  title
  description
  image {
    sys {
      id
    }
    size
    url
    width
    height
    title
    description
  }
}
... on TextComponent {
  title
  text {
    json
  }
}`;
