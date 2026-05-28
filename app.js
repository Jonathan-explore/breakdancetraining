// =============================================================================
// AIRFLARE DASHBOARD — Base de datos completa con pasos individuales
// Estructura: cada ejercicio tiene steps[] con tipo timer, reps o rest
// =============================================================================

const ROUTINE_DATA = {
  // ===== LUNES =================================================================
  "lunes": {
    title: "Lunes", subtitle: "Power principal (Airflare técnico)",
    desc: "Día clave de técnica de Airflare. Foco en aterrizaje silencioso y rebote elástico. Sistema neuromuscular de alta calidad. Si la fatiga aparece antes del min 90, parar.",
    duration: "1h 50 min – 2h 00 min", system: "Neuromuscular de alta calidad",
    nutrition: {
      pre: "80 g avena + plátano + 2 huevos + frutos secos ≈500 kcal. Evitar grasa pesada. 💧 500 ml agua 90-60 min antes.",
      intra: "A 83 kg pierdes 1,2-1,8 L sudor en 2h. Bebe 200-250 ml cada 25 min. Si hay calor: electrolitos (Na 400-500 mg + K 200 mg + Mg 60 mg). Un dátil entre series largas ayuda.",
      post: "Ventana anabólica (45 min): 30 g proteína + 60-80 g carbohidratos. Ej: batido whey + plátano + 40 g avena. La combinación carbo+proteína recarga glucógeno 40% más rápido.",
      dinner: "40 g proteína + carbohidratos medios (arroz integral, quinoa) + vegetales. Si la sesión fue dura: omega-3 (salmón/sardinas o 1-2 g EPA+DHA) para recuperación articular."
    },
    exercises: [
      {
        name: "Protocolo de muñecas — COMPLETO",
        block: "Calentamiento",
        steps: [
          { id: "lu_0_0", label: "Círculos de muñeca suaves — ambos sentidos", type: "timer", duration: 120 },
          { id: "lu_0_1", label: "Extensión pasiva — mano izquierda (sin rebotar)", type: "timer", duration: 90 },
          { id: "lu_0_2", label: "Extensión pasiva — mano derecha (sin rebotar)", type: "timer", duration: 90 },
          { id: "lu_0_3", label: "Flexión pasiva — ambas manos (dorso en el suelo)", type: "timer", duration: 60 },
          { id: "lu_0_4", label: "Puño apretado → extensión de dedos en abanico", type: "reps", reps: "2 × 15 reps" },
          { id: "lu_0_5", label: "Pronación / Supinación con mancuerna 1-2 kg", type: "reps", reps: "2 × 20 reps controladas" },
          { id: "lu_0_6", label: "Compresión con pelota de lacrosse — palma izquierda", type: "timer", duration: 60 },
          { id: "lu_0_7", label: "Compresión con pelota de lacrosse — palma derecha", type: "timer", duration: 60 },
        ],
        technique: [
          "Círculos de muñeca suaves — 2 min en ambos sentidos. Movimientos amplios y lentos.",
          "Extensión pasiva mano izquierda — manos planas en el suelo, codos estirados, presión progresiva sin rebotar. 90 seg.",
          "Extensión pasiva mano derecha — misma técnica. Presión progresiva sin rebotar. 90 seg.",
          "Flexión pasiva ambas manos — dorso de la mano en el suelo, dedos apuntando hacia ti. 60 seg.",
          "Puño apretado → extensión de dedos en abanico — 2 × 15 reps lentas y controladas.",
          "Pronación / Supinación con mancuerna 1-2 kg — gira la palma arriba y abajo de forma controlada. 2 × 20 reps.",
          "Compresión pelota de lacrosse palma izquierda — presión sostenida en el centro de la palma. 60 seg.",
          "Compresión pelota de lacrosse palma derecha — presión sostenida. 60 seg."
        ],
        breathing: "Durante los estiramientos pasivos, respira profundo por la nariz y exhala largo por la boca. En cada exhalación, intenta ceder 1-2° más de rango. No aguantes la respiración.",
        errors: ["Rebotar en la extensión pasiva: irrita la cápsula articular.", "Saltar la pronación/supinación: prepara el cubital y radial (más vulnerables en el catching arm).", "Hacerlo en menos de 5 min: el tejido tendinoso necesita 8-10 min reales."],
        tips: ["Si entrenas en frío, sumerge muñecas en agua tibia (38-40°C) 2 min antes. El tejido responde al doble de rápido.", "Registra tu rango percibido (1-10) al final. Si está bajo 7, no entres al bloque power.", "Cambia la pelota de lacrosse por una de tenis los días que sientas la palma muy cargada."],
        alternatives: "Si hay dolor previo: extensión pasiva contra la pared a 60° (menos carga). Si el dolor persiste 3 días, salta el bloque power."
      },
      {
        name: "Protocolo de ingle y cadera",
        block: "Calentamiento",
        steps: [
          { id: "lu_1_0", label: "Mariposa sentado con inclinación adelante — serie 1", type: "timer", duration: 90 },
          { id: "lu_1_1", label: "Mariposa sentado con inclinación adelante — serie 2", type: "timer", duration: 90 },
          { id: "lu_1_2", label: "Zancada baja con rotación de tronco — izquierda × 2", type: "timer", duration: 60 },
          { id: "lu_1_3", label: "Zancada baja con rotación de tronco — derecha × 2", type: "timer", duration: 60 },
          { id: "lu_1_4", label: "Apertura lateral en suelo (straddle parcial, espalda recta)", type: "timer", duration: 120 },
          { id: "lu_1_5", label: "90/90 hip switch — serie 1", type: "reps", reps: "10 cambios lentos" },
          { id: "lu_1_6", label: "90/90 hip switch — serie 2", type: "reps", reps: "10 cambios lentos" },
          { id: "lu_1_7", label: "Fire hydrant en cuadrupedia — lado izquierdo × 2", type: "reps", reps: "2 × 15 reps" },
          { id: "lu_1_8", label: "Fire hydrant en cuadrupedia — lado derecho × 2", type: "reps", reps: "2 × 15 reps" },
          { id: "lu_1_9", label: "Pelota de tenis/lacrosse en psoas — lado izquierdo", type: "timer", duration: 120 },
          { id: "lu_1_10", label: "Pelota de tenis/lacrosse en psoas — lado derecho", type: "timer", duration: 120 },
        ],
        technique: "1) Mariposa: empuja los muslos hacia el suelo activamente. 2) Zancada baja: pierna delantera 90°, rota tronco hacia ella y luego fuera. 3) Straddle: espalda recta sin forzar. 4) 90/90: una pierna 90° delante, otra detrás, cambia de lado controlado. 5) Fire hydrant: cadera de apoyo FIJA. 6) Pelota en psoas: boca abajo, presión suave-moderada.",
        breathing: "Estiramientos largos: 4s inhalar por la nariz, 8s exhalar por la boca (activa parasimpático). En fire hydrant y 90/90: exhala en el esfuerzo concéntrico.",
        errors: ["Mariposa con rebotes de codos: el aductor responde a presión sostenida, no a vibración.", "No empujar activamente los muslos: pierdes la fuerza protectora de la ingle.", "Saltar la pelota en el psoas: es el causante #1 de la 'ingle dura' en el airflare."],
        tips: ["Test antes de empezar: zancada baja completa sin dolor. Si hay dolor >3/10, no hagas airflare hoy.", "Si encuentras un punto sensible en el psoas, mantén 90s hasta que baje a <3/10.", "En invierno o tras horas sentado, dobla los tiempos del 90/90."],
        alternatives: "Si la mariposa duele en el pubis: rana modificada apoyada en codos. Si 90/90 es imposible, hazlo contra la pared."
      },
      {
        name: "Rotaciones escapulares + círculos de hombro",
        block: "Calentamiento",
        steps: [
          { id: "lu_2_0", label: "Rotaciones escapulares hacia atrás (omóplatos abajo y al centro)", type: "reps", reps: "15 reps" },
          { id: "lu_2_1", label: "Rotaciones escapulares hacia adelante", type: "reps", reps: "15 reps" },
          { id: "lu_2_2", label: "Círculos de hombro en cruz — hacia adelante (pequeños + grandes)", type: "reps", reps: "10 pequeños + 10 grandes" },
          { id: "lu_2_3", label: "Círculos de hombro en cruz — hacia atrás", type: "reps", reps: "10 pequeños + 10 grandes" },
          { id: "lu_2_4", label: "Activación del serrato: plancha alta, sube/baja pecho con escápulas", type: "reps", reps: "15 reps lentas" },
        ],
        technique: "De pie, brazos colgando: rotaciones escapulares grandes. Círculos de hombro con BRAZOS EN CRUZ (no colgando). Activación del serrato: plancha alta sin doblar codos, el pecho sube/baja únicamente con el movimiento escapular.",
        breathing: "Respiración natural. En la activación del serrato, exhala al protraer (subir el pecho).",
        errors: ["Círculos de hombro con brazos colgando: trabaja el deltoides pero no la escápula.", "Encoger los hombros hacia las orejas: lo contrario de lo necesario en el airflare.", "Pasar este bloque con prisa: sin él, el catching arm responde con 50 ms de retraso."],
        tips: ["Visualiza que separas los omóplatos al máximo y luego intentas pellizcar un lápiz entre ellos.", "Crujidos sin dolor son normales. Crujido con dolor → para y consulta."],
        alternatives: "Si el hombro está irritado: band pull-aparts con banda elástica ligera, 3 × 15 reps."
      },
      {
        name: "Flares lentos × 5 cada lado — activación técnica",
        block: "Activación",
        steps: [
          { id: "lu_3_0", label: "Flares lentos al 50% — lado 1 (5 reps, 30s pausa entre cada uno)", type: "reps", reps: "5 reps muy lentas" },
          { id: "lu_3_1", label: "Flares lentos al 50% — lado 2 (5 reps, 30s pausa entre cada uno)", type: "reps", reps: "5 reps muy lentas" },
        ],
        technique: "Flares al 50% de velocidad. Foco en: empuje del brazo, apertura del straddle en el aire, paso por encima del hombro y recepción suave. 30 segundos de pausa entre cada repetición (no entre los 5 en bloque).",
        breathing: "Inhala antes de iniciar cada flare, exhala con soplido controlado durante toda la rotación para activar el core.",
        errors: ["Empezar a velocidad real: estás frío, riesgo máximo de lesión.", "Encadenarlos sin pausa: buscas activación neural, no acondicionamiento.", "Cadera floja o hombros tensos en el 2º o 3º: detente y vuelve a calentar."],
        tips: ["Graba estos flares lentos: son tu termómetro. Cadera baja o straddle pobre = el bloque de power será peor.", "Visualiza cada flare lento como un airflare con aterrizaje silencioso en cada apoyo."],
        alternatives: "Si los flares lentos te enfrían en vez de activarte: 3 series de 6-step rápido × 30 seg."
      },
      {
        name: "Drill de caída controlada",
        block: "Power",
        steps: [
          { id: "lu_4_0", label: "Serie 1 — Pausa 0.3-0.5s en el apoyo (cadera alta, codo 15-20°)", type: "reps", reps: "6 reps" },
          { id: "lu_4_1", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "lu_4_2", label: "Serie 2 — Pausa 0.5s controlada", type: "reps", reps: "6 reps" },
          { id: "lu_4_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "lu_4_4", label: "Serie 3 — Pausa 0.5s controlada", type: "reps", reps: "6 reps" },
        ],
        technique: "Airflare normal pero con pausa consciente de 0.3-0.5s en el apoyo del primer brazo. Durante la pausa: cadera alta, codo flexionado solo 15-20°, mirada al techo. Luego empuja el suelo activamente y termina la rotación. Es un airflare con freno de mano, no velocidad real.",
        breathing: "Inhala antes de iniciar, exhala con 'tss' sostenido durante toda la rotación, incluyendo la pausa (mantiene el core comprimido y la cadera alta).",
        errors: ["Pausar con la cadera baja: entrenas el error exacto que quieres corregir.", "Codo flexionado más de 20°: la amortiguación se convierte en colapso. El codo es muelle, no bisagra.", "6 reps seguidas sin pausa entre intentos: no das tiempo al sistema a procesar el feedback."],
        tips: ["Grábate en cámara lenta (240fps): ¿la cadera está al menos a la altura del hombro durante la pausa?", "Si resistes 0.5s, tu fuerza isométrica de hombro está lista. Si te caes, necesitas más handstand holds.", "Imagina que el suelo te empuja a ti, no tú al suelo. Activa mejor el serrato."],
        alternatives: "Si no puedes pausar sin caer: handstand cara a pared con pausa. O apoyo de una mano en handstand durante 3s."
      },
      {
        name: "Airflare con banda elástica en cadera",
        block: "Power",
        steps: [
          { id: "lu_5_0", label: "Verificar anclaje de la banda (18-25 kg de asistencia)", type: "reps", reps: "Verificar antes de empezar" },
          { id: "lu_5_1", label: "Serie 1 — Airflares asistidos encadenados", type: "reps", reps: "4 ciclos (2-4 vueltas)" },
          { id: "lu_5_2", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "lu_5_3", label: "Serie 2 — Airflares asistidos encadenados", type: "reps", reps: "4 ciclos" },
          { id: "lu_5_4", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "lu_5_5", label: "Serie 3 — Airflares asistidos encadenados", type: "reps", reps: "4 ciclos" },
        ],
        technique: "Banda elástica fuerte por barra alta, el otro extremo en las caderas. Tensión: 18-25 kg (para pesar unos 58-65 kg). Ejecuta airflares encadenando 2, 3 o 4 vueltas. Foco en el ritmo del cambio de brazos sin el castigo del peso completo.",
        breathing: "Patrón continuo: exhalación corta y rítmica en cada apoyo de mano (como boxeador soltando jabs) para sincronizar el core.",
        errors: ["Confiarse en la banda y bajar la calidad técnica: compensa el peso, no la técnica.", "Banda demasiado tensa (>30 kg): la mecánica cambia y entrenas un patrón inservible.", "Banda mal anclada: peligro de caída. Verifica siempre la solidez."],
        tips: ["Primera serie: busca el 'punto dulce' — debe sentirse que el aire pesa, pero no que vuelas.", "Cuando logres 4 vueltas limpias asistidas en 2 sesiones seguidas, reduce la tensión un 20%.", "Pide a alguien que grabe desde el lateral para verificar la altura de la cadera."],
        alternatives: "Sin banda: airflares sobre colchoneta de gimnasia para amortiguar. Máximo 12 intentos por serie."
      },
      {
        name: "Thomas en paralelas — hold aéreo 3 s",
        block: "Power",
        steps: [
          { id: "lu_6_0", label: "Serie 1 — Thomas hold 3s (cadera alta, hombros activos)", type: "reps", reps: "5 reps × 3s hold" },
          { id: "lu_6_1", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "lu_6_2", label: "Serie 2 — Thomas hold 3s", type: "reps", reps: "5 reps × 3s hold" },
          { id: "lu_6_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "lu_6_4", label: "Serie 3 — Thomas hold 3s", type: "reps", reps: "5 reps × 3s hold" },
          { id: "lu_6_5", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "lu_6_6", label: "Serie 4 — Thomas hold 3s", type: "reps", reps: "5 reps × 3s hold" },
        ],
        technique: "En paralelas bajas (30-40 cm): sube a posición de Thomas (cuerpo horizontal, una pierna delante, otra detrás, brazos rectos). Mantén 3s con cadera alta y hombros activos empujando hacia abajo. Baja controlado, cambia de lado y repite.",
        breathing: "Inhala antes de subir. Exhala lento durante los 3s de hold (el 'tss' del karateka). La exhalación mantiene el core activo.",
        errors: ["Cadera caída en el hold: el ejercicio pierde el 80% de valor. Si no aguantas 3s con cadera alta, haz 2s.", "Hombros encogidos hacia las orejas: colapso de escápula. Activa la depresión escapular primero.", "Mirar al suelo: la cabeza baja redondea la espalda y cae la cadera. Mira al frente o ligeramente arriba."],
        tips: ["Si dominas las series, añade 1s extra la semana siguiente (progresión por tiempo).", "Visualiza que tienes una bola de billar en el ombligo y la mantienes al máximo de altura.", "Paralelas bajas > altas porque el rango de error es menor."],
        alternatives: "Sin paralelas: Thomas en el suelo con manos planas. Regresión: Tucked Thomas (piernas dobladas)."
      },
      {
        name: "Windmill → Airflare 1v → Windmill",
        block: "Power",
        steps: [
          { id: "lu_7_0", label: "Set 1 — Windmill → Airflare 1v → 2 Windmills de salida", type: "reps", reps: "3 ejecuciones (30s pausa entre cada una)" },
          { id: "lu_7_1", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "lu_7_2", label: "Set 2", type: "reps", reps: "3 ejecuciones" },
          { id: "lu_7_3", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "lu_7_4", label: "Set 3", type: "reps", reps: "3 ejecuciones" },
          { id: "lu_7_5", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "lu_7_6", label: "Set 4", type: "reps", reps: "3 ejecuciones" },
          { id: "lu_7_7", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "lu_7_8", label: "Set 5", type: "reps", reps: "3 ejecuciones" },
        ],
        technique: "Inicia con windmill normal. En la 3ª vuelta, transiciona a airflare (1 vuelta) y al aterrizar, encadena 2 windmills de salida. El objetivo es mantener la inercia rotacional sin perder altura.",
        breathing: "Exhalaciones cortas sincronizadas con cada apoyo de mano. Si te quedas sin aire, reduce el volumen. La fatiga respiratoria precede a la muscular.",
        errors: ["Frenar antes del airflare: pierdes la inercia que hace fácil el movimiento.", "Aterrizar con cadera baja y forzar el windmill de salida: programa un mal patrón motor.", "3 ejecuciones seguidas sin pausa: haz 30s entre cada intento del mismo set."],
        tips: ["Si la transición sale forzada: practica la entrada en seco (kick-up con apoyo de manos) 20 veces antes.", "Grábate desde ángulo 3/4 frontal para ver si pierdes la altura en la transición."],
        alternatives: "Si la transición es muy difícil: windmill → halo → windmill (sin fase aérea) para construir el patrón."
      },
      {
        name: "Flares continuos hasta fallo técnico",
        block: "Power",
        steps: [
          { id: "lu_8_0", label: "Serie 1 — Flares encadenados hasta caída técnica (15-25 objetivo)", type: "reps", reps: "Al fallo técnico (¡PARA antes de caer!)" },
          { id: "lu_8_1", label: "💤 Descanso", type: "rest", duration: 180 },
          { id: "lu_8_2", label: "Serie 2 — Flares encadenados", type: "reps", reps: "Al fallo técnico" },
          { id: "lu_8_3", label: "💤 Descanso", type: "rest", duration: 180 },
          { id: "lu_8_4", label: "Serie 3 — Flares encadenados (última: 1 menos de lo que puedas)", type: "reps", reps: "Al fallo técnico" },
        ],
        technique: "Flares encadenados manteniendo calidad técnica. PARA en el momento exacto en que la calidad decae (cadera baja, hombros encogidos, pies rozando el suelo), no cuando llegues al fallo físico total.",
        breathing: "La mayoría de bboys élite: una exhalación rítmica cada 2 flares (no en cada uno). Encuentra tu ritmo.",
        errors: ["Seguir hasta caerte: tu cerebro asociará el flare con la caída.", "Obsesionarse con el número: la calidad técnica dicta el final, no el conteo.", "Si haces menos que la semana pasada con la misma calidad: hay fatiga acumulada."],
        tips: ["Pide a alguien que te diga 'PARA' cuando observe caída técnica visible. No eres un juez fiable desde dentro.", "En la última serie, haz 1 flare menos de lo que sientas que puedes. Mentalidad ganadora."],
        alternatives: "Si las muñecas están cansadas: sustituye la 3ª serie por circuito (6-step → flare ×5 → 6-step) × 90s."
      },
      {
        name: "Vuelta a la calma — estiramientos y recuperación",
        block: "Vuelta calma",
        steps: [
          { id: "lu_9_0", label: "Mariposa con peso: disco 5 kg sobre cada rodilla (sin empujar con manos)", type: "timer", duration: 240 },
          { id: "lu_9_1", label: "Estiramiento psoas en zancada profunda — lado izquierdo × 2", type: "timer", duration: 90 },
          { id: "lu_9_2", label: "Estiramiento psoas en zancada profunda — lado derecho × 2", type: "timer", duration: 90 },
          { id: "lu_9_3", label: "Estiramiento psoas — izquierdo (2ª serie)", type: "timer", duration: 90 },
          { id: "lu_9_4", label: "Estiramiento psoas — derecho (2ª serie)", type: "timer", duration: 90 },
          { id: "lu_9_5", label: "Foam roller — aductor izquierdo (rodar lento, pausar en puntos sensibles)", type: "timer", duration: 120 },
          { id: "lu_9_6", label: "Foam roller — aductor derecho", type: "timer", duration: 120 },
          { id: "lu_9_7", label: "Foam roller — TFL (izq + der)", type: "timer", duration: 60 },
          { id: "lu_9_8", label: "Flexión pasiva de muñecas en suelo — serie 1 (cuadrupedia, dorso al suelo)", type: "timer", duration: 60 },
          { id: "lu_9_9", label: "Flexión pasiva de muñecas — serie 2", type: "timer", duration: 60 },
          { id: "lu_9_10", label: "Contraste frío (8-12°C) / caliente (38-40°C) en muñecas — 2 ciclos de 30s+30s", type: "timer", duration: 120 },
        ],
        technique: "Mariposa con peso pasivo (sin empujar). Psoas: rodilla trasera apoyada, glúteo trasero activo, pelvis adelante, brazo arriba. Foam roller: lento con pausa en puntos sensibles. Contraste: frío 30s, caliente 30s, termina en frío.",
        breathing: "Respiración diafragmática (4s inhalar nariz, 8s exhalar boca). Los músculos ceden con cada exhalación.",
        errors: ["Empujar rodillas con manos en la mariposa: anula el efecto del peso pasivo.", "Arquear la lumbar en el psoas: comprime discos. Glúteo trasero muy activo.", "Saltar la flexión pasiva de muñecas: vital para prevenir tendinopatías en 4-6 semanas."],
        tips: ["Si las muñecas están muy cargadas: flexión pasiva sentado en silla apoyando en mesa (menos peso).", "Aplica crema antiinflamatoria (árnica) después del contraste para resetear las muñecas."],
        alternatives: "Sin agua fría/caliente para el contraste: pack de gel frío 10 min."
      }
    ]
  },

  // ===== MARTES =================================================================
  "martes": {
    title: "Martes", subtitle: "Fuerza base + movilidad profunda",
    desc: "Día de construcción estructural. Cero saltos, cero impactos, cero airflare. Solo carga controlada. La fuerza de hoy sostiene la técnica del Lunes y el Jueves.",
    duration: "1h 50 min – 2h 00 min", system: "Muscular (hipertrofia funcional y fuerza máxima)",
    nutrition: {
      pre: "90-100 g carbohidratos complejos (arroz integral, batata, pan integral) + 30 g proteína + verduras ≈650 kcal. 💧 600 ml agua 90-30 min antes.",
      intra: "Sudoración menor que en días de power. 150-200 ml agua cada 25 min. Cafeína opcional (200 mg, 45 min antes) para añadir 5-10% de fuerza pico.",
      post: "40 g proteína + 70-80 g carbohidratos rápidos. Batido whey + plátano + 50 g avena con leche.",
      dinner: "40-50 g proteína (pescado azul, omega-3) + carbohidratos complejos + vegetales. Añadir 3-5 g creatina si se suplementa."
    },
    exercises: [
      {
        name: "Protocolo de muñecas — COMPLETO (énfasis pronación/supinación)",
        block: "Calentamiento",
        steps: [
          { id: "ma_0_0", label: "Círculos de muñeca suaves — ambos sentidos", type: "timer", duration: 120 },
          { id: "ma_0_1", label: "Extensión pasiva — mano izquierda", type: "timer", duration: 90 },
          { id: "ma_0_2", label: "Extensión pasiva — mano derecha", type: "timer", duration: 90 },
          { id: "ma_0_3", label: "Flexión pasiva — ambas manos", type: "timer", duration: 60 },
          { id: "ma_0_4", label: "Puño → extensión de dedos", type: "reps", reps: "2 × 15 reps" },
          { id: "ma_0_5", label: "Pronación / Supinación con mancuerna 1-2 kg (ÉNFASIS hoy)", type: "reps", reps: "2 × 20 reps controladas" },
          { id: "ma_0_6", label: "Compresión pelota de lacrosse — palma izquierda", type: "timer", duration: 60 },
          { id: "ma_0_7", label: "Compresión pelota de lacrosse — palma derecha", type: "timer", duration: 60 },
          { id: "ma_0_8", label: "Autotest: extensión de muñecas a 90° contra banda elástica ligera", type: "reps", reps: "Test de dolor (si duele → cambia pike push-up por flexiones normales)" },
        ],
        technique: [
          "Círculos de muñeca suaves — ambos sentidos, 2 min.",
          "Extensión pasiva mano izquierda — manos planas en el suelo, codos estirados, presión progresiva. 90 seg.",
          "Extensión pasiva mano derecha — 90 seg.",
          "Flexión pasiva ambas manos — dorso en el suelo, dedos hacia ti. 60 seg.",
          "Puño → extensión de dedos — 2 × 15 reps.",
          "Pronación / Supinación con mancuerna (ÉNFASIS HOY) — simula el esfuerzo en el handstand y el peso muerto. 2 × 20 reps controladas.",
          "Compresión pelota de lacrosse palma izquierda — 60 seg.",
          "Compresión pelota de lacrosse palma derecha — 60 seg.",
          "Autotest final — extiende muñecas a 90° contra banda elástica ligera. ¿Hay molestia? → cambia pike push-up por flexiones normales."
        ],
        breathing: "Respiración nasal profunda constante. Exhalación larga buscando ganar rango de extensión.",
        errors: ["Saltarte las muñecas por ser 'solo día de fuerza': los L-sits y pike push-ups cargan las muñecas al 100%.", "Hacerlo con prisa: las muñecas frías provocan compensaciones lesivas en el hombro bajo carga."],
        tips: ["Autotest tras pronación/supinación: extiende muñecas a 90° contra banda ligera. Si hay molestia, cambia el pike push-up por flexiones normales."],
        alternatives: "Extensión pasiva contra la pared a 60° si hay molestias en el suelo."
      },
      {
        name: "Movilidad de cadera en cuadrupedia — CARs",
        block: "Calentamiento",
        steps: [
          { id: "ma_1_0", label: "CARs (Controlled Articular Rotations) — cadera izquierda", type: "reps", reps: "10 círculos lentos × 4-5s cada uno" },
          { id: "ma_1_1", label: "CARs — cadera derecha", type: "reps", reps: "10 círculos lentos × 4-5s cada uno" },
        ],
        technique: "En cuadrupedia: manos bajo hombros, rodillas bajo caderas. Levanta una pierna lateralmente a 90° (fire hydrant) y dibuja el círculo más amplio posible con la rodilla: lateral arriba → atrás → abajo → adelante → arriba. 4-5s por repetición. Cadera de apoyo INMÓVIL.",
        breathing: "Una respiración completa por repetición. Inhala al subir la rodilla, exhala al bajar.",
        errors: ["Hacer el círculo rápido: se pierde el rango efectivo. Cuanto más lento, mejor.", "Volcarse hacia el lado de apoyo: cargas el hombro en lugar de movilizar la cadera. Mantén el peso 50/50.", "Saltarte el lado 'bueno': la asimetría arruina la rotación en el airflare."],
        tips: ["Crujidos leves sin dolor son normales. Dolor agudo: detente.", "Hazlo descalzo para mejorar la propiocepción."],
        alternatives: "Si molestan las muñecas: realiza las rotaciones apoyando los antebrazos en el suelo."
      },
      {
        name: "Plank activo con rotación",
        block: "Calentamiento",
        steps: [
          { id: "ma_2_0", label: "Serie 1 — Plancha alta con rotaciones de tronco alternadas", type: "timer", duration: 45 },
          { id: "ma_2_1", label: "💤 Descanso", type: "rest", duration: 15 },
          { id: "ma_2_2", label: "Serie 2", type: "timer", duration: 45 },
          { id: "ma_2_3", label: "💤 Descanso", type: "rest", duration: 15 },
          { id: "ma_2_4", label: "Serie 3", type: "timer", duration: 45 },
        ],
        technique: "En plancha alta (sobre manos). Rota lentamente el tronco hacia un lado apoyándote en una mano, el brazo libre apunta al techo. Aguanta 2s, regresa al centro controlado y rota al otro lado. Cadera alineada con el tronco sin que caiga.",
        breathing: "Exhalación corta en cada rotación, inhalación al volver a la plancha central. Sin apnea.",
        errors: ["Cadera caída: anula el trabajo del core. Glúteos e inferiores apretados.", "Rotar la cadera antes que el tronco: pierdes el componente antirrotacional.", "Mirar al suelo durante la rotación: desalinea el cuello."],
        tips: ["Visualiza una taza de café caliente sobre el sacro: si la cadera oscila demasiado, se cae.", "Si las 3 series salen fáciles, aumenta a 60s en lugar de añadir peso."],
        alternatives: "Si las muñecas están sensibles: side plank sobre antebrazo con rotación de cadera."
      },
      {
        name: "Pike push-up en paralelas — 3s excéntrico",
        block: "Fuerza",
        steps: [
          { id: "ma_3_0", label: "Serie 1 — 8 reps × 3s bajada excéntrica (codos a 45°, cadera alta)", type: "reps", reps: "8 reps" },
          { id: "ma_3_1", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ma_3_2", label: "Serie 2", type: "reps", reps: "8 reps" },
          { id: "ma_3_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ma_3_4", label: "Serie 3", type: "reps", reps: "8 reps" },
          { id: "ma_3_5", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ma_3_6", label: "Serie 4", type: "reps", reps: "8 reps (si solo salen 5 con control, es válido)" },
        ],
        technique: "En paralelas medias (60-80 cm): posición de pike (caderas elevadas, piernas casi rectas). Baja controlado 3s hasta que la cabeza casi toque las manos, sube explosivo (1-2s). Codos hacia atrás a 45° (no en cruz). Cadera alta toda la bajada.",
        breathing: "Inhala durante la bajada excéntrica (los 3s) para estabilizar el diafragma. Exhala al empujar hacia arriba.",
        errors: ["Cadera baja: se convierte en flexión convencional y se pierde el ángulo específico del airflare.", "Bajar rápido: elimina la fase excéntrica donde se genera la fuerza del catching.", "Codos en cruz (90°): estresa el manguito rotador."],
        tips: ["Si en la 4ª serie solo salen 5 buenas reps, está bien. Calidad > cantidad.", "Al dominar 4×8, añade chaleco lastrado de 5 kg en lugar de más reps.", "Las paralelas permiten mayor rango de movimiento que el suelo."],
        alternatives: "Regresión 1: pike push-ups con pies en un banco. Regresión 2: flexiones declinadas normales."
      },
      {
        name: "L-sit en paralelas — progresión hasta 20s",
        block: "Fuerza",
        steps: [
          { id: "ma_4_0", label: "Serie 1 — L-sit (piernas estiradas al frente, hombros activos)", type: "timer", duration: 20 },
          { id: "ma_4_1", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ma_4_2", label: "Serie 2 — L-sit (parar si piernas caen bajo 80°)", type: "timer", duration: 20 },
          { id: "ma_4_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ma_4_4", label: "Serie 3 — L-sit", type: "timer", duration: 20 },
          { id: "ma_4_5", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ma_4_6", label: "Serie 4 — L-sit", type: "timer", duration: 20 },
          { id: "ma_4_7", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ma_4_8", label: "Serie 5 — L-sit", type: "timer", duration: 20 },
        ],
        technique: "En paralelas: sube con brazos rectos, hombros activos hacia abajo (depresión escapular). Eleva las piernas estiradas al frente hasta 90°. Puntas de los pies al frente. Si las piernas caen por debajo de 80°, termina la serie.",
        breathing: "Inhala antes de subir. Exhalaciones lentas y controladas durante el hold. No aguantes la respiración.",
        errors: ["Encoger hombros hacia las orejas: pierdes la activación del serrato y sobrecargas el trapecio.", "Inclinar el tronco hacia atrás: se convierte en V-sit y cambia la palanca del hombro.", "Tensionar la lumbar por tirar del psoas en lugar del core."],
        tips: ["Si no aguantas 10s: empieza con Tucked L-sit (rodillas dobladas) y estira una pierna alternativamente.", "Mantén la mirada al frente. Mirar al suelo baja la cadera."],
        alternatives: "L-sit en el suelo con manos planas (más exigente) o en parallettes bajas."
      },
      {
        name: "Sumo Deadlift — 70-75% RM",
        block: "Fuerza",
        steps: [
          { id: "ma_5_0", label: "Calentamiento — 40% RM", type: "reps", reps: "6 reps técnicas" },
          { id: "ma_5_1", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "ma_5_2", label: "Calentamiento — 60% RM", type: "reps", reps: "6 reps" },
          { id: "ma_5_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ma_5_4", label: "Serie 1 — 70-75% RM (Maniobra de Valsalva)", type: "reps", reps: "6 reps" },
          { id: "ma_5_5", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "ma_5_6", label: "Serie 2 — 70-75% RM", type: "reps", reps: "6 reps" },
          { id: "ma_5_7", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "ma_5_8", label: "Serie 3 — 70-75% RM", type: "reps", reps: "6 reps" },
          { id: "ma_5_9", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "ma_5_10", label: "Serie 4 — 70-75% RM", type: "reps", reps: "6 reps" },
        ],
        technique: "Pies separados ~1.5× ancho de hombros, puntas a 30-45°. Barra sobre el medio del pie. Agarre por dentro de las rodillas. Pecho arriba, espalda neutra, glúteos atrás. Sube empujando desde los talones extendiendo la cadera por completo. Bajada controlada.",
        breathing: "Maniobra de Valsalva: inhala profundo y BLOQUEA el core antes de levantar. Exhala arriba al bloquear. No exhales en la subida.",
        errors: ["Curvar la lumbar al iniciar el despegue: riesgo crítico de lesión discal.", "Rebotar la barra en el suelo: elimina el esfuerzo concéntrico.", "Pies muy cerrados: no se activan los aductores específicos del straddle."],
        tips: ["Las 2 series de calentamiento son OBLIGATORIAS (40% y 60%).", "Si la posición molesta en la lumbar, revisa la flexibilidad del aductor.", "Visualiza que empujas el suelo para separarlo con los pies durante la subida."],
        alternatives: "Sin barra: peso muerto sumo con kettlebell o mancuerna pesada. O hip thrust con barra."
      },
      {
        name: "Copenhagen Plank",
        block: "Fuerza",
        steps: [
          { id: "ma_6_0", label: "Serie 1 — lado izquierdo (muslo sobre banco, cadera alta)", type: "timer", duration: 25 },
          { id: "ma_6_1", label: "Serie 1 — lado derecho", type: "timer", duration: 25 },
          { id: "ma_6_2", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "ma_6_3", label: "Serie 2 — lado izquierdo", type: "timer", duration: 25 },
          { id: "ma_6_4", label: "Serie 2 — lado derecho", type: "timer", duration: 25 },
          { id: "ma_6_5", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "ma_6_6", label: "Serie 3 — lado izquierdo", type: "timer", duration: 25 },
          { id: "ma_6_7", label: "Serie 3 — lado derecho", type: "timer", duration: 25 },
        ],
        technique: "Codo y antebrazo en el suelo. Pierna superior sobre un banco (apoyo en la mitad del muslo, NO en el tobillo). Pierna inferior libre en el aire. Eleva la cadera hasta formar una línea recta hombros-pies. Mantén.",
        breathing: "Respiración fluida y controlada, sin bloqueos.",
        errors: ["Cadera caída: el aductor no soporta la carga. Si no aguantas 20s, reduce el tiempo.", "Apoyar el tobillo en lugar del muslo: estresa el ligamento colateral de la rodilla.", "Entrenar solo el lado débil."],
        tips: ["Si 25s es fácil: eleva y baja la pierna inferior dinámicamente (Copenhagen dinámico).", "Este ejercicio no tiene equivalente para blindar la ingle en el airflare.", "Es normal tener DOMS fuertes en aductores las primeras sesiones."],
        alternatives: "Short Copenhagen: rodilla doblada sobre el banco (reduce la palanca a la mitad)."
      },
      {
        name: "Side Plank con elevación de cadera",
        block: "Fuerza",
        steps: [
          { id: "ma_7_0", label: "Serie 1 — lado izquierdo (15 reps × 2s subida + 2s bajada)", type: "reps", reps: "15 reps" },
          { id: "ma_7_1", label: "Serie 1 — lado derecho", type: "reps", reps: "15 reps" },
          { id: "ma_7_2", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "ma_7_3", label: "Serie 2 — lado izquierdo", type: "reps", reps: "15 reps" },
          { id: "ma_7_4", label: "Serie 2 — lado derecho", type: "reps", reps: "15 reps" },
          { id: "ma_7_5", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "ma_7_6", label: "Serie 3 — lado izquierdo", type: "reps", reps: "15 reps" },
          { id: "ma_7_7", label: "Serie 3 — lado derecho", type: "reps", reps: "15 reps" },
        ],
        technique: "Plancha lateral apoyado en el antebrazo. Baja la cadera hasta casi tocar el suelo, luego elévala de forma controlada hasta superar ligeramente la línea recta. 15 elevaciones por lado (2s subida, 2s bajada) sin rotar el hombro.",
        breathing: "Exhala al subir la cadera, inhala al bajar.",
        errors: ["Rotar el tronco hacia el suelo: pierdes el trabajo en el plano frontal del glúteo medio.", "Descansar la cadera en el suelo al bajar: mantén la tensión constante.", "Hacer solo un lado."],
        tips: ["Si las 15 reps son fáciles: disco de 5-10 kg sobre la cadera superior.", "Aprieta activamente el glúteo en la parte más alta."],
        alternatives: "Plancha lateral sobre la mano (brazo estirado) si molesta el codo."
      },
      {
        name: "Windmill drill técnico — sin velocidad",
        block: "Fuerza",
        steps: [
          { id: "ma_8_0", label: "Serie 1 — 8 windmills lentos (60-70% velocidad, control plano horizontal)", type: "reps", reps: "8 reps" },
          { id: "ma_8_1", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "ma_8_2", label: "Serie 2", type: "reps", reps: "8 reps" },
          { id: "ma_8_3", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "ma_8_4", label: "Serie 3", type: "reps", reps: "8 reps" },
        ],
        technique: "Windmills lentos al 60-70% de velocidad. Foco en que el barrido de la pierna abra el plano horizontal y que la cadera mantenga una altura constante. Hombros relajados.",
        breathing: "Exhalación rítmica corta sincronizada con cada apoyo de hombro (1 exhalación por ciclo).",
        errors: ["Hacerlos rápido: hoy es trabajo de control técnico. Si te aceleras, detente.", "Forzar la rotación con los brazos: el motor es el latigazo de piernas y cadera.", "Llegar fatigado: si el bloque de fuerza te dejó sin energía, reduce una serie de pike push-up en la próxima sesión."],
        tips: ["Visualiza cada repetición como la entrada perfecta a un airflare.", "Si una rep sale muy limpia, descansa 20s y repítela idéntica para fijar la memoria muscular."],
        alternatives: "Si los hombros están cansados: baby swipes (menos demanda articular)."
      },
      {
        name: "Vuelta a la calma — movilidad profunda y relajación",
        block: "Vuelta calma",
        steps: [
          { id: "ma_9_0", label: "Posición de rana en suelo (rodillas abiertas, espinillas paralelas, antebrazos al suelo)", type: "timer", duration: 180 },
          { id: "ma_9_1", label: "Hip flexor stretch — zancada baja, glúteo trasero activo — izquierda", type: "timer", duration: 90 },
          { id: "ma_9_2", label: "Hip flexor stretch — derecha", type: "timer", duration: 90 },
          { id: "ma_9_3", label: "Hip flexor stretch — izquierda (2ª serie)", type: "timer", duration: 90 },
          { id: "ma_9_4", label: "Hip flexor stretch — derecha (2ª serie)", type: "timer", duration: 90 },
          { id: "ma_9_5", label: "Foam roller — antebrazo flexor izquierdo (rodar lento)", type: "timer", duration: 120 },
          { id: "ma_9_6", label: "Foam roller — antebrazo flexor derecho", type: "timer", duration: 120 },
          { id: "ma_9_7", label: "Foam roller — palma izquierda (1 min)", type: "timer", duration: 60 },
          { id: "ma_9_8", label: "Foam roller — palma derecha", type: "timer", duration: 60 },
          { id: "ma_9_9", label: "Respiración diafragmática tumbado: patrón 4-2-6 (inhalar 4s, hold 2s, exhalar 6s)", type: "timer", duration: 300 },
        ],
        technique: "Rana: rodillas al máximo, espinillas paralelas, antebrazos en suelo. Hip flexor: glúteo trasero MUY activo. Foam roller: antebrazo flexor y extensor, pausar en puntos sensibles. Respiración 4-2-6 tumbado: solo se mueve el abdomen.",
        breathing: "Rana e hip flexor: respiración diafragmática profunda 4-8. Relajación final: patrón 4-2-6 para estimular el nervio vago y bajar el cortisol.",
        errors: ["Forzar la rana desde el primer minuto: el aductor cansado responde mal a tensión brusca. Tarda 60s en ceder.", "Espinillas no paralelas en la rana (juntar los pies): estresa la rodilla.", "Subir el pecho al inhalar: activa el simpático. Solo debe moverse el abdomen."],
        tips: ["Si te quedas dormido en la respiración final, lo has hecho perfecto.", "Manta eléctrica sobre las rodillas antes de la rana → doble de elasticidad."],
        alternatives: "Si la posición tumbada es incómoda: respiración diafragmática sentado con espalda apoyada."
      }
    ]
  },

  // ===== MIERCOLES =================================================================
  "miercoles": {
    title: "Miércoles", subtitle: "Baile + footwork + freestyle",
    desc: "Descarga neural del power. El SN descansa de la alta intensidad del Lunes mientras el cuerpo sigue activo. SIN AIRFLARES HOY — es deliberado. La calidad de movimiento, musicalidad y flow son el foco.",
    duration: "1h 45 min", system: "Técnico-coordinativo y aeróbico ligero",
    nutrition: {
      pre: "Pan integral con pavo y aguacate, o yogur griego con avena y fruta ≈400-450 kcal. 💧 500 ml agua.",
      intra: "200 ml cada 25 min. Si los rounds son de alta intensidad: electrolitos ligeros para mantener la claridad mental.",
      post: "25-30 g proteína + 50 g carbohidratos. Batido de frutas o yogur con granola y miel + frutos secos.",
      dinner: "35-40 g proteína + carbohidratos complejos + vegetales. Día ideal para incluir antiinflamatorios: cúrcuma, jengibre, frutos rojos."
    },
    exercises: [
      {
        name: "Protocolo de muñecas — REDUCIDO (versión flow)",
        block: "Calentamiento",
        steps: [
          { id: "mi_0_0", label: "Círculos de muñeca suaves — ambos sentidos", type: "timer", duration: 120 },
          { id: "mi_0_1", label: "Extensión pasiva — mano izquierda (reducida a 60s)", type: "timer", duration: 60 },
          { id: "mi_0_2", label: "Extensión pasiva — mano derecha", type: "timer", duration: 60 },
          { id: "mi_0_3", label: "Flexión pasiva — ambas manos (45s)", type: "timer", duration: 45 },
          { id: "mi_0_4", label: "Puño → extensión de dedos", type: "reps", reps: "2 × 15 reps" },
          { id: "mi_0_5", label: "Compresión pelota — palma izquierda (45s)", type: "timer", duration: 45 },
          { id: "mi_0_6", label: "Compresión pelota — palma derecha (45s)", type: "timer", duration: 45 },
        ],
        technique: [
          "Círculos de muñeca suaves — ambos sentidos, 2 min. Día de flow: tono distendido, no de preparación para impacto.",
          "Extensión pasiva mano izquierda — versión reducida a 60 seg. Presión muy suave.",
          "Extensión pasiva mano derecha — 60 seg.",
          "Flexión pasiva ambas manos — 45 seg. Sin forzar rangos.",
          "Puño → extensión de dedos — 2 × 15 reps lentas para activar el flujo articular.",
          "Compresión pelota mano izquierda — 45 seg. Presión suave.",
          "Compresión pelota mano derecha — 45 seg. Sin pronación/supinación hoy (día de baile, no de power)."
        ],
        breathing: "Nasal y relajada. Estás entrando en un día de flow; el tono muscular debe estar distendido.",
        errors: ["Saltarse el calentamiento por ser 'solo día de baile': los freezes (baby, chair) cargan la muñeca de forma estática prolongada.", "Hacerlo con la intensidad de un día de power: el cuerpo necesita la señal de 'día más suave'."],
        tips: ["Aprovecha este protocolo más corto para conectar mentalmente con la música del entrenamiento."],
        alternatives: "Si las muñecas vienen muy cargadas de los días anteriores: protocolo completo de 10 min."
      },
      {
        name: "Protocolo de ingle — BÁSICO",
        block: "Calentamiento",
        steps: [
          { id: "mi_1_0", label: "Mariposa con inclinación adelante", type: "timer", duration: 60 },
          { id: "mi_1_1", label: "Zancada baja con rotación — lado izquierdo", type: "timer", duration: 45 },
          { id: "mi_1_2", label: "Zancada baja con rotación — lado derecho", type: "timer", duration: 45 },
          { id: "mi_1_3", label: "90/90 hip switch — serie 1", type: "reps", reps: "8 cambios lentos" },
          { id: "mi_1_4", label: "90/90 hip switch — serie 2", type: "reps", reps: "8 cambios lentos" },
          { id: "mi_1_5", label: "Fire hydrant — izquierda × 2", type: "reps", reps: "2 × 10 reps" },
          { id: "mi_1_6", label: "Fire hydrant — derecha × 2", type: "reps", reps: "2 × 10 reps" },
        ],
        technique: "Versión básica. Al no haber straddle aéreo hoy, el volumen se reduce. Se necesita soltura para los niveles bajos del footwork.",
        breathing: "Respiración relajada de 4-6s por ciclo.",
        errors: ["Omitirlo creyendo que el footwork no carga la ingle: el footwork mal calentado tensiona los aductores en los pasos cruzados (CC y threadings)."],
        tips: ["El footwork de hoy es ideal para detectar asimetrías de cadera: si notas rigidez en un lado durante el 6-step, anótalo."],
        alternatives: "Si vienes muy cargado: protocolo completo de 12 min."
      },
      {
        name: "Toprock + 6-step progresivo de activación",
        block: "Activación",
        steps: [
          { id: "mi_2_0", label: "Toprock básico al 50% de intensidad (indian step, salsa step)", type: "timer", duration: 120 },
          { id: "mi_2_1", label: "6-step muy lento (foco en la técnica, no en la velocidad)", type: "timer", duration: 60 },
          { id: "mi_2_2", label: "Progresión a velocidad habitual (subir la energía gradualmente)", type: "timer", duration: 120 },
        ],
        technique: "Sube pulsaciones con el movimiento de baile real. El calentamiento marca el tono del día.",
        breathing: "Natural, marcando el ritmo de la música con la respiración.",
        errors: ["Empezar a velocidad real: tirones musculares garantizados en frío.", "Saltar el toprock e ir directo al suelo: el cuerpo necesita la transición de pie a suelo."],
        tips: ["Usa este calentamiento para seleccionar y conectar con la música que marcará el ritmo del día."],
        alternatives: "Si prefieres otra entrada: salsa rock o kick-outs para subir pulsaciones."
      },
      {
        name: "Toprock — musicalidad y sabor",
        block: "Baile",
        steps: [
          { id: "mi_3_0", label: "Ronda 1 — toprock libre buscando acentuar los golpes musicales", type: "timer", duration: 180 },
          { id: "mi_3_1", label: "Ronda 2 — meter variantes, freezes de pie, cambios de dirección", type: "timer", duration: 180 },
          { id: "mi_3_2", label: "Ronda 3 — grábate y analiza la expresión", type: "timer", duration: 180 },
          { id: "mi_3_3", label: "Ronda 4 — aplica 1 corrección observada en el video", type: "timer", duration: 180 },
          { id: "mi_3_4", label: "Ronda 5 — libre, con la corrección integrada", type: "timer", duration: 180 },
        ],
        technique: "Toprock libre buscando acentuar los golpes de la música (cajas, bombos, melodías). Alterna pasos básicos con freezes de pie, cambios de dirección y juego de niveles.",
        breathing: "Marcar el beat con respiraciones cortas ayuda a mantener el tempo.",
        errors: ["Repetir en bucle los mismos 3 pasos: estanca el vocabulario.", "Bailar como autómata sin escuchar la música: si puedes hacer la rutina con cualquier canción, no estás interpretando.", "Mirar al suelo: la cabeza debe estar arriba para proyectar presencia."],
        tips: ["Elige una sola canción y báilala 5 veces seguidas. La repetición te obligará a buscar nuevos acentos."],
        alternatives: "Si el toprock no es tu fuerte: 5 min extra a footwork, pero no lo abandones."
      },
      {
        name: "Footwork — 6-step, CC, Skittles y combos",
        block: "Baile",
        steps: [
          { id: "mi_4_0", label: "6-step limpio — foco en la técnica y velocidad controlada", type: "timer", duration: 300 },
          { id: "mi_4_1", label: "CC limpio — foco en el plano horizontal", type: "timer", duration: 300 },
          { id: "mi_4_2", label: "Skittles — foco en la transición fluida", type: "timer", duration: 300 },
          { id: "mi_4_3", label: "Combos fluidos: 6-step → CC → freeze → recovery", type: "timer", duration: 300 },
        ],
        technique: "5 min a cada patrón base. Los últimos 5 min: encadénalos en combos fluidos. Cadera baja, peso distribuido.",
        breathing: "Exhalación rítmica con cada cambio de apoyo para no quedarte sin aire en 30s.",
        errors: ["Cadera alta: el footwork avanzado requiere postura compacta y baja.", "Hacer los patrones siempre en el mismo orden: limita la improvisación.", "Todo el peso muerto en las muñecas: reparte con los pies."],
        tips: ["Practica el footwork en ambos sentidos (horario y antihorario). Ser ambidiestro destaca en las batallas.", "Introduce pausas estáticas breves para mejorar el contraste de velocidad."],
        alternatives: "Si ya dominas estos pasos: añade zulu spins o threadings. Si estás aprendiendo: solo 6-step limpio."
      },
      {
        name: "Freezes — baby freeze, headstand y chair",
        block: "Baile",
        steps: [
          { id: "mi_5_0", label: "Baby freeze — entrada limpia desde footwork + hold + salida controlada", type: "timer", duration: 300 },
          { id: "mi_5_1", label: "Headstand freeze — trípode (70% peso en manos, 30% en cabeza)", type: "timer", duration: 300 },
          { id: "mi_5_2", label: "Chair freeze — entrada + salida controlada", type: "timer", duration: 300 },
        ],
        technique: "5 min por freeze. Trabaja especialmente la entrada (directamente desde el footwork) y la salida controlada.",
        breathing: "Inhala antes de entrar, respiración suave durante el hold (no apnea), exhala al salir.",
        errors: ["Lanzarse al freeze sin control de entrada: peligroso para muñecas y cuello.", "En el headstand: todo el peso en el cuello. El 70% debe estar en las manos.", "Mantener el freeze hasta colapsar: sal siempre con control antes de perder la fuerza."],
        tips: ["Entra a los freezes directamente desde el footwork para integrarlos y evitar que parezcan poses aisladas.", "El headstand acondiciona el cuello y el core para la inversión del airflare."],
        alternatives: "Si el headstand carga el cuello: crow pose (bakasana) o más tiempo en baby y chair."
      },
      {
        name: "Rounds simulados — 2 min ON / 1 min OFF",
        block: "Baile",
        steps: [
          { id: "mi_6_0", label: "Ronda 1 — baile libre (toprock + footwork + freezes + windmills. 0 AIRFLARES)", type: "timer", duration: 120 },
          { id: "mi_6_1", label: "💤 Descanso activo", type: "rest", duration: 60 },
          { id: "mi_6_2", label: "Ronda 2", type: "timer", duration: 120 },
          { id: "mi_6_3", label: "💤 Descanso activo", type: "rest", duration: 60 },
          { id: "mi_6_4", label: "Ronda 3", type: "timer", duration: 120 },
          { id: "mi_6_5", label: "💤 Descanso activo", type: "rest", duration: 60 },
          { id: "mi_6_6", label: "Ronda 4", type: "timer", duration: 120 },
          { id: "mi_6_7", label: "💤 Descanso activo", type: "rest", duration: 60 },
          { id: "mi_6_8", label: "Ronda 5", type: "timer", duration: 120 },
        ],
        technique: "Simula una batalla real. 2 min de baile continuo combinando todo. Descansa 1 min de forma activa. CERO AIRFLARES (deliberado para dar descanso al sistema nervioso).",
        breathing: "Recupera con respiración nasal profunda durante el minuto de descanso.",
        errors: ["Meter un airflare porque te sale automático: rompe el propósito de descarga.", "Quemarte en el primer round: dosifica para completar las 5 rondas con el mismo nivel.", "Bajar la calidad cuando aparece el cansancio: bajo fatiga es donde se entrena el verdadero control."],
        tips: ["Grábate las 5 rondas y analiza cómo cambia tu baile de la ronda 1 a la 5. Revelará tus movimientos 'muleta'."],
        alternatives: "Si 5 rondas son excesivas: empieza con 3 y prioriza la calidad."
      },
      {
        name: "Windmill encadenado — entrada y salida",
        block: "Baile",
        steps: [
          { id: "mi_7_0", label: "Práctica de ENTRADA al windmill (desde toprock o footwork) — fluida, sin salto brusco", type: "timer", duration: 300 },
          { id: "mi_7_1", label: "Práctica de SALIDA del windmill (hacia freeze o de vuelta a footwork) — controlada", type: "timer", duration: 300 },
        ],
        technique: "Foco exclusivo en la entrada y la salida. Repeticiones a velocidad media buscando fluidez en el enlace. La salida controlada del windmill es el enlace directo con el airflare.",
        breathing: "Exhalación en cada apoyo de hombro, inhalación en la transición.",
        errors: ["Entrar con un salto brusco: la entrada debe nacer de la inercia del movimiento previo.", "Terminar el windmill dejándote caer: la salida controlada es la mecánica del aterrizaje del airflare."],
        tips: ["Practica la salida del windmill directamente a un baby freeze. Esa mecánica de frenado es idéntica a la del aterrizaje del airflare."],
        alternatives: "Si el windmill no es sólido: dedica el tiempo a la base del barrido de piernas."
      },
      {
        name: "Vuelta a la calma — estiramiento y liberación",
        block: "Vuelta calma",
        steps: [
          { id: "mi_8_0", label: "Estiramiento cuello (lateral ambos lados)", type: "timer", duration: 45 },
          { id: "mi_8_1", label: "Estiramiento cruzado de hombro — izquierdo", type: "timer", duration: 45 },
          { id: "mi_8_2", label: "Estiramiento cruzado de hombro — derecho", type: "timer", duration: 45 },
          { id: "mi_8_3", label: "Estiramiento de tríceps — ambos lados", type: "timer", duration: 45 },
          { id: "mi_8_4", label: "Gato-vaca (movilización de columna)", type: "timer", duration: 60 },
          { id: "mi_8_5", label: "Mariposa (suave)", type: "timer", duration: 60 },
          { id: "mi_8_6", label: "Isquiotibiales sentado", type: "timer", duration: 60 },
          { id: "mi_8_7", label: "Foam roller — glúteos (pausar en puntos sensibles)", type: "timer", duration: 150 },
          { id: "mi_8_8", label: "Foam roller — zona lumbar lateral (NUNCA sobre las vértebras)", type: "timer", duration: 150 },
        ],
        technique: "Estiramientos suaves de arriba abajo. Foam roller en glúteos y zona lumbar lateral. Música tranquila si es posible para bajar el arousal del sistema nervioso.",
        breathing: "Respiración diafragmática relajada en patrón 4-8.",
        errors: ["Forzar rangos máximos: el músculo está cansado del baile y puede sufrir microtirones.", "Rodar el foam roller directamente sobre las vértebras lumbares."],
        tips: ["Dedica 30s extra a los flexores de cadera y hombros, que son los que más se cargan en el footwork."],
        alternatives: "Sustituye por una secuencia de 10 min de yin yoga guiado si lo prefieres."
      }
    ]
  },

  // ===== JUEVES =================================================================
  "jueves": {
    title: "Jueves", subtitle: "Airflare intensivo + ingle preventiva",
    desc: "El día del SALTO CUALITATIVO. Sesión específica del 2º airflare con video-feedback y spotting. Máxima exigencia técnica. Calidad absoluta sobre cantidad. Máximo 8 intentos de 2 vueltas.",
    duration: "2h 00 min", system: "Neuromuscular de alta intensidad",
    nutrition: {
      pre: "90 g carbohidratos + 35 g proteína + grasa buena (arroz+pollo+aguacate, o avena+whey+crema cacahuete) ≈650-700 kcal. Cafeína opcional 200 mg 45 min antes.",
      intra: "Sesión 2h intensidad extrema = 1.5-2 L sudor. Bebe 250 ml cada 25 min con electrolitos (Na 500 mg + K + Mg). Un dátil o sorbo de carbohidratos al final del bloque power.",
      post: "CRÍTICO (45 min): 35-40 g proteína de alta calidad + 70-90 g carbohidratos. Batido whey 40g + plátano + 50 g avena + miel.",
      dinner: "50 g proteína (pescado azul para inflamación articular) + carbohidratos complejos + vegetales. Magnesio 300-400 mg antes de dormir para relajar el SN."
    },
    exercises: [
      {
        name: "Protocolo de muñecas — MÁXIMO + muñequeras",
        block: "Calentamiento",
        steps: [
          { id: "ju_0_0", label: "Sumergir muñecas en agua tibia (38-40°C) si hace frío — opcional", type: "timer", duration: 120 },
          { id: "ju_0_1", label: "Círculos de muñeca suaves — ambos sentidos", type: "timer", duration: 120 },
          { id: "ju_0_2", label: "Extensión pasiva — mano izquierda (ramp-up: empieza 30% de carga)", type: "timer", duration: 90 },
          { id: "ju_0_3", label: "Extensión pasiva — mano derecha", type: "timer", duration: 90 },
          { id: "ju_0_4", label: "Flexión pasiva — ambas manos", type: "timer", duration: 60 },
          { id: "ju_0_5", label: "Puño → extensión de dedos", type: "reps", reps: "2 × 15 reps" },
          { id: "ju_0_6", label: "Pronación / Supinación con mancuerna", type: "reps", reps: "2 × 20 reps" },
          { id: "ju_0_7", label: "Compresión pelota — palma izquierda", type: "timer", duration: 60 },
          { id: "ju_0_8", label: "Compresión pelota — palma derecha", type: "timer", duration: 60 },
          { id: "ju_0_9", label: "Test final: 5 flexiones progresivas (30% → 80% explosividad)", type: "reps", reps: "5 flexiones progresivas — ¿sin molestia? → COLOCARSE MUÑEQUERAS RÍGIDAS" },
        ],
        technique: [
          "Opcional: sumergir muñecas en agua tibia 38-40°C durante 2 min. Si hace frío, el tejido responde el doble de rápido.",
          "Círculos de muñeca suaves — 2 min en ambos sentidos.",
          "Extensión pasiva mano izquierda — ramp-up obligatorio: empieza al 30% de carga y sube progresivamente. 90 seg.",
          "Extensión pasiva mano derecha — mismo ramp-up progresivo. 90 seg.",
          "Flexión pasiva ambas manos — 60 seg.",
          "Puño → extensión de dedos — 2 × 15 reps.",
          "Pronación / Supinación con mancuerna — 2 × 20 reps.",
          "Compresión pelota palma izquierda — 60 seg.",
          "Compresión pelota palma derecha — 60 seg.",
          "Test final: 5 flexiones progresivas (30% → 80% explosividad). ¿Sin molestia? → COLOCARSE MUÑEQUERAS RÍGIDAS antes del bloque power."
        ],
        breathing: "Nasal profunda, exhalación larga buscando ganar rango en cada estiramiento.",
        errors: ["Calentar al nivel normal: hoy el impacto es máximo, necesitas preparación extrema.", "No usar muñequeras: en el día de mayor impacto son OBLIGATORIAS.", "Si hay pinchazo en el test de flexiones: NO hagas power hoy. Cambia a sesión de baile."],
        tips: ["Si hay molestia antes de empezar: no entrenes power hoy.", "El test de 5 flexiones progresivas al final confirma que las muñecas están listas."],
        alternatives: "Si hay molestia persistente: suspende los airflares de hoy y entrena solo baile."
      },
      {
        name: "Protocolo de ingle — COMPLETO + extra apertura",
        block: "Calentamiento",
        steps: [
          { id: "ju_1_0", label: "Test inicial: apertura en straddle de pie buscando rango máximo", type: "reps", reps: "Test — ¿está <20% bajo lo habitual? → hoy solo 1 vuelta en los intentos" },
          { id: "ju_1_1", label: "Mariposa con inclinación — serie 1", type: "timer", duration: 90 },
          { id: "ju_1_2", label: "Mariposa con inclinación — serie 2", type: "timer", duration: 90 },
          { id: "ju_1_3", label: "Zancada baja con rotación — izquierda × 2", type: "timer", duration: 60 },
          { id: "ju_1_4", label: "Zancada baja con rotación — derecha × 2", type: "timer", duration: 60 },
          { id: "ju_1_5", label: "Straddle parcial en suelo (espalda recta)", type: "timer", duration: 120 },
          { id: "ju_1_6", label: "90/90 hip switch — serie 1", type: "reps", reps: "10 cambios" },
          { id: "ju_1_7", label: "90/90 hip switch — serie 2", type: "reps", reps: "10 cambios" },
          { id: "ju_1_8", label: "Fire hydrant — izquierda × 2", type: "reps", reps: "2 × 15 reps" },
          { id: "ju_1_9", label: "Fire hydrant — derecha × 2", type: "reps", reps: "2 × 15 reps" },
          { id: "ju_1_10", label: "Pelota psoas — lado izquierdo", type: "timer", duration: 120 },
          { id: "ju_1_11", label: "Pelota psoas — lado derecho", type: "timer", duration: 120 },
          { id: "ju_1_12", label: "Apertura extra: straddle progresivo de pie (ampliar rango)", type: "timer", duration: 60 },
        ],
        technique: "Protocolo COMPLETO con extra apertura final. No acelerarlo por prisa: la prisa aquí equivale a un tirón o desgarro (4-8 semanas de baja). El test de straddle al inicio informa si reducir la carga de hoy.",
        breathing: "Respiración profunda en estáticos (4-8s). Exhala buscando ganar 1 cm extra en la apertura lateral.",
        errors: ["Acelerar el calentamiento por prisa: 4-8 semanas de baja por 3 minutos de prisa.", "Si hay dolor real al test de zancada: suspende los airflares de hoy."],
        tips: ["Si el straddle está 20% por debajo de lo habitual: fatiga acumulada. Hoy solo 1 vuelta en los intentos.", "Test de dolor en zancada: si hay dolor agudo >3/10, NO hay airflare hoy."],
        alternatives: "Si hay dolor real: suspender el entrenamiento de airflares por hoy."
      },
      {
        name: "Hip circles en cuadrupedia + piriforme",
        block: "Calentamiento",
        steps: [
          { id: "ju_2_0", label: "CARs de cadera — izquierda (el lado más rígido recibe 2 círculos extra)", type: "reps", reps: "10 círculos lentos" },
          { id: "ju_2_1", label: "CARs de cadera — derecha", type: "reps", reps: "10 círculos lentos" },
          { id: "ju_2_2", label: "Activación piriforme: rodilla cruza hacia muñeca opuesta — izquierdo", type: "timer", duration: 20 },
          { id: "ju_2_3", label: "Activación piriforme — derecho", type: "timer", duration: 20 },
          { id: "ju_2_4", label: "Activación piriforme — izquierdo (serie 2)", type: "timer", duration: 20 },
          { id: "ju_2_5", label: "Activación piriforme — derecho (serie 2)", type: "timer", duration: 20 },
        ],
        technique: "CARs lentos en cuadrupedia. Piriforme: en cuadrupedia, lleva una rodilla cruzando hacia la muñeca opuesta, mantén 20s y repite.",
        breathing: "Una respiración por cada círculo. Exhalación profunda en el estiramiento del piriforme.",
        errors: ["Saltarte el piriforme: es el rotador que mantiene el plano horizontal de la cadera en el aire.", "Hacer los círculos rápido."],
        tips: ["Si un lado es más rígido en los CARs, ese es tu lado débil en la rotación: dale 2 círculos extra."],
        alternatives: "Apoya los antebrazos si las muñecas necesitan alivio antes del impacto."
      },
      {
        name: "Flares lentos × 3 — activación neural mínima",
        block: "Activación",
        steps: [
          { id: "ju_3_0", label: "Flare lento rep 1 — al 40-50% velocidad (¿recepción silenciosa?)", type: "reps", reps: "1 flare muy lento" },
          { id: "ju_3_1", label: "💤 Pausa entre flares", type: "rest", duration: 45 },
          { id: "ju_3_2", label: "Flare lento rep 2", type: "reps", reps: "1 flare muy lento" },
          { id: "ju_3_3", label: "💤 Pausa entre flares", type: "rest", duration: 45 },
          { id: "ju_3_4", label: "Flare lento rep 3 — ¿cadera alta + recepción silenciosa? → listo para 2 vueltas", type: "reps", reps: "1 flare muy lento" },
        ],
        technique: "Solo 3 flares lentos. Si el 3º sale con cadera alta y recepción silenciosa, estás listo para las 2 vueltas. Si no, haz 5 min extra de movilidad.",
        breathing: "Inhala antes del inicio, exhalación controlada durante toda la rotación.",
        errors: ["Hacer más de 3: necesitas toda la energía para los intentos de 2 vueltas.", "Hacerlos a velocidad real: estás encendiendo el sistema, no entrenándolo todavía."],
        tips: ["El 3er flare lento es el semáforo verde. Si no sale bien, no entres al bloque de 2 vueltas todavía."],
        alternatives: "Si los flares lentos te enfrían: 3 series cortas de 6-step rápido para reactivarte."
      },
      {
        name: "Video-feedback — setup y revisión activa",
        block: "Power+",
        steps: [
          { id: "ju_4_0", label: "Configurar móvil en trípode: ángulo 3/4 frontal, h=cadera, 3m distancia, 120-240fps", type: "reps", reps: "Verificar configuración antes de empezar el bloque" },
          { id: "ju_4_1", label: "Crear carpeta con la fecha en el móvil para guardar los videos", type: "reps", reps: "Crear carpeta fecha de hoy" },
        ],
        technique: "Cámara en cámara lenta (120 o 240 fps). Grabarás cada serie del bloque de power. Revisa en los descansos. Busca: altura de cadera en el aterrizaje, flexión del codo y timing del pateo. Solo 1 corrección por sesión.",
        breathing: "Si te frustras al ver los errores, respira hondo antes de la siguiente serie.",
        errors: ["Grabar y no revisar hasta llegar a casa: pierdes la oportunidad de corregir en caliente.", "Querer corregir 10 cosas a la vez: el SN solo procesa 1-2 correcciones por sesión."],
        tips: ["El aterrizaje correcto NO se oye. Si se oye el golpe, no hubo rebote.", "Compara los videos semana a semana en la carpeta de fechas."],
        alternatives: "Sin trípode: apoya el móvil en una mochila contra la pared a la altura correcta."
      },
      {
        name: "Drill de rebote de cadera en paralelas",
        block: "Power+",
        steps: [
          { id: "ju_5_0", label: "Serie 1 — Rebote péndulo de mano a mano (continuo, sin pausa)", type: "reps", reps: "10 rebotes alternos (5 a cada lado)" },
          { id: "ju_5_1", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ju_5_2", label: "Serie 2 — Rebote péndulo (¿suena ta-ta-ta o tum-tum?)", type: "reps", reps: "10 rebotes alternos" },
          { id: "ju_5_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ju_5_4", label: "Serie 3 — Rebote péndulo (ojos cerrados para mejorar propiocepción)", type: "reps", reps: "10 rebotes alternos" },
        ],
        technique: "En paralelas: posición invertida/horizontal, simula el rebote del airflare pasando el peso de una mano a otra con impulso elástico de cadera SIN completar la rotación. Debe sentirse como un péndulo continuo.",
        breathing: "Exhalación corta y rítmica con cada rebote, marcando el tempo como un metrónomo.",
        errors: ["Hacerlo en dos tiempos (rebote-pausa-rebote): el péndulo debe ser continuo.", "Rebotar con la fuerza de los brazos en lugar de la cadera.", "Dejar caer la cadera durante el rebote."],
        tips: ["El rebote correcto suena SUAVE y rítmico (ta-ta-ta). El malo suena pesado y entrecortado (tum... tum).", "Cierra los ojos en algunas repeticiones para aumentar la propiocepción.", "Es el drill más importante si tienes el problema de 'caída pesada' en el catching."],
        alternatives: "Sin paralelas: rebote en handstand contra la pared o en posición de baby flare en el suelo."
      },
      {
        name: "Airflare 1 vuelta con spotting manual",
        block: "Power+",
        steps: [
          { id: "ju_6_0", label: "Serie 1 — 5 airflares con spotter (mano suave en la cadera)", type: "reps", reps: "5 reps (¿aterrizaje silencioso?)" },
          { id: "ju_6_1", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ju_6_2", label: "Serie 2", type: "reps", reps: "5 reps" },
          { id: "ju_6_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ju_6_4", label: "Serie 3", type: "reps", reps: "5 reps" },
          { id: "ju_6_5", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ju_6_6", label: "Serie 4", type: "reps", reps: "5 reps" },
          { id: "ju_6_7", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "ju_6_8", label: "Serie 5 — ¿el 1er aterrizaje es SILENCIOSO? → verde para las 2 vueltas", type: "reps", reps: "5 reps" },
        ],
        technique: "Spotter coloca UNA mano suave en la cadera para dar estabilidad y feedback táctil. Solo interviene si la cadera cae demasiado. La presencia del spotter es para darte confianza, no para sostenerte.",
        breathing: "Exhalación rítmica durante la rotación. La presencia del spotter reduce el estrés, úsala para respirar relajado.",
        errors: ["Apoyarse completamente en el compañero: el spotter da seguridad, no la fuerza.", "Spotter detrás del ejecutante: debe estar al lado para no entorpecer el giro."],
        tips: ["Pide al spotter feedback verbal: 'silencioso' o 'fuerte' tras cada aterrizaje.", "Sin compañero: usa la banda elástica del Lunes como 'spotter mecánico'."],
        alternatives: "Sin compañero: airflares sobre colchoneta gruesa para amortiguar."
      },
      {
        name: "Intentos de 2 vueltas consecutivas — OBJETIVO CENTRAL",
        block: "Power+",
        steps: [
          { id: "ju_7_0", label: "Intento 1 — rebote silencioso + cambio de brazos <0.15s + pateo sincronizado", type: "reps", reps: "1 intento → revisar video" },
          { id: "ju_7_1", label: "💤 Descanso", type: "rest", duration: 150 },
          { id: "ju_7_2", label: "Intento 2", type: "reps", reps: "1 intento" },
          { id: "ju_7_3", label: "💤 Descanso", type: "rest", duration: 150 },
          { id: "ju_7_4", label: "Intento 3", type: "reps", reps: "1 intento" },
          { id: "ju_7_5", label: "💤 Descanso", type: "rest", duration: 150 },
          { id: "ju_7_6", label: "Intento 4", type: "reps", reps: "1 intento" },
          { id: "ju_7_7", label: "💤 Descanso", type: "rest", duration: 150 },
          { id: "ju_7_8", label: "Intento 5", type: "reps", reps: "1 intento" },
          { id: "ju_7_9", label: "💤 Descanso", type: "rest", duration: 150 },
          { id: "ju_7_10", label: "Intento 6", type: "reps", reps: "1 intento" },
          { id: "ju_7_11", label: "💤 Descanso", type: "rest", duration: 150 },
          { id: "ju_7_12", label: "Intento 7", type: "reps", reps: "1 intento" },
          { id: "ju_7_13", label: "💤 Descanso", type: "rest", duration: 150 },
          { id: "ju_7_14", label: "Intento 8 — MÁXIMO PERMITIDO (si 2 seguidos pesados: PARAR)", type: "reps", reps: "1 intento" },
        ],
        technique: "Máximo 8 intentos de altísima calidad. Mantra durante el giro: 'rebota, patea, techo'. Si haces 2 intentos seguidos con aterrizaje pesado o cadera baja, DETENTE. 3 intentos perfectos valen más que 8 regulares.",
        breathing: "Inhala profundo antes de salir (llena los pulmones). Exhalación rítmica explosiva en cada apoyo durante las 2 vueltas.",
        errors: ["Más de 8 intentos: la fatiga neuromuscular programa un patrón incorrecto.", "Forzar la 2ª vuelta si la 1ª cayó pesada: imposible encadenar sin buen rebote previo.", "Pateo tardío de la pierna líder: debe patear exactamente cuando la mano empuja."],
        tips: ["3 intentos perfectos = sesión exitosa. Si los primeros salen muy bien, termina el bloque.", "Si el 1er aterrizaje aún no es silencioso: NO intentes las 2 vueltas. Solo drills de rebote."],
        alternatives: "Si no hay aterrizaje silencioso todavía: sustitye por drills de rebote y airflares de 1v asistidos."
      },
      {
        name: "Thomas → Airflare → Thomas",
        block: "Power+",
        steps: [
          { id: "ju_8_0", label: "Serie 1 — Thomas de salida → 1 Airflare → Thomas de entrada (cadera alta en todo)", type: "reps", reps: "5 reps" },
          { id: "ju_8_1", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "ju_8_2", label: "Serie 2", type: "reps", reps: "5 reps" },
          { id: "ju_8_3", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "ju_8_4", label: "Serie 3", type: "reps", reps: "5 reps" },
        ],
        technique: "Thomas → 1 airflare → cae de vuelta a Thomas. Frena la inercia del giro para estabilizar. El objetivo es aprender que el airflare tiene una fase de control de entrada Y de salida.",
        breathing: "Inhala en el Thomas de inicio, exhala durante el airflare, inhala al recuperar el Thomas de salida.",
        errors: ["Salir del airflare cayendo al suelo: pierdes el control de la salida.", "Thomas de entrada o salida con cadera baja."],
        tips: ["Este ejercicio enseña al cuerpo que el airflare no termina al aterrizar: continúa en la siguiente posición."],
        alternatives: "Si es muy difícil: practica la secuencia sin fase aérea: Thomas → flare → Thomas."
      },
      {
        name: "Windmill full-speed — resistencia bajo fatiga",
        block: "Power+",
        steps: [
          { id: "ju_9_0", label: "Serie 1 — windmills a velocidad completa hasta fallo técnico", type: "reps", reps: "Máximo continuo con buena forma" },
          { id: "ju_9_1", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "ju_9_2", label: "Serie 2", type: "reps", reps: "Máximo continuo" },
          { id: "ju_9_3", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "ju_9_4", label: "Serie 3 — úsalo como termómetro de resistencia semanal", type: "reps", reps: "Máximo continuo" },
        ],
        technique: "Windmills a velocidad completa buscando el máximo número continuo con buena forma. DETENTE cuando la forma técnica se rompa. Sirve para condicionar el cuerpo al final de la sesión cuando hay fatiga acumulada.",
        breathing: "Ritmo respiratorio sostenido y profundo. Si te quedas sin aire, finaliza la serie.",
        errors: ["Seguir cuando la técnica se desmorona: entrenas el patrón incorrecto bajo fatiga.", "Hacer este ejercicio si las muñecas están al límite tras las 2 vueltas."],
        tips: ["El número de windmills continuos es tu termómetro de resistencia semanal. Compáralo semana a semana."],
        alternatives: "Si las muñecas están muy fatigadas: salta este ejercicio o cámbialo por baby swipes."
      },
      {
        name: "Vuelta a la calma — recuperación y crioterapia",
        block: "Vuelta calma",
        steps: [
          { id: "ju_10_0", label: "Pelota lacrosse — psoas izquierdo (presión suave boca abajo)", type: "timer", duration: 120 },
          { id: "ju_10_1", label: "Pelota lacrosse — psoas derecho", type: "timer", duration: 120 },
          { id: "ju_10_2", label: "Pelota lacrosse — aductor izquierdo", type: "timer", duration: 120 },
          { id: "ju_10_3", label: "Pelota lacrosse — aductor derecho", type: "timer", duration: 120 },
          { id: "ju_10_4", label: "Isquiotibiales con banda — pierna izquierda", type: "timer", duration: 90 },
          { id: "ju_10_5", label: "Isquiotibiales con banda — pierna derecha", type: "timer", duration: 90 },
          { id: "ju_10_6", label: "Figura-4 (glúteo/piriforme) — izquierdo", type: "timer", duration: 90 },
          { id: "ju_10_7", label: "Figura-4 — derecho", type: "timer", duration: 90 },
          { id: "ju_10_8", label: "Rotación espinal tumbado — izquierdo", type: "timer", duration: 60 },
          { id: "ju_10_9", label: "Rotación espinal tumbado — derecho", type: "timer", duration: 60 },
          { id: "ju_10_10", label: "Crioterapia muñecas: baño agua con hielo (paño protector)", type: "timer", duration: 600 },
        ],
        technique: "Presión suave-moderada en el psoas (zona blanda, cerca de los órganos). Figura-4 para liberar el piriforme que trabajó estabilizando la cadera. Crioterapia: 10 minutos de hielo con paño protector en las muñecas para cortar la inflamación del impacto.",
        breathing: "Respiración diafragmática 4-8. En la crioterapia: respiración controlada para mitigar la hiperventilación inicial.",
        errors: ["Presión excesiva en el psoas: es zona blanda cercana a órganos internos. Solo presión suave-moderada.", "Hielo directo sobre la piel sin tela protectora: quemaduras por frío.", "No hacer la crioterapia por cansancio: es el día de mayor impacto, es imprescindible."],
        tips: ["La figura-4 es clave para liberar el piriforme que estabilizó la cadera durante las 2 vueltas.", "Si las muñecas están muy cargadas: crioterapia en casa antes de dormir también."],
        alternatives: "Pack de gel frío si no hay baño de hielo disponible."
      }
    ]
  },

  // ===== VIERNES =================================================================
  "viernes": {
    title: "Viernes", subtitle: "Fuerza explosiva + combo de baile",
    desc: "Día de POTENCIA: convertir la fuerza del Martes en explosividad aplicable al airflare. Pliometría, core explosivo y un combo de baile a velocidad real. Cierre con test de fatiga acumulada.",
    duration: "1h 50 min", system: "Potencia (fuerza × velocidad)",
    nutrition: {
      pre: "80 g carbohidratos + 30 g proteína. Tostadas integrales con huevo y plátano, o arroz con pollo. Cafeína opcional 150-200 mg. 💧 500-600 ml agua.",
      intra: "200-250 ml agua cada 25 min. Electrolitos si hace calor o la sesión se extiende.",
      post: "35 g proteína + 70 g carbohidratos. Cierre de la semana de carga: recarga los depósitos para iniciar la recuperación del fin de semana.",
      dinner: "45-50 g proteína + carbohidratos complejos + vegetales. Si tomas alcohol de forma social, ten en cuenta que perjudica la síntesis proteica y la recuperación."
    },
    exercises: [
      {
        name: "Protocolo de muñecas — COMPLETO + activación pliométrica",
        block: "Calentamiento",
        steps: [
          { id: "vi_0_0", label: "Círculos de muñeca suaves", type: "timer", duration: 120 },
          { id: "vi_0_1", label: "Extensión pasiva — mano izquierda", type: "timer", duration: 90 },
          { id: "vi_0_2", label: "Extensión pasiva — mano derecha", type: "timer", duration: 90 },
          { id: "vi_0_3", label: "Flexión pasiva — ambas manos", type: "timer", duration: 60 },
          { id: "vi_0_4", label: "Puño → extensión de dedos", type: "reps", reps: "2 × 15 reps" },
          { id: "vi_0_5", label: "Pronación / Supinación con mancuerna", type: "reps", reps: "2 × 20 reps" },
          { id: "vi_0_6", label: "Compresión pelota — palma izquierda", type: "timer", duration: 60 },
          { id: "vi_0_7", label: "Compresión pelota — palma derecha", type: "timer", duration: 60 },
          { id: "vi_0_8", label: "Flexiones de activación progresiva: 30% → 50% → 80% explosividad", type: "reps", reps: "10 flexiones progresivas" },
        ],
        technique: [
          "Círculos de muñeca suaves — 2 min en ambos sentidos.",
          "Extensión pasiva mano izquierda — manos planas en el suelo, presión progresiva sin rebotar. 90 seg.",
          "Extensión pasiva mano derecha — 90 seg.",
          "Flexión pasiva ambas manos — dorso en el suelo, dedos hacia ti. 60 seg.",
          "Puño → extensión de dedos — 2 × 15 reps.",
          "Pronación / Supinación con mancuerna — 2 × 20 reps.",
          "Compresión pelota palma izquierda — 60 seg.",
          "Compresión pelota palma derecha — 60 seg.",
          "Activación pliométrica progresiva — 10 flexiones a 30% → 50% → 80% de explosividad. Prepara las muñecas para el empuje pliométrico de hoy."
        ],
        breathing: "Respiración profunda y nasal.",
        errors: ["Saltar al empuje pliométrico sin adaptación progresiva: el cambio de carga brusco puede lesionar las muñecas."],
        tips: ["Calentar bien compensa la fatiga que acumularán las muñecas de cara al test de airflare al final de la sesión."],
        alternatives: "Si hay molestia de muñeca: sustituye la flexión pliométrica por saltos o sprints de potencia."
      },
      {
        name: "Protocolo de ingle — MEDIO",
        block: "Calentamiento",
        steps: [
          { id: "vi_1_0", label: "Mariposa con inclinación", type: "timer", duration: 90 },
          { id: "vi_1_1", label: "Zancada baja con rotación — izquierda", type: "timer", duration: 60 },
          { id: "vi_1_2", label: "Zancada baja con rotación — derecha", type: "timer", duration: 60 },
          { id: "vi_1_3", label: "Apertura lateral en suelo", type: "timer", duration: 90 },
          { id: "vi_1_4", label: "90/90 hip switch × 2 series", type: "reps", reps: "2 × 10 cambios" },
          { id: "vi_1_5", label: "Fire hydrant — izquierda × 2", type: "reps", reps: "2 × 12 reps" },
          { id: "vi_1_6", label: "Fire hydrant — derecha × 2", type: "reps", reps: "2 × 12 reps" },
          { id: "vi_1_7", label: "Sentadillas profundas lentas (preparación box jump)", type: "reps", reps: "5 reps muy lentas" },
        ],
        technique: "Versión media-completa. Las sentadillas profundas al final preparan el patrón de bajada controlada del box jump.",
        breathing: "Respiración relajada de 4-6s.",
        errors: ["Saltarse la ingle antes de la pliometría: el box jump en frío genera alto riesgo de tirón en el aductor."],
        tips: ["Las sentadillas profundas lentas al final preparan el patrón específico del box jump."],
        alternatives: "Protocolo completo de 12 min si vienes con mucha rigidez de cadera."
      },
      {
        name: "Saltos pliométricos de rodilla al pecho",
        block: "Activación",
        steps: [
          { id: "vi_2_0", label: "Serie 1 — 10 saltos (rodillas al pecho, aterrizaje SILENCIOSO con rodillas flexionadas)", type: "reps", reps: "10 saltos" },
          { id: "vi_2_1", label: "💤 Descanso", type: "rest", duration: 30 },
          { id: "vi_2_2", label: "Serie 2 — 10 saltos (¿aterrizaje silencioso?)", type: "reps", reps: "10 saltos" },
        ],
        technique: "Saltos verticales llevando rodillas al pecho. Aterrizaje MUY SUAVE amortiguando con rodillas flexionadas. La habilidad de aterrizar silencioso en los pies es transferible a la amortiguación del catching arm.",
        breathing: "Exhalación explosiva en el momento del salto.",
        errors: ["Aterrizar con piernas rígidas: genera impacto seco lesivo y entrena el patrón opuesto al airflare."],
        tips: ["El aterrizaje silencioso en los pies = la misma mecánica de amortiguación del brazo en el airflare."],
        alternatives: "Saltos a la comba rápidos o jumping jacks explosivos si hay molestia en rodillas."
      },
      {
        name: "Box Jump + Sentadilla Explosiva — circuito",
        block: "Explosivo",
        steps: [
          { id: "vi_3_0", label: "Serie 1 — Box jumps × 8 (aterrizaje suave, bajar CAMINANDO)", type: "reps", reps: "8 reps" },
          { id: "vi_3_1", label: "Serie 1 — Sentadillas explosivas × 8 (bajar controlado, subir al máximo)", type: "reps", reps: "8 reps" },
          { id: "vi_3_2", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "vi_3_3", label: "Serie 2 — Box jumps × 8", type: "reps", reps: "8 reps" },
          { id: "vi_3_4", label: "Serie 2 — Sentadillas explosivas × 8", type: "reps", reps: "8 reps" },
          { id: "vi_3_5", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "vi_3_6", label: "Serie 3 — Box jumps × 8", type: "reps", reps: "8 reps" },
          { id: "vi_3_7", label: "Serie 3 — Sentadillas explosivas × 8", type: "reps", reps: "8 reps" },
          { id: "vi_3_8", label: "💤 Descanso", type: "rest", duration: 120 },
          { id: "vi_3_9", label: "Serie 4 — Box jumps × 8", type: "reps", reps: "8 reps" },
          { id: "vi_3_10", label: "Serie 4 — Sentadillas explosivas × 8", type: "reps", reps: "8 reps" },
        ],
        technique: "Box jump: saltar a un cajón de altura media, aterrizar suave con rodillas flexionadas, bajar CAMINANDO (no saltando hacia atrás). Sentadilla explosiva: bajar controlado, subir a máxima velocidad posible.",
        breathing: "Inhala al bajar en la sentadilla. Exhalación explosiva al saltar/subir.",
        errors: ["Cajón demasiado alto por ego: el riesgo de golpe en las espinillas no compensa.", "Sentadilla sin intención de velocidad: sin explosividad entrenas fuerza, no potencia.", "Aterrizar del box jump con impacto seco."],
        tips: ["Bajar del cajón caminando o con un paso: el salto hacia atrás es lesivo.", "La potencia de las piernas determina directamente la altura de la cadera en el vuelo del airflare."],
        alternatives: "Sin cajón: saltos verticales máximos + sentadillas explosivas en el suelo."
      },
      {
        name: "Push-up pliométrico en paralelas",
        block: "Explosivo",
        steps: [
          { id: "vi_4_0", label: "Serie 1 — 6 push-ups pliométricos (despegar las manos, amortiguar al caer)", type: "reps", reps: "6 reps" },
          { id: "vi_4_1", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "vi_4_2", label: "Serie 2", type: "reps", reps: "6 reps" },
          { id: "vi_4_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "vi_4_4", label: "Serie 3", type: "reps", reps: "6 reps" },
          { id: "vi_4_5", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "vi_4_6", label: "Serie 4 — última serie: ¿mantienen la explosividad?", type: "reps", reps: "6 reps" },
        ],
        technique: "En paralelas bajas o en el suelo: bajada controlada → empuje explosivo para que las manos se despeguen. Aterriza amortiguando SUAVE con codos flexionados. Este ejercicio entrena directamente el rebote elástico del catching arm.",
        breathing: "Inhala al bajar. Exhalación explosiva al empujar.",
        errors: ["Empujar sin despegar las manos: sin despegue real no es pliométrico.", "Aterrizar con codos rígidos: debes flexionarlos para absorber el impacto (mismo patrón del airflare).", "Más de 6 reps por serie: la potencia cae rápido con la fatiga."],
        tips: ["Este ejercicio entrena directamente la fase del rebote elástico del catching arm.", "Si dominas las paralelas: clap push-ups (flexiones con palmada) en el suelo."],
        alternatives: "Push-ups explosivos apoyando las rodillas para reducir la carga de empuje."
      },
      {
        name: "Dragon Flag excéntrico",
        block: "Explosivo",
        steps: [
          { id: "vi_5_0", label: "Serie 1 — 5 reps × 5s bajada excéntrica (cuerpo RECTO como tabla, sin doblar la cadera)", type: "reps", reps: "5 reps" },
          { id: "vi_5_1", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "vi_5_2", label: "Serie 2", type: "reps", reps: "5 reps" },
          { id: "vi_5_3", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "vi_5_4", label: "Serie 3", type: "reps", reps: "5 reps" },
          { id: "vi_5_5", label: "💤 Descanso", type: "rest", duration: 90 },
          { id: "vi_5_6", label: "Serie 4", type: "reps", reps: "5 reps" },
        ],
        technique: "Tumbado en un banco, agarrarse con las manos detrás de la cabeza. Elevar el cuerpo entero rígido como tabla hasta la vertical. Bajar LENTAMENTE en 5s manteniendo el cuerpo completamente recto. La rigidez del tronco evita que el cuerpo se doble en el aire durante la rotación del airflare.",
        breathing: "Inhala arriba. Exhala lento y controlado durante la bajada de 5s para mantener la presión intraabdominal.",
        errors: ["Doblar la cadera durante la bajada (cuerpo en 'V'): elimina el estímulo del core.", "Dejarse caer rápido: pierdes la fase excéntrica.", "Arquear la lumbar: el transverso y oblicuos han cedido. Reduce el rango de bajada."],
        tips: ["La rigidez del tronco evita que el cuerpo se doble en el aire durante la rotación del airflare, lo que causaría la caída de la cadera."],
        alternatives: "Tucked dragon flag (rodillas dobladas). O negative dragon flag (ayudándote a subir para solo hacer la bajada)."
      },
      {
        name: "Kettlebell Swing ruso",
        block: "Explosivo",
        steps: [
          { id: "vi_6_0", label: "Serie 1 — 12 swings (el movimiento nace del HIP HINGE, no de los brazos)", type: "reps", reps: "12 reps" },
          { id: "vi_6_1", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "vi_6_2", label: "Serie 2", type: "reps", reps: "12 reps" },
          { id: "vi_6_3", label: "💤 Descanso", type: "rest", duration: 60 },
          { id: "vi_6_4", label: "Serie 3", type: "reps", reps: "12 reps" },
        ],
        technique: "El movimiento nace del HIP HINGE (bisagra de cadera) explosivo: la cadera se dispara hacia adelante activando glúteos e isquiotibiales para lanzar la pesa al pecho. Los brazos SOLO GUÍAN la kettlebell. Espalda neutra. El 'snap' de cadera es transferible al latigazo de la pierna líder del airflare.",
        breathing: "Exhalación corta y potente en la extensión de cadera (el snap). Inhalación al bajar la pesa.",
        errors: ["Hacer una sentadilla en lugar de bisagra: si doblas en exceso las rodillas, trabajas cuádriceps en lugar de la cadena posterior.", "Levantar la pesa con la fuerza de los brazos.", "Curvar la espalda lumbar al descender."],
        tips: ["El 'snap' explosivo de cadera del swing es transferible directamente al latigazo de la pierna líder del airflare."],
        alternatives: "Swing con mancuerna (sujetada por un extremo) o disco. O hip thrust explosivo con barra."
      },
      {
        name: "Combo de baile libre — velocidad real",
        block: "Baile",
        steps: [
          { id: "vi_7_0", label: "Combo libre a velocidad real: toprock → footwork → power → freeze (integrar la semana)", type: "timer", duration: 1200 },
        ],
        technique: "Pon música y baila combos completos a velocidad real. Deja que el cuerpo se exprese integrando lo trabajado en la semana. Puedes incorporar windmills y, si la energía lo permite, algún airflare de paso (resérvate para el test de fatiga).",
        breathing: "Gestión de batalla: respiración sostenida durante el combo, recuperación nasal profunda entre ellos.",
        errors: ["Volver al modo de 'entrenamiento técnico' (parar a corregir detalles): hoy es un bloque de expresión y fluidez."],
        tips: ["Grábate y compara de Viernes a Viernes para analizar cómo la potencia física se integra en tu estilo de baile."],
        alternatives: "Si prefieres con estructura: prepara un combo fijo de 30s y practícalo para pulirlo."
      },
      {
        name: "Test de fatiga — 1-2 airflares al final",
        block: "Power test",
        steps: [
          { id: "vi_8_0", label: "Test 1 — 1 airflare bajo fatiga acumulada (¿aterrizaje silencioso?)", type: "reps", reps: "1 airflare → registrar: SILENCIOSO SÍ/NO" },
          { id: "vi_8_1", label: "💤 Recuperación", type: "rest", duration: 180 },
          { id: "vi_8_2", label: "Test 2 opcional — 1 airflare más (solo si el primero fue silencioso)", type: "reps", reps: "1 airflare opcional" },
          { id: "vi_8_3", label: "Registro semanal: 'Viernes cansado = Airflare silencioso (SÍ/NO)'", type: "reps", reps: "Anotar resultado para evolución mensual" },
        ],
        technique: "Con el cuerpo cansado al final de la semana, ejecuta solo 1 o 2 airflares buscando la máxima calidad. Es un TEST de control, no un entrenamiento de volumen.",
        breathing: "Inhala profundo antes de salir. Exhalación rítmica durante el giro.",
        errors: ["Convertir el test en una sesión de volumen (10 airflares): el objetivo es medir el control con 1-2 intentos.", "Frustrarse si salen mal: el cansancio altera el rendimiento. Es información del estado físico.", "Forzar el test si sientes dolor en muñecas o ingle."],
        tips: ["Si tu airflare se mantiene limpio y silencioso incluso cansado un Viernes: la técnica está totalmente consolidada.", "Si sale pesado: el plan funciona correctamente, hay más fatiga acumulada esta semana. Normal."],
        alternatives: "Si estás demasiado cansado o con molestias: salta el test sin culpa. El cuerpo ya completó el trabajo."
      },
      {
        name: "Vuelta a la calma — estiramientos y foam roller IT band",
        block: "Vuelta calma",
        steps: [
          { id: "vi_9_0", label: "Estiramiento global de cadera, espalda y hombros", type: "timer", duration: 480 },
          { id: "vi_9_1", label: "Foam roller — IT band lateral del muslo izquierdo (sin la rodilla)", type: "timer", duration: 120 },
          { id: "vi_9_2", label: "Foam roller — IT band lateral del muslo derecho", type: "timer", duration: 120 },
          { id: "vi_9_3", label: "Foam roller — aductor izquierdo (boca abajo)", type: "timer", duration: 60 },
          { id: "vi_9_4", label: "Foam roller — aductor derecho", type: "timer", duration: 60 },
          { id: "vi_9_5", label: "Flexión/extensión pasiva suave de muñecas (cierre de semana)", type: "timer", duration: 120 },
        ],
        technique: "Estiramiento completo de tren inferior (8 min). IT band: rodar lateral del muslo EVITANDO la rodilla. Aductor: boca abajo, la pierna a un lado. Muñecas: cierre de la semana articular.",
        breathing: "Respiración diafragmática 4-8, relajada.",
        errors: ["Estirar de forma brusca con los músculos cansados de toda la semana.", "Rodar la IT band con dolor extremo (9/10): presión moderada tolerable."],
        tips: ["La IT band (lateral del muslo) suele cargarse tras los box jumps. El foam roller previene el dolor lateral de rodilla en la semana siguiente."],
        alternatives: "Secuencia de yoga guiada de 10 min enfocada en el tren inferior."
      }
    ]
  },

  // ===== SABADO =================================================================
  "sabado": {
    title: "Sábado", subtitle: "Recuperación activa + movilidad",
    desc: "Día de recuperación activa — no de descanso pasivo. El movimiento suave ACELERA la recuperación. Movilidad, yoga y visualización. HOY NO se entrena fuerza, potencia ni airflares.",
    duration: "1h 00 min – 1h 15 min", system: "Regenerativo",
    nutrition: {
      pre: "Proteína distribuida (~33 g por comida, 4 comidas) para maximizar síntesis proteica. No elimines los carbohidratos. Alimentos antiinflamatorios: frutos rojos, cúrcuma, jengibre, vegetales de hoja verde.",
      intra: "Hidratación base: 35 ml/kg/día ≈ 2.9 L de agua.",
      post: "Comida equilibrada normal rica en nutrientes y antioxidantes.",
      dinner: "Comida rica en Omega-3 (salmón, sardinas o caballa) para aliviar la inflamación articular de muñecas e ingle."
    },
    exercises: [
      {
        name: "Protocolo de muñecas — RECUPERACIÓN (evaluar carga semanal)",
        block: "Movilidad",
        steps: [
          { id: "sa_0_0", label: "Evaluación: ¿rigidez de muñecas? Registra (1-10)", type: "reps", reps: "Test de rigidez (>7 → protocolo completo; <7 → versión suave)" },
          { id: "sa_0_1", label: "Círculos muy suaves — ambos sentidos (MODO RECUPERACIÓN: más lentos)", type: "timer", duration: 120 },
          { id: "sa_0_2", label: "Extensión pasiva muy lenta — izquierda (hold largo, estático)", type: "timer", duration: 90 },
          { id: "sa_0_3", label: "Extensión pasiva muy lenta — derecha", type: "timer", duration: 90 },
          { id: "sa_0_4", label: "Flexión pasiva sostenida — ambas manos", type: "timer", duration: 60 },
          { id: "sa_0_5", label: "Movilidad de dedos (suave, sin resistencia)", type: "reps", reps: "2 × 15 reps" },
          { id: "sa_0_6", label: "Compresión suave con pelota — palma izquierda", type: "timer", duration: 45 },
          { id: "sa_0_7", label: "Compresión suave con pelota — palma derecha", type: "timer", duration: 45 },
        ],
        technique: [
          "Evaluación inicial — registra rigidez de muñecas de 1 a 10. Si >7 → protocolo completo. Si <7 → versión muy suave.",
          "Círculos muy suaves — ambos sentidos, 2 min. Más lentos que en días de entrenamiento. Modo recuperación.",
          "Extensión pasiva muy lenta mano izquierda — hold largo y estático, sin forzar rango. 90 seg.",
          "Extensión pasiva muy lenta mano derecha — 90 seg.",
          "Flexión pasiva sostenida ambas manos — 60 seg. Sin rebotes.",
          "Movilidad de dedos — 2 × 15 reps suaves, sin resistencia.",
          "Compresión suave pelota palma izquierda — 45 seg. Presión mínima.",
          "Compresión suave pelota palma derecha — 45 seg."
        ],
        breathing: "Muy lenta y profunda. Enfoque regenerativo. Visualiza que la circulación aumenta en cada zona que mueves.",
        errors: ["Saltarse el protocolo por ser día de descanso: hoy es cuando evalúas la salud articular.", "Aplicar demasiada presión o forzar rangos: hoy es mantenimiento, no entrenamiento."],
        tips: ["Registra el nivel de rigidez (1-10). Si es alto, indica sobrecarga antes de que se convierta en lesión."],
        alternatives: "Si las muñecas están muy cargadas: solo movilidad pasiva muy suave y aplica hielo al final."
      },
      {
        name: "Protocolo de ingle — PASIVO + estiramientos profundos (GANANCIA de rango)",
        block: "Movilidad",
        steps: [
          { id: "sa_1_0", label: "Mariposa con peso pasivo (disco 5 kg sobre rodillas, sin empujar) — GANANCIA REAL", type: "timer", duration: 180 },
          { id: "sa_1_1", label: "Posición de rana en suelo (rodillas al máximo, espinillas paralelas)", type: "timer", duration: 180 },
          { id: "sa_1_2", label: "Straddle sentado con inclinación adelante (espalda recta)", type: "timer", duration: 180 },
          { id: "sa_1_3", label: "Figura-4 — lado izquierdo", type: "timer", duration: 90 },
          { id: "sa_1_4", label: "Figura-4 — lado derecho", type: "timer", duration: 90 },
          { id: "sa_1_5", label: "90/90 hold largo — izquierdo", type: "timer", duration: 90 },
          { id: "sa_1_6", label: "90/90 hold largo — derecho", type: "timer", duration: 90 },
        ],
        technique: "A diferencia de los días de entrenamiento donde solo CALIENTAS, hoy buscas GANANCIA DE RANGO con holds de 3 minutos. La elongación real ocurre a partir del minuto 2 de un estiramiento estático. El Sábado es el día ideal para ganar rango en el straddle.",
        breathing: "Respiración diafragmática 4-8. En estiramientos de 3 min: la elongación real ocurre a partir del minuto 2. Relájate en cada exhalación.",
        errors: ["Forzar el rango con rebotes: la flexibilidad de fondo se gana con holds sostenidos. El rebote irrita el músculo cansado.", "Tratarlo como un calentamiento rápido: mantén los tiempos completos."],
        tips: ["El Sábado es el día ideal para ganar rango en el straddle: no hay fatiga ni prisa para entrenar después."],
        alternatives: "Sustituye por una sesión guiada de yin yoga o stretching de 20-30 min."
      },
      {
        name: "Yoga / Movilidad — paloma, zancada baja y triángulo",
        block: "Movilidad",
        steps: [
          { id: "sa_2_0", label: "Paloma (pigeon pose) — pierna izquierda (abre glúteo profundo y rotadores)", type: "timer", duration: 120 },
          { id: "sa_2_1", label: "Paloma — pierna derecha", type: "timer", duration: 120 },
          { id: "sa_2_2", label: "Zancada baja (low lunge) — izquierda (psoas)", type: "timer", duration: 90 },
          { id: "sa_2_3", label: "Zancada baja — derecha", type: "timer", duration: 90 },
          { id: "sa_2_4", label: "Triángulo (trikonasana) — izquierdo (cadera y cadena lateral)", type: "timer", duration: 90 },
          { id: "sa_2_5", label: "Triángulo — derecho", type: "timer", duration: 90 },
          { id: "sa_2_6", label: "Gato-vaca entre posturas (transición de movilización espinal)", type: "timer", duration: 60 },
        ],
        technique: "Entra a cada postura en la exhalación. Respira profundo y profundiza al exhalar. La paloma es una de las posturas más valiosas para el bboy al liberar el piriforme que trabaja en el airflare.",
        breathing: "Entra en la exhalación, profundiza en cada exhalación subsiguiente.",
        errors: ["Forzar la paloma si hay dolor en la rodilla: ajusta el ángulo de la pierna delantera.", "Realizar las posturas con prisa: el yoga regenerativo necesita tiempo para hacer efecto."],
        tips: ["La paloma libera el piriforme que estabilizó la cadera durante los intentos de las 2 vueltas del Jueves.", "Pon música tranquila: el estado mental influye directamente en la flexibilidad."],
        alternatives: "Cualquier rutina de movilidad de cadera o 'yoga para breakers' de 20 min en YouTube."
      },
      {
        name: "Footwork muy suave — sin impacto",
        block: "Técnica",
        steps: [
          { id: "sa_3_0", label: "6-step al 40-50% de velocidad (foco en la limpieza, sin explosividad)", type: "timer", duration: 300 },
          { id: "sa_3_1", label: "CC suave (detectar asimetrías de cadera y apoyos)", type: "timer", duration: 300 },
        ],
        technique: "Footwork a muy baja intensidad buscando limpieza absoluta de los apoyos. Es un trabajo meditativo y de soltura. Sin saltos, sin giros, sin freezes. Aprovecha la baja velocidad para corregir pequeños vicios posturales.",
        breathing: "Natural, coordinando el ritmo suave del movimiento con el aire.",
        errors: ["Acelerar y convertirlo en cardio: hoy es recuperación activa.", "Incorporar freezes o power."],
        tips: ["La baja velocidad es ideal para limpiar la técnica de los pasos base y corregir vicios posturales imperceptibles a alta velocidad."],
        alternatives: "Si prefieres descanso del baile: paseo suave de 20 min."
      },
      {
        name: "Respiración y visualización del airflare perfecto",
        block: "Mental",
        steps: [
          { id: "sa_4_0", label: "Respiración diafragmática profunda (calmar el sistema nervioso)", type: "timer", duration: 120 },
          { id: "sa_4_1", label: "Visualización en 1ª persona: siente el empuje → apertura straddle → rebote silencioso → 2ª vuelta limpia", type: "timer", duration: 480 },
        ],
        technique: "Tumbado en posición cómoda. 2 min de respiración diafragmática. Luego 8 min de visualización en PRIMERA PERSONA y con máximo detalle sensorial. Siente cada fase del airflare perfecto: el empuje, la apertura de las piernas, el rebote silencioso del primer apoyo, el cambio rápido de manos y la segunda vuelta limpia.",
        breathing: "Respiración calmada y profunda. Facilita la creación de imágenes mentales nítidas.",
        errors: ["Visualizar el movimiento fallando: programa el patrón erróneo. Visualiza SIEMPRE el éxito.", "Visualizar desde fuera (como si te vieras en un video): DEBES sentir el movimiento en primera persona."],
        tips: ["La visualización del aterrizaje silencioso refuerza el control neuromuscular real sin desgaste físico.", "Dedica 5 min a esto en la cama las noches del Domingo y Miércoles antes de los días de power."],
        alternatives: "Si te cuesta visualizar: mira un video de airflare perfecto antes de cerrar los ojos e imita el movimiento mentalmente."
      },
      {
        name: "Crioterapia de muñecas — preparar el descanso del Domingo",
        block: "Recuperacion",
        steps: [
          { id: "sa_5_0", label: "Evaluación: ¿hay carga acumulada de la semana en las muñecas? (>5/10)", type: "reps", reps: "Si SÍ → crioterapia. Si NO → opcional" },
          { id: "sa_5_1", label: "Crioterapia: hielo con paño protector sobre muñecas", type: "timer", duration: 600 },
        ],
        technique: "Aplica hielo durante 10 min (con paño intermedio) o baño de agua fría. El fin de semana es la ventana de recuperación más larga; si las muñecas necesitan desinflamarse, este es el momento idóneo.",
        breathing: "Respiración profunda y controlada durante el frío.",
        errors: ["Hielo directo en la piel sin tela protectora: quemaduras.", "Crioterapia si no hay carga real: el frío innecesario reduce la adaptación natural al esfuerzo."],
        tips: ["La ventana de recuperación del fin de semana es la más larga. Aprovéchala para resetear las muñecas completamente."],
        alternatives: "Pack de gel frío. Si la carga es muy leve: descanso pasivo únicamente."
      }
    ]
  },

  // ===== DOMINGO =================================================================
  "domingo": {
    title: "Domingo", subtitle: "Descanso completo",
    desc: "DESCANSO REAL. El día que separa a los atletas que progresan de los que se lesionan. A 83 kg, el cuerpo necesita recuperación verdadera para adaptarse a la carga de la semana. Solo protocolo mínimo de 15 min. El resto del día: vivir, descansar y dormir.",
    duration: "15 min", system: "Recuperativo y descanso absoluto",
    nutrition: {
      pre: "Proteína alta y distribuida (~33 g por comida, 4 comidas). Menos carbohidratos que en días de entreno pero sin eliminarlos. Alimentos antiinflamatorios y completos.",
      intra: "Hidratación base: ~2.9 L de agua. Buena oportunidad para meal prep de la semana (pre y post-entreno del Lunes y Martes listos para no improvisar).",
      post: "Comida equilibrada y satisfactoria rica en nutrientes.",
      dinner: "Proteína de digestión lenta (caseína: requesón o yogur griego) antes de dormir → nutre la reparación muscular nocturna. Acuéstate temprano para iniciar el ciclo descansado."
    },
    exercises: [
      {
        name: "Movilidad pasiva de muñecas — muy suave",
        block: "Mantenimiento",
        steps: [
          { id: "do_0_0", label: "Círculos muy suaves de muñeca (sin esfuerzo, solo mantenimiento de flujo sanguíneo)", type: "timer", duration: 180 },
          { id: "do_0_1", label: "Extensión y flexión pasiva ligera — sin peso, sin forzar rangos", type: "timer", duration: 180 },
          { id: "do_0_2", label: "Movilidad suave de dedos (abriendo y cerrando despacio)", type: "timer", duration: 120 },
        ],
        technique: "Mantenimiento puro: que la articulación no se 'adormezca' durante el descanso, manteniendo el flujo sanguíneo que ayuda a reparar el tejido cargado durante la semana. Puede realizarse de forma relajada viendo una serie en el sofá.",
        breathing: "Lenta y relajada. Hoy todo es calma.",
        errors: ["Convertirlo en un protocolo de entrenamiento: es mantenimiento mínimo.", "Aplicar peso o resistencia: cero carga hoy."],
        tips: ["Hazlo viendo una serie o relajado en el sofá. No requiere foco ni esfuerzo: es casi un gesto automático de cuidado."],
        alternatives: "Si las muñecas están al 100% y se sienten perfectas: puedes omitirlo. Es opcional."
      },
      {
        name: "Estiramiento de ingle en mariposa — suave",
        block: "Mantenimiento",
        steps: [
          { id: "do_1_0", label: "Mariposa sentado — rodillas caen por GRAVEDAD (sin empujar, sin peso añadido)", type: "timer", duration: 300 },
        ],
        technique: "Mariposa sentado, suelta el cuerpo y deja que las rodillas caigan hacia los lados únicamente por la fuerza de la gravedad. No empujes con las manos. No añadas peso adicional. 5 minutos tranquilos respirando. Hoy NO buscas ganar rango (eso fue el Sábado): solo mantener la cadera suelta.",
        breathing: "Diafragmática y relajada. Combínala con respiraciones largas para inducir calma.",
        errors: ["Forzar o añadir peso: hoy es mantenimiento puro, no día de flexibilidad.", "Hacer la rutina completa de ingle: hoy solo la mariposa suave. El cuerpo descansa."],
        tips: ["Combínalo con la respiración diafragmática para un momento de calma adicional. Buen ritual de domingo por la noche antes de dormir."],
        alternatives: "Si prefieres descanso total: omítelo. Es completamente opcional."
      },
      {
        name: "Sueño reparador — 8-9 horas de calidad",
        block: "Sueno",
        steps: [
          { id: "do_2_0", label: "Horario regular: misma hora que entre semana (no romper el ritmo circadiano)", type: "reps", reps: "Acostarse antes de las 23:30h" },
          { id: "do_2_1", label: "Sin pantallas 60 min antes de dormir (la luz azul suprime la melatonina)", type: "reps", reps: "Apagar pantallas 60 min antes" },
          { id: "do_2_2", label: "Habitación a 18-19°C, oscura y silenciosa (facilita el sueño profundo)", type: "reps", reps: "Ajustar temperatura y oscuridad" },
          { id: "do_2_3", label: "Sin alcohol ni cafeína por la tarde-noche (fragmentan el sueño profundo)", type: "reps", reps: "Cortar cafeína a las 14:00h máximo" },
          { id: "do_2_4", label: "Cena con caseína (requesón, yogur griego) → nutre la reparación nocturna", type: "reps", reps: "Incluir caseína en la cena" },
          { id: "do_2_5", label: "OBJETIVO: 8-9 horas de sueño de calidad (hormona de crecimiento + memoria motora)", type: "reps", reps: "8-9 horas de sueño" },
        ],
        technique: "Para un atleta de 83 kg con esta carga de entrenamiento, 8-9h de sueño no son un lujo: son un requisito. Durante el sueño profundo se libera la hormona de crecimiento que repara músculo, tendón y cartílago. El sueño también consolida el aprendizaje motor del airflare: mejoras tu técnica mientras duermes.",
        breathing: "Nasal y calmada al acostarte. Respiración diafragmática si te cuesta conciliar el sueño.",
        errors: ["Dormir menos de 7h en días de alta carga: reduce la fuerza, ralentiza los reflejos y eleva el riesgo de lesión en los aterrizajes.", "Pantallas 60 min antes de dormir: la luz azul suprime la melatonina e impide el sueño profundo."],
        tips: ["La habitación fresca (18-19°C) facilita el sueño profundo reparador.", "La cena con caseína aporta aminoácidos constantes durante toda la noche para la síntesis de proteínas."],
        alternatives: "Si no puedes dormir 8-9h seguidas: prioriza la hora de inicio y añade una siesta de 20 min si es posible."
      }
    ]
  }
};

// =============================================================================
// ESTADO DE LA APLICACIÓN
// =============================================================================
let currentDayKey = "lunes";
let activeExerciseIndex = 0;
let activeStepIndex = -1; // -1 = ningún paso seleccionado

let timerInterval = null;
let timerSecondsLeft = 0;

let restTimerInterval = null;

// Completados: { "lunes": ["lu_0_0", "lu_0_2", ...], "martes": [...], ... }
let completedSteps = JSON.parse(localStorage.getItem('airflare_completed_steps_v2')) || {};

// Colapso de ejercicios: { "lunes_0": false, "lunes_1": true, ... } (true = colapsado)
let collapsedState = JSON.parse(localStorage.getItem('airflare_collapsed_v2')) || {};

// Notas por día: { "lunes": "texto libre...", "martes": "..." }
let dayNotes = JSON.parse(localStorage.getItem('airflare_notes_v1')) || {};

// Historial de sesiones guardadas: [{ id, date, time, dayKey, notes, stats... }, ...]
let sessionHistory = JSON.parse(localStorage.getItem('airflare_history_v1')) || [];

// =============================================================================
// INICIALIZACIÓN
// =============================================================================
window.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  setupTimerControls();
  setupAudioToggles();
  setupRipple();
  renderDay(currentDayKey);
  if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
});

// =============================================================================
// RIPPLE EFFECT — feedback táctil premium
// =============================================================================
function setupRipple() {
  document.addEventListener('pointerdown', (e) => {
    const target = e.target.closest('.btn-timer, .btn-rest, .exercise-group-header, .tab-btn');
    if (!target) return;
    const ripple = document.createElement('span');
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    ripple.style.cssText = `
      position:absolute; border-radius:50%; pointer-events:none; z-index:10;
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size/2}px;
      top:${e.clientY - rect.top - size/2}px;
      background:rgba(255,255,255,0.1);
      transform:scale(0); animation:rippleAnim 0.5s ease-out forwards;
    `;
    if (getComputedStyle(target).position === 'static') target.style.position = 'relative';
    target.style.overflow = 'hidden';
    target.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}

// =============================================================================
// NAVEGACIÓN POR DÍAS
// =============================================================================
function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const day = btn.getAttribute('data-day');
      if (!day || day === currentDayKey) return;
      currentDayKey = day;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      resetTimer();
      activeExerciseIndex = 0;
      activeStepIndex = -1;
      animateDayTransition(() => renderDay(day));
    });
  });
}

function animateDayTransition(callback) {
  const main = document.querySelector('.main-content');
  main.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
  main.style.opacity = '0';
  main.style.transform = 'translateY(10px)';
  setTimeout(() => {
    callback();
    main.style.opacity = '1';
    main.style.transform = 'translateY(0)';
    setTimeout(() => {
      main.style.transition = '';
      main.style.transform = '';
    }, 320);
  }, 180);
}

// =============================================================================
// RENDERIZADO DEL DÍA COMPLETO
// =============================================================================
function renderDay(dayKey) {
  const data = ROUTINE_DATA[dayKey];
  if (!data) return;

  // Inicializar estado de completados para este día
  if (!completedSteps[dayKey]) completedSteps[dayKey] = [];

  // Cabecera
  document.getElementById('day-title').innerText = data.title;
  document.getElementById('day-subtitle').innerText = data.subtitle;
  document.getElementById('day-desc').innerText = data.desc;
  document.getElementById('day-duration').innerText = data.duration;
  document.getElementById('day-system').innerText = data.system;

  // Nutrición
  document.getElementById('nut-pre').innerText = data.nutrition.pre;
  document.getElementById('nut-intra').innerText = data.nutrition.intra;
  document.getElementById('nut-post').innerText = data.nutrition.post;
  document.getElementById('nut-dinner').innerText = data.nutrition.dinner;

  // Cronograma
  renderTimeline(dayKey, data.exercises);

  // Seleccionar primer paso por defecto
  selectExerciseDetail(0);
  updateProgressBar(dayKey, data.exercises);
}

// =============================================================================
// RENDERIZADO DEL CRONOGRAMA (JERARQUÍA EJERCICIO → PASOS)
// =============================================================================
function getPhaseCategory(block) {
  if (['Calentamiento', 'Activación', 'Movilidad'].includes(block)) return 'CALENTAMIENTO';
  if (['Power', 'Power+', 'Fuerza', 'Baile', 'Mental', 'Power test', 'Técnica'].includes(block)) return 'ENTRENAMIENTO';
  return 'POST-ENTRENAMIENTO';
}

function renderTimeline(dayKey, exercises) {
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';

  let lastCategory = null;

  exercises.forEach((ex, exIdx) => {
    const category = getPhaseCategory(ex.block);
    if (category !== lastCategory) {
      lastCategory = category;
      const sep = document.createElement('div');
      sep.className = 'block-category-separator';
      const icons = { 'CALENTAMIENTO': '🔥', 'ENTRENAMIENTO': '💪', 'POST-ENTRENAMIENTO': '🌙' };
      sep.innerHTML = `<span class="block-cat-icon">${icons[category] || ''}</span><span>${category}</span>`;
      container.appendChild(sep);
    }
    const groupKey = `${dayKey}_${exIdx}`;
    const isCollapsed = collapsedState[groupKey] === true;
    const completedCount = ex.steps.filter(s => completedSteps[dayKey].includes(s.id)).length;
    const totalSteps = ex.steps.filter(s => s.type !== 'rest').length;

    // —— CABECERA DEL EJERCICIO ——
    const header = document.createElement('div');
    header.className = `exercise-group-header ${exIdx === activeExerciseIndex ? 'active-group' : ''}`;
    header.style.animationDelay = `${exIdx * 0.04}s`;
    header.style.animation = `fadeUp 0.35s cubic-bezier(0.16,1,0.3,1) ${exIdx * 0.04}s both`;
    header.innerHTML = `
      <div class="group-header-left">
        <span class="group-collapse-icon">${isCollapsed ? '▶' : '▼'}</span>
        <div class="group-header-info">
          <span class="exercise-block-badge ${getBlockClass(ex.block)}">${ex.block}</span>
          <span class="group-exercise-name">${ex.name}</span>
        </div>
      </div>
      <div class="group-header-right">
        <span class="group-step-count ${completedCount === totalSteps && totalSteps > 0 ? 'all-done' : ''}">${completedCount}/${totalSteps}</span>
      </div>
    `;
    header.addEventListener('click', () => toggleGroupCollapse(dayKey, exIdx, groupKey));
    container.appendChild(header);

    // —— CONTENEDOR DE PASOS ——
    const stepsContainer = document.createElement('div');
    stepsContainer.className = `steps-container ${isCollapsed ? 'collapsed' : ''}`;
    stepsContainer.id = `steps-${groupKey}`;

    ex.steps.forEach((step, stepIdx) => {
      const isCompleted = completedSteps[dayKey].includes(step.id);
      const isRestStep = step.type === 'rest';
      const isRepsStep = step.type === 'reps';
      const isTimerStep = step.type === 'timer';

      const stepRow = document.createElement('div');
      stepRow.className = `step-row ${isRestStep ? 'rest-step' : ''} ${isRepsStep ? 'reps-step' : ''} ${isCompleted ? 'step-completed' : ''} ${(exIdx === activeExerciseIndex && stepIdx === activeStepIndex) ? 'step-active' : ''}`;
      stepRow.setAttribute('data-ex', exIdx);
      stepRow.setAttribute('data-step', stepIdx);

      if (isRestStep) {
        stepRow.innerHTML = `
          <div class="step-row-left">
            <span class="rest-icon">💤</span>
            <span class="step-label-rest">${step.label || 'Descanso'}</span>
          </div>
          <div class="step-row-right">
            <span class="step-time-badge">${formatTime(step.duration)}</span>
            <button class="btn-step-timer rest-timer-btn" onclick="event.stopPropagation(); selectAndPlayStep(${exIdx}, ${stepIdx})">▶</button>
          </div>
        `;
        stepRow.addEventListener('click', () => selectStep(exIdx, stepIdx));
      } else {
        stepRow.innerHTML = `
          <div class="step-row-left">
            <label class="checkbox-container" onclick="event.stopPropagation();">
              <input type="checkbox" ${isCompleted ? 'checked' : ''} onchange="toggleStepCompleted('${dayKey}', '${step.id}', ${exIdx}, this)">
              <span class="checkmark"></span>
            </label>
            <span class="step-label">${step.label}</span>
          </div>
          <div class="step-row-right">
            ${isTimerStep ? `<span class="step-time-badge">${formatTime(step.duration)}</span>` : ''}
            ${isRepsStep ? `<span class="step-reps-badge">${step.reps}</span>` : ''}
            <button class="${isRepsStep ? 'btn-step-reps' : 'btn-step-timer'}" onclick="event.stopPropagation(); selectAndPlayStep(${exIdx}, ${stepIdx})">▶</button>
          </div>
        `;
        stepRow.addEventListener('click', () => selectStep(exIdx, stepIdx));
      }

      stepsContainer.appendChild(stepRow);
    });

    container.appendChild(stepsContainer);
  });

  updateProgressBar(dayKey, exercises);
}

// =============================================================================
// COLAPSAR / EXPANDIR GRUPO DE EJERCICIO
// =============================================================================
function toggleGroupCollapse(dayKey, exIdx, groupKey) {
  const stepsContainer = document.getElementById(`steps-${groupKey}`);
  const header = document.querySelectorAll('.exercise-group-header')[exIdx];
  const icon = header.querySelector('.group-collapse-icon');

  collapsedState[groupKey] = !collapsedState[groupKey];
  localStorage.setItem('airflare_collapsed_v2', JSON.stringify(collapsedState));

  if (collapsedState[groupKey]) {
    stepsContainer.classList.add('collapsed');
    icon.textContent = '▶';
  } else {
    stepsContainer.classList.remove('collapsed');
    icon.textContent = '▼';
    // Seleccionar el ejercicio como activo al expandir
    selectExerciseDetail(exIdx);
  }
}

// =============================================================================
// SELECCIONAR UN PASO (CARGAR EN EL TIMER)
// =============================================================================
function selectStep(exIdx, stepIdx) {
  const data = ROUTINE_DATA[currentDayKey];
  const ex = data.exercises[exIdx];
  const step = ex.steps[stepIdx];
  if (!step) return;

  activeExerciseIndex = exIdx;
  activeStepIndex = stepIdx;

  // Actualizar estilos activos
  document.querySelectorAll('.step-row').forEach(r => r.classList.remove('step-active'));
  document.querySelectorAll('.exercise-group-header').forEach((h, i) => {
    h.classList.toggle('active-group', i === exIdx);
  });

  // Encontrar la fila del paso
  const stepRows = document.querySelectorAll(`.step-row[data-ex="${exIdx}"][data-step="${stepIdx}"]`);
  stepRows.forEach(r => r.classList.add('step-active'));

  // Actualizar panel del temporizador
  document.getElementById('timer-ex-name').innerText = ex.name;
  document.getElementById('timer-ex-target').innerText = step.label;
  updateStepCounterBadge(exIdx, stepIdx);

  // Actualizar panel de detalles (técnica del ejercicio padre)
  updateDetailPanel(ex);

  // Solo actualizar el display si NO estamos en modo automático
  if (!autoMode && !autoPaused) {
    if (step.type === 'timer' || step.type === 'rest') {
      timerSecondsLeft = step.duration;
      stepTotalDuration = step.duration;
      showTimerUI(timerSecondsLeft);
    } else if (step.type === 'reps') {
      showRepsUI(step.reps);
    }
  }
}

// Seleccionar detalles del ejercicio (sin cargar paso específico)
function selectExerciseDetail(exIdx) {
  const data = ROUTINE_DATA[currentDayKey];
  const ex = data.exercises[exIdx];
  if (!ex) return;
  activeExerciseIndex = exIdx;
  activeStepIndex = -1;

  document.getElementById('timer-ex-name').innerText = ex.name;
  document.getElementById('timer-ex-target').innerText = 'Pulsa ▶ en un paso para iniciar la secuencia';
  document.getElementById('step-counter-badge').textContent = '';
  updateDetailPanel(ex);

  if (!autoMode && !autoPaused) {
    showIdleUI();
  }
}

// Seleccionar y reproducir directamente — inicia la secuencia auto
function selectAndPlayStep(exIdx, stepIdx) {
  startAutoFromStep(exIdx, stepIdx);
}

// Actualizar el badge "paso X / Y"
function updateStepCounterBadge(exIdx, stepIdx) {
  const ex = ROUTINE_DATA[currentDayKey].exercises[exIdx];
  if (!ex) return;
  const total = ex.steps.length;
  document.getElementById('step-counter-badge').textContent = `${stepIdx + 1} / ${total}`;
}

// =============================================================================
// ACTUALIZAR PANEL DE DETALLES TÉCNICOS
// =============================================================================
function updateDetailPanel(ex) {
  const techContainer = document.getElementById('detail-tech');
  if (Array.isArray(ex.technique)) {
    techContainer.innerHTML = ex.technique.map((item, i) => `
      <label class="tech-checklist-item">
        <input type="checkbox" class="tech-checkbox" id="tech-check-${i}">
        <span class="tech-checkmark"></span>
        <span class="tech-item-text">${item}</span>
      </label>
    `).join('');
  } else {
    techContainer.innerHTML = `<p>${ex.technique}</p>`;
  }
  document.getElementById('detail-breath').innerHTML = `<p>${ex.breathing}</p>`;

  const errorsList = document.getElementById('detail-errors');
  errorsList.innerHTML = '';
  ex.errors.forEach(err => {
    const li = document.createElement('li');
    li.innerText = err;
    errorsList.appendChild(li);
  });

  const tipsList = document.getElementById('detail-tips');
  tipsList.innerHTML = '';
  ex.tips.forEach(tip => {
    const li = document.createElement('li');
    li.innerText = tip;
    tipsList.appendChild(li);
  });

  document.getElementById('detail-alt').innerHTML = `<p>${ex.alternatives}</p>`;
}

// =============================================================================
// COMPLETAR UN PASO INDIVIDUAL
// =============================================================================
function toggleStepCompleted(dayKey, stepId, exIdx, checkbox) {
  if (!completedSteps[dayKey]) completedSteps[dayKey] = [];

  if (checkbox.checked) {
    if (!completedSteps[dayKey].includes(stepId)) {
      completedSteps[dayKey].push(stepId);
    }
    playBeep(600, 80);
  } else {
    completedSteps[dayKey] = completedSteps[dayKey].filter(id => id !== stepId);
  }

  localStorage.setItem('airflare_completed_steps_v2', JSON.stringify(completedSteps));

  // Actualizar estilo de la fila
  const stepRows = document.querySelectorAll(`.step-row[data-ex="${exIdx}"]`);
  stepRows.forEach(row => {
    const stepIdxAttr = parseInt(row.getAttribute('data-step'));
    const ex = ROUTINE_DATA[dayKey].exercises[exIdx];
    if (ex) {
      const step = ex.steps[stepIdxAttr];
      if (step && step.id === stepId) {
        row.classList.toggle('step-completed', checkbox.checked);
      }
    }
  });

  // Actualizar contador del ejercicio padre
  updateGroupCounter(dayKey, exIdx);

  // Actualizar barra de progreso global
  updateProgressBar(dayKey, ROUTINE_DATA[dayKey].exercises);
}

// Actualizar el contador "X/Y pasos" de la cabecera del ejercicio
function updateGroupCounter(dayKey, exIdx) {
  const ex = ROUTINE_DATA[dayKey].exercises[exIdx];
  if (!ex) return;
  const totalSteps = ex.steps.filter(s => s.type !== 'rest').length;
  const completedCount = ex.steps.filter(s => s.type !== 'rest' && completedSteps[dayKey].includes(s.id)).length;

  const headers = document.querySelectorAll('.exercise-group-header');
  if (headers[exIdx]) {
    const counter = headers[exIdx].querySelector('.group-step-count');
    if (counter) {
      counter.textContent = `${completedCount}/${totalSteps}`;
      counter.classList.toggle('all-done', completedCount === totalSteps && totalSteps > 0);
    }
  }
}

// =============================================================================
// BARRA DE PROGRESO GLOBAL DEL DÍA
// =============================================================================
function updateProgressBar(dayKey, exercises) {
  const allCheckableSteps = exercises.flatMap(ex => ex.steps.filter(s => s.type !== 'rest'));
  const total = allCheckableSteps.length;
  const completed = allCheckableSteps.filter(s => completedSteps[dayKey] && completedSteps[dayKey].includes(s.id)).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  document.getElementById('progress-bar').style.width = `${percentage}%`;
  document.getElementById('progress-text').innerText = `${percentage}% Completado (${completed}/${total} pasos)`;
}

// =============================================================================
// ESTADO DEL TIMER AUTOMÁTICO
// =============================================================================
let autoMode    = false;   // secuencia activa
let autoPaused  = false;   // secuencia pausada a mitad
let currentPhase = 'idle'; // 'idle'|'prep'|'go'|'step'|'rest'|'reps'|'transition'|'done'
let autoExIdx   = 0;
let autoStepIdx = 0;
let prepLeft    = 5;
let stepTotalDuration = 0;
let prepInterval      = null;
let transitionInterval = null;
let goTimeout         = null;
let advanceTimeout    = null;

// =============================================================================
// CONTROLES DEL TEMPORIZADOR AUTOMÁTICO
// =============================================================================
function setupTimerControls() {
  document.getElementById('btn-play').addEventListener('click', handlePlayBtn);
  document.getElementById('btn-reset').addEventListener('click', handleResetBtn);
  document.getElementById('btn-next').addEventListener('click', handleSkipBtn);
}

function handlePlayBtn() {
  if (!autoMode && !autoPaused) {
    const stepIdx = activeStepIndex >= 0 ? activeStepIndex : 0;
    startAutoFromStep(activeExerciseIndex, stepIdx);
  } else if (autoMode && !autoPaused) {
    pauseAuto();
  } else if (autoPaused) {
    resumeAuto();
  }
}

function handleResetBtn() {
  stopAuto();
}

function handleSkipBtn() {
  if (currentPhase === 'transition') {
    // Skip the rest of the transition → start the queued step immediately
    clearInterval(transitionInterval); transitionInterval = null;
    hideTransitionUI();
    autoMode = true; autoPaused = false;
    processAutoStep(autoExIdx, autoStepIdx);
    return;
  }
  if (autoMode || autoPaused) {
    stopCurrentIntervals();
    clearTimeout(goTimeout);
    clearTimeout(advanceTimeout);
    autoPaused = false;
    autoMode = true;
    autoAdvanceToNext(true);
  }
}

// =============================================================================
// INICIO DE SECUENCIA AUTOMÁTICA
// =============================================================================
function startAutoFromStep(exIdx, stepIdx) {
  stopCurrentIntervals();
  clearTimeout(goTimeout);
  clearTimeout(advanceTimeout);
  autoMode   = true;
  autoPaused = false;
  autoExIdx  = exIdx;
  autoStepIdx = stepIdx;
  setPlayBtn('pause');
  processAutoStep(exIdx, stepIdx);
}

function processAutoStep(exIdx, stepIdx) {
  const data = ROUTINE_DATA[currentDayKey];
  if (!data) return;
  const ex = data.exercises[exIdx];
  if (!ex || stepIdx >= ex.steps.length) { autoAdvanceToNext(false); return; }

  const step = ex.steps[stepIdx];
  autoExIdx  = exIdx;
  autoStepIdx = stepIdx;

  // Seleccionar fila visualmente
  selectStep(exIdx, stepIdx);

  // Expandir el grupo si está colapsado
  const groupKey = `${currentDayKey}_${exIdx}`;
  if (collapsedState[groupKey]) toggleGroupCollapse(currentDayKey, exIdx, groupKey);

  // Mostrar instrucción del paso
  showInstructionText(getStepInstruction(exIdx, stepIdx));

  if (step.type === 'timer') {
    runPrepThenStep(step.duration);
  } else if (step.type === 'rest') {
    runRestStep(step.duration);
  } else if (step.type === 'reps') {
    runRepsStep(step);
  }
}

// =============================================================================
// FASE PREP: 5 - 4 - 3 - 2 - 1 → GO!
// =============================================================================
function runPrepThenStep(duration) {
  currentPhase = 'prep';
  prepLeft = 5;
  stepTotalDuration = duration;
  timerSecondsLeft = duration;
  showPrepUI(prepLeft);
  showPhaseChip('PREPÁRATE', 'chip-prep');
  updateStepProgressBar(duration, duration);

  prepInterval = setInterval(() => {
    prepLeft--;
    if (prepLeft <= 0) {
      clearInterval(prepInterval); prepInterval = null;
      flashGoAndStartStep(duration);
    } else {
      showPrepUI(prepLeft);
      playTick();
    }
  }, 1000);
}

function flashGoAndStartStep(duration) {
  currentPhase = 'go';
  showGoFlash();
  playGoSound();
  goTimeout = setTimeout(() => { hideGoFlash(); runStepPhase(duration); }, 550);
}

// =============================================================================
// FASE STEP: cronómetro del ejercicio
// =============================================================================
function runStepPhase(duration) {
  currentPhase = 'step';
  timerSecondsLeft = duration;
  showTimerUI(timerSecondsLeft);
  showPhaseChip('EN CURSO', 'chip-active');
  updateStepProgressBar(duration, duration);

  timerInterval = setInterval(() => {
    timerSecondsLeft--;
    showTimerUI(timerSecondsLeft);
    updateStepProgressBar(timerSecondsLeft, stepTotalDuration);
    if (timerSecondsLeft <= 3 && timerSecondsLeft > 0) playLastSeconds();
    if (timerSecondsLeft <= 0) {
      clearInterval(timerInterval); timerInterval = null;
      onStepTimerComplete();
    }
  }, 1000);
}

function onStepTimerComplete() {
  playChangeSound();
  showPhaseChip('CAMBIO', 'chip-done');
  markCurrentStepDone();
  advanceTimeout = setTimeout(() => autoAdvanceToNext(false), 1100);
}

// =============================================================================
// FASE REST: descanso dentro de la secuencia
// =============================================================================
function runRestStep(duration) {
  currentPhase = 'rest';
  timerSecondsLeft = duration;
  stepTotalDuration = duration;
  showTimerUI(timerSecondsLeft);
  showPhaseChip('💤 DESCANSO', 'chip-rest');
  updateStepProgressBar(duration, duration);

  timerInterval = setInterval(() => {
    timerSecondsLeft--;
    showTimerUI(timerSecondsLeft);
    updateStepProgressBar(timerSecondsLeft, stepTotalDuration);
    if (timerSecondsLeft <= 3 && timerSecondsLeft > 0) playLastSeconds();
    if (timerSecondsLeft <= 0) {
      clearInterval(timerInterval); timerInterval = null;
      playChangeSound();
      showPhaseChip('FIN DESCANSO', 'chip-done');
      advanceTimeout = setTimeout(() => autoAdvanceToNext(false), 1100);
    }
  }, 1000);
}

// =============================================================================
// FASE REPS: el usuario confirma cuando termina
// =============================================================================
function runRepsStep(step) {
  currentPhase = 'reps';
  showRepsUI(step.reps);
  showPhaseChip('SERIES / REPS', 'chip-reps');
  showRepsDoneBtn(true);
}

function markRepsDoneAndAdvance() {
  markCurrentStepDone();
  showRepsDoneBtn(false);
  playChangeSound();
  showPhaseChip('COMPLETADO', 'chip-done');
  advanceTimeout = setTimeout(() => autoAdvanceToNext(false), 600);
}

// =============================================================================
// AVANZAR AL SIGUIENTE PASO
// =============================================================================
function autoAdvanceToNext(isSkip) {
  const data = ROUTINE_DATA[currentDayKey];
  const ex = data.exercises[autoExIdx];
  const nextStepIdx = autoStepIdx + 1;

  if (ex && nextStepIdx < ex.steps.length) {
    if (isSkip) {
      // Skip: go immediately without transition
      autoStepIdx = nextStepIdx;
      processAutoStep(autoExIdx, nextStepIdx);
    } else {
      // Normal advance: run transition first
      runTransitionPhase(autoExIdx, nextStepIdx);
    }
  } else {
    // Fin del ejercicio — no avanzamos automáticamente al siguiente grupo
    autoMode = false;
    currentPhase = 'done';
    showPhaseChip('✓ EJERCICIO COMPLETO', 'chip-done');
    playDoneSound();
    setPlayBtn('play');
    showRepsDoneBtn(false);
    updateStepProgressBar(0, 1);
    showInstructionArea(false);

    // Preseleccionar el siguiente ejercicio si existe
    if (autoExIdx + 1 < data.exercises.length) {
      const nextExIdx = autoExIdx + 1;
      setTimeout(() => {
        if (!autoMode) {
          selectExerciseDetail(nextExIdx);
          document.getElementById('timer-ex-target').innerText =
            'Pulsa ▶ en el primer paso para continuar con el siguiente ejercicio';
        }
      }, 1500);
    }
  }
}

// =============================================================================
// TRANSICIÓN ENTRE PASOS (cuenta regresiva + vista previa del siguiente)
// =============================================================================
function getStepInstruction(exIdx, stepIdx) {
  const ex = ROUTINE_DATA[currentDayKey]?.exercises[exIdx];
  if (!ex) return '';
  // Si technique es array, cada índice corresponde a un paso
  if (Array.isArray(ex.technique) && ex.technique[stepIdx]) return ex.technique[stepIdx];
  // Fallback: label del paso (ya es bastante descriptivo)
  return ex.steps[stepIdx]?.label || '';
}

function getTransitionDuration(fromExIdx, fromStepIdx, toExIdx, toStepIdx) {
  const data = ROUTINE_DATA[currentDayKey];
  const fromEx = data?.exercises[fromExIdx];
  const toEx   = data?.exercises[toExIdx];
  if (!toEx) return 5;

  const majorBlocks = ['Power', 'Power+', 'Fuerza', 'Baile', 'Mental', 'Power test'];

  // Cambio de bloque grande (ej. Calentamiento → Power): descanso largo
  if (fromEx && fromEx.block !== toEx.block) {
    if (majorBlocks.includes(toEx.block)) return 30;
    return 15;
  }
  // Diferente ejercicio, mismo bloque
  if (fromExIdx !== toExIdx) return 10;
  // Siguiente paso dentro del mismo ejercicio
  return 5;
}

function runTransitionPhase(nextExIdx, nextStepIdx) {
  const duration = getTransitionDuration(autoExIdx, autoStepIdx, nextExIdx, nextStepIdx);

  // Actualizar índices ANTES de la transición para que skip funcione
  autoExIdx   = nextExIdx;
  autoStepIdx = nextStepIdx;
  currentPhase = 'transition';

  const data    = ROUTINE_DATA[currentDayKey];
  const nextEx  = data?.exercises[nextExIdx];
  const nextInstruction = getStepInstruction(nextExIdx, nextStepIdx);

  let left = duration;
  showTransitionUI(nextInstruction, left);
  showPhaseChip(`TRANSICIÓN — ${duration}s`, 'chip-prep');
  updateStepProgressBar(duration, duration);

  transitionInterval = setInterval(() => {
    left--;
    updateStepProgressBar(left, duration);
    if (left <= 0) {
      clearInterval(transitionInterval); transitionInterval = null;
      hideTransitionUI();
      processAutoStep(nextExIdx, nextStepIdx);
    } else {
      document.getElementById('transition-number').textContent = left;
      if (left <= 3) playTick();
    }
  }, 1000);
}

// =============================================================================
// PAUSA / REANUDA / STOP
// =============================================================================
function pauseAuto() {
  stopCurrentIntervals();
  clearTimeout(goTimeout);
  clearTimeout(advanceTimeout);
  autoPaused = true;
  autoMode   = false;
  setPlayBtn('resume');
  showPhaseChip('⏸ PAUSADO', 'chip-paused');
}

function resumeAuto() {
  autoPaused = false;
  autoMode   = true;
  setPlayBtn('pause');

  switch (currentPhase) {
    case 'prep':       resumePrepPhase(); break;
    case 'step':       resumeStepPhase(); break;
    case 'rest':       resumeRestPhase(); break;
    case 'transition': processAutoStep(autoExIdx, autoStepIdx); break; // skip remaining transition
    case 'reps':
      showRepsDoneBtn(true);
      showPhaseChip('SERIES / REPS', 'chip-reps');
      break;
    default:
      processAutoStep(autoExIdx, autoStepIdx);
  }
}

function resumePrepPhase() {
  showPhaseChip('PREPÁRATE', 'chip-prep');
  showPrepUI(prepLeft);
  prepInterval = setInterval(() => {
    prepLeft--;
    if (prepLeft <= 0) {
      clearInterval(prepInterval); prepInterval = null;
      flashGoAndStartStep(stepTotalDuration);
    } else { showPrepUI(prepLeft); playTick(); }
  }, 1000);
}

function resumeStepPhase() {
  showPhaseChip('EN CURSO', 'chip-active');
  showTimerUI(timerSecondsLeft);
  timerInterval = setInterval(() => {
    timerSecondsLeft--;
    showTimerUI(timerSecondsLeft);
    updateStepProgressBar(timerSecondsLeft, stepTotalDuration);
    if (timerSecondsLeft <= 3 && timerSecondsLeft > 0) playLastSeconds();
    if (timerSecondsLeft <= 0) {
      clearInterval(timerInterval); timerInterval = null;
      onStepTimerComplete();
    }
  }, 1000);
}

function resumeRestPhase() {
  showPhaseChip('💤 DESCANSO', 'chip-rest');
  showTimerUI(timerSecondsLeft);
  timerInterval = setInterval(() => {
    timerSecondsLeft--;
    showTimerUI(timerSecondsLeft);
    updateStepProgressBar(timerSecondsLeft, stepTotalDuration);
    if (timerSecondsLeft <= 3 && timerSecondsLeft > 0) playLastSeconds();
    if (timerSecondsLeft <= 0) {
      clearInterval(timerInterval); timerInterval = null;
      playChangeSound();
      showPhaseChip('FIN DESCANSO', 'chip-done');
      advanceTimeout = setTimeout(() => autoAdvanceToNext(false), 1100);
    }
  }, 1000);
}

function stopAuto() {
  stopCurrentIntervals();
  clearTimeout(goTimeout);
  clearTimeout(advanceTimeout);
  autoMode    = false;
  autoPaused  = false;
  currentPhase = 'idle';
  prepLeft    = 5;

  setPlayBtn('play');
  showPhaseChip('', '');
  showRepsDoneBtn(false);
  hideTransitionUI();
  showInstructionArea(false);
  document.getElementById('step-progress-fill').style.width = '0%';

  const ex   = ROUTINE_DATA[currentDayKey].exercises[activeExerciseIndex];
  const step = ex && activeStepIndex >= 0 ? ex.steps[activeStepIndex] : null;
  if (step && (step.type === 'timer' || step.type === 'rest')) {
    timerSecondsLeft  = step.duration;
    stepTotalDuration = step.duration;
    showTimerUI(timerSecondsLeft);
  } else if (step && step.type === 'reps') {
    showRepsUI(step.reps);
  } else {
    showIdleUI();
  }
}

function stopCurrentIntervals() {
  clearInterval(prepInterval);
  clearInterval(timerInterval);
  clearInterval(restTimerInterval);
  clearInterval(transitionInterval);
  prepInterval = timerInterval = restTimerInterval = transitionInterval = null;
}

// =============================================================================
// MARCAR PASO COMO COMPLETADO
// =============================================================================
function markCurrentStepDone() {
  const ex   = ROUTINE_DATA[currentDayKey].exercises[autoExIdx];
  const step = ex && ex.steps[autoStepIdx];
  if (!step) return;
  const checkbox = document.querySelector(
    `.step-row[data-ex="${autoExIdx}"][data-step="${autoStepIdx}"] input[type="checkbox"]`
  );
  if (checkbox && !checkbox.checked) {
    checkbox.checked = true;
    toggleStepCompleted(currentDayKey, step.id, autoExIdx, checkbox);
  }
}

// =============================================================================
// ACTUALIZAR UI DEL TIMER
// =============================================================================
function showPrepUI(n) {
  document.getElementById('timer-countdown').style.display   = 'none';
  document.getElementById('go-flash').style.display          = 'none';
  document.getElementById('reps-info-display').style.display = 'none';
  document.getElementById('prep-wrap').style.display         = 'flex';
  const el = document.getElementById('prep-number');
  el.textContent = n;
  const cols = { 5:'#ff3b30', 4:'#ff6b00', 3:'#ff9500', 2:'#ffd60a', 1:'#30d158' };
  el.style.color = cols[n] || '#30d158';
}

function showGoFlash() {
  document.getElementById('prep-wrap').style.display         = 'none';
  document.getElementById('timer-countdown').style.display   = 'none';
  document.getElementById('reps-info-display').style.display = 'none';
  document.getElementById('go-flash').style.display          = 'flex';
}

function hideGoFlash() {
  document.getElementById('go-flash').style.display = 'none';
}

function showTimerUI(seconds) {
  document.getElementById('prep-wrap').style.display         = 'none';
  document.getElementById('go-flash').style.display          = 'none';
  document.getElementById('reps-info-display').style.display = 'none';
  document.getElementById('timer-countdown').style.display   = 'block';
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  document.getElementById('timer-countdown').textContent =
    `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function showRepsUI(repsText) {
  document.getElementById('prep-wrap').style.display         = 'none';
  document.getElementById('go-flash').style.display          = 'none';
  document.getElementById('timer-countdown').style.display   = 'none';
  const el = document.getElementById('reps-info-display');
  el.style.display = 'flex';
  if (repsText) el.textContent = repsText;
  document.getElementById('step-progress-fill').style.width  = '0%';
}

function showIdleUI() {
  document.getElementById('prep-wrap').style.display         = 'none';
  document.getElementById('go-flash').style.display          = 'none';
  document.getElementById('reps-info-display').style.display = 'none';
  document.getElementById('transition-wrap').style.display   = 'none';
  document.getElementById('timer-countdown').style.display   = 'block';
  document.getElementById('timer-countdown').textContent     = '--:--';
}

function showInstructionText(text) {
  const area = document.getElementById('timer-instruction-area');
  const el   = document.getElementById('timer-step-instruction');
  if (text) {
    el.textContent    = text;
    area.style.display = 'block';
  } else {
    area.style.display = 'none';
  }
}

function showInstructionArea(show) {
  document.getElementById('timer-instruction-area').style.display = show ? 'block' : 'none';
}

function showTransitionUI(nextInstruction, count) {
  document.getElementById('prep-wrap').style.display         = 'none';
  document.getElementById('go-flash').style.display          = 'none';
  document.getElementById('timer-countdown').style.display   = 'none';
  document.getElementById('reps-info-display').style.display = 'none';
  document.getElementById('timer-instruction-area').style.display = 'none';

  document.getElementById('transition-next-text').textContent = nextInstruction;
  document.getElementById('transition-number').textContent    = count;
  document.getElementById('transition-wrap').style.display   = 'flex';
}

function hideTransitionUI() {
  const el = document.getElementById('transition-wrap');
  if (el) el.style.display = 'none';
}

function showPhaseChip(text, cls) {
  const chip = document.getElementById('phase-chip');
  chip.textContent = text;
  chip.className   = `phase-chip${cls ? ' ' + cls : ''}`;
}

function showRepsDoneBtn(show) {
  document.getElementById('reps-done-section').style.display = show ? 'block' : 'none';
}

function setPlayBtn(state) {
  const btn = document.getElementById('btn-play');
  if (state === 'pause') {
    btn.innerHTML = '⏸ Pausar';
    btn.classList.add('running');
  } else if (state === 'resume') {
    btn.innerHTML = '▶ Reanudar';
    btn.classList.remove('running');
  } else {
    btn.innerHTML = '▶ Iniciar';
    btn.classList.remove('running');
  }
}

function updateStepProgressBar(left, total) {
  if (!total) return;
  const pct = Math.max(0, Math.min(100, (left / total) * 100));
  document.getElementById('step-progress-fill').style.width = `${pct}%`;
}

// =============================================================================
// DESCANSO RÁPIDO MANUAL (botones 90s / 2min / 3min)
// =============================================================================
function startRestTimer(seconds) {
  stopCurrentIntervals();
  clearTimeout(goTimeout);
  clearTimeout(advanceTimeout);
  if (autoMode) pauseAuto();

  document.querySelectorAll('.btn-rest').forEach(b => b.classList.remove('active-rest'));
  const btnId = seconds === 90 ? 'btn-rest-90' : seconds === 120 ? 'btn-rest-120' : seconds === 180 ? 'btn-rest-180' : null;
  if (btnId) document.getElementById(btnId)?.classList.add('active-rest');

  let left = seconds;
  stepTotalDuration = seconds;
  showPhaseChip('💤 DESCANSO RÁPIDO', 'chip-rest');
  showTimerUI(left);
  updateStepProgressBar(left, seconds);
  playBeep(440, 300);

  restTimerInterval = setInterval(() => {
    left--;
    showTimerUI(left);
    updateStepProgressBar(left, seconds);
    if (left <= 3 && left > 0) playLastSeconds();
    if (left <= 0) {
      clearInterval(restTimerInterval); restTimerInterval = null;
      document.querySelectorAll('.btn-rest').forEach(b => b.classList.remove('active-rest'));
      playChangeSound();
      showPhaseChip('FIN DESCANSO', 'chip-done');
      if (autoPaused) {
        document.getElementById('timer-ex-target').innerText =
          'Descanso terminado. Pulsa ▶ para reanudar la secuencia.';
      }
    }
  }, 1000);
}

// =============================================================================
// AUDIO — pitidos (sin voz)
// =============================================================================
function setupAudioToggles() {
  const soundToggle = document.getElementById('toggle-sound');
  const voiceToggle = document.getElementById('toggle-voice');
  soundToggle.addEventListener('change', () => localStorage.setItem('pref_sound', soundToggle.checked));
  voiceToggle.addEventListener('change', () => localStorage.setItem('pref_voice', voiceToggle.checked));
  if (localStorage.getItem('pref_sound') !== null) soundToggle.checked = localStorage.getItem('pref_sound') === 'true';
  if (localStorage.getItem('pref_voice') !== null) voiceToggle.checked = localStorage.getItem('pref_voice') === 'true';
}

function playBeep(frequency, durationMs) {
  if (!document.getElementById('toggle-sound').checked) return;
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = frequency;
    osc.type = 'sine';
    osc.start();
    gain.gain.setValueAtTime(0.45, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);
    setTimeout(() => { osc.stop(); ctx.close(); }, durationMs + 60);
  } catch (e) {}
}

function playTick()        { playBeep(360, 55); }
function playLastSeconds() { playBeep(750, 85); }

function playGoSound() {
  setTimeout(() => playBeep(440, 100), 0);
  setTimeout(() => playBeep(587, 100), 115);
  setTimeout(() => playBeep(880, 220), 230);
}

function playChangeSound() {
  setTimeout(() => playBeep(660, 200), 0);
  setTimeout(() => playBeep(880, 280), 230);
}

function playDoneSound() {
  setTimeout(() => playBeep(660, 130), 0);
  setTimeout(() => playBeep(660, 130), 170);
  setTimeout(() => playBeep(880, 400), 340);
}

// =============================================================================
// EXPORTAR / IMPORTAR / BORRAR DATOS
// =============================================================================
function openDataPanel() {
  const dayKey = currentDayKey;
  const dayData = ROUTINE_DATA[dayKey];

  // Estadísticas globales de la semana
  const allDays = Object.keys(ROUTINE_DATA);
  let totalSteps = 0, doneSteps = 0;
  allDays.forEach(d => {
    ROUTINE_DATA[d].exercises.forEach(ex => ex.steps.forEach(s => {
      if (s.type !== 'rest') {
        totalSteps++;
        if (completedSteps[d] && completedSteps[d].includes(s.id)) doneSteps++;
      }
    }));
  });
  const pct = totalSteps > 0 ? Math.round((doneSteps / totalSteps) * 100) : 0;

  document.getElementById('data-stats').innerHTML = `
    <div class="data-stat"><span class="data-stat-num">${doneSteps}</span><span class="data-stat-lbl">pasos hechos</span></div>
    <div class="data-stat"><span class="data-stat-num">${pct}%</span><span class="data-stat-lbl">semana</span></div>
    <div class="data-stat"><span class="data-stat-num">${sessionHistory.length}</span><span class="data-stat-lbl">sesiones</span></div>
  `;

  // Notas del día actual
  const labelEl = document.getElementById('notes-day-label');
  if (labelEl) labelEl.textContent = `Notas — ${dayData.title}`;
  const notesEl = document.getElementById('day-notes-input');
  if (notesEl) {
    notesEl.value = dayNotes[dayKey] || '';
    notesEl.placeholder = `¿Cómo fue el entrenamiento de ${dayData.title}? Sensaciones, PRs, ajustes...`;
  }

  document.getElementById('data-panel-overlay').style.display = 'block';
  document.getElementById('data-panel').style.display = 'flex';
}

function closeDataPanel() {
  document.getElementById('data-panel-overlay').style.display = 'none';
  document.getElementById('data-panel').style.display = 'none';
}

function exportData() {
  const payload = {
    version: 3,
    exportDate: new Date().toISOString(),
    app: 'Airflare Dashboard',
    completedSteps,
    collapsedState,
    notes: dayNotes,
    sessions: sessionHistory,
    preferences: {
      sound: document.getElementById('toggle-sound')?.checked ?? true,
      voice: document.getElementById('toggle-voice')?.checked ?? false
    }
  };
  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  a.href     = url;
  a.download = `airflare-backup-${date}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Backup exportado correctamente ✓');
}

function saveSession() {
  const dayKey = currentDayKey;
  const dayData = ROUTINE_DATA[dayKey];
  const completedIds = completedSteps[dayKey] || [];
  const notes = dayNotes[dayKey] || '';

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const timeStr = now.toTimeString().slice(0, 5);

  let timerSecDone = 0, timerSecTotal = 0;
  const exercisesDetail = dayData.exercises.map(ex => {
    const checkable = ex.steps.filter(s => s.type !== 'rest');
    const done = checkable.filter(s => completedIds.includes(s.id)).length;
    const timerDone = ex.steps
      .filter(s => s.type === 'timer' && completedIds.includes(s.id))
      .reduce((acc, s) => acc + s.duration, 0);
    const timerTotal = ex.steps
      .filter(s => s.type === 'timer')
      .reduce((acc, s) => acc + s.duration, 0);
    timerSecDone  += timerDone;
    timerSecTotal += timerTotal;
    return {
      name: ex.name,
      block: ex.block,
      stepsCompleted: done,
      stepsTotal: checkable.length,
      pct: checkable.length > 0 ? Math.round(done / checkable.length * 100) : 0,
      timerMin: Math.round(timerDone / 60),
      steps: ex.steps.map(s => ({
        label: s.label,
        type: s.type,
        ...(s.type === 'timer' && { duration: s.duration }),
        ...(s.type === 'reps'  && { reps: s.reps }),
        ...(s.type !== 'rest'  && { completed: completedIds.includes(s.id) })
      }))
    };
  });

  const allCheckable = dayData.exercises.flatMap(ex => ex.steps.filter(s => s.type !== 'rest'));
  const totalDone    = allCheckable.filter(s => completedIds.includes(s.id)).length;

  const session = {
    id: `${dateStr}_${dayKey}_${Date.now()}`,
    date: dateStr,
    time: timeStr,
    dayKey,
    dayTitle: dayData.title,
    daySubtitle: dayData.subtitle,
    notes,
    stats: {
      stepsCompleted: totalDone,
      stepsTotal: allCheckable.length,
      completionPct: allCheckable.length > 0 ? Math.round(totalDone / allCheckable.length * 100) : 0,
      timerMinDone: Math.round(timerSecDone / 60),
      timerMinTotal: Math.round(timerSecTotal / 60),
      exercises: exercisesDetail
    }
  };

  sessionHistory.push(session);
  try {
    localStorage.setItem('airflare_history_v1', JSON.stringify(sessionHistory));
    showToast(`Sesión de ${dayData.title} guardada ✓`);
  } catch (e) {
    sessionHistory.pop();
    showToast('Error: almacenamiento lleno. Exporta y borra el historial.', 'error');
    return;
  }
  openDataPanel();
}

function exportCSV() {
  if (sessionHistory.length === 0) {
    showToast('Guarda al menos una sesión primero', 'error');
    return;
  }

  const header = [
    'Fecha', 'Hora', 'Día', 'Tipo de Entrenamiento',
    '% Día Completo', 'Tiempo Cronómetro (min)',
    'Ejercicio', 'Bloque',
    'Pasos Hechos', 'Pasos Total', '% Ejercicio', 'Tiempo Ejercicio (min)',
    'Notas del Día'
  ];

  const rows = [header.map(escapeCSV).join(',')];

  sessionHistory.forEach(session => {
    const baseFields = [
      session.date,
      session.time,
      session.dayTitle,
      escapeCSV(session.daySubtitle || ''),
      session.stats.completionPct + '%',
      session.stats.timerMinDone
    ];
    session.stats.exercises.forEach(ex => {
      const row = [
        ...baseFields,
        escapeCSV(ex.name),
        escapeCSV(ex.block || ''),
        ex.stepsCompleted,
        ex.stepsTotal,
        ex.pct + '%',
        ex.timerMin,
        escapeCSV(session.notes || '')
      ];
      rows.push(row.join(','));
    });
  });

  // BOM UTF-8 para compatibilidad con Excel en Windows
  const csv  = '﻿' + rows.join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  a.href     = url;
  a.download = `airflare-historial-${date}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('CSV exportado — ábrelo en Excel o Sheets ✓');
}

function escapeCSV(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.completedSteps && !data.collapsedState && !data.sessions) throw new Error('Formato inválido');

      if (data.completedSteps) {
        completedSteps = data.completedSteps;
        localStorage.setItem('airflare_completed_steps_v2', JSON.stringify(completedSteps));
      }
      if (data.collapsedState) {
        collapsedState = data.collapsedState;
        localStorage.setItem('airflare_collapsed_v2', JSON.stringify(collapsedState));
      }
      if (data.notes) {
        dayNotes = data.notes;
        localStorage.setItem('airflare_notes_v1', JSON.stringify(dayNotes));
      }
      if (Array.isArray(data.sessions)) {
        sessionHistory = data.sessions;
        localStorage.setItem('airflare_history_v1', JSON.stringify(sessionHistory));
      }
      if (data.preferences) {
        if (data.preferences.sound !== undefined) {
          document.getElementById('toggle-sound').checked = data.preferences.sound;
          localStorage.setItem('pref_sound', data.preferences.sound);
        }
        if (data.preferences.voice !== undefined) {
          document.getElementById('toggle-voice').checked = data.preferences.voice;
          localStorage.setItem('pref_voice', data.preferences.voice);
        }
      }
      renderDay(currentDayKey);
      closeDataPanel();
      const sess = (data.sessions || []).length;
      showToast(`Importado correctamente${sess > 0 ? ` · ${sess} sesiones` : ''} ✓`);
    } catch (err) {
      showToast('Error: archivo inválido o corrupto', 'error');
    }
    document.getElementById('import-file-input').value = '';
  };
  reader.readAsText(file);
}

function confirmResetData() {
  if (!confirm('¿Borrar TODOS los datos de progreso, notas e historial? Esta acción no se puede deshacer.')) return;
  completedSteps  = {};
  collapsedState  = {};
  dayNotes        = {};
  sessionHistory  = [];
  localStorage.removeItem('airflare_completed_steps_v2');
  localStorage.removeItem('airflare_collapsed_v2');
  localStorage.removeItem('airflare_notes_v1');
  localStorage.removeItem('airflare_history_v1');
  renderDay(currentDayKey);
  closeDataPanel();
  showToast('Todos los datos borrados');
}

// =============================================================================
// TOAST — notificaciones breves
// =============================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-visible'));
  setTimeout(() => {
    toast.classList.remove('toast-visible');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// Inicializar panel de datos
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-export-open');
  if (btn) btn.addEventListener('click', openDataPanel);

  // Auto-guardar notas mientras el usuario escribe
  const notesInput = document.getElementById('day-notes-input');
  if (notesInput) {
    notesInput.addEventListener('input', () => {
      dayNotes[currentDayKey] = notesInput.value;
      try {
        localStorage.setItem('airflare_notes_v1', JSON.stringify(dayNotes));
      } catch (e) { /* cuota llena — nota queda en memoria hasta exportar */ }
    });
  }
});

// Compatibilidad — mantener para no romper referencias externas
function speakText() {}
function toggleTimer()  { handlePlayBtn(); }
function resetTimer()   { stopAuto(); }
function nextStep()     { handleSkipBtn(); }
function updateTimerDisplay() { showTimerUI(timerSecondsLeft); }

function formatTime(seconds) {
  if (!seconds) return '—';
  const minutes = Math.floor(seconds / 60);
  const leftSeconds = seconds % 60;
  if (minutes === 0) return `${leftSeconds}s`;
  if (leftSeconds === 0) return `${minutes} min`;
  return `${minutes}m ${leftSeconds}s`;
}

function getBlockClass(blockName) {
  const map = {
    'Calentamiento': 'block-calentamiento',
    'Activación': 'block-activacion',
    'Power': 'block-power',
    'Power+': 'block-power-plus',
    'Fuerza': 'block-fuerza',
    'Baile': 'block-baile',
    'Mental': 'block-mental',
    'Recuperacion': 'block-recuperacion',
    'Power test': 'block-powertest',
    'Sueño': 'block-sueno',
    'Sueno': 'block-sueno',
    'Vuelta calma': 'block-vueltacalma',
    'Mantenimiento': 'block-recuperacion',
    'Técnica': 'block-baile',
    'Movilidad': 'block-calentamiento',
  };
  return map[blockName] || 'block-calentamiento';
}
