
import React from "react";
import "../styles/arquitech.css";

const ROUTES = {
  auth: "/auth",
  app: "/app",
  orkio: "/orkio",
  patroai: "/patroai",
};

const steps = [
  {
    title: "Briefing estruturado",
    text: "ARIA organiza escopo, fase, área, cidade, cliente, prazo, documentos disponíveis e riscos iniciais.",
  },
  {
    title: "Contexto técnico preservado",
    text: "Cada conversa nasce com intenção de projeto, arquivos e histórico, reduzindo retrabalho e perda de informação.",
  },
  {
    title: "Checklist e documentação",
    text: "A plataforma prepara a base para checklists, relatórios, propostas e pacotes de submissão.",
  },
  {
    title: "Decisão profissional",
    text: "A Arquitech apoia análise e organização. A decisão final segue com o arquiteto ou escritório responsável.",
  },
];

const features = [
  {
    icon: "⌁",
    title: "Arquitetura assistida por IA",
    text: "Um ambiente feito para transformar informações dispersas em decisões, documentos e próximos passos claros.",
  },
  {
    icon: "□",
    title: "Projetos mais organizados",
    text: "Briefings, manuais, plantas, memoriais, fotos e orientações reunidos em uma jornada única.",
  },
  {
    icon: "◌",
    title: "Método para escritórios",
    text: "Fluxo pensado para comercial, corporativo, saúde, varejo, shopping centers e interiores profissionais.",
  },
];

const useCases = [
  ["Lojas e shopping centers", "Apoio a briefing, manual técnico, checklist de aprovação, escopo e documentação de obra."],
  ["Consultórios e clínicas", "Organização de requisitos funcionais, jornada do cliente, ambientes técnicos e padronização."],
  ["Escritórios corporativos", "Apoio à ocupação, estações, salas, fluxos, memorial e tomada de decisão."],
  ["Interiores comerciais", "Estruturação de conceito, referências, demandas, custos preliminares e fases de entrega."],
  ["Coordenação de complementares", "Preparação para interface com luminotécnico, elétrica, dados, climatização, segurança e PPCI."],
];

function rememberArquitechReturn() {
  const returnTo = "/app?source=arquitech&agent=aria";
  try {
    window.sessionStorage?.setItem("orkio:returnTo", returnTo);
    window.localStorage?.setItem("post_auth_redirect", returnTo);
    window.sessionStorage?.setItem("post_auth_redirect", returnTo);
  } catch {}
  return returnTo;
}

function goToAuth(mode = "register") {
  const returnTo = rememberArquitechReturn();
  const query = new URLSearchParams({
    mode,
    source: "arquitech",
    agent: "aria",
    product: "arquitech",
    onboarding: "1",
    returnTo,
  });

  window.location.href = `${ROUTES.auth}?${query.toString()}`;
}

function goToApp() {
  rememberArquitechReturn();
  window.location.href = "/app?source=arquitech&agent=aria&product=arquitech";
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ArquitechLogo() {
  return (
    <a className="arquitech-logo" href="/arquitech" aria-label="Arquitech">
      <img src="/arquitech-assets/logo-symbol.svg" alt="" />
      <div>
        <strong>ARQUITECH</strong>
        <span>Arquitetura assistida por IA</span>
      </div>
    </a>
  );
}

function Navbar() {
  return (
    <header className="arquitech-nav">
      <div className="arquitech-nav__inner">
        <ArquitechLogo />

        <nav className="arquitech-nav__links" aria-label="Navegação Arquitech">
          <a href="#como-funciona">Como funciona</a>
          <a href="#aplicacoes">Aplicações</a>
          <a href="#aria">ARIA</a>
          <a href={ROUTES.patroai}>PatroAI</a>
          <a href={ROUTES.orkio}>Orkio</a>
        </nav>

        <div className="arquitech-nav__actions">
          <button className="arquitech-btn arquitech-btn--ghost" type="button" onClick={() => goToAuth("login")}>
            Entrar
          </button>
          <button className="arquitech-btn arquitech-btn--primary" type="button" onClick={() => goToAuth("register")}>
            Começar
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroCard() {
  return (
    <aside className="arquitech-hero-card" id="aria" aria-label="Prévia da ARIA">
      <div className="arquitech-hero-card__top">
        <span className="arquitech-agent-badge">
          <span className="arquitech-agent-dot" />
          ARIA online
        </span>
        <span className="arquitech-card-label">Briefing inteligente</span>
      </div>

      <div className="arquitech-hero-card__body">
        <div className="arquitech-chat-bubble">
          Olá, eu sou a ARIA. Vamos estruturar seu projeto? Primeiro me diga: o espaço é comercial,
          corporativo, médico ou outro?
        </div>
        <div className="arquitech-chat-bubble arquitech-chat-bubble--user">
          É uma nova sede corporativa com áreas técnicas, recepção, salas de reunião e prazo curto.
        </div>
        <div className="arquitech-chat-bubble">
          Perfeito. Vou organizar fase, escopo, documentos, riscos e próximos passos. Você já possui planta,
          memorial, manual do prédio ou levantamento?
          <div className="arquitech-upload-strip" aria-label="Tipos de arquivos">
            <span>PDF</span>
            <span>Planta</span>
            <span>Manual</span>
            <span>Fotos</span>
          </div>
        </div>
      </div>

      <div className="arquitech-hero-card__footer">
        <div className="arquitech-mini-metric">
          <b>01</b>
          <span>Contexto técnico inicial</span>
        </div>
        <div className="arquitech-mini-metric">
          <b>02</b>
          <span>Checklist de continuidade</span>
        </div>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="arquitech-hero">
      <div className="arquitech-shell arquitech-hero__grid">
        <div>
          <span className="arquitech-kicker">Arquitetura + inteligência aplicada</span>
          <h1>
            Arquitetura assistida por <em>IA</em>.
          </h1>
          <p className="arquitech-hero__lead">
            A Arquitech organiza briefing, documentos, requisitos e decisões técnicas com a ARIA,
            uma agente criada para apoiar escritórios de arquitetura do conceito à documentação.
          </p>

          <div className="arquitech-hero__actions">
            <button className="arquitech-btn arquitech-btn--primary" type="button" onClick={() => goToAuth("register")}>
              Começar briefing com a ARIA
            </button>
            <button className="arquitech-btn arquitech-btn--ghost" type="button" onClick={() => scrollToId("como-funciona")}>
              Ver como funciona
            </button>
          </div>

          <div className="arquitech-trust-row">
            <div className="arquitech-trust-card">
              <strong>Briefing</strong>
              <span>perguntas técnicas para iniciar com clareza.</span>
            </div>
            <div className="arquitech-trust-card">
              <strong>Arquivos</strong>
              <span>base preparada para PDF, plantas, fotos e memoriais.</span>
            </div>
            <div className="arquitech-trust-card">
              <strong>Governança</strong>
              <span>apoio à decisão sem substituir responsabilidade técnica.</span>
            </div>
          </div>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="arquitech-section">
      <div className="arquitech-shell">
        <div className="arquitech-section__head">
          <h2>Uma camada premium sobre o Orkio.</h2>
          <p>
            A Arquitech nasce como uma vertical de arquitetura da PatroAI: visual próprio,
            experiência própria e agente especializada, preservando a base operacional do Orkio.
          </p>
        </div>

        <div className="arquitech-card-grid">
          {features.map((item) => (
            <article className="arquitech-feature-card" key={item.title}>
              <div className="arquitech-feature-card__icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="arquitech-disclaimer">
          <b>!</b>
          <div>
            <strong>Assistência, não substituição técnica.</strong>
            A Arquitech é uma plataforma de apoio à arquitetura, documentação, organização e tomada de decisão.
            A responsabilidade técnica, legal e contratual permanece com o profissional habilitado e com o
            escritório responsável pelo projeto.
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="arquitech-section arquitech-section--dark" id="como-funciona">
      <div className="arquitech-shell">
        <div className="arquitech-section__head">
          <h2>Do briefing ao próximo passo executável.</h2>
          <p>
            O primeiro frontend prepara a jornada. O backend poderá evoluir depois para persistência de projetos,
            geração de relatórios, checklists e ferramentas técnicas.
          </p>
        </div>

        <div className="arquitech-process">
          <div className="arquitech-process__visual">
            <img src="/arquitech-assets/logo-symbol.svg" alt="Monograma Arquitech" />
          </div>
          <div className="arquitech-steps">
            {steps.map((step, index) => (
              <article className="arquitech-step" key={step.title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="arquitech-section" id="aplicacoes">
      <div className="arquitech-shell">
        <div className="arquitech-section__head">
          <h2>Feita para projetos reais.</h2>
          <p>
            A interface foi pensada para escritórios que precisam transformar escopo, documentos e demandas
            complexas em uma sequência clara de trabalho.
          </p>
        </div>

        <div className="arquitech-usecase-grid">
          {useCases.map(([title, text]) => (
            <article className="arquitech-usecase" key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="arquitech-cta">
      <div className="arquitech-shell">
        <div className="arquitech-cta__box">
          <div className="arquitech-cta__content">
            <span className="arquitech-kicker">Efatà 777</span>
            <h2>Abra a primeira conversa com a ARIA.</h2>
            <p>
              Este frontend já nasce preparado para conectar ao backend atual por variável de ambiente.
              A próxima etapa será ajustar o console para pré-selecionar a ARIA e ativar o briefing estruturado.
            </p>
            <div className="arquitech-hero__actions">
              <button className="arquitech-btn arquitech-btn--primary" type="button" onClick={() => goToAuth("register")}>
                Criar acesso Arquitech
              </button>
              <button className="arquitech-btn arquitech-btn--ghost" type="button" onClick={goToApp}>
                Já tenho acesso
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="arquitech-footer">
      <div className="arquitech-footer__inner">
        <span>© {new Date().getFullYear()} Arquitech · PatroAI Consultech</span>
        <span>Arquitetura assistida por IA · Orkio como base operacional</span>
      </div>
    </footer>
  );
}

export default function ArquitechLanding() {
  return (
    <main className="arquitech-page">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
