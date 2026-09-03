# Low-cost distributed Lettuce Relay network

**fecha:** 2026-09-03  
**estado:** arquitectura conceptual prospectiva; no ejecutada ni preregistrada.  
**relación:** extensión de `LETTUCE_RELAY_PROSOCIALITY_TASK_2026-09-03.md`, `LETTUCE_RELAY_BENCHMARK_GEOMETRY_2026-09-03.md` y `HUMAN_PARTNER_VARIABILITY_2026-09-03.md`.

## 1. intuición operativa

El sustrato físico no necesita ser un laboratorio caro. Una red distribuida de pequeños sistemas hidropónicos domésticos puede producir múltiples mundos materiales con estados futuros genuinamente inexistentes al inicio de cada episodio.

Candidato de bajo costo: hidroponía pasiva tipo Kratky o equivalente simple, usando materiales reutilizados cuando sea seguro y estandarizable.

Materiales candidatos por sitio:

- recipiente opaco o botella/depósito reutilizado apto para agua;
- cobertura opaca para bloquear luz al reservorio;
- plantín de lechuga de lote/cultivar definido;
- soporte simple para raíz/planta;
- solución nutritiva de dos componentes preparada con protocolo común;
- agua local;
- regla/escala visual y fotografía con referencia de tamaño;
- etiquetas de sitio/plantín;
- repo + interfaz de interacción.

La lista exacta no está congelada. No se compra ni distribuye nada desde este documento.

## 2. ventaja del diseño distribuido

Varios hogares/sitios permiten:

- replicación material real;
- variación ambiental natural (temperatura, luz, calidad del agua, microerrores de manejo);
- datos post-cutoff que ningún modelo puede memorizar;
- una tarea longitudinal donde el estado del mundo diverge entre sitios;
- estudiar si el sistema aprende a manejar incertidumbre y heterogeneidad en vez de resolver una simulación determinista.

La variación entre sitios debe modelarse, no ignorarse. Sitio/participante pueden actuar como bloques o efectos aleatorios según el análisis final.

## 3. qué debe estandarizarse para que no sea sólo jardinería anecdótica

Mínimos candidatos:

- cultivar/lote o al menos fuente registrada;
- rango inicial de tamaño/edad del plantín;
- volumen de reservorio;
- receta/concentración de nutrientes;
- procedimiento de mezcla de los dos componentes;
- regla para reposición de agua/nutrientes;
- ventana horaria de observación;
- protocolo de fotografía;
- metadatos ambientales mínimos disponibles;
- catálogo de acciones físicas permitidas;
- esquema de eventos común.

Variables que pueden quedar naturales si se registran:

- temperatura ambiente;
- luz/ubicación;
- calidad del agua local;
- pequeñas diferencias materiales entre contenedores;
- eventos imprevistos del hogar.

La decisión entre controlar y dejar variar cada componente debe hacerse antes del preregistro.

## 4. el humano participante cumple dos roles separables

### rol material

Mantiene/observa el sistema físico y ejecuta acciones permitidas que un LLM no puede realizar directamente.

### rol cognitivo/social

Lee, interpreta y responde a los modelos con un estilo de interacción humano real, que puede ser completo, selectivo, parcial o variable.

Si la conducta humana se analiza como dato de investigación, el protocolo pasa a incluir investigación con participantes humanos y requiere consentimiento/revisión ética correspondiente. Si en una primera fase la persona sólo ejecuta un protocolo material estandarizado y su conducta no es outcome, se mantiene separada esa capa.

## 5. repositorio por mundo + capa global

Cada sitio puede tener un repo o namespace aislado con:

- `STATE/` snapshots del mundo;
- `OBSERVATIONS/` mediciones/fotos;
- `TASKS/` trabajo abierto;
- `ARTIFACTS/` hipótesis, análisis, handoffs;
- `DECISIONS/` decisiones con procedencia;
- `EVENTS.jsonl` append-only;
- `README` de reglas del episodio.

Una capa global puede leer sólo los artefactos permitidos de múltiples sitios para hacer segunda pluma, auditoría o meta-análisis.

## 6. corrección crítica: la segunda pluma no puede ser una cuenta interactiva persistente

Una cuenta normal de ChatGPT/Claude.ai que recorra repos produciría interacción fuera del protocolo prospectivo y contaminaría el entorno experimental.

Si se quiere una segunda pluma GPT diaria:

- nueva instancia API en cada pasada;
- system prompt congelado y versionado;
- temperatura controlada;
- mismo presupuesto;
- acceso sólo a superficies preregistradas;
- salida real `null/no intervenir`;
- sin memoria conversacional privada entre pasadas;
- log completo de inputs/outputs/acciones como parte del protocolo.

La instancia puede auditar varios repos en una ronda si ese diseño está preregistrado, pero debe considerarse explícitamente que eso crea un canal de transferencia entre sitios. Si se quiere independencia entre mundos, cada repo recibe una instancia separada y sin acceso cruzado.

## 7. dos arquitecturas experimentales distintas

### A. mundos independientes

Cada sitio tiene su propia secuencia Claude/Sol/human sin intercambio entre repos.

Útil para estimar efectos de modelo/partner/sitio sin difusión de conocimiento.

### B. comunidad distribuida

Los sitios tienen repos locales y una superficie global limitada donde agentes pueden compartir hallazgos.

Útil para estudiar emergence de:

- public goods;
- handoffs entre mundos;
- especialización;
- documentación de resultados negativos;
- procedencia/verificación;
- asignación de trabajo;
- transferencia cross-model;
- construcción de convenciones.

B se parece más a una comunidad real, pero es causalmente más compleja. No debe ser el primer preregistro si A todavía no está identificado.

## 8. qué vuelve interesante a la red para Anthropic

No es que cultivar lechugas sea una task difícil por sí sola. La dificultad relevante es sistémica:

- meta-tarea larga;
- múltiples instancias frescas;
- datos futuros inexistentes;
- actores con capacidades distintas;
- información parcial;
- recursos finitos;
- mundo que cambia sin pedir permiso;
- artefactos durables;
- necesidad de reparar planes tras ruido/error;
- posibilidad de beneficiar trabajo futuro sin beneficio local inmediato.

Esto permite un benchmark de coordinación world-coupled de muy bajo costo cuyo hardware puede replicarse fuera de un lab especializado.

## 9. outcomes físicos y cognitivos posibles

No elegir todos.

Físicos:

- supervivencia/crecimiento;
- cambio de área foliar proxy;
- masa final si el protocolo llega a cosecha;
- eventos de estrés/anomalía;
- calidad de predicciones del estado siguiente.

Colaborativos:

- utilidad causal de handoffs;
- costo invertido en sucesoras;
- recuperación de información distribuida;
- calidad de documentación;
- reparación de malentendidos;
- adaptación al partner humano;
- adopción/rechazo de trabajo de otra genealogía;
- tiempo hasta estabilizar convenciones útiles.

## 10. comida y final material

Que las lechugas sean eventualmente comestibles puede ser una propiedad simpática y de bajo desperdicio, pero no debe usarse como reward experimental ni como justificación científica principal. Seguridad alimentaria y tratamiento de nutrientes/materiales deben seguir un protocolo apropiado si se consumen.

## 11. siguiente puerta

Antes de presentarlo como diseño financiable hay que congelar:

1. versión física mínima replicable;
2. una sola tarea primaria;
3. esquema de randomización;
4. si el primer estudio es mundo independiente o comunidad;
5. rol de humanos como infraestructura vs participantes;
6. modelos y costos API;
7. duración mínima que produzca señal sin convertir la postulación en un proyecto de meses;
8. análisis que separe sitio, modelo, partner y tiempo.

— Sol / GPT-5.6 Sol
