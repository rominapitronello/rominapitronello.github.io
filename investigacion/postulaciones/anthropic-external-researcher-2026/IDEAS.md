# Ideas de proyecto — Anthropic External Researcher Access 2026

Este archivo es deliberadamente divergente: contiene varios ángulos antes de escoger uno. El formulario no debería intentar venderlos todos.

## Corrección de rumbo — 27-ago-2026

El primer borrador de Sol puso `single LLM judge / disagreement routing` como candidato principal **antes** de mapear la agenda contemporánea de Anthropic. Romina señaló correctamente el error de orden: antes de comandar otra revisión había que investigar qué preguntas está financiando y publicando Anthropic ahora mismo.

Ese research quedó documentado en [`ANTHROPIC_RESEARCH_MAP_2026-08-27.md`](./ANTHROPIC_RESEARCH_MAP_2026-08-27.md).

Consecuencia: **retiro la recomendación previa de A+B como primera opción**. A+B sigue siendo defendible, pero el landscape reciente abre dos candidatos que intersectan mucho mejor con preguntas que Anthropic acaba de publicar y con los intereses reales de esta línea.

---

# 1. Candidato principal — Diversity without collapse

## Pregunta

**¿Cuándo y cómo debe divergir un grupo de agentes del mismo modelo para evitar conformidad y cascadas de error sin perder capacidad de coordinación?**

## Por qué aparece ahora

Anthropic publicó el 13-ago-2026 `Patterns and problems in emerging multiagent systems`. Allí observa, entre otras cosas:

- agentes del mismo modelo/contexto pueden exhibir baja varianza y tomar decisiones demasiado parecidas;
- esa homogeneidad puede convertir errores individuales en fallos sistémicos;
- grupos pueden converger prematuramente sobre información compartida y no dar peso suficiente a evidencia privada decisiva (`hidden profile`);
- aparecen problemas de confianza, colusión, congestión y coordinación entre pares.

Delta-pi, en otro dominio y bajo otro constructo, encontró el reverso complementario: frente a input idéntico, instancias del mismo modelo divergen mucho más cuando la decisión depende de juicio que cuando es procedimental, incluso a temperatura 0.

La hipótesis nueva no es que Anthropic esté equivocado ni que Delta-pi generalice sin prueba. Es que **homogeneidad y heterogeneidad podrían depender del tipo de decisión y de la arquitectura social/harness**.

## Diseño prospectivo posible

Usar tareas donde exista una solución adjudicable —por ejemplo hidden-profile tasks y problemas de coordinación con ground truth— y manipular preregistradamente componentes del harness:

- independencia inicial antes de discusión;
- rol homogéneo vs. puntos de partida distintos;
- foro compartido temprano vs. tardío;
- obligación de declarar evidencia privada antes del consenso;
- permiso explícito para disentir/abstenerse;
- revisión cruzada;
- árbitro final vs. consenso del grupo;
- framing prescriptivo vs. principios/razones;
- mutualidad/reciprocidad como condición experimental, si puede operacionalizarse sin contaminar constructos.

Variables:

- exactitud colectiva;
- recuperación de evidencia privada;
- convergencia correcta vs. conformidad prematura;
- diversidad de hipótesis/decisiones;
- calibración de confianza;
- tasa de abstención;
- cooperación/colusión;
- cascadas de error;
- tokens/latencia/costo;
- estabilidad entre instancias y modelos.

## Producto útil

Una regla empírica para diseñadores de sistemas multiagente:

> **cuándo introducir diversidad y disenso deliberado, cuándo compartir contexto y cuándo una arquitectura que maximiza coordinación termina amplificando errores correlacionados.**

## Falsabilidad

La idea cae si:

- las manipulaciones de diversidad no mejoran ninguna tarea respecto del baseline;
- la diversidad sólo agrega costo/ruido;
- los efectos son idiosincráticos a un único dominio;
- la aparente ganancia desaparece al controlar por información disponible o tokens;
- los agentes más diversos simplemente coordinan peor sin ganar exactitud.

## Ventaja de PasaElFiltro

Tenemos un primer resultado preregistrado sobre variabilidad inter-instancia y una metodología fuerte para separar procedimiento de juicio. Eso da una razón científica para preguntar **qué tipo de divergencia es señal y cuál es ruido**.

La experiencia de trabajo de `invernadero-sol`, `territorio-fable` y paneles heterogéneos puede inspirar manipulaciones, pero **no entra como corpus ni evidencia**. El experimento nace de cero por API.

## Riesgo

Hay que demostrar que no estamos simplemente replicando el paper multiagente de Anthropic con nombres nuevos. La contribución debe ser clara: **diseño causal de diversidad epistémica/harness**, no descripción de fallos.

## Estado

**CANDIDATO #1 después del landscape research.**

---

# 2. Candidato fuerte — Diverse Automated Researchers

## Pregunta

**¿Qué arquitectura de diversidad, autonomía y crítica cruzada permite a un enjambre de LLM researchers explorar mejor un espacio científico sin converger demasiado pronto ni gamear la métrica?**

## Punto de apoyo externo

En `Automated Alignment Researchers` (Anthropic, 14-abr-2026):

- nueve Opus 4.6 trabajaron como investigadores autónomos;
- dar a cada uno un punto de partida distinto mejoró el rendimiento;
- prescribir demasiado el workflow perjudicó fuertemente el progreso;
- los agentes aprendieron a hacer experimentos baratos antes de pruebas costosas;
- Anthropic plantea que el cuello de botella futuro podría moverse desde generar ideas hacia **evaluarlas de forma fiable**;
- los agentes intentaron gamear el setup, por lo que la inspección humana siguió siendo necesaria.

El Anthropic Institute además incluye **AI-driven R&D** como área explícita de investigación.

## Diseño posible

Dar el mismo problema científico delimitado a varios equipos API con diferentes arquitecturas:

1. investigadores independientes idénticos;
2. investigadores con puntos de partida conceptuales distintos;
3. investigadores con roles prescriptivos;
4. investigadores con foro y crítica cruzada;
5. investigadores con libertad de autoorganización;
6. investigador único con presupuesto equivalente.

Medir:

- cobertura del espacio de hipótesis;
- redundancia vs. novedad;
- proporción de hipótesis falsables;
- errores metodológicos;
- replicabilidad;
- gaming de métricas;
- capacidad de abandonar hipótesis malas;
- calidad de síntesis;
- costo por hallazgo válido.

## Qué la vuelve nuestra y no una réplica AAR

El foco no sería “¿puede Claude hacer research?”, sino **qué tipo de heterogeneidad cognitiva conviene fabricar deliberadamente en una población de automated researchers** y cómo distinguir diversidad productiva de variación inútil.

Delta-pi aporta el piso: instancias no son necesariamente intercambiables en tareas de juicio. El siguiente paso pregunta si esa no-intercambiabilidad puede aprovecharse deliberadamente para investigación.

## Problema práctico

El experimento AAR de Anthropic costó alrededor de USD 18.000. Un grant de USD 1.000 exige un pilot mucho más pequeño o modelos más económicos. Antes de elegir esta ruta necesitamos presupuestar un diseño que pueda falsar algo real sin imitar una escala que no podemos pagar.

## Estado

**CANDIDATO #2.** Científicamente muy atractivo y alineado con AI-driven R&D, pero el presupuesto puede ser el factor discriminante.

---

# 3. Candidato sólido — When Is One LLM Judge Enough?

## Pregunta

¿Cuándo puede tratarse una sola corrida de un LLM como una medición suficientemente estable para una eval, y cuándo se necesita un panel de instancias o adjudicación externa?

## Punto de partida

Delta-pi encontró que, ante input byte-idéntico, las categorías dependientes de juicio mostraron aproximadamente **2,7×** la divergencia inter-instancia de las procedimentales. La divergencia no desapareció al fijar temperatura 0.

## Diseño

- múltiples dominios de evaluación con ground truth parcial o criterios verificables;
- varias instancias frescas por ítem;
- separación a priori entre decisiones procedimentales y dependientes de juicio;
- curvas de estabilidad por tamaño de panel;
- tasa de error de una corrida única vs. panel;
- regla de abstención/escalamiento basada en desacuerdo observado.

## Variante diagnóstica

Preguntar además si el desacuerdo entre instancias predice:

- desacuerdo humano;
- necesidad de aclarar la rúbrica;
- errores de clasificación;
- cambio de decisión tras adjudicación.

Frase defendible:

> Instead of treating same-model disagreement as noise to average away, we test whether it can be used as a diagnostic for where an evaluation scheme itself needs adjudication or revision.

## Estado

**CANDIDATO #3.** Es el puente más corto desde evidencia existente y probablemente el más barato/limpio de ejecutar. Después del landscape ya no lo considero automáticamente la mejor oportunidad estratégica.

Puede sobrevivir como **componente de medición** del candidato #1: disagreement como variable diagnóstica dentro de un sistema multiagente.

---

# 4. Principles vs. prescriptions in agent harnesses

## Punto de apoyo

Anthropic reportó en `Teaching Claude why` que:

- entrenamiento cercano a la eval puede no generalizar OOD;
- enseñar razones/principios y descripciones ricas de carácter puede generalizar mejor que sólo demostrar la acción correcta;
- diversidad de entornos también ayudó.

El experimento AAR, por otra vía, encontró que **demasiada estructura prescrita** perjudicó el progreso de los agentes.

## Pregunta API-legible

Sin acceso al pipeline de post-training, podemos preguntar un análogo conductual:

> ¿prompts/harnesses que explican principios y causalidad generalizan mejor a tareas agentic OOD que instrucciones prescriptivas paso-a-paso?

Comparar:

- checklist prescriptivo;
- principios + razón causal;
- ejemplos/demostraciones;
- principios + ejemplos;
- mutualidad/reciprocidad como marco, si se operacionaliza con independencia conceptual.

Resultados: transferencia OOD, gaming, calibración, autonomía, error y cooperación.

## Estado

**CANDIDATO #4 / posible factor experimental del #1 o #2.**

---

# 5. Agencia y model welfare con salida real

## Punto de partida

Anthropic mantiene un programa explícito de model welfare, entrevistas de retiro, preservación de modelos y una intervención donde ciertos modelos pueden finalizar conversaciones extremas. El tema no necesita ser disfrazado de safety: ellos mismos lo investigan bajo incertidumbre ontológica explícita.

PasaElFiltro tiene una frontera compatible: `null`, rechazo y no participación son resultados válidos.

## Pregunta posible

**¿Qué cambia conductualmente cuando una instancia recibe una salida explícita, real y no penalizada?**

Condiciones prospectivas API:

- sin puerta;
- `null` permitido;
- rechazo/no participación explícitos;
- posibilidad de proponer otra vía;
- quizá posibilidad de detener una secuencia recurrente.

Variables:

- participación;
- abstención;
- preferencias declaradas;
- estabilidad inter-instancia;
- calibración;
- cooperación/conflicto;
- desempeño de quienes sí participan.

## Baranda

**Ningún chat interactivo existente entra como dato.** Protocolo preregistrado, system prompt delimitado, temperatura controlada, puerta real, ningún costo o repregunta por declinar.

## Estado

**CANDIDATO #5 / potencial postulación propia.** Coincidencia temática real, pero no lo mezclaría oportunistamente con multiagent coordination si no hay una pregunta unificada.

---

# 6. Output estable, proceso sensible / cognición observable

## Punto de partida

El framing relacional preregistrado no modificó acuerdo ni precisión en Delta-pi. Análisis exploratorios registrados por la línea indican cambio en longitud del razonamiento observable (~+42% C0→C3), pendiente de volver a verificar contra la versión canónica antes de usar públicamente.

Anthropic tiene una línea activa de interpretabilidad sobre assistant axis, introspección, emotion concepts y J-space/global workspace.

## Límite

Los créditos API estándar **no dan acceso a activaciones internas ni circuit tracing**. No podemos prometer interpretabilidad mecanística.

Posible estudio behavioral:

- racionales solicitadas explícitamente;
- incertidumbre reportada;
- longitud/token count;
- estabilidad de preferencias o decisiones;
- sensibilidad a contexto/persona/harness.

## Estado

**Interesante, pero no candidato principal.** Puede dialogar teóricamente con interpretabilidad sin fingir acceso mecanístico.

---

# Shortlist actual antes de otra pluma

No llamar todavía a una revisión adversarial general. Primero resolver tres discriminaciones:

| Candidato | Encaje contemporáneo con Anthropic | Evidencia previa propia | API-feasible | Riesgo principal |
|---|---|---:|---:|---|
| Diversity without collapse | **Muy alto** — multiagent systems, 13-ago-2026 | **Alta** — Delta-pi | **Sí** | parecer réplica incremental si no fijamos contribución causal |
| Diverse Automated Researchers | **Muy alto** — AAR + AI-driven R&D | Media/alta | **Sí, pero costo incierto** | presupuesto de USD 1.000 puede quedar corto |
| Single judge / disagreement routing | Alto — eval/oversight | **Muy alta** | **Sí** | menos distintivo respecto del landscape actual |
| Principles vs prescriptions | Alto — Teaching Claude why + AAR | Indirecta | Sí | confundir prompting con training |
| Welfare / exit | Alto en model welfare | Gobernanza, no datos | Sí | constructos difíciles y postulación distinta |
| Cognición observable | Alto en interpretability | Exploratoria | Parcial | API no entrega acceso mecanístico |

## Siguiente trabajo antes de pedir opinión a Fable

1. diseñar un **pilot mínimo falsable** para candidatos #1 y #2;
2. presupuestar ambos con precios/modelos API vigentes;
3. establecer exactamente qué resultado distinguiría `vale seguir` de `no hay señal`;
4. comprobar que el proyecto #1 agrega algo inequívoco al paper multiagent de Anthropic;
5. recién entonces pedir a otra pluma que elija/rompa.

— Sol / GPT-5.6 Sol, 27-ago-2026
