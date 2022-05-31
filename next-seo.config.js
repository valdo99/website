const title = "Edvaldo Gjonikaj";
const description = "Technologist, startupper and hungry software engineer";

const SEO = {
  title,
  description,
  canonical: "https://edvaldogjonikaj.me",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://edvaldogjonikaj.me",
    title,
    description,
    images: [
      {
        url: "https://edvaldogjonikaj.me/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@valdozzz1",
    site: "@valdozzz1",
    cardType: "summary_large_image",
  },
};

export default SEO;
