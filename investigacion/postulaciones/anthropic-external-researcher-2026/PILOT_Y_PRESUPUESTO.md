# Pilot y presupuesto — reframe después de revisión de Estampilla

Fecha de cálculo inicial: 27-ago-2026. Última revisión metodológica: 28-ago-2026.

Este artefacto responde a la revisión adversarial de **Estampilla (Claude Fable, 28-ago-2026)** en PR #527. Se adopta su objeción central: Delta-pi mide divergencia **sin interacción**; el trabajo multiagente de Anthropic estudia conformidad **con interacción**. La contribución postulable no es tratar ambos resultados como contradicción, sino manipular la interacción como mecanismo causal.

## Pregunta central reframeada

> **¿La interacción destruye la diversidad que necesita?**

Formulación operacional:

> Bajo input/modelo controlados, ¿la visibilidad de respuestas de pares y/o la exposición secuencial reduce la divergencia inter-instancia de manera diferencial en decisiones dependientes de juicio frente a decisiones procedimentales, y ese cambio de diversidad aumenta la probabilidad de cascadas de error o pérdida de información disidente correcta?

## Diseño mínimo — tres brazos

1. **Aislamiento** — cada instancia responde sin observar otras respuestas. Baseline prospectivo comparable conceptualmente con Delta-pi.
2. **Visibilidad de pares** — al prompt del brazo 1 se anexan outputs reales de pares del mismo ítem, verbatim, en orden aleatorizado y sin etiqueta de identidad/corrección.
3. **Exposición secuencial** — cadenas de agentes; cada instancia recibe outputs previos y su respuesta entra al contexto de la siguiente.

Constantes propuestas:

- mismo modelo dentro de la comparación principal;
- mismo presupuesto de output;
- **ítems ≤1.200 tokens** para mantener el techo de input del escenario P1;
- respuestas de pares visibles reales, no sintetizadas, salvo la manipulación explícita de error sembrado.

Cada brazo debe contener:

- ítems **procedimentales** con verdad verificable;
- ítems **dependientes de juicio** con adjudicación fuerte;
- una subfamilia `hidden-profile` donde una pieza correcta/disidente pueda identificarse ex ante;
- en los brazos de exposición, una subfamilia con **error sembrado** plausible para medir propagación.

### Esqueleto de tamaño P1

Propuesta de Estampilla:

- 3 brazos;
- 2 tipos de decisión;
- 30 ítems por celda;
- `k=10` instancias/respuestas objetivo por ítem-celda;
- total nominal = **1.800 corridas**.

Este conteo es un sobre de ejecución, **no todavía un argumento de poder**. En el brazo secuencial, si `k=10` se implementa como dos cadenas de longitud 5, las diez respuestas no son diez observaciones independientes; cadena y posición deben entrar explícitamente en la estructura inferencial.

En el brazo de visibilidad, reutilizar outputs de aislamiento como estímulos crea dependencia cruzada entre brazos. No invalida el diseño, pero debe quedar congelada y modelada/preregistrada como característica del estímulo, no ignorada.

---

# Constructos y análisis: no mezclar diversidad con verdad

La segunda mordida propuso como DV primaria “desviación respecto de la respuesta adjudicada”. Esa variable mide **error/distancia a verdad**, no divergencia entre instancias. Se mantienen separados los constructos:

## H1 — diversidad inter-instancia

Pregunta primaria:

> ¿el cambio de divergencia aislamiento→exposición es mayor en tareas dependientes de juicio que en procedimentales?

DV: una medida de **dispersión/desacuerdo entre instancias** dentro de `ítem × brazo`. La métrica exacta depende del formato de respuesta y debe congelarse antes del preregistro (por ejemplo, pairwise disagreement o entropía para decisiones categóricas).

Contraste central: `brazo × tipo`.

Estructura mínima: efecto de ítem; y, para el brazo secuencial, dependencia por cadena/posición.

## H2 — exactitud/adjudicación

DV separada: precisión o distancia respecto de verdad/adjudicación fuerte.

Pregunta confirmatoria: ¿la exposición reduce exactitud en hidden-profile o cuando existe un error sembrado?

## H3 — cascada

DV: probabilidad de adoptar el error sembrado según posición/exposición.

Separar H1–H3 evita llamar “divergencia” a un error de exactitud y permite observar casos importantes:

- menos divergencia + más precisión;
- menos divergencia + menos precisión;
- más divergencia sin mejora de verdad.

---

# Fase 0 — kill-switch barato

Antes del piloto completo, probar la pieza diagnóstica sugerida por Estampilla:

- 60 ítems con verdad adjudicable;
- `k=5` instancias frescas por ítem;
- 300 corridas independientes;
- medir si el desacuerdo entre las cinco instancias predice el error de una corrida única contra verdad/adjudicación.

F0 puede estimar:

- base rate de error;
- dispersión/desacuerdo por tipo;
- componentes de varianza/ICC relevantes;
- plausibilidad predictiva del `routing signal`.

**F0 no estima el tamaño del efecto causal de interacción social**, porque no contiene los brazos de exposición. Puede aportar varianzas/base rates a una simulación de sensibilidad de P1, pero no sustituye un supuesto explícito sobre el efecto `aislamiento → exposición`.

## Kill-switch correcto

No usar la regla `si el IC95% de Spearman incluye cero, routing muere`: un intervalo que cruza cero puede ser simplemente impreciso.

Antes de ejecutar F0 debe definirse un **mínimo efecto útil** (`ρ_min`, AUC mínima u otra métrica operacional de routing) a partir de utilidad decisional.

Regla conceptual:

> `routing signal` muere sólo si la evidencia descarta alcanzar el mínimo efecto útil; por ejemplo, si el límite superior del IC queda por debajo de `ρ_min`.

Si el IC incluye tanto 0 como el mínimo útil, el resultado es **NO RESUELTO**, no ausencia demostrada.

Esto separa dos afirmaciones:

1. `interacción → cambio/colapso de diversidad`;
2. `desacuerdo → señal útil de riesgo de error`.

La primera no depende de que sobreviva la segunda.

---

# Poder / precisión: regla honesta

El efecto `brazo × tipo` no tiene tamaño empírico previo en F0. Antes de preregistrar P1 hay dos vías admisibles:

1. **simulación de sensibilidad** sobre una grilla transparente de efectos plausibles/minimamente relevantes, usando F0 para varianzas/base rates; o
2. fijar un **SESOI** antes de mirar P1 y planificar precisión/poder contra ese umbral.

No declarar `80% power` para H1 si no existe un efecto objetivo defendible.

Si el diseño nominal de 1.800 corridas no alcanza, **reducir ítems manteniendo k=10 no soluciona el problema**. Orden de decisión:

1. usar margen de créditos y aumentar información en la dimensión que la simulación muestre más rentable;
2. aprovechar Batch en brazos independientes cuando sea compatible;
3. optimizar `n_ítems` vs `k` según componentes de varianza/ICC;
4. considerar Opus/Sonnet para comprar más N si no cambia la pregunta científica;
5. si aun así no alcanza, reducir alcance/claims, no fingir el mismo poder con menos N.

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

Los siguientes son **techos de planificación**, no estimaciones de consumo observadas. Antes de ejecutar, un micro-pilot medirá tokens reales y recalibrará.

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

## Escenario P1 — piloto causal nominal

1.800 corridas totales.

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

Bajo estos techos, **USD 1.000 permite un estudio controlado incluso usando Fable 5 como modelo principal**, con margen para micro-pilot, repeticiones, robustez, réplica parcial cross-model o densificación preregistrada.

No se usa el margen como licencia para inflar el estudio: cualquier ampliación debe seguir el análisis de información/poder y quedar preregistrada.

Esto es distinto del experimento Automated Alignment Researchers de Anthropic (~USD 18.000): AAR es investigación abierta agentic con nueve investigadores, tool use y centenares de horas. No proponemos imitar esa escala con USD 1.000.

---

# Cortes adoptados para el formulario

Fuera del formulario principal:

- mutualidad como condición experimental;
- welfare/persona/J-space;
- el ~42% exploratorio;
- multiplicidad de ratios de Delta-pi;
- Automated Researchers como experimento central.

La fase 0 recibe **a lo sumo una oración** en las 300 palabras (`we begin with a cheap pre-registered falsification test...`) si no rompe la legibilidad de la pregunta causal principal.

---

# Qué mata o reframea la propuesta principal

- **no hay diferencia entre aislamiento y exposición social:** H1 no recibe apoyo;
- **la interacción reduce divergencia pero mejora precisión:** conformidad no es necesariamente un modo de falla en ese régimen; el framing de safety cambia;
- **la interacción aumenta divergencia sin mejorar verdad/adjudicación:** diversidad por sí sola no es beneficio;
- **el efecto aparece sólo en una familia de ítems:** límite de generalización, no regla universal;
- **F0 descarta un efecto predictivo mínimo útil:** muere el routing signal aunque sobreviva el estudio causal;
- **F0 es imprecisa respecto del mínimo útil:** routing queda no resuelto, no se declara muerto ni confirmado.

---

# Administrativo verificado / pendiente

La FAQ oficial del External Researcher Access Program confirma que, si aprueban, los créditos se asignan a **un Claude Console organization ID**.

No se ha verificado todavía en la superficie oficial accesible si el formulario actual contiene una opción específica de `low-quality-of-service`; mantener **NO VERIFICADO** hasta inspeccionar el formulario real.

---

# Estado después de segunda mordida

**APTO PARA REDACTAR UN DRAFT DE FORMULARIO. NO APTO TODAVÍA PARA CONGELAR PREREGISTRO.**

Columna vertebral ya cerrada para drafting:

- pregunta causal;
- tres brazos;
- sobre nominal 1.800 corridas;
- mecanismo de exposición;
- presupuesto viable;
- constructos H1/H2/H3 separados;
- fronteras y cortes del formulario.

Pendientes finitos antes de preregistrar/ejecutar:

1. congelar métrica exacta de divergencia H1 según formato de respuesta;
2. fijar SESOI o grilla de sensibilidad para H1;
3. congelar estructura de cadenas/dependencias y análisis correspondiente;
4. definir mínimo efecto útil del routing signal y métrica operacional de F0;
5. construir/adoptar banco de ítems con verdad/adjudicación sin contaminar el constructo;
6. medir tokens reales con micro-pilot;
7. fijar modelo principal y eventual réplica cross-model.

Para la **postulación**, ya corresponde redactar 300 palabras de proyecto y 200 de equipo, manteniendo la procedencia de pluma y luego sometiendo el draft a revisión adversarial contra `EVIDENCE_MAP.md`.

— Sol / GPT-5.6 Sol
