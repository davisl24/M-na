const services = [
  ["Lāzerepilācija", "DEKA Motus AX Moveo Aleksandrīta lāzers"],
  ["Sejas procedūras", "Profesionāla sejas ādas kopšana"],
  ["Injekcijas", "Biorevitalizācija un mezoterapija"],
  ["Vaksācija", "Skaistumkopšanas procedūras"],
  ["Uzacis", "Korekcija un krāsošana"],
  ["Ausu caurduršana", "Profesionāls pakalpojums"],
];

const prices = [["Paduses","40 €"],["Bikini klasiskais","35 €"],["Bikini dziļais","50 €"],["Kājas visā garumā","165 €"]];

export default function Home() {
  return <main>
    <header>
      <a className="brand" href="#">MŪNA<span>SKAISTUMA STUDIJA</span></a>
      <nav><a href="#services">Pakalpojumi</a><a href="#about">Par mums</a><a href="#contact">Kontakti</a></nav>
      <a className="button small" href="#booking">Pierakstīties</a>
    </header>

    <section className="hero">
      <div>
        <p className="eyebrow">SKAISTUMA STUDIJA LIMBAŽOS</p>
        <h1>Skaistums, kas sākas ar sajūtu.</h1>
        <p className="lead">Mūsdienīgas skaistumkopšanas procedūras mierpilnā vidē Limbažos.</p>
        <div className="actions"><a className="button" href="#booking">Pierakstīties</a><a className="link" href="#services">Apskatīt pakalpojumus →</a></div>
      </div>
      <div className="visual">MŪNA<span>VIETA ĪSTAJAM FOTO</span></div>
    </section>

    <section id="services" className="section">
      <p className="eyebrow">PAKALPOJUMI</p>
      <div className="sectionHead"><h2>Rūpes par tevi,<br/>vienuviet.</h2><p>No ikdienas skaistumkopšanas līdz mūsdienīgām estētiskajām procedūrām.</p></div>
      {services.map((s,i)=><a className="service" href="#booking" key={s[0]}><span>0{i+1}</span><div><h3>{s[0]}</h3><p>{s[1]}</p></div><b>↗</b></a>)}
    </section>

    <section className="laser">
      <div><p className="eyebrow">LĀZEREPILĀCIJA</p><h2>DEKA Motus<br/>AX Moveo</h2><p>Profesionāla lāzerepilācija ar Aleksandrīta lāzera tehnoloģiju MŪNA skaistuma studijā.</p><a className="link" href="#booking">Pierakstīties →</a></div>
      <div><p className="eyebrow">POPULĀRĀKĀS ZONAS</p>{prices.map(p=><div className="price" key={p[0]}><span>{p[0]}</span><strong>{p[1]}</strong></div>)}<a className="link" href="#services">Apskatīt visas cenas →</a></div>
    </section>

    <section id="about" className="about section">
      <div><p className="eyebrow">PAR MŪNA</p><h2>Vieta, kur vari veltīt laiku sev.</h2></div>
      <div className="copy"><p>MŪNA ir skaistuma studija Limbažos, kur vienuviet pieejamas mūsdienīgas skaistumkopšanas procedūras un individuāla pieeja.</p><p>Šeit svarīgs ir ne tikai rezultāts, bet arī sajūta visā apmeklējuma laikā.</p></div>
    </section>

    <section className="quote"><p>“Vieta, kurā gribas atgriezties.”</p><span>MŪNA · LIMBAŽI</span></section>

    <section id="booking" className="booking"><p className="eyebrow">PIERAKSTS</p><h2>Laiks sev.</h2><p>Izvēlies sev piemērotāko procedūru un piesaki savu apmeklējumu.</p><a className="button" href="tel:+37126387899">Pierakstīties</a></section>

    <footer id="contact"><a className="brand" href="#">MŪNA<span>SKAISTUMA STUDIJA</span></a><div>Parka 18, Limbaži<br/><a href="tel:+37126387899">+371 2 6387899</a></div><div><a href="https://www.facebook.com/salonsmuna/">Facebook</a><br/>© 2026 MŪNA</div></footer>
  </main>;
}