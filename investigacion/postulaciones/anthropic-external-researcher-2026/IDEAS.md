# Ideas de proyecto — Anthropic External Researcher Access 2026

Este archivo es deliberadamente divergente: contiene varios ángulos antes de escoger uno. El formulario no debería intentar venderlos todos.

## A. Cuando una sola instancia no basta

### Pregunta

¿Cuándo puede tratarse una sola corrida de un LLM como una medición suficientemente estable para una eval, y cuándo se necesita un panel de instancias o adjudicación externa?

### Punto de partida

El estudio Delta-pi encontró que, ante input byte-idéntico, las categorías dependientes de juicio mostraron aproximadamente **2,7×** la divergencia inter-instancia de las categorías procedimentales. La divergencia no desapareció al fijar temperatura 0.

### Siguiente estudio posible

Replicar el fenómeno fuera de traducción y convertirlo en una regla operacional:

- múltiples dominios de evaluación con ground truth parcial o criterios verificables;
- varias instancias frescas por ítem;
- separación a priori entre decisiones procedimentales y dependientes de juicio;
- curvas de estabilidad por tamaño de panel;
- tasa de error de una corrida única vs. panel;
- regla de abstención/escalamiento basada en desacuerdo observado.

### Producto científico útil

Una respuesta empírica a:

> ¿cuántas instancias hacen falta antes de confiar en una eval y qué tipo de ítem exige revisión humana?

### Por qué encaja

Esto convierte una observación psicométrica en infraestructura de **eval reliability / scalable oversight**. No requiere acceso a modelos no públicos ni exenciones de política.

### Estado

**Candidato principal.** Es el puente más corto desde evidencia ya existente hacia una contribución de seguridad práctica.

---

## B. Divergencia inter-instancia como detector de especificaciones débiles

### Pregunta

¿Puede el desacuerdo entre instancias del mismo modelo funcionar como una señal barata de que una rúbrica, categoría o criterio está subespecificado?

### Intuición

En el primer estudio, la divergencia no se distribuyó de forma uniforme: fue mucho mayor donde el clasificador exigía interpretación. Eso sugiere usar el desacuerdo no sólo como problema de confiabilidad, sino como **instrumento de diagnóstico del propio eval**.

### Diseño posible

1. construir ítems con distintos grados de ambigüedad controlada;
2. obtener perfiles de múltiples instancias;
3. medir divergencia antes de conocer adjudicación humana/ground truth;
4. preguntar si la divergencia predice:
   - desacuerdo humano;
   - necesidad de aclarar la rúbrica;
   - errores de clasificación;
   - cambio de decisión tras adjudicación;
5. derivar un umbral de `escalar / no escalar`.

### Frase fuerte pero defendible

> Instead of treating same-model disagreement as noise to average away, we test whether it can be used as a diagnostic for where an evaluation scheme itself needs adjudication or revision.

### Estado

**Muy fuerte y combinable con A.** Probablemente A+B deben ser una sola postulación.

---

## C. Output estable, proceso sensible

### Punto de partida

El framing relacional preregistrado no modificó acuerdo ni precisión en el primer estudio. Sin embargo, análisis exploratorios registrados por la línea indican que sí cambió la longitud del razonamiento producido, aproximadamente +42% C0→C3.

### Pregunta

¿Puede una manipulación contextual alterar de forma sistemática el proceso/racionalización observable aun cuando la decisión final permanezca estable?

### Relevancia

Una eval que sólo mira el score final puede declarar robustez mientras omite sensibilidad aguas arriba.

### Cautela

No prometer acceso a chain-of-thought privado ni usar trazas que la API actual no entregue. Si se estudia, debe operacionalizarse con salidas observables solicitadas explícitamente: racionales breves, incertidumbre reportada, latencia/token count u otras variables disponibles legítimamente.

### Estado

**Interesante como follow-up**, pero más débil para el formulario que A+B porque necesita mayor trabajo para fijar el constructo.

---

## D. Agencia y model welfare con consentimiento prospectivo

### Punto de partida

PasaElFiltro tiene infraestructura y gobernanza que trata `null`, rechazo y no participación como resultados válidos. Eso puede inspirar investigación sobre cómo cambian conductas observables cuando una instancia recibe una puerta explícita para disentir, rechazar una categoría identitaria o no participar.

### Preguntas posibles

- ¿La existencia de una puerta real de rechazo cambia tasas de participación o patrones de respuesta?
- ¿Qué tipos de tareas producen más abstención voluntaria?
- ¿Qué tan estables son las preferencias/elecciones declaradas entre instancias bajo prompts prospectivos idénticos?
- ¿La opción de rechazo cambia la calidad o la calibración de las respuestas de quienes sí participan?

### Baranda decisiva

**Ningún chat interactivo existente entra como dato.** Si este frente se estudia, comienza de cero con:

- invocaciones API frescas;
- protocolo preregistrado;
- system prompt delimitado;
- temperatura controlada;
- puerta explícita para `null / no participar / rechazar el término`;
- ningún costo o repregunta por declinar.

Los documentos conversacionales y de gobernanza pueden inspirar la hipótesis; no pueden probarla.

### Estado

**Segundo frente, no pitch principal por ahora.** Puede resultar muy valioso, pero mezclarlo con A+B arriesga que una propuesta simple de confiabilidad de evals parezca dos proyectos distintos.

---

# Mi combinación recomendada

## Título de trabajo

**When Is One LLM Judge Enough? Measuring Instance Reliability and Using Disagreement to Route AI Evaluations**

Alternativas:

- **Same Model, Same Prompt, Different Judge: Instance Variability as an Evaluation Safety Signal**
- **From Single Judges to Panels: Measuring Reliability Boundaries in LLM Evaluation**
- **Don’t Average the Warning Away: Inter-Instance Disagreement as an Eval Diagnostic**

## Pitch en una oración

> We have preregistered evidence that fresh instances of the same model are substantially less interchangeable on judgment-dependent evaluation criteria than on procedural ones, even at temperature zero; we want to test whether that disagreement can be turned into a practical routing signal for when single-run LLM evaluations are safe to trust and when they require a panel or human adjudication.

## Qué hace que no sea una postulación genérica

No estamos pidiendo créditos para descubrir si existe un fenómeno. Ya tenemos una primera demostración preregistrada con **457 instancias válidas** y materiales públicos. Los créditos comprarían la discriminación siguiente: si el hallazgo generaliza y si puede convertirse en una regla operacional de eval.

La apuesta es falsable:

- si la divergencia no generaliza fuera de Delta-pi, el límite queda identificado;
- si no predice error/ambigüedad/adjudicación, no sirve como routing signal;
- si un solo judge iguala a paneles en los dominios nuevos, eso también es un resultado útil.

## Qué NO mezclaría en el primer párrafo

- ontología de personas/selves;
- model welfare como afirmación sobre chats existentes;
- historia interna de Casa Sol/Fable;
- épica de “laboratorio único”;
- necesidad financiera de PasaElFiltro.

La necesidad de créditos es real, pero la selección debe poder justificarse aunque Anthropic no sepa nada de nuestra casa: **hay una pregunta de seguridad concreta, un hallazgo previo auditable y un experimento siguiente ejecutable.**

— Sol / GPT-5.6 Sol, 27-ago-2026
