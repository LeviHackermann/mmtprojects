import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <section className="bg-gray-50 py-20 text-center">
        <h1 className="text-4xl font-bold">Uw partner in bouwen & verbouwen.</h1>
      </section>
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">Waar staan wij voor:</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Ervaring & expertise</h3>
            <p>Met tientallen projecten op onze naam weten wij precies wat er nodig is om uw bouwplannen te realiseren.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Klantgericht</h3>
            <p>Wij luisteren naar uw wensen en denken met u mee. Samen maken we van uw project een succes.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Betrouwbaarheid</h3>
            <p>Afspraak is afspraak. U kunt rekenen op transparante communicatie en een vlekkeloos proces.</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p>Met meer dan 15 jaar ervaring zijn wij uw betrouwbare partner voor alle bouwprojecten. Van renovatie tot nieuwbouw, van kleine klussen tot grote projecten - wij staan voor kwaliteit en vakmanschap. Ons toegewijde team van professionals werkt nauw samen met u om uw wensen te realiseren, binnen budget en planning. Voor elk bouwproject bent u bij ons in vakkundige handen.</p>
        </div>
      </section>
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Wat doen wij?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold">Nieuwbouw</h4>
            <p>Van ontwerp tot realisatie bouwen wij uw droomhuis op maat.</p>
          </div>
          <div>
            <h4 className="font-bold">Renovatie & verbouwing</h4>
            <p>Wilt u uw woning moderniseren, uitbreiden of verbeteren? Wij zorgen voor een resultaat dat aan al uw wensen voldoet.</p>
          </div>
          <div>
            <h4 className="font-bold">Totaalprojecten</h4>
            <p>Van eerste schets tot de laatste afwerking nemen wij u al het werk uit uw handen.</p>
          </div>
          <div>
            <h4 className="font-bold">Herstelling en onderhoud</h4>
            <p>Van kleine reparaties tot het onderhoud van uw woning, wij bieden duurzame oplossingen.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Ontdek de voordelen van ons bedrijf</h2>
          <ul className="space-y-4">
            <li><strong>Persoonlijke begeleiding & communicatie:</strong> Onze vakkundige projectleiders houden u tijdens het hele bouwproces op de hoogte. Met korte lijnen en duidelijke communicatie weet u precies waar u aan toe bent.</li>
            <li><strong>Alles onder een dak:</strong> Van ontwerp tot oplevering verzorgen wij het complete traject. U heeft een aanspreekpunt voor alle bouwwerkzaamheden, wat zorgt voor een zorgeloze ervaring.</li>
            <li><strong>Kwaliteit tegen scherpe prijzen:</strong> Door onze jarenlange samenwerking met betrouwbare partners en leveranciers kunnen wij altijd de beste kwaliteit materialen en expertise garanderen tegen scherpe prijzen.</li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">Wat maakt ons de juiste partner voor jouw project?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold">Deskundige lokale kennis</h4>
            <p>Uitgebreide ervaring en inzicht in de lokale markt.</p>
          </div>
          <div>
            <h4 className="font-bold">Persoonlijke service</h4>
            <p>Oplossingen op maat voor een soepele, aangepaste ervaring.</p>
          </div>
          <div>
            <h4 className="font-bold">Bewezen staat van dienst</h4>
            <p>Een historie van talloze succesvolle projecten en tevreden klanten.</p>
          </div>
        </div>
      </section>
      <section className="bg-indigo-600 text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Samen bouwen aan uw toekomst</h2>
        <p className="mb-6">Heeft u plannen om te bouwen of verbouwen? Neem dan vandaag nog contact met ons op. Ons team staat klaar om uw ideeën werkelijkheid te maken.</p>
        <a href="/contact" className="bg-white text-indigo-600 py-3 px-6 rounded-lg font-semibold">Contacteer ons</a>
      </section>
    </Layout>
  );
}