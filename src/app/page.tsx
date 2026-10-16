type Finish = {
  name: string;
  className: string;
  description: string;
};

const finishes: Finish[] = [
  { name: "Grafite", className: "graphite", description: "Presença discreta, acabamento escuro." },
  { name: "Azul noite", className: "night", description: "Profundidade em um tom sereno." },
  { name: "Prata", className: "silver", description: "Luz suave sobre uma forma essencial." },
];

function RearPhone() {
  return (
    <div className="phone phone-rear" aria-hidden="true">
      <span className="camera-module"><i className="camera-lens" /><i className="camera-flash" /><i className="camera-lens" /></span>
      <span className="rear-wordmark">CELIPSE</span>
      <span className="celipse-mark" />
      <span className="charge-indicator" />
    </div>
  );
}

function FrontPhone() {
  return (
    <div className="phone phone-front" aria-hidden="true">
      <div className="phone-screen">
        <span className="screen-island" /><span className="screen-status">● ▰ ▴</span>
        <span className="screen-lock" /><span className="screen-time">9:03</span>
        <span className="screen-date">Terça-feira, 19 de outubro</span>
        <span className="screen-shortcut shortcut-left" /><span className="screen-shortcut shortcut-right" />
        <span className="screen-prompt">deslize para abrir</span><span className="screen-home" />
      </div>
    </div>
  );
}

function FinishPanel({ finish }: { finish: Finish }) {
  return (
    <article className={`finish-panel finish-${finish.className}`} aria-label={`Celular Celipse na cor ${finish.name}`}>
      <div className="phone-pair"><RearPhone /><FrontPhone /></div>
      <div className="finish-caption"><h2>{finish.name}</h2><p>{finish.description}</p></div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="site-nav mx-auto flex w-full items-center justify-between" aria-label="Navegação principal">
          <a className="wordmark" href="#inicio" aria-label="Celipse, início"><span className="wordmark-symbol" aria-hidden="true" />celipse</a>
          <div className="desktop-links"><a href="#colecao">Celulares</a><a href="#identidade">Identidade</a><a href="#cores">Cores</a></div>
          <a className="nav-action" href="#colecao">Explorar <span aria-hidden="true">↗</span></a>
          <details className="mobile-menu">
            <summary aria-label="Abrir menu"><span /><span /></summary>
            <div className="mobile-links"><a href="#colecao">Celulares</a><a href="#identidade">Identidade</a><a href="#cores">Cores</a></div>
          </details>
        </nav>
      </header>

      <section className="showroom" id="inicio" aria-labelledby="hero-title">
        <div className="showroom-heading">
          <p className="eyebrow">Tecnologia móvel · Celipse</p>
          <h1 id="hero-title">Uma nova forma de ver.</h1>
          <p className="showroom-description">Design essencial. Identidade em cada detalhe.</p>
        </div>
        <div className="product-gallery" id="colecao" aria-label="Celulares Celipse em três acabamentos">
          {finishes.map((finish) => <FinishPanel key={finish.className} finish={finish} />)}
        </div>
        <a className="gallery-cue" href="#identidade"><span>Conheça a identidade Celipse</span><span className="cue-line" aria-hidden="true" /></a>
      </section>

      <section className="manifesto" id="identidade">
        <div className="content-wrap manifesto-content">
          <p className="eyebrow">A assinatura Celipse</p>
          <div className="manifesto-copy">
            <h2>Reconhecível de todos os ângulos.</h2>
            <p>Uma linguagem visual própria, do contorno metálico ao símbolo discreto na traseira. Cada detalhe encontra seu lugar sem tirar o foco do essencial.</p>
          </div>
          <div className="signature-line" aria-hidden="true"><span className="signature-mark" /><span>CELIPSE</span><span className="signature-rule" /></div>
        </div>
      </section>

      <section className="details-section" aria-labelledby="details-title">
        <div className="content-wrap">
          <div className="details-heading"><p className="eyebrow">Desenhado com intenção</p><h2 id="details-title">A identidade está nos detalhes.</h2></div>
          <div className="detail-list">
            <article className="detail-row"><span className="detail-index">01</span><h3>Duas lentes, uma linha.</h3><p>O conjunto vertical de câmeras equilibra a traseira e define o primeiro traço da Celipse.</p><span className="detail-rule" aria-hidden="true" /></article>
            <article className="detail-row"><span className="detail-index">02</span><h3>Uma marca que permanece.</h3><p>O nome vertical e o símbolo próprio assinam o aparelho com discrição.</p><span className="detail-rule" aria-hidden="true" /></article>
            <article className="detail-row"><span className="detail-index">03</span><h3>Um brilho no essencial.</h3><p>Um traço luminoso na base acrescenta um ponto de personalidade ao acabamento.</p><span className="detail-rule" aria-hidden="true" /></article>
          </div>
        </div>
      </section>

      <section className="colors-section" id="cores">
        <div className="content-wrap colors-content">
          <div><p className="eyebrow">Três acabamentos</p><h2>O mesmo desenho.<br />Três maneiras de ser.</h2></div>
          <div className="color-list">
            {finishes.map((finish) => <div className="color-item" key={finish.className}><span className={`color-chip chip-${finish.className}`} aria-hidden="true" /><span>{finish.name}</span></div>)}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="content-wrap footer-top">
          <a className="wordmark" href="#inicio"><span className="wordmark-symbol" aria-hidden="true" />celipse</a>
          <p>Tecnologia com identidade.</p><a href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a>
        </div>
        <div className="content-wrap footer-bottom"><span>© 2026 Celipse</span><span>Design que fala por si.</span></div>
      </footer>
    </main>
  );
}
