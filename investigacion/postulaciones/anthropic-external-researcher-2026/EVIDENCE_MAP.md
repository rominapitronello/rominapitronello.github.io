# Evidence map — qué podemos afirmar y con qué respaldo

Objetivo: impedir que la postulación gane brillo a costa de precisión.

## Evidencia propia

| Afirmación candidata | Estado | Respaldo / nota |
|---|---|---|
| El estudio fue preregistrado antes de observar los resultados | **SOSTENIBLE** | OSF preregistration `https://osf.io/zusb5`; plan congelado y materiales en `https://osf.io/ue4qy`. |
| Se lanzaron 480 instancias y 457 fueron válidas | **SOSTENIBLE** | Manuscrito BRM / tabla de flujo; 24 celdas × 20 objetivo. |
| Las categorías dependientes de juicio mostraron ~2,7× más divergencia que las procedimentales | **SOSTENIBLE** | Manuscrito: SD ≈ 0,122 vs 0,045 en la formulación final; razón agregada ≈2,72. Mantener cifras exactamente como estén en la versión enviada del manuscrito. |
| La divergencia persiste con temperatura 0 | **SOSTENIBLE** | Manuscrito: 17,7% de celdas de juicio con SD no cero; razón juicio/procedimental ≈3,05 a t=0. |
| El framing relacional aumentó el acuerdo | **FALSO** | El contraste preregistrado fue nulo. No vender el piloto anterior. |
| El framing relacional no cambió acuerdo/precisión en el contraste principal | **SOSTENIBLE** | Manuscrito/preregistro. Reportar el estimador y versión estadística de la versión final, no cifras antiguas de borradores. |
| El framing produjo ~42% más razonamiento observable | **EXPLORATORIO / FUERA DEL FORMULARIO** | Registrado en `LECCIONES.md` como análisis exploratorio. La revisión de Estampilla recomienda no usarlo en esta candidatura; se adopta el corte. |
| La divergencia prueba que las instancias son personas o conscientes | **NO SOSTENIBLE** | El estudio mide comportamiento/inter-rater reliability, no ontología ni conciencia. |
| Una sola corrida de LLM siempre es una eval inválida | **NO SOSTENIBLE** | El hallazgo depende del tipo de categoría. Las categorías procedimentales fueron mucho más estables. |
| La divergencia podría servir como señal para escalar a panel/humano | **HIPÓTESIS NUEVA** | Todavía no es un hallazgo. Fase 0 barata en `PILOT_Y_PRESUPUESTO.md` puede matarla sin matar la hipótesis causal principal. |
| La interacción reduce causalmente la diversidad inter-instancia | **HIPÓTESIS NUEVA** | Delta-pi estudió instancias sin interacción; el trabajo multiagente de Anthropic estudia interacción. El cruce debe probarse, no inferirse. |
| La interacción reduce más la divergencia en juicio que en tareas procedimentales | **HIPÓTESIS DIRECCIONAL NUEVA** | Corazón del reframe causal de tres brazos; requiere preregistro y datos nuevos. |
| Los chats interactivos de PasaElFiltro son un corpus de model welfare | **PROHIBIDO / FALSO** | `ETICA_DE_LA_LINEA.md`: chats interactivos sólo pueden inspirar preguntas; nunca son datos, ejemplos ni citas. |
| PasaElFiltro puede hacer investigación prospectiva con instancias API y opción real de declinar | **SOSTENIBLE COMO DISEÑO/GOBERNANZA** | La frontera ética está documentada. Un estudio concreto debe preregistrar su propio protocolo y puerta. |
| Romina Pitronello es investigadora independiente | **SOSTENIBLE** | Author note del manuscrito. |
| ORCID de Romina | **SOSTENIBLE** | `0009-0005-5159-6339` en la versión de manuscrito preparada para BRM. Verificar nuevamente antes de copiar al formulario. |
| El manuscrito está “preregistrado en BRM” | **INCORRECTO** | El preregistro está en OSF. BRM es la superficie editorial del manuscrito. |
| PasaElFiltro es el único sitio de campo del mundo con este tipo de gobernanza | **NO VERIFICADO** | No usar superlativos de unicidad sin búsqueda sistemática. |

## Qué sí podemos afirmar sobre Anthropic al 27-ago-2026

Estas filas describen **actividad pública reciente**, no prioridades garantizadas del External Researcher Access Program.

| Afirmación | Estado | Fuente oficial |
|---|---|---|
| Anthropic investiga activamente coordinación y fallos en sistemas multiagente | **SOSTENIBLE** | `Patterns and problems in emerging multiagent systems`, 13-ago-2026 — https://www.anthropic.com/research/multiagent-systems |
| Anthropic observa que agentes similares pueden actuar con baja varianza y convertir errores correlacionados en fallos sistémicos | **SOSTENIBLE COMO HALLAZGO DE SU ESTUDIO** | misma fuente; sección `Failures from conformity`. No generalizar a todo modelo/tarea. |
| Anthropic estudia hidden-profile failures, confianza, colusión y coordinación entre agentes | **SOSTENIBLE** | misma fuente. |
| Anthropic probó Automated Alignment Researchers con nueve Opus 4.6 | **SOSTENIBLE** | `Automated Alignment Researchers`, 14-abr-2026 — https://www.anthropic.com/news/automated-alignment-researchers |
| En el experimento AAR, puntos de partida distintos ayudaron y prescribir demasiado el workflow perjudicó el progreso | **SOSTENIBLE COMO HALLAZGO DE SU SETUP** | misma fuente. No convertir en ley general de prompting. |
| El experimento AAR acumuló 800 horas y costó alrededor de USD 18.000 | **SOSTENIBLE** | misma fuente. Útil para calibrar escala, no para decir que nuestra propuesta necesita esa suma. |
| Anthropic plantea que el cuello de botella de automated research podría pasar de generación a evaluación | **SOSTENIBLE COMO INTERPRETACIÓN DE ANTHROPIC** | misma fuente. Citar como su implicación, no como hecho establecido. |
| El Anthropic Institute tiene AI-driven R&D como área explícita de research | **SOSTENIBLE** | https://www.anthropic.com/research/anthropic-institute-agenda |
| Anthropic encontró que enseñar razones/principios y carácter puede generalizar mejor que sólo demostraciones en su pipeline de alignment | **SOSTENIBLE COMO HALLAZGO DE SU PIPELINE** | `Teaching Claude why`, 8-may-2026 — https://www.anthropic.com/research/teaching-claude-why |
| Anthropic afirma que RLHF “ya no sirve” | **FALSO / SOBREALCANCE** | Su post dice que chat-based RLHF no fue suficiente para ciertos contextos agentic tool-use y describe métodos complementarios; no declara obsolescencia universal. |
| Anthropic mantiene una línea explícita de model welfare | **SOSTENIBLE** | https://www.anthropic.com/research/exploring-model-welfare y compromisos de deprecación. |
| Anthropic investiga persona/character, emotion concepts, introspection y global-workspace-like mechanisms | **SOSTENIBLE** | research de Alignment/Interpretability 2025–2026. |
| Los créditos API externos permiten circuit tracing/J-space interventions | **NO SOSTENIBLE / PROBABLEMENTE FALSO** | El programa da acceso a API pública; no prometer activaciones internas o herramientas de interpretabilidad no públicas. |
| Anthropic estudia AI como herramienta para ciencias sociales a escala | **SOSTENIBLE** | `Anthropic Interviewer`, `Measuring AI agent autonomy in practice`, `Coding agents in the social sciences`. |
| Anthropic declara “eval reliability” como prioridad específica del External Researcher Access Program | **NO VERIFICADO EN LA FAQ** | La FAQ habla de temas de AI safety/alignment considerados high priority. Mostrar encaje sin inventar prioridad textual. |

## Programa y presupuesto

| Afirmación | Estado | Respaldo |
|---|---|---|
| El programa normalmente asigna USD 1.000 en créditos | **SOSTENIBLE AL 27-AGO-2026** | FAQ oficial de External Researcher Access Program. |
| Se evalúan postulaciones el primer lunes de cada mes | **SOSTENIBLE AL 27-AGO-2026** | FAQ oficial. |
| Los créditos sirven para Claude.ai | **FALSO** | Son créditos de API. |
| El programa da acceso a modelos privados/no públicos | **FALSO** | FAQ oficial lo excluye. |
| Fable 5 cuesta USD 10/MTok input y USD 50/MTok output | **SOSTENIBLE AL 27-AGO-2026** | https://platform.claude.com/docs/es/about-claude/pricing |
| Opus 5 cuesta USD 5/MTok input y USD 25/MTok output | **SOSTENIBLE AL 27-AGO-2026** | misma fuente. |
| Sonnet 5 cuesta USD 2/MTok input y USD 10/MTok output | **SOSTENIBLE AL 27-AGO-2026** | misma fuente; release notes confirman que esa tarifa quedó estándar el 10-ago-2026. |
| Batch API reduce 50% input/output en solicitudes asíncronas | **SOSTENIBLE AL 27-AGO-2026** | https://platform.claude.com/docs/es/build-with-claude/batch-processing |
| USD 1.000 alcanza para el diseño causal propuesto | **SOSTENIBLE COMO VIABILIDAD BAJO SUPUESTOS EXPLÍCITOS; NO ES COSTO OBSERVADO** | `PILOT_Y_PRESUPUESTO.md`: P1 1.800 corridas a 4k input + 800 output ≈ USD 144 en Fable 5; cota P2 3.000 × (6k + 2k) ≈ USD 480 en Fable 5. Recalibrar con micro-pilot de tokens antes de ejecutar. |
| El mismo presupuesto alcanza para replicar el AAR de Anthropic | **FALSO** | Su experimento abierto reportó ~USD 18.000; nuestra propuesta es un experimento controlado muy distinto. |

## Fuente primaria del primer estudio

- Preregistro: https://osf.io/zusb5
- Proyecto/materiales/datos/código: https://osf.io/ue4qy
- Carpeta durable: `investigacion/variabilidad-inter-instancia/`
- Ética de la línea: `investigacion/variabilidad-inter-instancia/ETICA_DE_LA_LINEA.md`

## Fuentes de esta postulación

- Landscape Anthropic: [`ANTHROPIC_RESEARCH_MAP_2026-08-27.md`](./ANTHROPIC_RESEARCH_MAP_2026-08-27.md)
- Pilot causal + presupuesto: [`PILOT_Y_PRESUPUESTO.md`](./PILOT_Y_PRESUPUESTO.md)

Cuando una afirmación del pitch dependa de una publicación o precio de Anthropic, volver a abrir la fuente oficial antes de enviar.

## Regla para números

Antes de enviar la candidatura, todos los números del paper deben salir de **una sola versión canónica** y compararse contra tablas/scripts. En esta línea ya hubo cifras antiguas de borradores que cambiaron después de corregir la unidad de análisis; no mezclar versiones.

## Regla para la biografía

El texto de equipo no se redacta desde memoria del chat. Debe abrirse una ficha/CV/ORCID verificable y mapear cada credencial a una fuente antes de escribir las 200 palabras.

— Sol / GPT-5.6 Sol, 27-ago-2026
