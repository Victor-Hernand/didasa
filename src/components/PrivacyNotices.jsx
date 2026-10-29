import './Privacy.css'

const securityNotices = [
  'Conexión cifrada (HTTPS) en todo el sitio.',
  'Acceso a sus datos restringido al personal autorizado, con respaldos periódicos.',
  'Si ocurriera un incidente que afecte sus datos, le informaremos en un plazo máximo de 72 horas desde que lo confirmemos.',
  'No incluya datos sensibles (salud, religión, afiliación política) en su currículum; si lo hace, no se usarán para la selección.',
]

function PrivacyNotices() {
  return (
    <section className="privacy-notices" id="aviso-de-privacidad">
      <div className="privacy-notices-inner">
        <div className="privacy-notices-intro">
          <span className="privacy-line" />
          <h2>Aviso de <em>privacidad</em></h2>
          <p className="privacy-draft">
            Borrador en revisión por Legal y Talento Humano. No publicar hasta que los campos entre corchetes estén confirmados.
          </p>
          <p>
            Este aviso resume cómo tratamos sus datos personales en Grupo Empresarial CAP. La política completa explica el detalle y cómo ejercer sus derechos.
          </p>
        </div>

        <div className="privacy-notices-grid">
          <article className="privacy-card">
            <span className="privacy-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
            </span>
            <h3>Para visitantes del sitio</h3>
            <p>
              Aviso de privacidad. Grupo Empresarial CAP (Honduras) es responsable de los datos personales que recopila en este sitio.
            </p>
            <p>
              No usamos cookies publicitarias ni de terceros, y no vendemos ni cedemos sus datos a terceros, salvo a proveedores que operan el sitio bajo confidencialidad o por requerimiento legal.
            </p>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición escribiendo a <a href="mailto:s.merci@cap.hn">s.merci@cap.hn</a>. Consulte la Política de Privacidad y Uso de Datos completa.
            </p>
          </article>

          <article className="privacy-card">
            <span className="privacy-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" /></svg>
            </span>
            <h3>Para candidatos</h3>
            <p>
              Grupo Empresarial CAP (Honduras) recopila los datos que usted ingresa en este formulario y los de su currículum vitae con el único fin de evaluar su aplicación a las vacantes de las empresas del grupo y considerarlo para vacantes futuras.
            </p>
            <p>
              Sus datos serán vistos solo por Recursos Humanos y las jefaturas responsables de la vacante, y se registran en la plataforma de gestión de talento con la que trabajamos, bajo confidencialidad. Conservaremos su expediente por 12 meses; si es contratado, pasará a su expediente laboral.
            </p>
            <p>
              No incluya en su currículum datos sensibles (salud, religión, afiliación política); si lo hace, no se usarán para la selección. Puede solicitar acceso, corrección o eliminación de sus datos en cualquier momento escribiendo a <a href="mailto:s.merci@cap.hn">s.merci@cap.hn</a>.
            </p>
            <p>
              Al enviar este formulario acepta la Política de Privacidad y Uso de Datos de Grupo CAP.
            </p>
          </article>

          <article className="privacy-card privacy-card-security">
            <span className="privacy-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
            </span>
            <h3>Avisos de seguridad</h3>
            <ul>
              {securityNotices.map((notice) => (
                <li key={notice}>{notice}</li>
              ))}
            </ul>
          </article>

          <article className="privacy-card privacy-card-link">
            <span className="privacy-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 0v6h6M8 13h8M8 17h5" /></svg>
            </span>
            <h3>Política completa</h3>
            <p>
              Consulte la Política de Privacidad y Uso de Datos de Grupo CAP, que explica con detalle qué datos recopilamos, con quién los compartimos, cuánto tiempo los conservamos y cómo ejercer sus derechos.
            </p>
            <a className="privacy-link" href="/politica-de-privacidad">Leer política completa <span aria-hidden="true">→</span></a>
          </article>
        </div>

        <p className="privacy-updated">Última actualización: 27 de octubre de 2026</p>
      </div>
    </section>
  )
}

export default PrivacyNotices
