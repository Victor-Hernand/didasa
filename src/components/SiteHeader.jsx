import { useState } from 'react'
import './SiteHeader.css'
import { normalizePath } from '../router.js'

const WHATSAPP_CITA =
  'https://api.whatsapp.com/send?phone=50497049138&text=Hola%2C%20quisiera%20agendar%20una%20cita.'

const menuItems = [
  { label: 'Sobre Nosotros', href: '/sobre-nosotros/' },
  {
    label: 'Servicios',
    href: '#',
    children: [
      { label: 'Repuestos', href: '/repuestos/' },
      { label: 'Cambio de lubricantes, fluidos y filtros', href: '/cambio-de-lubricantes-fluidos-y-filtros/' },
      { label: 'Diagnósticos Mecánicos', href: '/diagnosticos-mecanicos/' },
      { label: 'Frenos, Dirección y Suspensión', href: '/frenos-direccion-y-suspension/' },
      { label: 'Alineamiento y Balanceo', href: '/alineamiento-y-balanceo/' },
      { label: 'Flush y Aditivos', href: '/flush-y-aditivos/' },
      { label: 'Limpieza de Inyectores', href: '/limpieza-de-inyectores/' },
      { label: 'Enderezado y Pintura', href: '/enderezado-y-pintura/' },
    ],
  },
  { label: 'Promociones', href: '/promociones/' },
  { label: 'Cotizar', href: '/cotizar/' },
  { label: 'Contacto', href: '/contactenos/' },
  { label: 'Únete al equipo', href: '/unete-al-equipo/' },
]

function SiteHeader({ path }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const isCurrent = (item) => {
    if (normalizePath(item.href) === path) return true
    return Boolean(item.children?.some((child) => normalizePath(child.href) === path))
  }

  return (
    <header className="sh-header">
      <div className="sh-topbar">
        <div className="sh-container sh-topbar-inner">
          <div className="sh-top-links">
            <a href="tel:+50497049138">
              Llámanos: <strong>+504 9704-9138</strong>
            </a>
            <a className="sh-email" href="mailto:tecdidasa@gmail.com">
              tecdidasa@gmail.com
            </a>
          </div>
          <a className="sh-top-cta" href={WHATSAPP_CITA} target="_blank" rel="noopener">
            Agenda tu visita <span className="sh-arrow">↗</span>
          </a>
        </div>
      </div>

      <nav className="sh-container sh-nav" aria-label="Navegación principal">
        <a className="sh-brand" href="/" aria-label="Tecnicentro DIDASA, inicio">
          <img src="/assets/didasa.png" alt="Logotipo de DIDASA" />
          <span className="sh-brand-caption">
            <b>TECNICENTRO DIDASA</b>
            <span>Servicio automotriz integral</span>
          </span>
        </a>

        <ul className="sh-links">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`sh-item${item.children ? ' sh-has-children' : ''}${isCurrent(item) ? ' sh-current' : ''}`}
            >
              <a href={item.href}>
                {item.label}
                {item.children && <span className="sh-chevron" aria-hidden="true">⌄</span>}
              </a>
              {item.children && (
                <ul className="sh-sub">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a href={child.href}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <a className="sh-button" href={WHATSAPP_CITA} target="_blank" rel="noopener">
          Reservar una cita <span className="sh-arrow">↗</span>
        </a>

        <button
          type="button"
          className="sh-toggle"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? '×' : '☰'}
        </button>

        {mobileOpen && (
          <ul className="sh-mobile">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
                {item.children &&
                  item.children.map((child) => (
                    <a
                      key={child.label}
                      className="sh-mobile-child"
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default SiteHeader
