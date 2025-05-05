export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} MMT Projects. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}