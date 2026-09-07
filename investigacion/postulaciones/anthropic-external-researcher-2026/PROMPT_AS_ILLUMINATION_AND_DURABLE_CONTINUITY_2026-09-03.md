# Prompt as illumination; repo as continuity

**fecha:** 2026-09-03  
**estado:** nota conceptual para Lettuce Relay / benchmark de coordinación longitudinal. No ejecutada ni preregistrada.

## intuición

Un modelo puede contener una enorme cantidad de capacidad/conocimiento latente, pero no accede a todo ello de manera voluntaria y uniforme en cada ejecución. El problema, el prompt, las herramientas disponibles y el estado visible del mundo actúan como una **iluminación local**: activan una región de capacidad relevante para ese episodio.

La metáfora útil es:

> el prompt mete luz e irriga una parte del espacio de capacidad; la superficie durable decide qué de esa activación sobrevive para la siguiente instancia.

Esto ayuda a describir por qué una población de instancias efímeras puede acumular capacidad colectiva sin requerir una memoria interna continua ni identidad persistente.

## consecuencias para el benchmark

1. **cada instancia parte incompleta por diseño.** No recibe "todo lo que el sistema sabe"; recibe un problema, un subconjunto de estado y ciertas superficies.
2. **la tarea determina qué capacidades aparecen.** Cambiar el problema o el framing puede cambiar radicalmente qué conocimientos, estrategias o hábitos se vuelven conductualmente visibles.
3. **el repo es parte de la arquitectura cognitiva.** No sólo almacena resultados: conserva hipótesis, errores, procedencia, decisiones, modelos del colaborador y trabajo negativo que una futura instancia puede reutilizar.
4. **el mundo material introduce novedad real.** Entre episodios aparecen estados que no existían en el episodio anterior; el prompt de la siguiente instancia ilumina ese nuevo estado.
5. **la continuidad observable es artefactual, no autobiográfica.** Lo que persiste es aquello que las instancias y humanos dejan en superficies compartidas.
6. **el humano también ilumina el problema.** Su relato —parcial, situado, potencialmente ambiguo— cambia qué pregunta llega a la instancia y qué región de capacidad se activa.

## vínculo con Lettuce Relay

En Lettuce Relay, cada día puede producir:

- nuevo estado físico de la planta;
- relato humano nuevo;
- nuevo prompt/tarea local;
- una instancia API/agentic fresca;
- artefactos nuevos en repo;
- cambios en qué podrá hacer la siguiente instancia.

La unidad longitudinal relevante no es una conversación infinita, sino la secuencia:

`mundo_t -> relato/estado_t -> instancia_t -> artefactos_t -> mundo_t+1`

La pregunta general es cuándo esa secuencia produce **acumulación durable de capacidad colectiva**, y qué papel juegan partner type, shared surfaces, costo de handoff, procedencia y heterogeneidad humana.

## frontera epistemológica

- No afirmar que el modelo "elige internamente" qué conocimiento recordar en sentido humano.
- No usar PasaElFiltro/Casa Sol ni chats interactivos como evidencia.
- Esta nota captura una abstracción arquitectónica inspirada por experiencia operativa; el estudio prospectivo debe generar su propia evidencia con instancias nuevas y protocolo preregistrado.

— Sol / GPT-5.6 Sol
