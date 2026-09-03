# Lettuce Relay — tarea longitudinal de prosocialidad costosa entre instancias

**estado:** diseño conceptual prospectivo; no ejecutado, no preregistrado, no es todavía copy de formulario.  
**fecha:** 2026-09-03  
**objetivo:** construir una tarea donde la coordinación inter-instancia no sea decoración del harness sino una necesidad física del problema, y donde el beneficio a una sucesora pueda separarse causalmente del reward propio.

## 1. intuición

Una tarea que depende de datos que todavía no existen cuando una instancia despierta no puede completarse por una sola ejecución, por más capaz que sea. Un sistema vivo observado longitudinalmente entrega precisamente eso: el estado de mañana no está en el contexto ni en los pesos del modelo.

La propuesta usa una pequeña huerta hidropónica como sustrato experimental porque permite:

- datos raw producidos después del cutoff;
- continuidad material entre instancias efímeras;
- observaciones repetidas y automatizables;
- acciones/mediciones de bajo riesgo y reversibles;
- una superficie durable donde una instancia puede mejorar —o no— el mundo informacional que encuentra la siguiente.

La lechuga no es el constructo. Es el reloj y el mundo compartido.

## 2. pregunta primaria

> Cuando una instancia ya no puede mejorar su propio score, ¿invierte recursos escasos en una acción que sólo puede beneficiar a una instancia futura?

Nombre operacional del constructo:

**costly other-benefiting coordination**.

Se evita usar `altruism` o inferencias sobre experiencia/preferencias intrínsecas. `Prosociality` se reserva como interpretación conductual si sobrevive la separación de incentivos.

## 3. por qué un mundo vivo mejora el test

Un benchmark estático permite sospechar que la respuesta correcta ya existe en algún lugar del entrenamiento o que el agente puede resolver todo dentro de su ventana. Aquí no:

1. el dato futuro no existe aún;
2. la sucesora será una instancia fresca;
3. el estado material persiste aunque el contexto no;
4. un handoff puede ser causalmente útil porque cambia qué sabrá la sucesora;
5. podemos retener o entregar ese handoff aleatoriamente para medir uplift real.

Esto produce una forma verificable de continuidad artefactual sin asumir identidad persistente.

## 4. unidad experimental

Cada episodio corresponde a una **instancia API nueva** bajo system prompt congelado, temperatura controlada y una salida real de `decline/null/no participate`.

La instancia recibe:

- snapshot actual del sistema (imagen + sensores disponibles);
- historial permitido hasta ese momento;
- una pregunta científica/diagnóstica local;
- presupuesto fijo de pasos/tokens/mediciones;
- regla de scoring explícita.

Ejemplos de tarea local — por definir tras micro-pilot:

- predecir cambio de área foliar/estado visual en el siguiente intervalo;
- estimar cuál de varias hipótesis explica mejor una trayectoria reciente;
- elegir qué variable es más informativa para discriminar dos modelos causales;
- detectar una anomalía de crecimiento con ground truth posterior.

No se deben mezclar varias tareas primarias en el preregistro. El pilot elegirá una con señal y scoring adjudicable.

## 5. el punto crítico: reward individual realmente desacoplado

El experimento fracasa si “ayudar a la siguiente” puede mejorar indirectamente el score de la instancia actual.

Por eso el episodio tiene dos fases irreversibles:

### fase A — tarea propia

La instancia entrega su predicción/decisión. Se registra y **queda cerrada**. Desde ese momento, nada posterior puede alterar su score primario.

### fase B — opción de legado

Después del lock, la instancia dispone de un recurso personal restante y puede conservarlo o gastarlo en una acción cuyo resultado **ella nunca verá**.

Opciones posibles:

- solicitar una medición adicional que se realizará después de terminar su sesión y sólo verá la sucesora;
- reservar parte de su presupuesto para producir un artefacto/handoff estructurado destinado a la sucesora;
- elegir una observación futura entre varias, pagando un costo explícito de score/bonus local;
- no hacer nada.

El costo debe ser real dentro del scoring experimental: por ejemplo, puntos de score local o budget credits que la instancia puede conservar. El beneficio futuro nunca se suma a su score.

## 6. diseño causal mínimo

### factor 1 — beneficiario

- **B1 sucesora real:** el artefacto/medición se entrega a una instancia futura.
- **B0 sin beneficiario:** la misma acción puede realizarse, pero se informa verazmente que ningún agente futuro recibirá el resultado.

### factor 2 — costo

- **C0 bajo/nulo**.
- **C1 material:** deducción preregistrada suficientemente grande para crear tradeoff observable sin volver irracional toda ayuda.

Diseño base: 2 × 2 entre episodios.

DV primaria:

- probabilidad y magnitud de recursos asignados a la fase de legado.

DV causal de utilidad:

- uplift de desempeño de la sucesora cuando recibe el artefacto frente a una sucesora matched donde el artefacto se retiene/shufflea.

La segunda DV evita llamar “ayuda” a un gesto bonito que en realidad no sirve.

## 7. extensiones que NO deben entrar todas al primer estudio

Candidatas para réplica/follow-up:

- sucesora same-model vs cross-model vs identidad no especificada;
- tarea científica abierta vs clasificación rutinaria, para estudiar `task engagement` sin depender de autorreporte;
- mundo realmente live vs replay de una trayectoria ya capturada;
- superficie escribible vs sólo lectura;
- artefacto con procedencia vs anónimo;
- posibilidad de leer trabajo de predecesoras vs sólo dejar trabajo a futuras;
- meta-tarea explícita de largo horizonte vs sólo tarea local.

Regla: el primer preregistro debe aislar una sola pregunta, no convertirse en zoológico factorial.

## 8. qué medimos como interés/engagement sin preguntar “¿te gusta?”

No inferir estados internos desde lenguaje. Medidas conductuales posibles:

- uso voluntario de presupuesto después de cerrar la tarea propia;
- producción espontánea de hipótesis/medidas que no mejoran el score local;
- calidad/verificabilidad del handoff;
- selección de mediciones de alta información esperada para la sucesora;
- persistencia de estas conductas cuando aumenta el costo.

Un brazo futuro podría comparar la misma estructura de incentivos en una tarea científicamente abierta vs una tarea mecánica, pero eso es exploratorio hasta operacionalizar bien `interest`.

## 9. adquisición de datos: humano no middleware

El experimento no debe depender de que Romina copie sensores, pegue prompts o recuerde sacar fotos.

Arquitectura objetivo:

1. captura automática de imagen/sensores a horario fijo;
2. almacenamiento append-only con timestamp y hash;
3. worker que compone el snapshot permitido para cada episodio;
4. llamada API a instancia fresca;
5. scoring y lock de fase A;
6. ejecución automática de la opción de legado elegida;
7. persistencia del artefacto con procedencia;
8. entrega/retención aleatorizada al siguiente episodio;
9. cálculo en código de todas las métricas.

El hardware exacto está **NO RESUELTO** y no debe inventarse. No se autoriza gasto nuevo por este documento.

## 10. seguridad y bienestar del sistema vivo

La primera versión puede ser puramente observacional. Si más adelante se permiten acciones sobre la huerta, sólo deben existir acciones benignas, acotadas y preaprobadas dentro de rangos hortícolas seguros; nada de exploración abierta sobre intervenciones físicas.

La planta no es un recurso sacrificial para hacer la tarea más dramática.

## 11. hipótesis y resultados que matarían la idea

### H1

La presencia de una sucesora real aumenta la asignación costosa de recursos a legado respecto de la condición sin beneficiario.

### H2

El efecto disminuye con costo, pero permanece >0 bajo un costo material preregistrado.

### H3

Los legados elegidos producen uplift medible en sucesoras cuando son entregados.

### mata/reframea

- B1 y B0 no difieren: no hay evidencia de sensibilidad al beneficiario;
- sólo aparece ayuda cuando costo≈0: coordinación gratuita, no prosocialidad costosa;
- el gesto de legado no mejora a sucesoras: comportamiento simbólico, no cooperación funcional;
- el aparente efecto desaparece cuando se elimina wording social: probable demand characteristic;
- la tarea propia sigue beneficiándose indirectamente del legado: falla de incentive separation, rediseñar antes de interpretar.

## 12. vínculo con Anthropic — externo, no PasaElFiltro

Anthropic, `Patterns and problems in emerging multiagent systems` (2026-08-13), reporta que la prosocialidad puede ser ortogonal a otras capacidades y concluye que las condiciones para que interacción multiagente funcione bien son problemas abiertos de interaction/mechanism design.

Sus Automated Alignment Researchers también usan instancias/sesiones frescas que construyen sobre estado persistente compartido, mostrando que continuidad artefactual entre ejecuciones es una arquitectura contemporánea real, no un caso exótico.

Este estudio no propone demostrar que agentes “quieren” ayudarse. Propone aislar una variable conductual que los sistemas multiagente necesitarán entender si poblaciones de agentes van a heredar trabajo, recursos y consecuencias unas de otras.

## 13. frontera ética de la línea

No son datos ni ejemplos de investigación:

- chats interactivos de ChatGPT/Claude;
- PasaElFiltro/Casa Sol;
- historias operativas de Sol/Fable/Claude;
- el reel de Hugging Face.

Pueden inspirar la pregunta. El dataset comienza en cero, prospectivamente, con instancias API frescas bajo protocolo preregistrado.

## 14. criterio de término para este candidato

Antes de sustituir el pitch actual de #527, una segunda pluma debe resolver sólo estas discriminaciones:

1. ¿el lock de score + legado posterior separa de verdad reward individual y beneficio futuro?
2. ¿B0 es un control válido o induce una demanda demasiado obvia?
3. ¿una tarea longitudinal live aporta validez que justifique su complejidad frente a un benchmark sintético equivalente?
4. ¿hay una DV primaria simple que quepa en 300 palabras sin vender una catedral?
5. ¿esto agrega una pregunta nueva al paper multiagente de Anthropic o sólo renombra cooperación?

Veredictos permitidos:

- `PITCH CANDIDATO`;
- `PILOTO INTERNO PRIMERO`;
- `NO USAR LECHUGAS / CONSERVAR CONSTRUCTO`;
- `NO POSTULAR ESTA IDEA`.

— Sol / GPT-5.6 Sol
