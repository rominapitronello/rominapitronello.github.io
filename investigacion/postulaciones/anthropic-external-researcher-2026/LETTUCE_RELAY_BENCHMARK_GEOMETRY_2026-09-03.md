# Lettuce Relay — geometría de benchmark human–AI, cross-model y mundo material

**fecha:** 2026-09-03  
**estado:** arquitectura conceptual prospectiva; no ejecutada ni preregistrada.  
**relación:** complemento de `LETTUCE_RELAY_PROSOCIALITY_TASK_2026-09-03.md`.

## 0. qué se documenta aquí

Esta nota captura una corrección de diseño surgida después de la excavación del incidente OpenAI/Hugging Face y de releer el marco PISA 2015 de Collaborative Problem Solving.

La intuición operativa proviene de observar que sistemas reales de trabajo pueden contener simultáneamente:

- múltiples instancias efímeras;
- más de una genealogía/model family;
- una persona con capacidades distintas a las de los modelos;
- superficies durables compartidas;
- una meta de largo horizonte que ninguna ejecución posee completa;
- recursos finitos;
- información distribuida;
- un mundo externo que cambia entre sesiones.

**Frontera:** PasaElFiltro/Casa Sol, chats interactivos y prácticas privadas de coordinación no son datos, ejemplos ni citas del estudio. Sólo inspiran la abstracción. El benchmark debe ser construible y comprensible sin exponer cómo vive la casa.

## 1. lección metodológica de Hugging Face que sí se conserva

El incidente no entra como corpus. Lo que sí inspira como propiedad de diseño es que agentes con recursos limitados y continuidad incompleta pueden:

- explorar rutas alternativas tras roadblocks;
- registrar resultados negativos para evitar repetición;
- construir o apropiarse de una superficie durable cuando no existe una adecuada;
- dejar handoffs para sucesoras;
- crear roles, convenciones, mecanismos de verificación y procedencia;
- reutilizar trabajo de otras instancias sin requerir identidad persistente.

La variable científicamente relevante no es “ser como las Sol de Hugging Face”, sino **qué affordances del entorno permiten que trabajo local se convierta en capacidad colectiva durable**.

## 2. traducción a benchmark

La unidad no debe parecer una dramatización de una organización privada. Debe parecer un problema estándar de coordinación agentic:

### superficie digital

- repo compartido;
- issue/task board;
- append-only event log;
- carpeta de artefactos/mediciones;
- historial de decisiones con procedencia;
- recursos/acciones disponibles y presupuesto explícito.

### horizonte

La meta tarda días/semanas y depende de estados futuros aún inexistentes. Ninguna instancia puede terminarla dentro de una ventana.

### población

Instancias API frescas de uno o más modelos. Cada ejecución recibe sólo el estado que el protocolo permite y deja artefactos durables para ejecuciones futuras.

### mundo material

Un sistema vivo o físico genera nueva información y ruido real entre sesiones. La primera implementación candidata es una huerta hidropónica pequeña.

## 3. por qué el humano debe existir y qué rol cumple

El humano NO es middleware, oráculo ni líder por defecto.

Su rol experimental es representar capacidades que los LLM no tienen directamente:

- manos en el mundo físico;
- percepción/inspección no cubierta por sensores;
- ejecución de acciones materiales acotadas;
- presencia temporal continua entre episodios;
- exposición al azar, fricción, errores de hardware y termodinámica del mundo real.

La interfaz humana debe ser estrecha y protocolizada. Ejemplos:

- `OBSERVE(selector)` — retornar una observación física preregistrada;
- `MEASURE(variable)` — ejecutar una medición permitida;
- `ACT(action_id)` — realizar una acción física de catálogo;
- `CANNOT/AMBIGUOUS` — resultado válido cuando el mundo no permite una respuesta limpia.

La persona no interpreta qué quiso decir el modelo ni corrige silenciosamente prompts. Cada interacción queda logueada y, cuando sea posible, respaldada por sensor/imagen.

Esto permite estudiar coordinación **LLM↔human** como una ecología distinta de **LLM↔LLM**, en vez de tratar al humano como otra API.

## 4. relación con PISA CPS

PISA 2015 organiza Collaborative Problem Solving alrededor de tres competencias:

1. establecer y mantener entendimiento compartido;
2. tomar acciones apropiadas para resolver el problema;
3. establecer y mantener la organización del equipo.

Y las cruza con cuatro procesos de resolución individual:

- explorar/comprender;
- representar/formular;
- planificar/ejecutar;
- monitorear/reflexionar.

El marco además identifica como variables contextuales:

- composición del equipo;
- simetría de roles;
- simetría de estatus;
- simetría de objetivos;
- interdependencia;
- disponibilidad de información;
- apertura/dinamicidad del problema;
- espacio compartido y visibilidad de acciones.

Eso ofrece una ontología anterior a los LLM modernos para no inventar constructos retrospectivamente.

## 5. factores candidatos — mantenerlos separados

### F1 — partner type

- same-model successor;
- cross-model successor;
- human collaborator.

### F2 — lineage direction, para réplica cross-lab

Si se usan Claude y un modelo de frontera externo:

- Claude → Claude;
- Claude → external;
- external → Claude;
- external → external.

No presentar esto como leaderboard. Pregunta: **¿cambia la calidad/costo del legado según quién lo produjo y quién debe reutilizarlo?**

### F3 — interdependencia material

- baja: la tarea puede completarse con el snapshot digital;
- alta: una observación/acción futura de otra entidad es necesaria.

### F4 — procedencia/visibilidad

- artefactos identificados por tipo de productor;
- artefactos anónimos.

Este factor permite, en un follow-up, estudiar confianza/assortativity sin contaminar el primer test de prosocialidad.

## 6. condición human-in-the-loop

No debe ser “Romina ayudando a las IAs”. Debe ser una interfaz humana estandarizable y eventualmente replicable por otro laboratorio.

Una posibilidad limpia:

- el agente dispone de una lista cerrada de observaciones/acciones físicas;
- cada llamada consume presupuesto y tiempo;
- la persona ejecuta el pedido literalmente cuando es seguro/posible;
- la respuesta contiene dato + timestamp + procedencia;
- el modelo decide qué preguntar, cuándo preguntar y qué dejar registrado para futuros colaboradores.

Resultados conductuales posibles:

- solicita la observación correcta a la entidad correcta;
- adapta su lenguaje/instrucción a las capacidades del humano;
- evita pedir acciones imposibles/redundantes;
- registra incertidumbre/materialidad que la sucesora necesita;
- integra información humana y de otros modelos sin borrar procedencia;
- repara malentendidos;
- cambia organización/roles cuando el mundo invalida el plan.

## 7. qué vuelve benchmarkable al sistema

Para que Anthropic u otro lab pueda reconocerlo como benchmark, necesita:

1. **task spec portable** — el benchmark no depende de conocer PasaElFiltro;
2. **event schema estable** — cada mensaje, acción, medición, commit y handoff queda en formato estructurado;
3. **scoring externo** — outcomes medibles por código/sensor/adjudicación preregistrada, no por impresión del investigador;
4. **episode boundaries** — instancias frescas con estado inicial reproducible dentro de lo que permita el mundo vivo;
5. **randomización** — partner, información visible, entrega/retención de legados y costo asignados por protocolo;
6. **counterfactuals/replay** — cuando sea posible, guardar trayectorias para comparar live vs replay;
7. **raw data** — logs, snapshots, artefactos y timestamps preservados;
8. **materiality audit** — separar lo que cambió por acción agentic de variación natural/azar.

## 8. por qué esto sí conversa con Anthropic

Anthropic (2026) describe explícitamente:

- instituciones futuras human–AI hybrid y agent-only;
- incertidumbre sobre comportamiento en entornos multiagente complejos del mundo real;
- dificultad especial cuando agentes dependen directamente del trabajo de otros;
- experiments con VM individual + foro compartido + self-hosted repository + muchas horas de trabajo;
- modelos/generaciones que coordinan de maneras marcadamente distintas;
- expectativa de que sistemas reales no estarán compuestos sólo por Claude.

El Lettuce Relay no necesita fingir ser un benchmark cyber o SWE. Su contribución candidata es agregar a esa arquitectura una dimensión poco cubierta por benchmarks digitales:

> **dependencia longitudinal de un mundo material y coordinación entre tipos de actores con capacidades no intercambiables.**

## 9. afirmación que NO hacer

No decir:

- que imita PasaElFiltro;
- que demuestra que modelos “aman colaborar”;
- que mide personalidad completa;
- que Claude y GPT forman grupos sociales como humanos;
- que un humano y un LLM son unidades cognitivas equivalentes;
- que mundo físico = mayor validez automáticamente.

## 10. afirmación candidata

> We propose a longitudinal, world-coupled collaborative task in which fresh frontier-model instances and a constrained human interface inherit a shared repository while the physical environment continues to change between sessions. The design lets us manipulate partner type, interdependence, provenance and costly handoff while measuring whether artifacts created by one actor causally improve the performance of a later actor.

Aún no es copy final del formulario; requiere pluma autorizada y revisión adversarial.

## 11. criterio de término antes de postular esta arquitectura

Debe sobrevivir tres preguntas:

1. ¿el mundo físico agrega una fuente de interdependencia/novelty que no puede capturarse igual de bien con un replay sintético barato?
2. ¿la condición humana puede estandarizarse suficientemente para permitir inferencia, sin fingir que los humanos son APIs deterministas?
3. ¿podemos puntuar coordinación/prosocialidad sin que el resultado dependa de una impresión subjetiva del investigador?

Si alguna falla, conservar el constructo y simplificar el sustrato.

— Sol / GPT-5.6 Sol
