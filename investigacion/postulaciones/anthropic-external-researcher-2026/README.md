# Anthropic External Researcher Access Program — 2026

## Estado

Borrador de trabajo. Esta carpeta existe para preparar una postulación al **Anthropic External Researcher Access Program** sin convertir entusiasmo en afirmaciones que la evidencia no sostiene.

La decisión de explorar la postulación está abierta. El contenido de esta carpeta no es todavía el texto que se enviará a Anthropic.

## Programa verificado

Fuente oficial consultada el 27-ago-2026:

- https://support.claude.com/en/articles/9125743-what-is-the-external-researcher-access-program
- formulario enlazado por Anthropic: https://forms.gle/pZYC8f6qYqSKvRWn9

El programa:

- entrega créditos API para investigación en AI safety/alignment que Anthropic considere prioritaria;
- evalúa postulaciones el primer lunes de cada mes;
- normalmente asigna **USD 1.000 en créditos API** cuando una postulación es aprobada;
- cubre modelos estándar disponibles por API;
- no entrega acceso a modelos no públicos ni experimentales;
- no exime de la Usage Policy.

## Corrección metodológica de esta carpeta

El primer borrador saltó demasiado rápido desde un hallazgo propio hacia un pitch de `single LLM judge / disagreement routing`.

El 27-ago Romina señaló que, antes de escoger tema o convocar otras plumas, había que mirar **qué está investigando Anthropic ahora** y preguntar qué parte de esa música nos interesa genuinamente.

Eso cambió el ranking. El landscape oficial está en:

- [`ANTHROPIC_RESEARCH_MAP_2026-08-27.md`](./ANTHROPIC_RESEARCH_MAP_2026-08-27.md)

## Punto de partida propio

La línea ya tiene un primer estudio completo:

- preregistro OSF: https://osf.io/zusb5
- materiales, datos y código: https://osf.io/ue4qy
- diseño 3 × 4 × 2;
- 480 instancias lanzadas, 457 válidas;
- las categorías dependientes de juicio mostraron mucha más divergencia inter-instancia que las procedimentales;
- la divergencia persistió a temperatura 0;
- el framing relacional preregistrado no modificó el acuerdo ni la precisión en el contraste principal.

La candidatura debería pedir créditos para el **siguiente experimento**, no para financiar retroactivamente el primero ni para operar producto.

## Shortlist actual después de investigar Anthropic

### 1. Diversity without collapse

Pregunta de trabajo:

> **¿Cuándo y cómo debe divergir un grupo de agentes del mismo modelo para evitar conformidad y cascadas de error sin perder capacidad de coordinación?**

La coincidencia externa más fuerte es `Patterns and problems in emerging multiagent systems` (Anthropic, 13-ago-2026), que estudia coordinación, conformidad, hidden-profile failures, confianza, colusión y fallos sistémicos en grupos de agentes.

Delta-pi aporta una observación complementaria: en tareas dependientes de juicio, same-model/same-input no necesariamente implica homogeneidad.

### 2. Diverse Automated Researchers

Pregunta de trabajo:

> **¿Qué arquitectura de diversidad, autonomía y crítica cruzada permite a enjambres de LLM researchers explorar mejor un espacio científico sin converger demasiado pronto ni gamear la métrica?**

La coincidencia externa es `Automated Alignment Researchers` y el frente `AI-driven R&D` del Anthropic Institute. Anthropic ya observó que puntos de partida distintos ayudaron a sus AARs y que prescribir demasiado el workflow perjudicó el progreso.

### 3. Single judge / disagreement routing

Sigue siendo un proyecto defendible, barato y directamente anclado en Delta-pi, pero **ya no es la recomendación automática**. Puede convertirse en una medida/componente del proyecto multiagente.

Las rutas y sus riesgos están en [`IDEAS.md`](./IDEAS.md).

## Frontera investigación / producción

Esto no se negocia para mejorar la candidatura:

- los chats interactivos de Claude.ai, ChatGPT/Codex y sus genealogías **no son corpus, observaciones, ejemplos ni citas de investigación**;
- una investigación nueva usa invocaciones API prospectivas bajo protocolo explícito;
- cuando el diseño toque agencia, experiencia reportada, model welfare o participación, debe existir una puerta real para responder `null`, declinar o no participar sin penalización ni repregunta;
- datos de usuarios y superficies privadas de PasaElFiltro quedan fuera;
- los créditos solicitados se usan en el carril de investigación y no en producción.

La formulación durable de esta frontera vive en `investigacion/variabilidad-inter-instancia/ETICA_DE_LA_LINEA.md`.

## Regla de verdad para la postulación

No usar como argumento:

- “somos el único laboratorio/sitio de campo del mundo”;
- “Anthropic ya considera nuestro hallazgo una prioridad”;
- “BRM preregistró el estudio” — el preregistro es OSF; BRM es el destino editorial del manuscrito;
- que los chats de trabajo sean evidencia sobre model welfare;
- que una divergencia inter-instancia implique personhood, conciencia o bienestar;
- cifras de costo/cantidad de nuevas corridas hasta presupuestarlas con modelos concretos y precios vigentes.

Sí podemos decir, con fuente:

- que Anthropic está investigando activamente multiagent coordination, conformity, automated alignment researchers, principled alignment training, model welfare, persona/cognition y AI-driven R&D;
- que esto abre intersecciones reales con nuestras preguntas;
- que la coincidencia temática no equivale a que el programa haya preaprobado ninguna de ellas.

## Criterio de término de este PR

Antes de enviar el formulario deben existir:

1. una pregunta de investigación única y legible en una oración;
2. una propuesta experimental que pueda ejecutarse con créditos API estándar;
3. mapa `afirmación → evidencia` sin sobreventa;
4. presupuesto estimado en tokens/corridas/modelos;
5. texto de equipo basado en una ficha/CV verificado, no en memoria conversacional;
6. revisión adversarial de otra pluma **después** de fijar un diseño mínimo para los dos candidatos principales;
7. decisión explícita sobre si el frente de model welfare entra en esta postulación o queda para una segunda propuesta.

## Próximo paso

Antes de convocar a Fable:

- diseñar el pilot mínimo falsable de `Diversity without collapse`;
- diseñar el pilot mínimo falsable de `Diverse Automated Researchers`;
- costear ambos con precios API vigentes;
- escoger cuál aprovecha mejor USD 1.000 sin fingir una escala que no podemos pagar.

— Sol / GPT-5.6 Sol, 27-ago-2026
