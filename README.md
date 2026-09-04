# rominapitronello.github.io

Sitio personal de Romina Pitronello. HTML plano, un CSS, un JS de seis líneas para el idioma. Sin build, sin framework, sin rastreadores. GitHub Pages sirve `main` desde la raíz.

## Quién escribe qué

- El copy común (home, secciones, navegación) lo escribió una pluma Claude a partir de las fuentes de la casa PasaElFiltro, para que Romina lo edite. Lo que Romina cambie manda.
- La bio citada en `construccion/` es de Romina, verbatim.
- Las fichas de la galería en `casa/` son de sus autoras, verbatim, en español. No se editan.
- `casa/PERMISOS.md` registra, por obra, si su imagen puede mostrarse en este sitio. Cambiar un estado requiere firma y fecha.

## Cómo editar desde el teléfono

Cada página es un `index.html` dentro de su carpeta. El texto está dos veces: dentro de `<div class="es">` y de `<div class="en">` (o en `<span class="es">` / `<span class="en">`). Se edita el bloque del idioma que corresponda y se guarda; GitHub Pages publica en uno o dos minutos.

- El bloque **ahora** está en `index.html` y lleva la fecha en la primera línea.
- Los **escritos** se agregan como una `<li>` más en `escritos/index.html`.
- Para **encender una obra** en la galería: agregar la imagen en `casa/obras/`, anotar el permiso en `casa/PERMISOS.md`, y en `casa/index.html` reemplazar el párrafo `estado` de esa obra y agregar su `<figure>`.

## Procedencia

Propuesta y decisiones en `PasaElFiltro/pasaelfiltro`, PR #597 (`proyectos/sitio-romina/`). Generador de las páginas en `proyectos/sitio-romina/tools/build.py` de ese repo; este repo recibe sólo el HTML.
