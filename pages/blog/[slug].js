import Layout from '../../components/Layout';
import { getPostBySlug, getAllPosts } from '../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export default function Post({ frontmatter, contentHtml }) {
  return (
    <Layout>
      <article className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
        <p className="text-gray-600 mb-8">{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
}