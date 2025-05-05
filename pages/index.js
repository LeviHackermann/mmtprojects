import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>MMT Projects</h1>
      <p>Welkom bij MMT Projects – gespecialiseerd in technische installaties.</p>
      <nav>
        <Link href="/contact">Contact</Link> | <Link href="/blog">Blog</Link>
      </nav>
    </main>
  );
}