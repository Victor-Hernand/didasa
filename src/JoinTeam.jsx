import SiteHeader from './components/SiteHeader.jsx'
import WhatsAppWidget from './components/WhatsAppWidget.jsx'
import PrivacyNotices from './components/PrivacyNotices.jsx'
import { socialLinks } from './socialLinks.js'

function JoinTeam({ path }) {
  return (
    <div id="page-container" className="join-team-page page-enter">
      <SiteHeader path={path} />
      <main className="join-team-main">
        <section className="join-team-hero">
          <div className="join-team-hero-inner">
            <h1>Únete a nuestro equipo</h1>
            <p>Sé parte de nuestra familia. Revisa nuestras vacantes y aplica en línea.</p>
          </div>
        </section>

        <section className="join-team-cta">
          <div className="join-team-cta-inner">
            <div className="join-team-cta-intro">
              <span className="join-team-line" />
              <h2>Trabaja <em>con nosotros</em></h2>
              <p>También puedes aplicar a nuestras vacantes en línea o seguir nuestras publicaciones de empleo.</p>
              <figure className="join-team-photo">
                <img src="/assets/join-team-mecanico.jpg" alt="Mecánico de Tecnicentro DIDASA revisando la parte inferior de un vehículo" loading="lazy" />
              </figure>
            </div>
            <div className="join-team-cta-links">
              <a href="https://recruit.capgrupo.com/aplicar" target="_blank" rel="noreferrer">
                <span className="join-team-cta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 0v6h6M8 13h8M8 17h5" /></svg>
                </span>
                <strong>Aplicar en línea</strong>
                <small>recruit.capgrupo.com/aplicar</small>
                <span aria-hidden="true">→</span>
              </a>
              <a href="https://www.linkedin.com/company/caphn/posts/?feedView=all" target="_blank" rel="noreferrer">
                <span className="join-team-cta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4zM8 10v6M8 7.5v.01M12 16v-6m0 3a2.5 2.5 0 0 1 5 0v3" /></svg>
                </span>
                <strong>Vacantes en LinkedIn</strong>
                <small>linkedin.com/company/caphn</small>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <PrivacyNotices />

      </main>
      <footer className="join-team-footer"><div className="join-team-footer-inner"><img src="/assets/didasa.png" alt="Tecnicentro DIDASA" /><div>{socialLinks.map((red) => (<a key={red.title} href={red.href} target="_blank" rel="noreferrer" aria-label={red.title}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={red.path} /></svg></a>))}</div><p>Copyright © tecdidasa.com</p></div></footer>
      <WhatsAppWidget />
    </div>
  )
}

export default JoinTeam
