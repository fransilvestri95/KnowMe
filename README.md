# CV web — Franco Silvestri

Estructura del repositorio (subí todo tal cual):

```
index.html                       ← la página
assets/styles.css                ← diseño
assets/app.js                    ← textos (ES/EN) y funcionamiento
assets/favicon.svg               ← ícono de la pestaña
img/                             ← foto, logos, Floralis, edificios, ilustraciones de voluntariado e ícono PDF (ya incluidos)
cv/CV FRANCO SILVESTRI 2026 (esp).pdf     ← agregalos desde Drive, sin cambiar el nombre
cv/CV FRANCO SILVESTRI 2026 (eng).pdf
cv/Carta - Franco Silvestri 2026.pdf
cv/Letter - Franco Silvestri 2026.pdf
```

Textos: se editan en `assets/app.js`, bloque `DATOS EDITABLES`.
Link directo en inglés: agregá `?lang=en` al final de la dirección.

## Seguridad
- Content-Security-Policy estricta: solo se ejecuta el código propio (`assets/app.js`); no hay scripts externos, ni código o estilos inline.
- Sin formularios, sin cookies, sin trackers ni llamadas a servidores externos (solo Google Fonts para la tipografía).
- Links externos con `rel="noopener noreferrer"` y política de referrer restringida.
- El mail no está escrito en el HTML (se arma en el navegador) para reducir spam de bots.
- En GitHub: Settings → Pages → tildá **Enforce HTTPS**.
