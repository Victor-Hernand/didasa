import './Home.css'

const WHATSAPP_NUMBER = '50497049138'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Tecnicentro%20DIDASA%20Tegucigalpa'

/** Íconos de trazo (24×24), mismo estilo que el resto del sitio. */
const ICONS = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3c-3 4.5-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-3-6.5-6-11z" />
      <path d="M9 15a3 3 0 0 0 3 3" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
    </>
  ),
  brake: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="7" r="1" />
      <circle cx="12" cy="17" r="1" />
      <circle cx="7" cy="12" r="1" />
      <circle cx="17" cy="12" r="1" />
    </>
  ),
  steering: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M3.5 11.5L9.5 13M20.5 11.5L14.5 13M12 14.5V21" />
    </>
  ),
  align: <path d="M4 8h16M4 16h16M8 5l-4 3 4 3M16 13l4 3-4 3" />,
  injector: <path d="M9 3h6v4H9zM10 7v8l2 3 2-3V7M12 18v3" />,
  battery: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z" />
  ),
}

const services = [
  { icon: 'clock', title: 'Mantenimiento preventivo', text: 'Cuidado periódico para acompañar el buen funcionamiento de tu vehículo.', href: '#cita' },
  { icon: 'drop', title: 'Cambios de lubricantes y filtros', text: 'Servicio de lubricantes, fluidos y filtros para el mantenimiento de tu auto.', href: '/cambio-de-lubricantes-fluidos-y-filtros/' },
  { icon: 'search', title: 'Diagnósticos mecánicos', text: 'Revisión técnica para entender el origen de los problemas de tu vehículo.', href: '/diagnosticos-mecanicos/' },
  { icon: 'brake', title: 'Frenos y rectificado', text: 'Servicio de frenos y rectificado de discos y tambores.', href: '/frenos-direccion-y-suspension/' },
  { icon: 'steering', title: 'Dirección y suspensión', text: 'Inspección y servicio de los sistemas de dirección y suspensión.', href: '/frenos-direccion-y-suspension/' },
  { icon: 'align', title: 'Alineamiento y balanceo', text: 'Atención especializada para la alineación y balanceo de tus ruedas.', href: '/alineamiento-y-balanceo/' },
  { icon: 'injector', title: 'Limpieza de inyectores', text: 'Servicio de limpieza para el sistema de inyección de tu automóvil.', href: '/limpieza-de-inyectores/' },
  { icon: 'battery', title: 'Encendido y batería', text: 'Revisión de batería y sistema de encendido.', href: '#cita' },
  { icon: 'wrench', title: 'Mecánica general', text: 'Mantenimiento correctivo, engrase y otros servicios para tu vehículo.', href: '#cita' },
]

const values = ['Servicio al cliente', 'Honestidad', 'Integridad', 'Profesionalismo', 'Competencia técnica']

const serviceOptions = [
  'Mantenimiento preventivo',
  'Cambio de lubricantes y filtros',
  'Diagnóstico mecánico',
  'Frenos',
  'Dirección y suspensión',
  'Alineamiento y balanceo',
  'Repuestos',
  'Otro servicio',
]

function handleBookingSubmit(event) {
  event.preventDefault()
  const form = new FormData(event.currentTarget)
  const msg = [
    'Hola, quiero coordinar una cita con DIDASA.',
    'Nombre: ' + form.get('name'),
    'Teléfono: ' + form.get('phone'),
    'Vehículo: ' + (form.get('vehicle') || 'No indicado'),
    'Servicio: ' + form.get('service'),
    'Detalle: ' + (form.get('details') || 'Sin detalle adicional'),
  ].join('\n')
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
}

function Home() {
  return (
    <div className="page-home mk-home">
      {/* =============================================== Hero */}
      <section className="mk-hero" id="inicio">
        <div className="mk-hero-photo" role="img" aria-label="Fotografía de un taller automotriz" />
        <div className="mk-container mk-hero-inner">
          <div className="mk-hero-copy">
            <span className="mk-eyebrow">Servicio automotriz integral · Distrito Central</span>
            <h1 className="mk-hero-title">
              Tu vehículo,
              <br />
              en manos que <em>sí saben.</em>
            </h1>
            <p className="mk-hero-lead">
              Mantenimiento, diagnóstico y reparación con atención personalizada y técnicos profesionales.
              Atendemos todas las marcas.
            </p>
            <div className="mk-hero-actions">
              <a className="mk-button mk-button-red" href="#cita">
                Agenda tu cita <span className="mk-arrow">↗</span>
              </a>
              <a className="mk-button mk-button-light" href="#servicios">
                Conoce los servicios <span className="mk-arrow">↓</span>
              </a>
            </div>
            <div className="mk-hero-note">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Soluciones para vehículos particulares y flotas.
            </div>
          </div>
          <div className="mk-hero-spacer">
            <div className="mk-hero-card">
              <small>Atención cercana. Trabajo profesional.</small>
              <p>Un servicio pensado para que sigas tu camino con confianza.</p>
            </div>
          </div>
        </div>
        <div className="mk-hero-bottom">
          <div className="mk-container mk-hero-stats">
            <div className="mk-hero-stat">
              <div className="mk-stat-icon">◎</div>
              <div>
                <b>Servicio integral</b>
                <span>Mantenimiento y reparación</span>
              </div>
            </div>
            <div className="mk-hero-stat">
              <div className="mk-stat-icon">✳</div>
              <div>
                <b>Técnicos profesionales</b>
                <span>Asesoría personalizada</span>
              </div>
            </div>
            <div className="mk-hero-stat">
              <div className="mk-stat-icon">⌖</div>
              <div>
                <b>Estamos en Tegucigalpa</b>
                <span>Colonia Villa Nueva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== Confianza */}
      <div className="mk-trust">
        <div className="mk-container mk-trust-grid">
          <div className="mk-trust-item">
            <span className="mk-trust-mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
            <div>
              <b>Todas las marcas</b>
              <span>Atención para tu vehículo</span>
            </div>
          </div>
          <div className="mk-trust-item">
            <span className="mk-trust-mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
            <div>
              <b>Asesoría experta</b>
              <span>Explicaciones claras</span>
            </div>
          </div>
          <div className="mk-trust-item">
            <span className="mk-trust-mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
            <div>
              <b>Equipos especializados</b>
              <span>Diagnóstico y servicio</span>
            </div>
          </div>
          <div className="mk-trust-item">
            <span className="mk-trust-mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
            <div>
              <b>Atención personalizada</b>
              <span>Para cada necesidad</span>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================== Servicios */}
      <section className="mk-section mk-services" id="servicios">
        <div className="mk-container">
          <div className="mk-heading-row">
            <div>
              <span className="mk-eyebrow">Lo que hacemos</span>
              <h2 className="mk-section-title">Un taller, muchas formas de ayudarte.</h2>
              <p className="mk-section-intro">
                Encuentra el servicio que necesitas y conversa con nuestro equipo para programar una revisión.
              </p>
            </div>
            <a className="mk-button mk-button-outline" href="#cita">
              Consultar mi caso <span className="mk-arrow">↗</span>
            </a>
          </div>
          <div className="mk-service-grid">
            {services.map((service, index) => (
              <a className="mk-service" href={service.href} key={service.title}>
                <span className="mk-service-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="mk-service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[service.icon]}
                  </svg>
                </div>
                <h3>{service.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================== Repuestos */}
      <section className="mk-parts" id="repuestos">
        <div className="mk-container mk-parts-grid">
          <div>
            <span className="mk-eyebrow">Todo en un mismo lugar</span>
            <h2>Repuestos, mantenimiento y reparación.</h2>
            <p>
              Atendemos todas las marcas y contamos con una amplia gama de repuestos y servicios. Escríbenos con
              los datos de tu vehículo para consultar disponibilidad.
            </p>
          </div>
          <div className="mk-parts-action">
            <a
              className="mk-button mk-button-red"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quisiera consultar por repuestos para mi vehículo.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Consultar repuestos <span className="mk-arrow">↗</span>
            </a>
            <small>Consulta por WhatsApp · +504 9704-9138</small>
          </div>
        </div>
      </section>

      {/* =============================================== Nosotros */}
      <section className="mk-section mk-about" id="nosotros">
        <div className="mk-container mk-about-grid">
          <div className="mk-about-photo-wrap">
            <img
              className="mk-about-photo"
              src="/assets/equipo-tecnicentro-home.jpg"
              alt="Equipo de Tecnicentro DIDASA"
              loading="lazy"
            />
            <div className="mk-photo-badge">
              <b>Seguridad y rendimiento</b>
              <span>Una misión que empieza cuidando tu vehículo.</span>
            </div>
          </div>
          <div className="mk-about-copy">
            <span className="mk-eyebrow">Conoce DIDASA</span>
            <h2 className="mk-section-title">Confianza que se construye en <em className="mk-accent">cada servicio.</em></h2>
            <p>
              Tecnicentro DIDASA es un centro de servicio automotriz integral especializado en mantenimiento,
              reparación e instalación de autopartes. Nos distinguimos por nuestra tecnología, técnicos
              profesionales y atención personalizada.
            </p>
            <p>
              Trabajamos para contribuir a la seguridad y el rendimiento de tu vehículo con calidad, ética y
              confiabilidad.
            </p>
            <ul className="mk-value-list">
              {values.map((value) => (
                <li key={value}>
                  <span className="mk-check">✓</span>
                  {value}
                </li>
              ))}
            </ul>
            <a className="mk-button mk-button-dark" href="/sobre-nosotros/">
              Conoce más de nosotros <span className="mk-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =============================================== Promociones */}
      <section className="mk-section mk-promos" id="promociones">
        <div className="mk-container">
          <div className="mk-promo-panel">
            <div className="mk-promo-photo" role="img" aria-label="Mecánico revisando la parte inferior de un vehículo" />
            <div>
              <span className="mk-promo-label">Promociones</span>
              <h3>¿Buscas una promoción para tu vehículo?</h3>
              <p>Consulta directamente con DIDASA las promociones vigentes y los detalles de cada servicio.</p>
            </div>
            <div className="mk-promo-action">
              <a className="mk-button mk-button-red" href="/promociones/">
                Ver promociones vigentes <span className="mk-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== Cita */}
      <section className="mk-section mk-booking" id="cita">
        <div className="mk-container mk-booking-grid">
          <div className="mk-booking-copy">
            <span className="mk-eyebrow">Haz tu cita</span>
            <h2 className="mk-section-title">Hablemos de lo que tu vehículo necesita.</h2>
            <p>
              Compártenos algunos detalles para iniciar la conversación. Te ayudaremos a coordinar una fecha y hora
              de atención.
            </p>
            <div className="mk-booking-aside">
              <span className="mk-wa-icon">◉</span>
              <div>
                <strong>Tu solicitud se envía por WhatsApp</strong>
                Esta página no guarda tus datos.
              </div>
            </div>
            <div className="mk-hours-card">
              <span className="mk-hours-title">Horario de atención</span>
              <div className="mk-hours-row">
                <span>Lunes a viernes</span>
                <b>8:00 a. m. – 5:00 p. m.</b>
              </div>
              <div className="mk-hours-row">
                <span>Sábado</span>
                <b>8:00 a. m. – 2:00 p. m.</b>
              </div>
              <div className="mk-hours-row">
                <span>Domingo</span>
                <b>Cerrado</b>
              </div>
            </div>
          </div>

          <form className="mk-booking-form" onSubmit={handleBookingSubmit}>
            <div className="mk-form-heading">
              <h3>Solicita una revisión</h3>
              <p>Completa los datos y continúa por WhatsApp.</p>
            </div>
            <div className="mk-form-row">
              <div className="mk-field">
                <label htmlFor="name">Tu nombre</label>
                <input id="name" name="name" autoComplete="name" placeholder="¿Cómo te llamas?" required />
              </div>
              <div className="mk-field">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Tu número de contacto" required />
              </div>
            </div>
            <div className="mk-form-row">
              <div className="mk-field">
                <label htmlFor="vehicle">Vehículo</label>
                <input id="vehicle" name="vehicle" placeholder="Marca y modelo" />
              </div>
              <div className="mk-field">
                <label htmlFor="service">Servicio que necesitas</label>
                <select id="service" name="service" defaultValue="Consulta general">
                  <option value="Consulta general">Selecciona un servicio</option>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mk-field">
              <label htmlFor="details">Cuéntanos brevemente</label>
              <textarea id="details" name="details" placeholder="Describe el problema o la fecha que te conviene (opcional)" />
            </div>
            <button className="mk-button mk-button-red mk-button-block" type="submit">
              <svg className="mk-wa-btn-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 5.4 5.4 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c0-.1-.2-.2-.4-.3z"/></svg>
              Continuar en WhatsApp <span className="mk-arrow">↗</span>
            </button>
            <p className="mk-form-note">La fecha y hora quedan sujetas a confirmación con el equipo DIDASA.</p>
          </form>
        </div>
      </section>

      {/* =============================================== Ubicación */}
      <section className="mk-section mk-contact" id="ubicacion">
        <div className="mk-container">
          <div className="mk-heading-row">
            <div>
              <span className="mk-eyebrow">Visítanos</span>
              <h2 className="mk-section-title">Estamos cerca para ayudarte.</h2>
              <p className="mk-section-intro">Encuéntranos en Colonia Villa Nueva, en el Anillo Periférico.</p>
            </div>
            <a className="mk-button mk-button-outline" href={MAPS_URL} target="_blank" rel="noreferrer">
              Abrir en Google Maps <span className="mk-arrow">↗</span>
            </a>
          </div>
          <div className="mk-contact-grid">
            <div className="mk-contact-list">
              <div className="mk-contact-card">
                <div className="mk-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </div>
                <div>
                  <b>Dirección</b>
                  <p className="mk-legal-name">TECNICENTRO DIDASA S. DE R.L. SUCURSAL ANILLO PERIFÉRICO</p>
                  <p>
                    Anillo Periférico, Col. Villa Nueva, antes de la entrada a la Kennedy; frente a la parada de
                    buses.
                  </p>
                </div>
              </div>
              <div className="mk-contact-card">
                <div className="mk-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <div>
                  <b>Horario de atención</b>
                  <p>
                    Lunes a viernes: 8:00 a. m. – 5:00 p. m.
                    <br />
                    Sábado: 8:00 a. m. – 2:00 p. m.
                    <br />
                    Domingo: cerrado
                  </p>
                </div>
              </div>
              <div className="mk-contact-card">
                <div className="mk-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <div>
                  <b>Llámanos o escríbenos</b>
                  <a href="tel:+50497049138">+504 9704-9138</a>
                  <a href="mailto:tecdidasa@gmail.com">tecdidasa@gmail.com</a>
                </div>
              </div>
            </div>
            <a className="mk-map-card" href={MAPS_URL} target="_blank" rel="noreferrer">
              <div className="mk-map-lines" aria-hidden="true" />
              <div className="mk-map-label">DIDASA · Colonia Villa Nueva</div>
              <div className="mk-map-pin">
                <span>D</span>
              </div>
              <div className="mk-map-cta">
                <div>
                  <b>¿Cómo llegar?</b>
                  <span>Consulta la ubicación en Google Maps</span>
                </div>
                <span className="mk-button mk-button-dark">Ver mapa ↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* =============================================== Referidos */}
      <section className="mk-section mk-referidos" id="referidos">
        <div className="mk-container">
          <div className="mk-referidos-panel">
            <div className="mk-ref-photo" role="img" aria-label="Técnico de Tecnicentro DIDASA revisando la parte inferior de un vehículo" />
            <span className="mk-promo-label">Programa de referidos</span>
            <h2>Refiere a más clientes y gana puntos.</h2>
            <p>
              Refiere a más clientes y obtén beneficios y descuentos. Por cada cliente que nos recomiendes,
              acumulas puntos que puedes canjear por descuentos.
            </p>
            <div className="mk-ref-steps">
              <article className="mk-ref-step">
                <span className="mk-ref-num">01</span>
                <h3>Refiere</h3>
                <p>Comparte tu experiencia con familiares, amigos o compañeros de trabajo.</p>
              </article>
              <article className="mk-ref-step">
                <span className="mk-ref-num">02</span>
                <h3>Ellos se atienden</h3>
                <p>Tu referido agenda su cita o solicita su cotización con nosotros.</p>
              </article>
              <article className="mk-ref-step">
                <span className="mk-ref-num">03</span>
                <h3>Acumula puntos</h3>
                <p>Por cada cliente que nos recomiendes, acumulas puntos que puedes canjear por descuentos.</p>
              </article>
            </div>
            <a className="mk-button mk-button-red" href="/contactenos/#calendario">
              Quiero referir <span className="mk-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
