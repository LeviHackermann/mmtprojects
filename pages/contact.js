export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      <p>Neem contact met ons op via onderstaand formulier.</p>
      <form>
        <label>
          Naam:
          <input type="text" name="naam" />
        </label><br />
        <label>
          E-mail:
          <input type="email" name="email" />
        </label><br />
        <label>
          Bericht:
          <textarea name="bericht"></textarea>
        </label><br />
        <button type="submit">Verzenden</button>
      </form>
    </main>
  );
}