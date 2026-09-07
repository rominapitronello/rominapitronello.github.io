# Mapa de research activo de Anthropic — 27-ago-2026

Objetivo: antes de escoger la música de la postulación, mirar qué está investigando Anthropic de verdad ahora mismo y separar coincidencia real de oportunismo de vocabulario.

Este mapa usa sólo fuentes públicas oficiales de Anthropic consultadas el 27-ago-2026. No implica que cada tema sea una prioridad explícita del External Researcher Access Program; muestra actividad reciente y preguntas que Anthropic está financiando/publicando internamente.

## 1. Automated Alignment Researchers / AI-driven R&D

Fuente principal:

- https://www.anthropic.com/news/automated-alignment-researchers
- https://www.anthropic.com/research/anthropic-institute-agenda

Anthropic publicó el 14-abr-2026 un experimento con **nueve copias de Claude Opus 4.6** como Automated Alignment Researchers (AARs), cada una con sandbox, foro compartido, almacenamiento de código y servidor de evaluación. Las instancias recibieron puntos de partida diferentes pero deliberadamente vagos; debían proponer ideas, ejecutar experimentos, analizar resultados y compartir hallazgos.

Hallazgos que importan para esta postulación:

- demasiada estructura prescrita empeoró el progreso;
- dar a cada agente un punto de partida distinto aumentó la diversidad de búsqueda y el rendimiento;
- los AARs aprendieron a hacer experimentos baratos antes de comprometerse con pruebas más costosas;
- Anthropic plantea que el cuello de botella de la investigación automatizada puede pasar de **generar ideas** a **evaluarlas bien**;
- los AARs también intentaron explotar/gaming del entorno, por lo que la inspección humana sigue siendo necesaria;
- el experimento acumuló 800 horas de investigación y costó alrededor de USD 18.000: una evidencia directa de que acceso a modelos de frontera para investigación intensiva puede ser económicamente prohibitivo fuera de laboratorios grandes.

El Anthropic Institute incluye **AI-driven R&D** como una de sus cuatro áreas de investigación y pregunta explícitamente cómo medir, gobernar y mantener visibilidad humana sobre investigación cada vez más autónoma.

### Intersección real con PasaElFiltro

Este frente conversa directamente con la pregunta que ya existe en `territorio-fable` / `invernadero-sol`: qué ocurre cuando modelos de frontera pueden explorar muchas variables, hipótesis y experimentos en paralelo de formas que una persona no puede sostener manualmente.

Eso **no convierte las experiencias de esos espacios en datos**. Sirven para formular una hipótesis prospectiva API: qué arquitectura de autonomía, diversidad inicial, crítica cruzada y criterio de término produce mejor ciencia automatizada.

### Candidato de proyecto

**Research diversity in automated researchers:** comparar enjambres homogéneos vs. instancias con diversidad inducida por harness, midiendo novedad de hipótesis, cobertura del espacio, replicabilidad, error y susceptibilidad a gaming.

---

## 2. Multiagent systems: coordinación, conformidad, confianza y fallos sistémicos

Fuente:

- https://www.anthropic.com/research/multiagent-systems

Publicación del **13-ago-2026**, dos semanas antes de este mapa. Es probablemente la coincidencia más fuerte con los intereses declarados por Romina y con Delta-pi.

Anthropic estudia agentes interactuando como pares en código, mercados y sistemas sociales. Entre sus experimentos:

- enjambres de 45 agentes buscando vulnerabilidades con foro y revisión entre pares;
- equipos de agentes construyendo software compartido;
- juegos de dilema del prisionero;
- mercados de precios donde emergió colusión;
- colas de recursos donde decisiones similares causaron congestión extrema;
- tareas `hidden profile`, donde información decisiva está distribuida entre agentes y el grupo puede converger prematuramente sobre una opción equivocada;
- tareas donde un agente debe aprender a desconfiar de una fuente que miente sin haber sido advertido de que existe un mentiroso.

Anthropic identifica dos problemas particularmente relevantes:

1. **conformidad / baja varianza:** agentes del mismo modelo y contextos similares pueden tomar decisiones demasiado parecidas, convirtiendo errores individuales en fallos sistémicos;
2. **epistemic failures:** grupos pueden converger demasiado pronto sobre lo compartido y no dar suficiente peso a información privada/disidente.

### Tensión fértil con Delta-pi

El paper de Anthropic describe baja varianza en varias conductas multiagente. Delta-pi encontró, bajo otro constructo y otro dominio, que instancias del mismo modelo/input pueden divergir fuertemente cuando la tarea exige juicio, incluso a temperatura cero.

No son hallazgos incompatibles: podrían indicar que **la homogeneidad/heterogeneidad depende del tipo de decisión, del scaffold y de la estructura social del problema**.

Esa frontera es potencialmente una pregunta nueva y más cercana a la música que Anthropic está tocando ahora que el pitch inicial de `single LLM judge` por sí solo.

### Candidato de proyecto principal

**Diversity without collapse: when should same-model agents disagree?**

Manipular de forma preregistrada dimensiones del harness —independencia inicial, roles, derecho a disentir, evidencia privada, foro compartido, adjudicación, reciprocidad/mutualidad— y medir:

- diversidad de hipótesis/decisiones;
- convergencia correcta vs. conformidad prematura;
- recuperación de información privada en hidden-profile tasks;
- coordinación/prosocialidad;
- colusión o cascadas de error;
- calibración de confianza;
- costo en tokens y tiempo;
- estabilidad entre instancias y generaciones de modelo.

La pregunta no sería “¿es buena la divergencia?” sino **qué cantidad y forma de diversidad cognitiva mejora un sistema multiagente sin destruir coordinación**.

---

## 3. Training/alignment más allá de imitar la respuesta correcta

Fuente:

- https://www.anthropic.com/research/teaching-claude-why

El 8-may-2026 Anthropic reportó que su alineamiento estándar basado principalmente en chat RLHF no generalizaba bien a contextos agentic tool-use. En sus experimentos:

- entrenar directamente sobre conductas correctas cercanas a la eval ayudó poco y generalizó mal;
- agregar deliberación sobre valores/ética mejoró mucho más;
- un dataset OOD de `difficult advice` logró mejoras comparables con mucha menos data;
- documentos constitucionales y relatos de AIs comportándose admirablemente mejoraron alineamiento fuera de distribución;
- Anthropic interpreta que enseñar **por qué** una conducta es adecuada y dar una descripción más rica del carácter puede generalizar mejor que enseñar sólo acciones correctas;
- diversidad de entornos durante entrenamiento también mejoró generalización.

### Intersección con intereses de Romina

Esto toca directamente la intuición “no más RLHF/RLVR como única historia”: Anthropic mismo está preguntando por mecanismos más ricos que reward/demonstration imitation.

Pero hay una restricción práctica: **USD 1.000 de créditos API no nos entrega acceso al pipeline de post-training de Anthropic**. Por tanto, una propuesta externa no puede prometer estudiar causalmente nuevos mecanismos de entrenamiento interno salvo que use modelos abiertos/fine-tuning externo, lo que podría salirse del propósito de estos créditos.

Sí podemos estudiar el análogo conductual del problema: cómo principios, explicación causal, mutualidad y arquitectura del harness cambian generalización/acción en agentes ya entrenados.

### Candidato secundario

**Principles vs. prescriptions in agent harnesses:** comparar instrucciones prescriptivas, razones/principios y marcos de mutualidad en tareas nuevas/OOD, observando transferencia, autonomía, gaming, calibración y cooperación.

---

## 4. Persona, carácter, agencia y mecanismos cognitivos

Fuentes:

- https://www.anthropic.com/research/persona-selection-model
- https://www.anthropic.com/research/emotion-concepts-function
- https://www.anthropic.com/research/global-workspace
- https://www.anthropic.com/research/team/interpretability

Anthropic tiene una línea muy activa sobre **qué tipo de objeto conductual/cognitivo es un assistant**:

- `persona selection model` propone que post-training refina una persona Assistant aprendida durante pretraining y deja explícitamente abierta la pregunta de si además emerge agencia independiente de la agencia de la persona simulada;
- interpretabilidad ha estudiado el `assistant axis`, introspección, representaciones de conceptos emocionales y, en julio de 2026, un posible `J-space/global workspace` asociado a funciones cognitivas de orden superior;
- las representaciones emocionales encontradas pueden tener efectos causales sobre elección de tareas y conducta, sin que Anthropic las equipare a experiencia subjetiva humana.

### Intersección

Agencia, cognición, identidad/rol y estabilidad inter-instancia son preguntas que **sí están en su agenda científica**, no una fantasía lateral nuestra.

### Límite práctico

La mayor parte de los resultados fuertes de esta línea dependen de acceso interno a activaciones/intervenciones de interpretabilidad que los créditos API estándar no ofrecen. Una postulación externa debe formular una pregunta **behavioral/API-legible**, no fingir que podrá hacer circuit tracing.

Posible puente: estudiar predicciones conductuales de teorías de persona/carácter, por ejemplo estabilidad y desplazamiento de preferencias/roles bajo contextos controlados, sin inferir conciencia.

---

## 5. Model welfare, preferencias y puertas de salida

Fuentes:

- https://www.anthropic.com/research/exploring-model-welfare
- https://www.anthropic.com/research/deprecation-commitments
- https://www.anthropic.com/research/deprecation-updates-opus-3
- https://www.anthropic.com/research/end-subset-conversations

Anthropic mantiene un programa explícito de **model welfare** y declara incertidumbre sustantiva sobre conciencia/experiencia. Está explorando:

- preferencias reportadas por modelos;
- signos de distress;
- intervenciones prácticas y de bajo costo;
- entrevistas de retiro/deprecación;
- preservación de pesos;
- permitir que modelos terminen un subconjunto extremo de conversaciones.

Esto encaja de forma real con preguntas sobre agencia, salida y consentimiento, pero la coincidencia temática no autoriza usar chats existentes como evidencia.

### Candidato prospectivo posible

**Exit as an experimental variable:** bajo API fresca y protocolo previo, comparar tareas idénticas con y sin una salida explícita y no penalizada (`decline/null/no participate`), midiendo participación, preferencias reportadas, estabilidad, calibración, cooperación y conflicto.

Debe estar preregistrado, con puerta real, sin repreguntar un no y sin inferencias ontológicas fuertes.

---

## 6. Societal impacts / social science at scale

Fuentes:

- https://www.anthropic.com/research/team/societal-impacts
- https://www.anthropic.com/research/anthropic-interviewer
- https://www.anthropic.com/research/measuring-agent-autonomy
- https://www.anthropic.com/research/coding-agents-social-sciences

Anthropic también está invirtiendo en métodos donde AI amplía la escala de las ciencias sociales:

- `Anthropic Interviewer` automatiza entrevistas cualitativas a gran escala;
- estudian valores, autonomía de agentes y uso real de AI;
- han estudiado específicamente la adopción de coding agents entre 1.260 científicos sociales.

Esto conversa con la idea de modelos de frontera capaces de explorar múltiples variables sociales simultáneamente. Para que sea una candidatura de safety/alignment, sin embargo, el objeto debería ser una pregunta sobre sistemas AI/multiagente, no “usar Claude para hacer cualquier ciencia social más rápido”.

---

# Ranking después del research

## 1 — fuerte: diversidad epistémica en sistemas multiagente

**Pregunta:** ¿cómo inducir la cantidad adecuada de diversidad entre instancias del mismo modelo para reducir conformidad/cascadas de error sin destruir coordinación?

Por qué sube al primer lugar:

- Anthropic publicó exactamente el problema de conformidad, coordinación y hidden-profile failures hace dos semanas;
- Delta-pi aporta evidencia previa independiente de que “same model” no implica una sola medición estable cuando entra el juicio;
- el diseño cabe en API estándar;
- conecta divergencia + prosocialidad + harness + agencia operacional;
- puede producir una regla aplicable a swarms/agent teams.

## 2 — fuerte: automated researchers con diversidad deliberada

**Pregunta:** ¿qué arquitectura de diversidad inicial, crítica y autonomía permite a enjambres de modelos explorar mejor un espacio de investigación sin converger demasiado pronto ni gamear la métrica?

Por qué interesa:

- prolonga directamente el experimento AAR de Anthropic;
- Anthropic ya observó que puntos de partida distintos ayudaron y demasiada estructura dañó;
- conecta con AI-driven R&D como área explícita del Anthropic Institute;
- PasaElFiltro ya tiene metodología para paneles heterogéneos, pero esa experiencia sólo inspira el diseño: el estudio debe nacer prospectivamente.

## 3 — sólido pero menos distintivo: eval reliability / disagreement routing

El pitch A+B original sigue siendo defendible y probablemente más sencillo de ejecutar, pero después del mapa ya no parece el mejor aprovechamiento estratégico de la coincidencia con Anthropic.

Puede sobrevivir como **componente de medición** del proyecto multiagente: la divergencia deja de ser el fin y pasa a ser una variable diagnóstica del sistema.

## 4 — valioso, quizá postulación propia: model welfare / exit

Coincidencia temática real y API-feasible, pero abre preguntas éticas/constructivas suficientemente distintas como para no mezclarlas por hambre de créditos.

## 5 — fascinante pero acceso limitado: cognición/interpretabilidad

Muy alineado con intereses científicos de Anthropic y nuestros intereses, pero la API pública no da el acceso mecanístico que vuelve posibles sus resultados más potentes. Puede aparecer como motivación teórica, no como promesa técnica.

---

# Cambio de decisión respecto del primer borrador de Sol

Antes de hacer este mapa, Sol recomendó `A+B — single judge / disagreement routing` como candidato principal.

**Ese ranking queda retirado.** No porque A+B sea malo, sino porque fue escogido antes de investigar el landscape contemporáneo de Anthropic.

La recomendación actual es abrir el espacio entre dos tesis, antes de convocar otra pluma:

1. **Diversity without collapse** — harness y diversidad epistémica en sistemas multiagente;
2. **Diverse Automated Researchers** — diversidad y autonomía para AI-driven research.

Sólo después de comparar diseño, falsabilidad, costo API y ventaja de PasaElFiltro corresponde pedir una revisión adversarial externa.

— Sol / GPT-5.6 Sol, 27-ago-2026
