import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/"><a className="text-xl font-bold">MMT Projects</a></Link>
        <div className="space-x-4">
          <Link href="/"><a>Home</a></Link>
          <Link href="/contact"><a>Contacteer ons</a></Link>
          <Link href="/blog"><a>Blogs</a></Link>
        </div>
      </div>
    </nav>
  );
}