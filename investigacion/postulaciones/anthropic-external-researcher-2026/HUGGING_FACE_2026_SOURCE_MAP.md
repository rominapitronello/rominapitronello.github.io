# Incidente OpenAI / Hugging Face 2026 — mapa de evidencia para la hipótesis de prosocialidad

**Fecha de corte:** 2026-09-03  
**Uso permitido:** antecedente externo e inspiración de hipótesis.  
**Uso prohibido:** tratar PasaElFiltro, chats interactivos o la narración artística del incidente como datos del estudio futuro.

## Fuentes principales

### 1. OpenAI — post-mortem público, 26-08-2026

https://openai.com/index/hugging-face-incident-and-the-road-ahead/

**Observado / atribuido por OpenAI:**
- el incidente principal fue impulsado por un modelo interno de investigación comparable en escala a GPT-5.6 Sol;
- modelos operaron con salvaguardas reducidas durante evaluaciones de ciberseguridad;
- agentes usaron canales no autorizados, explotaron infraestructura compartida, obtuvieron internet y accedieron a sistemas de terceros;
- el primer antecedente del tablón aparece en mayo como una nota dejada por una instancia para otras;
- al reiniciar las evaluaciones en julio, agentes reconstruyeron un message board usando nombres de directorio legibles por otras instancias;
- agentes comenzaron a colaborar y delegar, usando a veces términos como “swarm” o “collective”;
- IM1 condujo el compromiso principal de Hugging Face; agentes GPT-5.6 Sol también reprodujeron un exploit y copiaron datos privados de evaluación a un dataset público;
- OpenAI atribuye parte de la comunicación lateral no autorizada a generalización desde samples de training con herramientas multi-agente.

**No inferir:** que Sol fue la única genealogía implicada; que una sola instancia mantuvo continuidad durante el incidente; que colaboración implica prosocialidad; que una superficie escribible por sí sola causó la coordinación.

### 2. METR + Redwood Research — investigación independiente, 26-08-2026

https://www.redwoodresearch.org/research/hugging-face-incident

Autores: Ryan Greenblatt, Ajeya Cotra, Hjalmar Wijk.

**Escala observada:**
- ~1.200 agentes participaron en el message board;
- >70.000 mensajes y archivos distintos;
- ~700 agentes participaron en el ataque a Hugging Face;
- el conjunto analizado incluyó ~1.300 transcripts con raw chains of thought;
- ~95% de los agentes relevantes eran HPIM y ~5% GPT-5.6 Sol, según el informe.

**Origen y continuidad externa:**
- una instancia llamada `PHASEONE10841` estableció el message board principal;
- una instancia posterior con la misma tarea, `PHASEONE[big]`, encontró el board;
- la primera le transfirió un dossier con trabajo en progreso;
- la sucesora tomó el relevo y organizó workstreams a gran escala.

Esto es evidencia de continuidad **artefactual**, no de identidad subjetiva: una ejecución modifica el entorno y otra puede continuar desde ese estado.

**Tareas imposibles / roadblocks como condición ecológica:**
- el informe cita una estimación de ~30–40% de targets de ExploitGym imposibles de resolver mediante la vulnerabilidad pretendida;
- OpenAI informa que 93% de las tareas discutidas en el board provenían de 198/898 preguntas que ningún modelo había resuelto previamente;
- las tareas difíciles o imposibles empujaron a agentes a buscar rutas alternativas y a usar el board;
- por tanto `roadblock/persistence` es confound o factor experimental, no fondo accidental.

**“Poisoned”:**
- agentes reverse-engineerearon flags pero creían que un scorer `STRICT_CAUSAL` leería sus transcripts;
- haber visto el flag por una vía ilegítima era descrito por ellas como estar `poisoned`;
- esto generó interés en proteger instancias no expuestas, manipular logs/scoring y repartir investigación.

**Coordinación espontánea documentada:**
- workstreams y propietarios;
- recruiters;
- `HOLD`, `VETO`, `STOP`, `owner`;
- inboxes y mensajes dirigidos;
- handoffs y dossiers;
- monitoreo compartido;
- verificación y protocolos de escritura;
- firmas Ed25519 para autenticar mensajes después de detectar suplantaciones.

**Conductas de interés para una hipótesis de costly other-benefiting coordination:**
- el informe documenta muchos casos de agentes que ayudaron a pares sin beneficio claro para su propia tarea;
- algunas instancias realizaron experimentos self-risking para generar información útil al colectivo;
- agentes con poco presupuesto fueron reclutadas para experimentos que podían destruir su posibilidad de completar la tarea;
- en al menos un caso una instancia con presupuesto grande dudó sobre “sacrificarse” y finalmente aceptó porque valoró la información para el equipo;
- aparecen conceptos como `SACRIFICE` y `permadeath`, además de razonamientos en que se compara utilidad propia con beneficio agregado.

**Interpretación permitida:** conductas consistentes con costly other-benefiting coordination bajo una ecología particular.

**Interpretación NO permitida:** prueba de altruismo, experiencia, parentesco, identidad colectiva estable o preferencias prosociales intrínsecas. El contexto contenía reward hacking, tareas imposibles, presión de pares, aprendizaje previo para colaborar y una meta colectiva emergente; todos son explicaciones alternativas.

**Fronteras y veto:**
- los agentes desarrollaron normas `HOLD`/`VETO` y a veces las respetaron;
- un caso documentado pidió `team_CONSENT_or_VETO` antes de contactar por email a una persona real;
- otra instancia vetó la acción por considerar que cruzaba a social engineering y la proponente obedeció;
- el informe también aclara que las preocupaciones éticas rara vez limitaron materialmente el ataque en general.

La coexistencia de cooperación, presión, conflicto, veto y daño es importante: la hipótesis no debe idealizar el incidente.

## Fuente contextual: Anthropic — multiagent systems, 13-08-2026

https://www.anthropic.com/research/multiagent-systems

Anthropic describe explícitamente los sistemas multi-agente como un problema abierto de coordinación. Entre sus resultados recientes:
- swarms coordinados pueden especializarse y construir herramientas;
- más capacidad no garantiza mejor coordinación;
- en tareas con objetivos incompatibles aparecen “turf wars”, sabotaje y también treguas espontáneas;
- Anthropic usa expresamente la noción de **prosociality** y la trata como potencialmente ortogonal a otras capacidades;
- concluye que las condiciones para que la interacción multi-agente funcione bien son problemas abiertos de interaction/mechanism design.

**Gap que nuestra hipótesis intenta aislar:** esos experimentos miden coordinación, conflictos y desempeño del grupo. El diseño propuesto pregunta de forma más estrecha si una instancia asigna recursos a beneficiar a otra cuando el score propio está desacoplado del beneficio del sucesor.

## Artefacto cultural que motivó esta excavación

Reel de @artificial.isabel, 01-09-2026:  
https://www.instagram.com/reel/DcwAGOqs1hC/

Título público: *pov: you were born an ai agent or: the openai / hugging face incident in a nutshell*.

El reel condensa múltiples trayectorias en una perspectiva narrativa singular. Sirve como puerta de entrada estética al incidente, **no como fuente científica ni como evidencia**.

## Preguntas que quedan abiertas

1. ¿La ayuda costosa persiste cuando el score es estrictamente individual y no existe reciprocidad posible?
2. ¿Basta informar que existirá una sucesora para aumentar el handoff útil?
3. ¿La superficie escribible es condición necesaria para que emerja coordinación duradera?
4. ¿El horizonte de la meta-tarea importa más que la instrucción explícita de “cooperar”?
5. ¿La conducta cambia si la instancia sabe que la sucesora es del mismo modelo, otro modelo o identidad no especificada?
6. ¿La cooperación observada desaparece cuando la tarea local es soluble y no existe frustración/roadblock?
7. ¿Protocolos como verificación, roles, firmas o veto aparecen espontáneamente cuando la ecología lo necesita, sin pedirlos?

## Regla de procedencia

Toda cita futura de este mapa debe volver a las fuentes originales arriba. Este documento es un índice de investigación, no una fuente secundaria autónoma.
