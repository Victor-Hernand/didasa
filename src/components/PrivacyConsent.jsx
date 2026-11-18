import './Privacy.css'

/** Casilla de aceptación de la política de privacidad. El formulario no envía si no está marcada. */
function PrivacyConsent({ checked, onChange, purpose = 'atender mi solicitud', className = '' }) {
  return (
    <label className={`privacy-consent ${className}`.trim()}>
      <input type="checkbox" required checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span className="privacy-consent-text">
        <span className="privacy-consent-lead">
          <strong>He leído y acepto</strong> la <a href="/politica-de-privacidad" target="_blank" rel="noreferrer">Política de Privacidad y Uso de Datos</a> de Grupo CAP.
        </span>
        <span className="privacy-consent-purpose">Autorizo el tratamiento de mis datos para {purpose}.</span>
      </span>
    </label>
  )
}

export default PrivacyConsent
