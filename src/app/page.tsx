const services = [
  { no:"01", title:"Lāzerepilācija", meta:"DEKA Motus AX Moveo", note:"Sievietēm un vīriešiem", price:"no 10 €" },
  { no:"02", title:"Sejas procedūras", meta:"Individuāli piemeklēta kopšana", note:"Sejai", price:"" },
  { no:"03", title:"Injekcijas", meta:"Biorevitalizācija · Mezoterapija", note:"Sejai", price:"" },
  { no:"04", title:"Vaksācija", meta:"Skaistumkopšanas procedūras", note:"Ķermenim", price:"" },
  { no:"05", title:"Uzacis", meta:"Korekcija · Krāsošana", note:"Sejai", price:"" },
  { no:"06", title:"Ausu caurduršana", meta:"Pieraksts studijā", note:"", price:"" },
];

const laserPrices = [
  ["Bikini klasiskais", "35 €"],
  ["Bikini dziļais", "50 €"],
  ["Paduses", "40 €"],
  ["Paduses + bikini", "100 €"],
  ["Kājas visā garumā", "165 €"],
];

export default function Home() {
  return <main>
    <header className="nav">
      <a className="logo" href="#top" aria-label="MŪNA sākums">MŪNA<small>SKAISTUMA STUDIJA</small></a>
      <nav className="navlinks">
        <a href="#services">Pakalpojumi</a>
        <a href="#laser">Lāzerepilācija</a>
        <a href="#studio">Studija</a>
        <a href="#contact">Kontakti</a>
      </nav>
      <a className="book bookTop" href="#booking">Pierakstīties <span>↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="heroMain">
        <p className="kicker">SKAISTUMA STUDIJA · LIMBAŽI</p>
        <h1>MŪNA</h1>
        <div className="heroBottom">
          <p className="heroText">Skaistumkopšana bez liekā.<br/>Procedūras, kurām vari uzticēties.</p>
          <a className="roundArrow" href="#services" aria-label="Skatīt pakalpojumus">↓</a>
        </div>
      </div>
      <aside className="heroAside">
        <div className="imageSlot">
          <span>01</span>
          <p>STUDIJAS FOTO</p>
        </div>
        <div className="heroAsideBottom">
          <p>Parka 18<br/>Limbaži</p>
          <p>+371 2 6387899</p>
        </div>
      </aside>
    </section>

    <section className="services section" id="services">
      <div className="sectionLabel"><span>01</span><p>PAKALPOJUMI</p></div>
      <div className="servicesIntro">
        <h2>Izvēlies to,<br/>kas vajadzīgs tev.</h2>
        <p>Vienuviet sejas un ķermeņa procedūras, lāzerepilācija un ikdienas skaistumkopšana.</p>
      </div>
      <div className="serviceRows">
        {services.map((service) => (
          <a className="serviceRow" href="#booking" key={service.no}>
            <span className="serviceNo">{service.no}</span>
            <div className="serviceTitle"><h3>{service.title}</h3><p>{service.meta}</p></div>
            <span className="serviceNote">{service.note}</span>
            <span className="servicePrice">{service.price}</span>
            <span className="serviceArrow">↗</span>
          </a>
        ))}
      </div>
    </section>

    <section className="laser" id="laser">
      <div className="laserVisual">
        <span className="visualIndex">02</span>
        <div className="deviceWord">DEKA</div>
        <p>DEKA MOTUS AX MOVEO<br/>ALEKSANDRĪTA LĀZERS</p>
      </div>
      <div className="laserContent">
        <div className="sectionLabel light"><span>02</span><p>LĀZEREPILĀCIJA</p></div>
        <h2>Tehnoloģija,<br/>nevis solījumi.</h2>
        <p className="laserLead">MŪNA lāzerepilācijas procedūrām izmanto DEKA Motus AX Moveo Aleksandrīta lāzeri.</p>
        <div className="priceList">
          {laserPrices.map(([name,price]) => <div className="priceLine" key={name}><span>{name}</span><strong>{price}</strong></div>)}
        </div>
        <div className="laserActions"><a href="#booking">Pierakstīties <span>↗</span></a><a href="#services">Visas zonas un cenas</a></div>
      </div>
    </section>

    <section className="studio section" id="studio">
      <div className="sectionLabel"><span>03</span><p>MŪNA</p></div>
      <div className="studioGrid">
        <div className="studioStatement"><h2>Vieta sev.<br/><em>Bez steigas.</em></h2></div>
        <div className="studioCopy"><p>MŪNA ir skaistuma studija Limbažos. Mūsu fokuss ir vienkāršs — profesionāls pakalpojums, skaidra izvēle un patīkama pieredze no pieraksta līdz vizītes beigām.</p><a href="#contact">Atrast studiju ↗</a></div>
      </div>
      <div className="photoStrip"><div><span>STUDIJA</span></div><div><span>PROCEDŪRAS</span></div><div><span>KOMANDA</span></div></div>
    </section>

    <section className="booking" id="booking">
      <div className="bookingTop"><span>04</span><p>PIERAKSTS</p></div>
      <h2>Izvēlies procedūru.<br/>Atrodi savu laiku.</h2>
      <div className="bookingBottom">
        <p>Pirmajā versijā pierakstu savienosim ar studijas izvēlēto rezervācijas sistēmu.</p>
        <a className="bookLarge" href="tel:+37126387899">Pierakstīties <span>↗</span></a>
      </div>
    </section>

    <footer id="contact">
      <div className="footerLogo">MŪNA<small>SKAISTUMA STUDIJA</small></div>
      <div><span>ADRESE</span><p>Parka 18, Limbaži</p></div>
      <div><span>SAZINĀTIES</span><p><a href="tel:+37126387899">+371 2 6387899</a><br/><a href="https://www.facebook.com/salonsmuna/">Facebook ↗</a></p></div>
      <div className="footerEnd"><span>© 2026 MŪNA</span><a href="#top">Uz augšu ↑</a></div>
    </footer>
  </main>;
}