import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkImgToJsx from './src//lib/remark-img-to-jsx';

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw),
  },
  slug: {
    type: 'string',
    resolve: (doc) =>
      doc._raw.sourceFileName.replace(
        /\.mdx$/,
        ''
      ),
  },
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    draft: { type: 'boolean', required: false },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
      default: ['Kiệt MMO'],
      description: 'Tags for the post',
      required: false,
    },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeKatex,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
