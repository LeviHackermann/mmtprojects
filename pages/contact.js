import Layout from '../components/Layout';
export default function Contact() {
  return (
    <Layout>
      <section className="bg-gray-50 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Contacteer ons vandaag nog om uw droomproject te realiseren</h1>
      </section>
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold">Email adres:</h2>
          <p>info@mmtprojects.com</p>
          <h2 className="font-semibold mt-4">Telefoon nummer:</h2>
          <p>+32 484 11 77 27</p>
          <h2 className="font-semibold mt-4">Locatie:</h2>
          <p>Genk, België</p>
        </div>
        <form className="space-y-4">
          <label>
            Onderwerp*
            <select className="w-full border rounded p-2">
              <option>Vastgoed kopen</option>
              <option>Vastgoed verkopen</option>
              <option>Consultancy</option>
              <option>Algemene vraag</option>
              <option>Andere</option>
            </select>
          </label>
          <label>
            Volledige naam
            <input type="text" className="w-full border rounded p-2" />
          </label>
          <label>
            Telefoonnummer
            <input type="text" className="w-full border rounded p-2" />
          </label>
          <label>
            E-mailadres*
            <input type="email" className="w-full border rounded p-2" />
          </label>
          <label>
            Uw bericht*
            <textarea className="w-full border rounded p-2" rows={5} />
          </label>
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded">Verzenden</button>
        </form>
      </section>
      <section className="bg-indigo-600 text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Samen bouwen aan uw toekomst</h2>
        <p>Heeft u plannen om te bouwen of verbouwen? Neem dan vandaag nog contact met ons op. Ons team staat klaar om uw ideeën werkelijkheid te maken.</p>
      </section>
    </Layout>
}