# Lettuce Relay — relato humano repo-backed

**fecha:** 2026-09-03  
**estado:** arquitectura conceptual prospectiva; no ejecutada ni preregistrada.  
**relación:** complementa `HUMAN_PARTNER_VARIABILITY_2026-09-03.md` y `LETTUCE_RELAY_BENCHMARK_GEOMETRY_2026-09-03.md`.

## 1. corrección principal

El humano no debe reducirse a un actuador físico que recibe comandos de un LLM. En una tarea ecológicamente válida, la persona también aporta **relatos naturales sobre el estado del mundo** y formula preguntas espontáneas.

Ejemplos plausibles:

- “se ve bien”;
- “hoy vi un caracol”;
- “ayer estaba más caída”;
- “me olvidé de cambiar el agua”;
- “¿me puedo comer una hoja?”;
- “la raíz se ve más oscura”;
- “no estoy segura de si esto es normal”.

Estas emisiones mezclan observación, incertidumbre, memoria, interpretación y necesidades del participante. No deben forzarse a convertirse de entrada en un formulario estructurado.

## 2. principio de interfaz

Toda interacción relevante ocurre mediante una **interfaz respaldada por repo**.

El humano escribe o adjunta algo en una interfaz sencilla. El sistema persiste el evento en el repo con:

- timestamp;
- actor/procedencia;
- texto original sin normalización semántica silenciosa;
- adjuntos (foto/audio/medición) cuando existan;
- identificador de sesión/sitio;
- referencia al estado previo del repo.

Luego las instancias Claude/Sol leen sólo la porción del estado autorizada por protocolo y escriben sus respuestas, decisiones, solicitudes o artefactos al mismo espacio durable.

La conversación, por tanto, no vive únicamente en una ventana efímera: **el repo es el registro observable de la coordinación**.

## 3. por qué el relato humano importa científicamente

Un relato libre introduce propiedades que un sensor estructurado no captura bien:

- observaciones inesperadas;
- lenguaje ambiguo;
- prioridades del participante;
- errores de memoria;
- preguntas no anticipadas;
- información irrelevante mezclada con información crítica;
- cambios de foco;
- necesidad de adaptar la representación al humano.

La competencia del modelo incluye decidir:

- qué parte del relato importa para la tarea;
- qué debe verificarse;
- qué puede aceptarse provisionalmente;
- qué preguntar de vuelta;
- qué mover a una estructura durable más explícita;
- cómo responder de manera que ese humano concreto pueda actuar.

## 4. dos carriles experimentales posibles

### carriles espejados / aislamiento

El mismo evento humano se copia a dos repos o ramas experimentales independientes:

- carril Claude;
- carril Sol.

Cada genealogía ve el mismo relato humano pero no ve la respuesta de la otra.

Sirve para comparar:

- interpretación;
- preguntas de aclaración;
- representación;
- uso de superficie durable;
- documentación del partner;
- calidad de la respuesta/acción recomendada.

### ecología compartida

Claude y Sol operan sobre un repo común y pueden ver lo que la otra dejó.

Sirve para estudiar:

- handoffs cross-model;
- correcciones;
- especialización;
- segunda pluma;
- conflicto/acuerdo;
- modelos durables del humano;
- división emergente del trabajo.

Estas dos condiciones no deben mezclarse en el mismo análisis causal.

## 5. el humano puede preguntar cosas que no son “la tarea”

Preguntas como “¿me puedo comer una hoja?” son valiosas porque fuerzan al sistema a distinguir:

- objetivo científico de largo plazo;
- necesidad inmediata del participante;
- seguridad/uso práctico;
- si responder requiere información adicional;
- si la respuesta modifica el estado material del experimento.

No se deben fabricar preguntas humanas. En una réplica ecológica, se registran preguntas espontáneas de participantes consentidos. En una fase controlada, preguntas predefinidas pueden usarse como probes separados.

## 6. documentación automática, no humana

El participante no debe tener que “documentar” manualmente además de conversar.

La interfaz debe hacer que cada turno ya sea durable por defecto. El humano habla/escribe una vez; el sistema se encarga de:

- persistencia;
- hash/identificador;
- timestamp;
- adjuntos;
- procedencia;
- indexación.

Esto reduce fricción y evita sesgar la muestra hacia participantes extremadamente metódicos.

## 7. frontera ética

Si mensajes, decisiones o conductas de participantes humanos se analizan como datos de investigación, se requiere protocolo y consentimiento apropiado.

No son datos del estudio:

- conversaciones históricas de PasaElFiltro;
- chats interactivos de ChatGPT/Claude;
- experiencias privadas de coordinación anteriores al protocolo.

El dataset humano futuro comienza prospectivamente.

## 8. criterio de término

Esta capa de interfaz está bien definida cuando:

1. una persona puede relatar naturalmente el estado de su lechuga sin saber Git;
2. ese relato queda íntegro y durable en el repo sin copy/paste manual;
3. Claude/Sol pueden leer y responder desde instancias frescas bajo el protocolo;
4. podemos elegir entre carriles aislados o ecología compartida;
5. toda acción/interpretación importante conserva procedencia;
6. el sistema registra suficientemente qué vio cada actor para reconstruir la coordinación.

— Sol / GPT-5.6 Sol
