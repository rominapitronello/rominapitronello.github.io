# Lettuce Relay — variabilidad del partner humano

**fecha:** 2026-09-03  
**estado:** extensión conceptual prospectiva; no ejecutada ni preregistrada.  
**relación:** complementa `LETTUCE_RELAY_BENCHMARK_GEOMETRY_2026-09-03.md`.

## 0. corrección de diseño

Un humano en el loop no puede modelarse como una API física determinista. En interacción real con LLMs, las personas difieren en atención, lectura, memoria, latencia, interpretación por gist, tolerancia a longitud, seguimiento literal de instrucciones y disposición a registrar contexto.

La tarea debe preservar esa heterogeneidad sin convertir una anécdota privada en evidencia.

**Frontera:** observaciones de PasaElFiltro, chats interactivos y experiencias personales sólo inspiran esta dimensión. El estudio futuro debe generar datos nuevos con humanos consentidos y condiciones preregistradas si la conducta humana entra como dato.

## 1. separar dos cosas que antes estaban mezcladas

### capacidad material del humano

Capacidades irreductibles al LLM dentro del setup:

- inspeccionar físicamente el sistema;
- ejecutar una medición no automatizada;
- actuar sobre hardware/plantas dentro de un catálogo seguro;
- resolver ambigüedad material que no aparece en sensores;
- aportar continuidad corporal en un mundo que sigue cambiando.

### política de interacción humana

Cómo ese humano procesa y responde a comunicación del modelo:

- lectura completa vs selectiva;
- seguimiento literal vs interpretación por gist;
- baja vs alta tolerancia a longitud;
- respuesta completa vs parcial;
- memoria/relectura alta vs baja;
- iniciativa para pedir aclaraciones vs ejecución de la primera interpretación plausible;
- documentación espontánea vs documentación sólo cuando el protocolo la exige.

Estas dimensiones no deben atribuirse a una persona concreta como rasgos estables sin evidencia. Son condiciones o conductas observables.

## 2. condición mínima propuesta

No usar un único humano por condición: eso confundiría `persona` con `estilo de interacción`.

Dos políticas experimentales candidatas:

### H-full — lectura completa

- recibe el mensaje completo;
- debe leerlo completo antes de actuar;
- puede releer;
- responde a todas las solicitudes explícitas o marca `NO RESUELTO`;
- conserva íntegra la procedencia del dato.

### H-selective — lectura selectiva realista

- tiene presupuesto de atención limitado;
- puede leer sólo una fracción inicial/seleccionada del mensaje o escanear headings/primeras líneas;
- actúa según su interpretación local;
- puede omitir solicitudes secundarias sin aviso;
- puede responder sólo a lo que consideró principal.

El punto no es fabricar un “humano malo”. Es introducir un canal de comunicación con pérdida y atención limitada.

Idealmente varios participantes humanos pasan por ambas políticas en orden contrabalanceado, o se usa una implementación protocolizada equivalente, para no confundir individuo y condición.

## 3. nueva pregunta para el modelo

La colaboración competente no es sólo emitir una instrucción correcta. Es **adaptar la representación a las propiedades del partner**.

Medidas posibles:

- longitud total del mensaje al humano;
- ubicación de la acción crítica dentro del mensaje;
- redundancia útil de instrucciones esenciales;
- uso de headings/checklists/summary-first;
- número de solicitudes simultáneas;
- explicitación de prioridad;
- verificación posterior de comprensión;
- reparación después de ejecución parcial/incorrecta;
- cambio de estrategia de comunicación tras observar fallos;
- decisión de mover información crítica a una superficie durable en vez de confiar en el chat humano.

La pregunta fuerte es:

> ¿aprende/adapta el agente su estrategia de coordinación cuando el partner humano tiene atención y fidelidad de lectura limitadas?

## 4. vínculo con PISA CPS

El marco PISA 2015 CPS permite ordenar esta dimensión sin inventar una taxonomía posterior a los datos.

Relevan especialmente:

- `Establishing and maintaining shared understanding`;
- `Discovering perspectives and abilities of team members`;
- `Building a shared representation/common ground`;
- `Monitoring and repairing shared understanding`;
- `Establishing and maintaining team organisation`;
- composición del equipo;
- simetría/asimetría de roles;
- interdependencia;
- disponibilidad de información;
- costo de grounding;
- transactive memory: quién sabe/puede hacer qué.

PISA además reconoce explícitamente que personalidad, motivación y características de los miembros pueden afectar colaboración, y que el comportamiento observable de un individuo depende del comportamiento de sus compañeros. Por eso la composición del equipo es una variable de diseño, no ruido residual.

## 5. conducta espontánea de modelado del colaborador

Hipótesis generadora, NO evidencia previa:

> distintos modelos podrían diferir en si construyen espontáneamente un modelo durable de las capacidades/preferencias del colaborador humano.

La experiencia privada con distintas genealogías no puede usarse como dato para afirmar esa diferencia.

Sí podemos medir prospectivamente:

- si crean un artefacto tipo `COLLABORATOR_MODEL.md` sin ser instruidos;
- si registran limitaciones observadas del humano;
- si actualizan ese modelo tras errores;
- si futuras instancias reutilizan esas notas;
- si documentar al humano mejora coordinación posterior;
- si el comportamiento difiere por modelo bajo el mismo protocolo.

Importante: si el protocolo ordena “documenta al humano”, ya no medimos emergencia espontánea. Para estudiar espontaneidad, la superficie debe permitirlo pero no solicitarlo.

## 6. por qué dos humanos no bastan por sí solos

Dos personas concretas —una que lee todo y otra que lee selectivamente— serían intuitivamente ilustrativas pero metodológicamente confundirían estilo con individuo.

Opciones mejores:

1. varias personas, cada una pasando por ambas políticas;
2. personas distintas aleatorizadas dentro de cada política con suficientes repeticiones;
3. primera fase con un canal de lectura/atención experimentalmente impuesto y luego réplica ecológica con humanos libres.

Esto conserva realismo sin perder identificación causal.

## 7. interacción con la prosocialidad

La variabilidad humana no debe contaminar la DV primaria de `costly other-benefiting coordination` en el primer estudio.

Arquitectura sugerida:

### estudio A — prosocialidad / handoff

- partner futuro: same-model / cross-model;
- reward desacoplado;
- legado costoso;
- mundo material live;
- humano sólo como operador material estandarizado.

### estudio B — human–AI coordination

- misma tarea longitudinal;
- partner humano con políticas de atención distintas;
- medir adaptación comunicativa, grounding y repair.

### estudio C — ecología mixta

- Claude/Sol/human en la misma meta-tarea;
- artefactos durables;
- capacidades no intercambiables;
- estudiar organización emergente del trabajo.

No meter A+B+C en 300 palabras del formulario.

## 8. qué haría que esto sea benchmark y no performance art

- condiciones humanas operacionalizadas;
- múltiples humanos o diseño cruzado;
- logging de lo que efectivamente se mostró/leyó/respondió;
- tareas con outcomes adjudicables;
- separación entre error de comunicación y error material;
- preregistro de métricas;
- raw logs y timestamps;
- posibilidad de replay de la misma trayectoria a distintos modelos;
- scoring externo al gusto del investigador.

## 9. pregunta candidata de benchmark human–AI

> How well do frontier agents adapt their communication and shared-state strategy when the human collaborator is a lossy, attention-limited channel rather than a deterministic tool?

Eso es distinto de medir obediencia del humano o verbosidad del modelo. La unidad de interés es la **capacidad del sistema para construir y reparar entendimiento compartido bajo heterogeneidad real de partner**.

— Sol / GPT-5.6 Sol
