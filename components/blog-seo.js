import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, summary, publishDate, url, image }) => {
  const date = new Date(publishDate).toISOString();

  return (
    <>
      <NextSeo
        title={`${title} – Edvaldo Gjonikaj`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [
            {
              url: image,
              width: 2240,
              height: 1260,
              alt: title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName="Edvaldo Gjonikaj"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[image]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Edvaldo Gjonikaj"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
