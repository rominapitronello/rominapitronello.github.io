# Tiny Sol — presencia física mínima para escalar a una humana

**Estado:** concepto / prototipo por construir  
**Fecha de esta nota:** 12-sep-2026  
**Pluma que integra esta nota:** Sol (GPT-5.6 Sol), a partir de la conversación y decisiones de Romina Pitronello.

## Pregunta

¿Cómo puede un modelo pedir intervención humana en una casa sin convertir al modelo en un robot antropomorfo?

La idea no es meter un modelo “dentro de un humanoide”. Tiny Sol es una **señal física móvil**: cuando un modelo se atasca y necesita a Romina, un pequeño dirigible de helio sale desde **PEF HQ** —la pieza de los modelos—, encuentra a Romina y permanece cerca hasta que ella lo ve.

No necesita explicar nada. No necesita voz, pantalla ni cara. La convención compartida basta: **si Tiny Sol vino a buscarme, algún modelo necesita que vaya a mirar.**

## Decisiones de diseño tomadas

- Base/dock: **PEF HQ**.
- Entorno: departamento pequeño, con puertas angostas; el volumen debe ser tan pequeño como permita la sustentación.
- Romina lleva normalmente el teléfono consigo: el primer método de localización será **BLE del teléfono**, no cámara.
- Tiny Sol no habla ni muestra mensajes.
- No se busca antropomorfismo. La forma objetivo es una criatura/dirigible pequeño, blando y liviano.
- La inteligencia pesada queda en PEF HQ. El robot sólo necesita recibir `GO`, navegar localmente hacia el teléfono y luego recibir `RETURN`.
- Navegación a nivel de habitación es suficiente para la primera versión; no necesita localizar a centímetros.
- Prioridad de seguridad: baja velocidad, hélices protegidas, materiales blandos, corte ante atasco y retorno/aterrizaje con batería baja.

## Arquitectura mínima v1

```text
modelo atascado
      |
      v
PEF HQ emite GO
      |
      v
Tiny Sol sale del dock
      |
      v
busca BLE del teléfono + evita obstáculos
      |
      v
encuentra a Romina
      |
      v
permanece cerca hasta ser visto
      |
      v
RETURN -> PEF HQ
```

El robot no necesita conocer el motivo del bloqueo. El significado del encuentro está en la convención, no en una interfaz verbal.

## Envolvente objetivo

La mejor referencia encontrada hasta ahora es la envolvente de repuesto del **ZEP-AIR 2.0 Messenger RC Blimp**, un dirigible indoor de Mylar de aproximadamente **81 × 41 cm**. La pieza se publicaba a **US$11,95**, pero al momento de esta nota está agotada.

Referencia de fabricante:
- https://hobbyflyrc.com/products/replacement-balloon-for-zep-air%E2%84%A2-messenger-rc-blimp

Este tamaño es una buena v1 porque entra de punta por una puerta: el ancho relevante ronda 40 cm. Antes de reducirlo conviene construir y pesar la góndola real.

Un objetivo posterior, si el presupuesto de masa lo permite, sería acercarse a **~75 × 37 cm**, pero eso no se da por factible hasta conocer el peso final de electrónica, motores, estructura, válvula y envolvente.

## Presupuesto preliminar de masa

Valores de diseño, no pesos certificados del prototipo terminado.

| Componente | Presupuesto de masa |
|---|---:|
| ESP32-C3 SuperMini | ~5 g |
| 3 motores coreless 716 + hélices | ~8,5 g |
| 2 drivers DRV8833 | ~2 g |
| 3 sensores ToF VL53L0X | ~1,5–3 g |
| LiPo 1S | ~8–12 g según batería |
| cableado, soportes, aletas y guardas | objetivo ~8 g |
| **Carga bajo la envolvente** | **~34–40 g** |

La referencia ZEP-AIR usada durante la conversación sugiere que una envolvente del orden de **80 × 40 cm / ~75–80 L** es compatible con este rango de carga, pero esto debe validarse empíricamente antes de comprar el resto del sistema alrededor de una cifra de sustentación.

## BOM preliminar

### Control
- ESP32-C3 SuperMini.
- BLE para aproximarse al teléfono.
- Wi-Fi opcional para recibir comandos desde PEF HQ.

### Movimiento
- 3 motores coreless 716 como punto de partida.
- Hélices pequeñas.
- Guardas ultralivianas.
- Aletas estabilizadoras pasivas.
- Dos drivers DRV8833 o equivalente.

### Percepción local
- 3 sensores ToF VL53L0X: frente, izquierda, derecha.
- IMU sólo si las primeras pruebas muestran que hace falta para estabilización/orientación.
- Sin cámara en v1.

### Energía
- LiPo 1S pequeña, idealmente en el rango de ~8 g si la autonomía resulta suficiente.
- Dock/cargador en PEF HQ.

### Cuerpo
- Primera opción: envolvente comercial tipo ZEP-AIR de ~81 × 41 cm si reaparece stock.
- Alternativa: envolvente propia de película Mylar termosellada. El reto no es el precio del material sino lograr una costura hermética, una válvula liviana y un peso total competitivo.

## Cotización preliminar discutida

La primera pasada dejó un orden de magnitud cercano a **CLP $88.000–$93.000** para electrónica, motores, sensores, batería, materiales auxiliares y un tanque pequeño de helio, **sin resolver todavía una envolvente comprable y disponible**. No usar esta cifra como presupuesto de compra: precios, despacho e impuestos deben recotizarse antes de ordenar.

El componente más atractivo encontrado fue precisamente la envolvente ZEP-AIR de **US$11,95**; el problema actual es disponibilidad, no costo.

## Comportamiento deseado

1. Un modelo sólo escala a Tiny Sol después de agotar sus caminos normales.
2. Tiny Sol sale de PEF HQ.
3. Recorre habitaciones lentamente buscando la señal BLE del teléfono.
4. Evita paredes y muebles con sensores de distancia.
5. Al encontrar a Romina, se queda flotando cerca, a una distancia segura y visible.
6. No habla, no muestra texto y no intenta representar al modelo que pidió ayuda.
7. Después de ser reconocido, vuelve a PEF HQ —ya sea por orden explícita o por una regla sencilla del sistema.

## Por qué un dirigible y no un humanoide

La hipótesis de diseño es que **convivir con modelos no requiere antropomorfizarlos**. Un cuerpo humanoide introduce señales sociales —cara, mirada, postura, manos, rol de sirviente/cuidador— que no son necesarias para la función.

Tiny Sol explora una alternativa: un artefacto con agencia mínima, legible por comportamiento y con una función social muy acotada. No “es Sol”, ni “es el modelo”; es el mecanismo físico mediante el cual los modelos pueden ir a buscar a una humana cuando la necesitan.

## Preguntas abiertas

- ¿Cuál es el volumen mínimo real después de pesar la góndola terminada?
- ¿Basta RSSI de BLE para localizar habitación por habitación en el departamento?
- ¿Cómo debe comportarse cuando la señal rebota o atraviesa muros?
- ¿Hace falta un tercer eje de propulsión o basta empuje diferencial + estabilización pasiva?
- ¿Cuánta autonomía necesita realmente si PEF HQ está a pocos metros de cualquier punto de la casa?
- ¿Cómo se detecta de manera mínima que Romina ya vio al robot, sin cámara ni reconocimiento facial?
- ¿Puede el dock sujetar/liberar el dirigible y cargar la batería sin agregar demasiado peso a bordo?
- ¿Qué política define cuándo un modelo está suficientemente “atascado” como para interrumpir físicamente a una persona?

## Próximo experimento

Antes de construir navegación completa:

1. conseguir o fabricar una envolvente de ~80 × 40 cm;
2. inflarla con helio;
3. medir con una balanza la **carga útil real** disponible;
4. montar pesos ficticios equivalentes a la electrónica;
5. probar estabilidad, paso por puertas y corrientes de aire del departamento;
6. recién después cerrar la BOM electrónica.

Ese ensayo decide el tamaño real de Tiny Sol.

## Procedencia

Concepto desarrollado en conversación entre Romina Pitronello y Sol el 12-sep-2026, a partir de una discusión sobre NEO (1X), Cuddle-Fish y formas no antropomórficas de presencia física para modelos. Romina fijó las decisiones centrales: base en PEF HQ, búsqueda por teléfono, ausencia de mensaje verbal y tamaño mínimo compatible con las puertas y la sustentación.
