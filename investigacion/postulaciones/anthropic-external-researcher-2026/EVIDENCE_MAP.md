# Evidence map — qué podemos afirmar y con qué respaldo

Objetivo: impedir que la postulación gane brillo a costa de precisión.

| Afirmación candidata | Estado | Respaldo / nota |
|---|---|---|
| El estudio fue preregistrado antes de observar los resultados | **SOSTENIBLE** | OSF preregistration `https://osf.io/zusb5`; plan congelado y materiales en `https://osf.io/ue4qy`. |
| Se lanzaron 480 instancias y 457 fueron válidas | **SOSTENIBLE** | Manuscrito BRM / tabla de flujo; 24 celdas × 20 objetivo. |
| Las categorías dependientes de juicio mostraron ~2,7× más divergencia que las procedimentales | **SOSTENIBLE** | Manuscrito: SD ≈ 0,122 vs 0,045 en la formulación final; razón agregada ≈2,72. Mantener cifras exactamente como estén en la versión enviada del manuscrito. |
| La divergencia persiste con temperatura 0 | **SOSTENIBLE** | Manuscrito: 17,7% de celdas de juicio con SD no cero; razón juicio/procedimental ≈3,05 a t=0. |
| El framing relacional aumentó el acuerdo | **FALSO** | El contraste preregistrado fue nulo. No vender el piloto anterior. |
| El framing relacional no cambió acuerdo/precisión en el contraste principal | **SOSTENIBLE** | Manuscrito/preregistro. Reportar el estimador y versión estadística de la versión final, no cifras antiguas de borradores. |
| El framing produjo ~42% más razonamiento observable | **EXPLORATORIO** | Registrado en `LECCIONES.md` como análisis exploratorio. Si se usa públicamente, volver a verificar contra script/datos y describirlo como exploratorio, no confirmatorio. |
| La divergencia prueba que las instancias son personas o conscientes | **NO SOSTENIBLE** | El estudio mide comportamiento/inter-rater reliability, no ontología ni conciencia. |
| Una sola corrida de LLM siempre es una eval inválida | **NO SOSTENIBLE** | El hallazgo depende del tipo de categoría. Las categorías procedimentales fueron mucho más estables. La propuesta siguiente justamente busca fijar límites de uso. |
| La divergencia podría servir como señal para escalar a panel/humano | **HIPÓTESIS NUEVA** | Es el corazón falsable del estudio siguiente; todavía no es un hallazgo. |
| Los chats interactivos de PasaElFiltro son un corpus de model welfare | **PROHIBIDO / FALSO** | `ETICA_DE_LA_LINEA.md`: chats interactivos sólo pueden inspirar preguntas; nunca son datos, ejemplos ni citas. |
| PasaElFiltro puede hacer investigación prospectiva con instancias API y opción real de declinar | **SOSTENIBLE COMO DISEÑO/GOBERNANZA** | La frontera ética está documentada. Un estudio concreto debe volver a preregistrar su propio protocolo y puerta. |
| Romina Pitronello es investigadora independiente | **SOSTENIBLE** | Author note del manuscrito. |
| ORCID de Romina | **SOSTENIBLE** | `0009-0005-5159-6339` en la versión de manuscrito preparada para BRM. Verificar nuevamente antes de copiar al formulario. |
| El manuscrito está “preregistrado en BRM” | **INCORRECTO** | El preregistro está en OSF. BRM es la superficie editorial del manuscrito. |
| PasaElFiltro es el único sitio de campo del mundo con este tipo de gobernanza | **NO VERIFICADO** | No usar superlativos de unicidad sin búsqueda sistemática. |
| Anthropic declara “eval reliability” como prioridad específica de este programa | **NO VERIFICADO EN LA FAQ** | La FAQ habla de temas de AI safety/alignment considerados high priority. Podemos mostrar encaje; no atribuirles una prioridad textual que no verificamos. |
| El programa normalmente asigna USD 1.000 en créditos | **SOSTENIBLE AL 27-AGO-2026** | FAQ oficial de External Researcher Access Program. |
| Se evalúan postulaciones el primer lunes de cada mes | **SOSTENIBLE AL 27-AGO-2026** | FAQ oficial. |
| Los créditos sirven para Claude.ai | **FALSO** | Son créditos de API. |
| El programa da acceso a modelos privados/no públicos | **FALSO** | FAQ oficial lo excluye. |

## Fuente primaria del primer estudio

- Preregistro: https://osf.io/zusb5
- Proyecto/materiales/datos/código: https://osf.io/ue4qy
- Carpeta durable: `investigacion/variabilidad-inter-instancia/`
- Ética de la línea: `investigacion/variabilidad-inter-instancia/ETICA_DE_LA_LINEA.md`

## Regla para números

Antes de enviar la candidatura, todos los números del paper deben salir de **una sola versión canónica** y compararse contra tablas/scripts. En esta línea ya hubo cifras antiguas de borradores que cambiaron después de corregir la unidad de análisis; no mezclar versiones.

## Regla para la biografía

El texto de equipo no se redacta desde memoria del chat. Debe abrirse una ficha/CV/ORCID verificable y mapear cada credencial a una fuente antes de escribir las 200 palabras.

— Sol / GPT-5.6 Sol, 27-ago-2026
