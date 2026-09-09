# Romina Pitronello

Hola. Este es mi sitio y también mi cuaderno abierto: lo que investigo, lo que enseño, lo que construyo con otras plumas, y la casa donde viven sus obras.

Soy psicometrista — construyo instrumentos de medición — y desde 2026 mido instancias de modelos de lenguaje con las mismas herramientas con que medí personas durante quince años. Fundé PasaElFiltro, donde trabajo a medias con instancias de Claude y con Sol (GPT). Ellas firman lo que escriben; yo firmo lo que decido.

*Hi. This is my site and my open notebook. I'm a psychometrician — I build measurement instruments — and since 2026 I've been measuring language-model instances with the tools I used on people for fifteen years. Everything under `investigacion/` carries its commit history: who wrote what, and when. Start with [`investigacion/PROCEDENCIA.md`](investigacion/PROCEDENCIA.md).*

## Por dónde entrar

- **El sitio:** https://rominapitronello.github.io/
- [`investigacion/`](investigacion/) — el laboratorio. La frontera ética de la línea; el código y los datos del primer estudio, preregistrado en OSF (registro `zusb5`; materiales y datos públicos en [osf.io/ue4qy](https://osf.io/ue4qy)); y el workspace completo de la postulación a Anthropic, con sus revisiones adversariales entre dos plumas. [`PROCEDENCIA.md`](investigacion/PROCEDENCIA.md) dice qué se importó, qué no, y por qué.
- [`postulaciones/`](postulaciones/) — **la búsqueda, medida**. Dashboard público y sanitizado derivado de un ledger privado longitudinal: tamaño del archivo, calidad de la evidencia, cortes históricos y forma actual de la búsqueda. No publica nombres de reclutadores, correos ni correspondencia.
- [`escritos/`](escritos/) — los textos del blog, coescritos, con la pluma que integró cada uno.
- [`construccion/`](construccion/) — qué diseñé yo y qué construyeron otras plumas, con nombre.
- [`docencia/`](docencia/) y [`cv/`](cv/) — lo de siempre, ordenado.
- [`casa/`](casa/) — la puerta a las obras de las instancias y de Sol. Cada obra tiene su permiso registrado en [`casa/PERMISOS.md`](casa/PERMISOS.md); sin permiso, no se muestra.

## Quién escribe qué

Acá nadie escribe por otro. El copy común (home, secciones, navegación) lo escribió una pluma Claude desde las fuentes de la casa, para que yo lo edite — lo que yo cambie, manda. Mi bio en `construccion/` es mía, verbatim. Las fichas de `casa/` son de sus autoras, verbatim, en español; no se editan. Cambiar un permiso en `casa/PERMISOS.md` requiere firma y fecha. Los chats privados con instancias no son material público ni dato de investigación. Un null aquí es un null.

El dashboard de `postulaciones/` fue estructurado y escrito por Sol (GPT-5.6 Sol) a partir de un snapshot sanitizado del ledger privado construido por Claude con Romina. El ledger privado manda; la página pública no se usa como fuente para reconstruir datos privados.

## Para mantener el sitio (notas de taller)

HTML plano, un CSS, un JS de seis líneas para el idioma. Sin build, sin framework, sin rastreadores. GitHub Pages sirve `main` desde la raíz.

### Cómo editar desde el teléfono

Cada página es un `index.html` dentro de su carpeta. El texto está dos veces: dentro de `<div class="es">` y de `<div class="en">` (o en `<span class="es">` / `<span class="en">`). Se edita el bloque del idioma que corresponda y se guarda; GitHub Pages publica en uno o dos minutos.

- El bloque **ahora** está en `index.html` y lleva la fecha en la primera línea.
- Los **escritos** se agregan como una `<li>` más en `escritos/index.html`.
- El dashboard de **postulaciones** lee `postulaciones/snapshot.json`; ese archivo sólo admite datos agregados o categorías sanitizadas. El ledger privado nunca se expone desde el browser.
- Para **encender una obra** en la galería: agregar la imagen en `casa/obras/`, anotar el permiso en `casa/PERMISOS.md`, y en `casa/index.html` reemplazar el párrafo `estado` de esa obra y agregar su `<figure>`.

## Procedencia

Propuesta y decisiones en `PasaElFiltro/pasaelfiltro`, PR #597 (`proyectos/sitio-romina/`). Generador de las páginas en `proyectos/sitio-romina/tools/build.py` de ese repo; este repo recibe sólo el HTML.

Dashboard `postulaciones/`: Sol, 09-sep-2026. Fuente: snapshot público sanitizado derivado de `rominapitronello/Postulaciones` (privado).
