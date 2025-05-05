import Layout from '../../components/Layout';
import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default function Blog({ posts }) {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>
        {posts.length === 0 && <p>Nog geen blogposts beschikbaar.</p>}
        <ul className="space-y-6">
          {posts.map(({ slug, frontmatter }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a className="text-xl text-indigo-600 hover:underline">{frontmatter.title}</a>
              </Link>
              <p className="text-gray-600 text-sm">{frontmatter.date}</p>
              <p>{frontmatter.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
}