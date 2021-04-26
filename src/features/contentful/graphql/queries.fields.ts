export const PAGE_GRAPHQL_FIELDS = `
slug
title
pageLayout {
  sys {
    id
  }
}
metaDescription
metaTitle
openGraphImage {
  url
}
renderingsCollection {
  items {
    __typename
    ... on Entry {
      sys {
        id
      }
    }
  }
}`;

export const ENTRY_GRAPHQL_FIELDS = `
... on Layout {
  header {
    sys {
      id
    }
  }
  footer {
    sys {
      id
    }
  }
}
... on Header {
  title
  menuLinksCollection {
    items {
      sys{
        id
      }
      label
      link
    }
  }
}
... on Footer {
  title
}
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
