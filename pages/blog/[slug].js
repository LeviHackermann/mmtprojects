import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default function Post({ content, title, date, tags, categories, coverImage }) {
  return (
    <main>
      <h1>{title}</h1>
      <img src={coverImage} width="600" alt={title} />
      <p>{date}</p>
      <p>Tags: {tags?.join(', ')}</p>
      <p>Categorieën: {categories?.join(', ')}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join('posts', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  return {
    props: {
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      categories: data.categories || [],
      coverImage: data.coverImage || "",
      content: processedContent.toString()
    }
  };
}