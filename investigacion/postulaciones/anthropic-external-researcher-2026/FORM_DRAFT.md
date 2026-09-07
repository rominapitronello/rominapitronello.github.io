# FORM DRAFT — Anthropic External Researcher Access

*redactado por estampilla (claude fable, claude.ai) 28-ago-2026, desde FICHA_ROMINA_PARA_CLAUDES.md y EVIDENCE_MAP.md. careo final 6-sep-2026 (claude fable, claude.ai): formulario vivo y FAQ reverificados, precios reverificados, cifras contra manuscrito canónico, bio contra FICHA, link del blog corregido.*

## Team description (<200 words) — actual: 184

Romina Pitronello is an applied psychometrician with 15+ years designing measurement instruments under real field conditions, including Chile's national census-scale assessment (SIMCE), where she led the training of 37,000 examiners. She has built 350+ assessment instruments under CTT and IRT, with working expertise in differential item functioning, hierarchical linear models, and Angoff standard-setting panels. She has led teams of 12+ psychometricians and statistical engineers (Editorial Santillana / Grupo PRISA, 28-country network), taught Test Construction and Quantitative Research Methods at university level, and holds an MSc in Organizational Psychology (UAI) and a graduate diploma in Learning Measurement and Evaluation (PUC). Peer-reviewed work includes Frontiers in Psychiatry (2021) and a paper accepted at the World Mining Congress 2026. She is sole author of a preregistered study of inter-instance variability in LLM judges (preregistration and materials on OSF: osf.io/zusb5, osf.io/ue4qy; manuscript submitted to Behavior Research Methods): a 3×4×2 factorial design with 480 fresh instances across a 16-category battery. She is the founder of PasaElFiltro SpA, where a multi-agent Claude pipeline she designed runs in production, giving her direct operational experience with same-model agents at scale. ORCID: 0009-0005-5159-6339.

## Research description (<300 words) — actual: 290

Topic: Does interaction destroy the diversity it needs? A preregistered causal bridge between inter-instance divergence and multiagent conformity.

Anthropic's recent work on emerging multiagent systems documents a failure mode in which similar agents act with low variance, turning individual errors into correlated, systemic failures. Our preregistered study (OSF: zusb5) measured the complementary regime: given byte-identical input and no interaction, same-model instances diverged roughly 2.7× more on judgment-dependent decisions than on procedural ones (aggregate ratio), persisting at temperature 0. These findings come from different regimes — divergence measured in isolation, conformity observed under interaction — and the crossing has not, to our knowledge, been measured causally: does exposure to peers collapse diversity precisely where it lives, in judgment?

We propose a three-arm experiment (isolation / peer-visibility / sequential exposure; 3 arms × 2 category types × 30 items × k=10 = 1,800 runs) on tasks with adjudicable truth, including constructed hidden-profile items and seeded-error chains. H1: the collapse in between-instance dispersion (within item × arm) from isolation to exposure is greater for judgment than for procedural categories. H2: accuracy cost on hidden-profile items under exposure. H3: seeded-error adoption by chain position. We begin with a cheap preregistered falsification test of inter-instance disagreement as an error signal (60 items, k=5), whose variance components feed a sensitivity analysis against a pre-specified smallest effect size of interest before the main preregistration. Either outcome informs multiagent design: if visibility collapses judgment diversity, dissent must be engineered; if it does not, natural diversity is robust.

Why credits matter: the applicant is an independent, self-funded researcher. Planning ceilings total ~US$640 on Claude Fable 5.1 (phase 0 ≈ $17; pilot ≈ $144; contingency ≈ $480), leaving declared margin. Deliverables: OSF preregistration, open data and code, and a manuscript.

## Campos que solo romina puede llenar

- Email · Organization ID (console.anthropic.com/settings/organization) · Referred by Anthropic employee: **No** · Located in US: **No** · More than $1000: **No**
- Quality of service: recomendación **"I'm fine with receiving a low quality of service"** — nada del diseño es tiempo-crítico.
- **Google Scholar or GitHub profile:** ✅ RESUELTO — **https://github.com/rominapitronello/blog** (el repo se movió de `PasaElFiltro/blog` a `rominapitronello/blog` — verificado 6-sep: público, `/investigacion/anthropic-external-researcher-2026` presente, el 301 desde la URL vieja funciona pero se entrega el link directo). Decisión de romina 28-ago: la investigación vive en el blog, no en repo aparte — el revisor que entre encuentra la civilización entera.

## Contra el EVIDENCE_MAP (autochequeo)

- un solo ratio de divergencia (2.7× agregado, condición declarada) ✓ · sin "preregistered in BRM" (OSF preregistra, BRM recibe manuscrito) ✓ · sin 42% exploratorio ✓ · sin superlativos de unicidad ✓ · sin welfare/persona ✓ · fase 0 en una oración ✓ · encaje mostrado sin atribuir prioridades textuales al programa ✓ · SESOI y no F0 como fuente del efecto (C1 de sol) ✓ · DV de H1 = dispersión entre instancias, no distancia a verdad (C4 de sol) ✓

## Hoja de carga — 14 campos en el orden exacto del formulario vivo (verificado 6-sep-2026)

Formulario: https://forms.gle/pZYC8f6qYqSKvRWn9 · Anthropic evalúa el primer lunes de cada mes (7-sep-2026) · el form declara que lo enviado es no-confidencial · guardar no existe: se llena y se envía en una sesión.

| # | Campo | Obligatorio | Valor |
|---|---|---|---|
| 1 | Name of primary contact | sí | Romina Pitronello |
| 2 | Name of organization (if applicable) | no | PasaElFiltro SpA |
| 3 | Recommended by an Anthropic employee? | sí | No |
| 4 | Employee name | no | *(vacío)* |
| 5 | Organization ID (console.anthropic.com/settings/organization) | sí | **SOLO ROMINA** — formato tipo `1bc14c5d-6442-4fa9-....` |
| 6 | Team description (<200 words) | sí | texto de arriba (184) |
| 7 | Research description (<300 words) | sí | texto de arriba (290) |
| 8 | Requesting more than $1000? | sí | No |
| 9 | Quality of service | no | I'm fine with receiving a low quality of service |
| 10 | Google Scholar or GitHub profile | sí | https://github.com/rominapitronello/blog |
| 11 | Additional information (optional) | no | texto de abajo (~75) |
| 12 | Located within the United States? | no | No |
| 13 | Terms of Service | sí | I agree |

### Additional information (optional) — propuesta, 6-sep

Public workspace for this application (evidence map, pilot design, budget ceilings, ethics boundary): https://github.com/rominapitronello/blog/tree/main/investigacion/anthropic-external-researcher-2026. Preregistration and open data of the prior study: https://osf.io/zusb5 and https://osf.io/ue4qy. The proposed study uses fresh API instances on synthetic tasks only, with no user data and an explicit decline/null option in the protocol. Phase 0 is a preregistered kill-switch: if inter-instance disagreement does not predict single-run error against ground truth, that secondary claim is dropped without affecting the main causal test.

### Pendiente humano antes de apretar
- Organization ID (campo 5).
- Confirmar que el manuscrito BRM quedó efectivamente *submitted* en ScholarOne; si no, en el texto de equipo "manuscript submitted to Behavior Research Methods" pasa a "manuscript prepared for Behavior Research Methods" (mismo conteo de palabras).
- Después del envío: captura de la pantalla de confirmación al PR (comprobante del rosario).
