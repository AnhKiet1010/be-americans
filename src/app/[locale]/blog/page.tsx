import moment from 'moment';
import { allBlogs } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';
import ListLayout from '@/layouts/list-post-layout';
import Hero from '@/components/hero';

export default function BlogPage() {
  const blogs = allBlogs
    .filter((post) => post.draft !== true)
    .map((blog) =>
      pick(blog, [
        'slug',
        'title',
        'summary',
        'date',
        'tags',
        'image',
      ])
    )
    .sort((a, b) =>
      moment(b.date).diff(moment(a.date))
    );

  return (
    <>
      <Hero img="/blog-banner.jpg">
        <div className="lg:max-w-6xl mx-auto ">
          <h1 className="w-full lg:text-6xl text-4xl text-white font-medium">
            Blog
          </h1>
        </div>
      </Hero>
      <ListLayout blogs={blogs} name="Blog" />
    </>
  );
}
