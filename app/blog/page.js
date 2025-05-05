import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogPage({ posts }) {
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const content = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(content);
    return { slug, ...data };
  });
  return { props: { posts } };
}