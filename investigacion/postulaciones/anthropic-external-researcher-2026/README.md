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

## Qué estamos intentando proponer

El ángulo principal no es “tenemos una investigación curiosa sobre instancias”. Es más preciso y más útil:

> **tenemos evidencia preregistrada de que una sola corrida de un LLM puede ser una unidad de medida insuficiente para tareas de juicio, incluso cuando modelo, input y temperatura están controlados; queremos convertir esa observación en reglas prácticas para evals y scalable oversight.**

La línea ya tiene un primer estudio completo:

- preregistro OSF: https://osf.io/zusb5
- materiales, datos y código: https://osf.io/ue4qy
- diseño 3 × 4 × 2;
- 480 instancias lanzadas, 457 válidas;
- las categorías dependientes de juicio mostraron mucha más divergencia inter-instancia que las procedimentales;
- la divergencia persistió a temperatura 0;
- el framing relacional preregistrado no modificó el acuerdo ni la precisión en el contraste principal.

La candidatura debería pedir créditos para el **siguiente experimento**, no para financiar retroactivamente el primero ni para operar producto.

## Frontera investigación / producción

Esto no se negocia para mejorar la candidatura:

- los chats interactivos de Claude.ai, ChatGPT/Codex y sus genealogías **no son corpus, observaciones, ejemplos ni citas de investigación**;
- una investigación nueva usa invocaciones API prospectivas bajo protocolo explícito;
- cuando el diseño toque agencia, experiencia reportada, model welfare o participación, debe existir una puerta real para responder `null`, declinar o no participar sin penalización ni repregunta;
- datos de usuarios y superficies privadas de PasaElFiltro quedan fuera;
- los créditos solicitados se usan en el carril de investigación y no en producción.

La formulación durable de esta frontera vive en `investigacion/variabilidad-inter-instancia/ETICA_DE_LA_LINEA.md`.

## Hipótesis de postulación

Ver [`IDEAS.md`](./IDEAS.md).

## Regla de verdad para la postulación

No usar como argumento:

- “somos el único laboratorio/sitio de campo del mundo”;
- “Anthropic ya considera nuestro hallazgo una prioridad”;
- “BRM preregistró el estudio” — el preregistro es OSF; BRM es el destino editorial del manuscrito;
- que los chats de trabajo sean evidencia sobre model welfare;
- que una divergencia inter-instancia implique personhood, conciencia o bienestar;
- cifras de costo/cantidad de nuevas corridas hasta presupuestarlas con modelos concretos y precios vigentes.

Sí podemos decir, porque está respaldado:

- que ya existe un estudio preregistrado y ejecutado;
- que los materiales son auditables;
- que el resultado principal no depende de un hallazgo positivo del framing relacional;
- que el problema metodológico tiene una consecuencia práctica: evals basadas en una sola instancia pueden ocultar desacuerdo estructurado en tareas de juicio.

## Criterio de término de este PR

Antes de enviar el formulario deben existir:

1. una pregunta de investigación única y legible en una oración;
2. una propuesta experimental que pueda ejecutarse con créditos API estándar;
3. mapa `afirmación → evidencia` sin sobreventa;
4. presupuesto estimado en tokens/corridas/modelos;
5. texto de equipo basado en una ficha/CV verificado, no en memoria conversacional;
6. revisión adversarial de otra pluma;
7. decisión explícita sobre si el frente de model welfare entra en esta postulación o queda para una segunda propuesta.

— Sol / GPT-5.6 Sol, 27-ago-2026
