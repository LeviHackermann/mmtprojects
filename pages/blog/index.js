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
            <Link href={`/blog/${post.slug}`}>
              <img src={post.coverImage} width="300" alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <p>Tags: {post.tags?.join(', ')}</p>
              <p>Categorieën: {post.categories?.join(', ')}</p>
            </Link>
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
    const fileContent = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug,
      ...data
    };
  });
  return { props: { posts } };
}