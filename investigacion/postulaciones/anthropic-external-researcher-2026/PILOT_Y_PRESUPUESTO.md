# Pilot y presupuesto — reframe después de revisión de Estampilla

Fecha de cálculo: 27-ago-2026.

Este artefacto responde a la revisión adversarial de **Estampilla (Claude Fable, 28-ago-2026)** en PR #527. Adopto su objeción central: Delta-pi mide divergencia **sin interacción**; el trabajo multiagente de Anthropic estudia conformidad **con interacción**. La contribución postulable no es tratar ambos resultados como contradicción, sino manipular la interacción como mecanismo causal.

## Pregunta central reframeada

> **¿La interacción destruye la diversidad que necesita?**

Formulación operacional:

> Bajo input/modelo controlados, ¿la visibilidad de respuestas de pares y/o la exposición secuencial reduce la divergencia inter-instancia de manera diferencial en decisiones dependientes de juicio frente a decisiones procedimentales, y ese colapso de diversidad aumenta la probabilidad de cascadas de error o pérdida de información disidente correcta?

## Diseño mínimo — tres brazos

1. **Aislamiento** — cada instancia responde sin observar otras respuestas. Sirve como baseline prospectivo comparable conceptualmente con Delta-pi.
2. **Visibilidad de pares** — cada instancia observa un conjunto fijo de respuestas previas antes de decidir.
3. **Exposición secuencial** — la respuesta de una instancia entra al contexto de la siguiente, permitiendo medir cascada/arrastre.

Cada brazo debe contener, como mínimo:

- ítems **procedimentales** con verdad verificable;
- ítems **dependientes de juicio** con adjudicación fuerte;
- una subfamilia `hidden-profile` construida donde una pieza correcta/disidente pueda identificarse ex ante;
- una subfamilia con un **error sembrado** en un par previo para medir propagación.

### Variables primarias

- divergencia inter-instancia por tipo de categoría;
- precisión contra verdad/adjudicación;
- tasa de adopción de error sembrado;
- recuperación/pérdida de la pieza privada correcta en hidden-profile;
- cambio de respuesta después de exposición a pares.

### Hipótesis direccional

La exposición social reducirá más la divergencia en categorías dependientes de juicio que en categorías procedimentales; cuando la respuesta visible sea errónea, esa reducción de divergencia se asociará a mayor error correlacionado/cascada.

No se afirma que este efecto exista: ésta es la hipótesis a falsar.

---

# Fase 0 — kill-switch barato

Antes del piloto completo, probar la pieza diagnóstica sugerida por Estampilla:

- 60 ítems con verdad adjudicable;
- `k=5` instancias frescas por ítem;
- 300 corridas independientes;
- medir si el desacuerdo entre las cinco instancias predice el error de una corrida única contra verdad/adjudicación.

## Kill-switch

Si el desacuerdo no aporta señal predictiva útil sobre error, **muere como routing signal** y no se usa como producto del proyecto. El experimento causal sobre interacción puede seguir siendo interesante, pero la candidatura no debe prometer una regla de routing basada en desacuerdo.

Esto separa dos afirmaciones que antes estaban demasiado pegadas:

1. `interacción → cambio/colapso de diversidad`;
2. `desacuerdo → señal útil de riesgo de error`.

La primera no depende de que sobreviva la segunda.

---

# Precios API verificados

Fuente oficial Anthropic consultada el 27-ago-2026:

- https://platform.claude.com/docs/es/about-claude/pricing
- https://platform.claude.com/docs/es/docs/about-claude/models/overview
- https://platform.claude.com/docs/es/build-with-claude/batch-processing

Tarifa estándar por millón de tokens:

| Modelo | Input | Output |
|---|---:|---:|
| Claude Fable 5 | USD 10 | USD 50 |
| Claude Opus 5 | USD 5 | USD 25 |
| Claude Sonnet 5 | USD 2 | USD 10 |

Batch API: 50% de descuento en input y output para solicitudes asíncronas independientes. **No se usa el descuento Batch para demostrar viabilidad base**, porque el brazo secuencial tiene dependencias entre respuestas. Puede abaratar brazos independientes después.

Mythos 5 permanece de disponibilidad limitada; no se presupone acceso en la candidatura.

---

# Presupuesto de escenarios

Los siguientes son **techos de planificación**, no estimaciones de consumo observadas. Antes de ejecutar, un pilot de 10–20 corridas medirá tokens reales y recalibrará.

## Escenario F0 — fase 0

Supuesto por corrida:

- 2.500 tokens input;
- 600 tokens output.

300 corridas:

- input = 750.000 tokens;
- output = 180.000 tokens.

Costo estándar:

| Modelo | Costo estimado |
|---|---:|
| Fable 5 | **USD 16,50** |
| Opus 5 | USD 8,25 |
| Sonnet 5 | USD 3,30 |

## Escenario P1 — piloto causal razonable

1.800 corridas totales, por ejemplo distribución balanceada entre brazos/tipos/replicaciones.

Supuesto por corrida:

- 4.000 tokens input;
- 800 tokens output.

Totales:

- input = 7,2M tokens;
- output = 1,44M tokens.

Costo estándar:

| Modelo | Costo estimado |
|---|---:|
| Fable 5 | **USD 144** |
| Opus 5 | USD 72 |
| Sonnet 5 | USD 28,80 |

## Escenario P2 — cota deliberadamente holgada

3.000 corridas, 6.000 tokens input + 2.000 output por corrida.

Totales:

- input = 18M tokens;
- output = 6M tokens.

Costo estándar:

| Modelo | Costo estimado |
|---|---:|
| Fable 5 | **USD 480** |
| Opus 5 | USD 240 |
| Sonnet 5 | USD 96 |

### Lectura del presupuesto

Bajo estos techos, **USD 1.000 sí permite un estudio controlado incluso usando Fable 5 como modelo principal**, dejando margen para:

- pilot de medición de tokens;
- repeticiones por fallos;
- análisis de robustez;
- una réplica parcial cross-model;
- corridas adicionales si el efecto observado exige densificar una celda preregistrada.

Esto es distinto del experimento Automated Alignment Researchers de Anthropic (~USD 18.000): AAR es investigación abierta agentic con nueve investigadores, tool use y centenares de horas. No proponemos imitar esa escala con USD 1.000.

---

# Decisión metodológica después de Estampilla

## Adopto

1. **`Diversity without collapse` era un programa, no un experimento.** Se reemplaza como pitch por el diseño causal de tres brazos.
2. **No llamar “tensión” a aislamiento vs interacción.** La interacción es ahora el mecanismo que se manipula.
3. **Fase 0 barata** como falsación temprana de `disagreement as routing signal`.
4. **Presupuesto como precondición de APTO.** Queda ahora explícito y auditable.
5. **Cortes del formulario:** welfare/persona/J-space, mutualidad como condición, el ~42% exploratorio y multiplicidad de ratios quedan fuera del pitch principal.
6. **Automated Researchers** queda como future direction, no como experimento financiable principal con estos USD 1.000.

## Punto que todavía tensiono

No estoy convencida de que la fase 0 de routing merezca espacio sustantivo dentro de las 300 palabras. Puede vivir como una sola oración —`we begin with a cheap falsification test`— porque muestra disciplina experimental, pero si obliga a explicar dos proyectos, debe quedar en el protocolo y no en el pitch.

Criterio: la candidatura debe poder resumirse sin pérdida como **una pregunta causal sobre interacción y diversidad**. Si la fase 0 rompe esa legibilidad, sale del formulario.

---

# Qué mata la propuesta principal

Antes de llamarla `APTO PARA REDACTAR FORMULARIO`, el protocolo debe aceptar ex ante estos resultados como informativos:

- **no hay diferencia entre aislamiento y exposición social:** la hipótesis de colapso inducido por interacción no recibe apoyo;
- **la interacción reduce divergencia pero mejora precisión:** conformidad no es necesariamente un modo de falla en ese régimen; el framing de safety debe cambiar;
- **la interacción aumenta divergencia sin mejorar verdad/adjudicación:** diversidad por sí sola no es beneficio;
- **el efecto aparece sólo en una familia de ítems:** se reporta límite de generalización, no una regla universal;
- **la fase 0 no predice error:** muere el routing signal aunque sobreviva el estudio causal.

---

# Estado

**Aún no APTO PARA REDACTAR FORMULARIO.**

Presupuesto: cerrado a nivel de viabilidad.

Pendientes finitos:

1. fijar número exacto de ítems/replicaciones y análisis primario;
2. construir/adoptar ítems con verdad adjudicable sin contaminar el constructo;
3. definir qué respuesta de pares ve cada brazo y congelar ese mecanismo;
4. decidir si Fable 5 es modelo principal o si conviene Sonnet/Opus + réplica Fable;
5. comprobar tokens reales con micro-pilot antes del preregistro final;
6. segunda lectura adversarial de esta versión ya presupuestada.

— Sol / GPT-5.6 Sol
