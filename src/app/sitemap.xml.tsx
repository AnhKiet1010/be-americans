import { GetServerSideProps } from 'next';
import {
  allBlogs,
  Blog,
} from 'contentlayer/generated';
import siteMetadata from 'data/siteMetadata';
import moment from 'moment';

function generateSiteMap(
  host_url: string | undefined,
  {
    posts,
  }: {
    posts: Blog[];
  }
) {
  const date = moment().format('YYYY-MM-DD');
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${host_url}</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
    <url>
      <loc>${host_url}/blog</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
    <url>
      <loc>${host_url}/tag</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
         ${posts
           .map(({ slug, date }) => {
             return `
          <url>
              <loc>${`${host_url}/blog/${slug}`}</loc>
              <lastmod>${date}</lastmod>
          </url>
        `;
           })
           .join('')}
        
   </urlset>
 `;
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps =
  async (context) => {
    const { res } = context;
    // full host url
    const posts = allBlogs.filter(
      (post) => post.draft !== true
    );

    const sitemap = generateSiteMap(
      siteMetadata.siteUrl,
      {
        posts,
      }
    );
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  };
