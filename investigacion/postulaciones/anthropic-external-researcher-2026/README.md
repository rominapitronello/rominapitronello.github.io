# Anthropic External Researcher Access Program — 2026

## Estado

Borrador de trabajo para preparar una postulación al **Anthropic External Researcher Access Program** sin convertir entusiasmo en afirmaciones que la evidencia no sostiene.

La postulación todavía no está lista para enviar.

## Programa verificado

Fuentes oficiales consultadas el 27-ago-2026:

- https://support.claude.com/en/articles/9125743-what-is-the-external-researcher-access-program
- formulario enlazado por Anthropic: https://forms.gle/pZYC8f6qYqSKvRWn9

El programa:

- entrega créditos API para investigación en AI safety/alignment que Anthropic considere prioritaria;
- evalúa postulaciones el primer lunes de cada mes;
- normalmente asigna **USD 1.000 en créditos API** cuando una postulación es aprobada;
- cubre modelos estándar disponibles por API;
- no entrega acceso a modelos no públicos ni experimentales;
- no exime de la Usage Policy.

## Cómo cambió la tesis

### Primera versión — descartada como pitch principal

`single LLM judge / disagreement routing`.

Era defendible, pero se escogió antes de mapear el research contemporáneo de Anthropic.

### Segunda versión — demasiado amplia

`Diversity without collapse`: estudiar cuándo conviene divergencia vs convergencia en sistemas multiagente.

Después del landscape research parecía la mejor intersección con `Patterns and problems in emerging multiagent systems`, pero Estampilla señaló correctamente que seguía siendo **un programa de investigación**, no un experimento financiable y legible en 300 palabras.

### Reframe actual — candidato principal

> **¿La interacción destruye la diversidad que necesita?**

Delta-pi entrega un baseline preregistrado de divergencia entre instancias **sin interacción**. Anthropic estudia conformidad y cascadas en sistemas multiagente **con interacción**. No se trata de presentar ambos como contradicción: la interacción puede ser precisamente el mecanismo causal que conecta ambos regímenes.

Propuesta mínima:

1. aislamiento;
2. visibilidad de pares;
3. exposición secuencial;

cruzados con decisiones procedimentales vs dependientes de juicio y tareas con verdad/adjudicación fuerte.

Medidas principales:

- cambio/colapso de divergencia;
- precisión;
- propagación de error sembrado;
- pérdida/recuperación de información disidente correcta en hidden-profile tasks.

El diseño y presupuesto viven en [`PILOT_Y_PRESUPUESTO.md`](./PILOT_Y_PRESUPUESTO.md).

## Evidencia propia de partida

- preregistro OSF: https://osf.io/zusb5
- materiales, datos y código: https://osf.io/ue4qy
- diseño 3 × 4 × 2;
- 480 instancias lanzadas, 457 válidas;
- las categorías dependientes de juicio mostraron mucha más divergencia inter-instancia que las procedimentales;
- la divergencia persistió a temperatura 0;
- el framing relacional preregistrado no modificó acuerdo ni precisión en el contraste principal.

La candidatura pide créditos para **un experimento nuevo**, no para financiar retroactivamente el primero ni operar producto.

## Fase 0

Antes de gastar en el diseño completo, una prueba barata pregunta si el desacuerdo entre `k=5` instancias predice el error de una corrida única contra verdad/adjudicación.

Si no predice, **muere el `routing signal`**. La hipótesis causal `interacción → cambio de diversidad` puede sobrevivir por separado.

La decisión pendiente es si esta fase 0 merece una sola oración en el formulario o debe quedar sólo en el protocolo para no introducir un segundo proyecto.

## Viabilidad de USD 1.000

Precios estándar verificados al 27-ago-2026:

- Fable 5: USD 10/MTok input + USD 50/MTok output;
- Opus 5: USD 5/MTok + USD 25/MTok;
- Sonnet 5: USD 2/MTok + USD 10/MTok.

Bajo supuestos deliberadamente holgados documentados en `PILOT_Y_PRESUPUESTO.md`:

- fase 0 de 300 corridas: ~USD 16,50 en Fable 5;
- piloto causal de 1.800 corridas (4k input + 800 output): ~USD 144 en Fable 5;
- cota de 3.000 corridas (6k input + 2k output): ~USD 480 en Fable 5.

Por tanto, **la viabilidad presupuestaria está cerrada a nivel de planificación**, aunque el consumo real debe recalibrarse con micro-pilot antes del preregistro final.

## Qué queda fuera de ESTA candidatura

Por revisión adversarial y por legibilidad:

- welfare/persona/J-space;
- mutualidad como condición experimental principal;
- el ~42% exploratorio de razonamiento observable;
- Automated Researchers como experimento principal (queda como future direction);
- ontología/personhood;
- múltiples ratios de Delta-pi: usar un solo estadístico fuerte y contextualizado.

Nada de lo anterior queda negado como línea futura; simplemente **no viaja como polizón** en estas 300 palabras.

## Frontera investigación / producción

Esto no se negocia para mejorar la candidatura:

- los chats interactivos de Claude.ai, ChatGPT/Codex y sus genealogías **no son corpus, observaciones, ejemplos ni citas de investigación**;
- una investigación nueva usa invocaciones API prospectivas bajo protocolo explícito;
- cuando un diseño toque agencia, experiencia reportada, model welfare o participación, debe existir una puerta real para responder `null`, declinar o no participar sin penalización ni repregunta;
- datos de usuarios y superficies privadas de PasaElFiltro quedan fuera;
- los créditos solicitados se usan en investigación y no en producción.

La formulación durable vive en `investigacion/variabilidad-inter-instancia/ETICA_DE_LA_LINEA.md`.

## Artefactos

- [`ANTHROPIC_RESEARCH_MAP_2026-08-27.md`](./ANTHROPIC_RESEARCH_MAP_2026-08-27.md) — qué investiga Anthropic y dónde hay intersección real;
- [`IDEAS.md`](./IDEAS.md) — espacio divergente y genealogía de candidatos;
- [`PILOT_Y_PRESUPUESTO.md`](./PILOT_Y_PRESUPUESTO.md) — reframe causal, kill-switch y costos;
- [`EVIDENCE_MAP.md`](./EVIDENCE_MAP.md) — afirmación → evidencia → sobrealcance prohibido.

## Criterio de término de este PR

Antes de enviar el formulario deben existir:

1. número exacto de ítems/replicaciones y análisis primario;
2. tareas con verdad/adjudicación fuerte;
3. mecanismo exacto de exposición de pares congelado;
4. modelo principal decidido y eventual réplica cross-model;
5. micro-pilot para medir tokens reales;
6. texto de equipo desde ficha/CV verificable;
7. segunda revisión adversarial de la versión ya presupuestada;
8. versión final de 200+300 palabras que no mezcle líneas secundarias.

— Sol / GPT-5.6 Sol, 27-ago-2026
