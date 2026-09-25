const services = [
  ["Lāzerepilācija","DEKA Motus AX Moveo Aleksandrīta lāzers","no 10 €"],
  ["Sejas procedūras","Individuāli piemeklētas procedūras",""],
  ["Injekcijas","Biorevitalizācija un mezoterapija",""],
  ["Vaksācija","Ķermeņa zonas",""],
  ["Uzacu korekcija un krāsošana","Uzacu kopšana",""],
  ["Ausu caurduršana","Pieraksts studijā",""]
];
const prices=[["Paduses","40 €"],["Bikini klasiskais","35 €"],["Bikini dziļais","50 €"],["Paduses + bikini","100 €"],["Kājas visā garumā","165 €"]];

export default function Home(){
return <main>
<header className="nav">
  <a className="logo" href="#top">MŪNA<small>SKAISTUMA STUDIJA</small></a>
  <nav><a href="#services">Pakalpojumi</a><a href="#laser">Lāzerepilācija</a><a href="#studio">Par mums</a><a href="#contact">Kontakti</a></nav>
  <a className="navCta" href="#booking">Pierakstīties</a>
</header>

<section className="hero" id="top">
  <div className="heroCopy">
    <p className="eyebrow">SKAISTUMA STUDIJA LIMBAŽOS</p>
    <h1>Skaistumkopšana<br/>vienuviet Limbažos.</h1>
    <p className="lead">Lāzerepilācija, sejas procedūras, injekcijas, vaksācija, uzacu kopšana un ausu caurduršana.</p>
    <div className="heroActions"><a className="primary" href="#booking">Pierakstīties</a><a className="secondary" href="#services">Apskatīt pakalpojumus</a></div>
    <div className="facts"><div><span>ATRAŠANĀS VIETA</span><strong>Parka 18, Limbaži</strong></div><div><span>LĀZEREPILĀCIJA</span><strong>DEKA Motus AX Moveo</strong></div></div>
  </div>
  <div className="heroPhoto"><div className="photoPlaceholder"><span>MŪNA FOTO</span><small>šeit ievietosim īsto studijas / procedūras foto</small></div></div>
</section>

<section className="services" id="services">
  <div className="sectionIntro"><div><p className="eyebrow">PAKALPOJUMI</p><h2>Atrodi sev vajadzīgo.</h2></div><p>Izvēlies pakalpojumu, apskati svarīgāko informāciju un dodies uz pierakstu bez liekiem soļiem.</p></div>
  <div className="serviceGrid">{services.map(([title,desc,price])=><a className="serviceCard" href="#booking" key={title}><div><h3>{title}</h3><p>{desc}</p></div><div className="cardBottom"><span>{price}</span><b>Skatīt →</b></div></a>)}</div>
</section>

<section className="laser" id="laser">
  <div className="laserPhoto"><div className="laserPlaceholder">DEKA<small>īsts iekārtas / procedūras foto</small></div></div>
  <div className="laserCopy"><p className="eyebrow">LĀZEREPILĀCIJA</p><h2>DEKA Motus AX Moveo</h2><p className="laserLead">Lāzerepilācija MŪNA studijā ar Aleksandrīta lāzera tehnoloģiju. Izvēlies zonu, redzi cenu un piesakies vizītei.</p><div className="priceList">{prices.map(([name,price])=><div className="price" key={name}><span>{name}</span><strong>{price}</strong></div>)}</div><div className="laserActions"><a className="primary lightButton" href="#booking">Pierakstīties</a><a className="laserLink" href="#services">Visas cenas →</a></div></div>
</section>

<section className="studio" id="studio">
 <div className="studioCopy"><p className="eyebrow">PAR MŪNA</p><h2>Skaistuma studija, kur viss ir saprotami.</h2><p>MŪNA apvieno vairākus skaistumkopšanas pakalpojumus vienā vietā Limbažos. Mājaslapā vari atrast pakalpojumu, cenu un ērtāko ceļu līdz pierakstam.</p></div>
 <div className="studioPhotos"><div>MŪNA STUDIJA</div><div>KOMANDA / PROCEDŪRA</div></div>
</section>

<section className="booking" id="booking"><div><p className="eyebrow">PIERAKSTS</p><h2>Gatava vizītei?</h2><p>Izvēlies pakalpojumu un piesaki sev piemērotu laiku.</p></div><a className="bookingCta" href="tel:+37126387899">Pierakstīties <span>→</span></a></section>

<footer id="contact"><a className="logo footerLogo" href="#top">MŪNA<small>SKAISTUMA STUDIJA</small></a><div><span>ADRESE</span><p>Parka 18, Limbaži</p></div><div><span>TELEFONS</span><p><a href="tel:+37126387899">+371 2 6387899</a></p></div><div><span>SOCIĀLIE TĪKLI</span><p><a href="https://www.facebook.com/salonsmuna/">Facebook ↗</a></p></div></footer>
</main>}