import { visit } from 'unist-util-visit';
import sizeOf from 'image-size';
import fs from 'fs';

export default function remarkImgToJsx() {
  return (tree: any) => {
    visit(
      tree,
      // only visit p tags that contain an img element
      (node: any) =>
        node.type === 'paragraph' &&
        node.children.some(
          (n: any) => n.type === 'image'
        ),
      (node: any) => {
        const imageNode = node.children.find(
          (n: any) => n.type === 'image'
        );

        // only local files
        if (
          fs.existsSync(
            `${process.cwd()}/public${
              imageNode.url
            }`
          )
        ) {
          const dimensions = sizeOf(
            `${process.cwd()}/public${
              imageNode.url
            }`
          );

          // Convert original node to next/image
          (imageNode.type = 'mdxJsxFlowElement'),
            (imageNode.name = 'Image'),
            (imageNode.attributes = [
              {
                type: 'mdxJsxAttribute',
                name: 'alt',
                value: imageNode.alt,
              },
              {
                type: 'mdxJsxAttribute',
                name: 'src',
                value: imageNode.url,
              },
              {
                type: 'mdxJsxAttribute',
                name: 'width',
                value: dimensions.width,
              },
              {
                type: 'mdxJsxAttribute',
                name: 'height',
                value: dimensions.height,
              },
            ]);

          // Change node type from p to div to avoid nesting error
          node.type = 'div';
          node.children = [imageNode];
        }
      }
    );
  };
}
