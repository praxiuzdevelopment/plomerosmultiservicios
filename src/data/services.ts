export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  category: "plomeria" | "electricidad";
  image: string;
  imagePlaceholder: string;
}

export const plumbingServices: Service[] = [
  {
    slug: "destape-tuberias",
    title: "Destape de Cañerías en Cali",
    shortDescription:
      "Destape de cañerías sin romper en Cali. Eliminamos obstrucciones con sondas eléctricas, hidrojet y cámaras de inspección para restaurar el flujo normal del agua.",
    longDescription:
      "Nuestro servicio de destape de cañerías en Cali utiliza técnicas profesionales y equipos especializados para eliminar todo tipo de obstrucciones en cañerías, desagües y alcantarillados. Ya sea en cocinas, baños, lavamanos o cañerías principales, nuestros plomeros en Cali cuentan con sondas eléctricas, hidrojet de alta presión y cámaras de inspección para identificar y resolver el problema de raíz. Realizamos el destape de cañerías sin romper paredes ni pisos, garantizando un trabajo limpio, rápido y con resultados duraderos. Atendemos hogares, conjuntos residenciales, restaurantes y empresas en Cali, Jamundí, Palmira y Yumbo.",
    icon: "pipe",
    category: "plomeria",
    image: "/Destape.jpg",
    imagePlaceholder: "técnico destapando cañería con equipo especializado",
  },
  {
    slug: "reparacion-fugas",
    title: "Detección de Fugas de Agua Potable",
    shortDescription:
      "Detección de fugas de agua potable con geófono ultrasónico en Cali. Localizamos filtraciones ocultas en paredes y pisos sin romper enchapados ni causar daños innecesarios.",
    longDescription:
      "Las fugas de agua potable pueden desperdiciar cientos de litros al día e incrementar drásticamente tu factura de EMCALI. Nuestros plomeros en Cali utilizan geófonos acústicos de alta precisión para detectar fugas de agua ocultas en tuberías internas, muros y bajo tierra sin necesidad de romper pisos ni enchapados. Reparamos fugas visibles y ocultas en paredes, techos y cañerías, protegiendo tu hogar de humedades, filtraciones y deterioro estructural. Trabajamos con materiales de primera calidad para garantizar soluciones duraderas en hogares y empresas de Cali y su área metropolitana.",
    icon: "droplet",
    category: "plomeria",
    image: "/goteras.jpeg",
    imagePlaceholder: "plomero detectando fuga de agua con geófono",
  },
  {
    slug: "instalacion-griferia",
    title: "Instalación de Grifería y Reparación de Sanitarios",
    shortDescription:
      "Instalación y cambio de griferías, lavamanos, sanitarios e inodoros en Cali. Arreglo de llaves goteando y renovación de baños con acabados profesionales.",
    longDescription:
      "¿Tienes llaves goteando o sanitarios dañados? Nuestros plomeros en Cali instalan y reemplazan griferías, lavamanos, sanitarios, duchas, inodoros y accesorios de baño con acabados impecables. La reparación de llaves goteando es urgente: una llave que gotea puede desperdiciar hasta 50 litros de agua potable al día. Trabajamos con todas las marcas del mercado e instalamos grifería de cocina, duchas de presión, sanitarios ahorradores y mezcladores. Cada trabajo incluye verificación de sellados y prueba de funcionamiento. Servicio de plomería en Cali, Jamundí y Palmira.",
    icon: "faucet",
    category: "plomeria",
    image: "/Bath_install.jpg",
    imagePlaceholder: "instalación de grifería moderna en baño",
  },
  {
    slug: "instalacion-lavadoras",
    title: "Instalación de Lavadoras y Calentadores de Agua",
    shortDescription:
      "Instalación de lavadoras y calentadores de agua en Cali. Conexión hidráulica completa con verificación de fugas y garantía en todos los trabajos.",
    longDescription:
      "La instalación correcta de lavadoras y calentadores de agua es fundamental para su buen funcionamiento y durabilidad. Nuestros plomeros en Cali realizan la conexión hidráulica completa, incluyendo las tomas de agua fría y caliente, desagüe y nivelación del equipo. Para calentadores, instalamos calentadores eléctricos y a gas cumpliendo todas las normas de seguridad. Cada instalación incluye prueba de funcionamiento y verificación de que no existan fugas en cañerías ni conexiones. Brindamos servicio de plomería a domicilio en Cali y el área metropolitana.",
    icon: "washer",
    category: "plomeria",
    image: "/heathers_install.jpg",
    imagePlaceholder: "técnico instalando calentador de agua",
  },
  {
    slug: "reparacion-tuberias",
    title: "Reparación de Cañerías y Tuberías en Cali",
    shortDescription:
      "Reparación y cambio de cañerías y tuberías dañadas u oxidadas en Cali. Diagnóstico completo del sistema hidráulico con soluciones en PVC, CPVC o cobre garantizadas.",
    longDescription:
      "Las cañerías y tuberías deterioradas, oxidadas o dañadas causan fugas de agua potable, baja presión hidráulica y contaminación. Nuestros plomeros en Cali ofrecen un servicio integral de reparación y cambio de cañerías que incluye diagnóstico completo del sistema hidráulico, retiro de tuberías viejas e instalación de cañerías nuevas en PVC, CPVC o cobre. Trabajamos en viviendas, conjuntos residenciales y locales comerciales en Cali, Jamundí, Palmira y Yumbo, garantizando un sistema de plomería seguro, eficiente y de larga duración.",
    icon: "wrench",
    category: "plomeria",
    image: "/wall_plumbing.jpg",
    imagePlaceholder: "cambio de cañerías en pared",
  },
  {
    slug: "inspeccion-tuberias-camara",
    title: "Inspección de Cañerías con Cámara Endoscópica",
    shortDescription:
      "Inspección de cañerías y tuberías con cámara endoscópica en Cali. Localizamos obstrucciones y roturas internas sin romper paredes ni hacer excavaciones.",
    longDescription:
      "Nuestra tecnología de cámara endoscópica permite visualizar el interior de cañerías y tuberías para localizar obstrucciones, roturas, raíces o incrustaciones sin necesidad de excavar ni romper paredes. Es la solución ideal para diagnósticos precisos antes de realizar reparaciones de plomería en Cali. Utilizamos cámaras de alta resolución que inspeccionan cañerías de diferentes diámetros, entregando un informe visual del estado interno de tu red hidráulica. Recomendado para propietarios de casas antiguas, conjuntos residenciales y empresas en Cali que necesitan conocer el estado real de sus cañerías antes de intervenir.",
    icon: "camera",
    category: "plomeria",
    image: "/Endoscopio.png",
    imagePlaceholder: "inspección de cañerías con cámara endoscópica",
  },
  {
    slug: "servicio-geofono",
    title: "Detección de Fugas con Geófono en Cali",
    shortDescription:
      "Detección de fugas con geófono acústico en Cali. Tecnología ultrasónica no invasiva para encontrar pérdidas de agua ocultas en cañerías sin demoliciones.",
    longDescription:
      "Utilizamos geófonos acústicos de última generación para detectar fugas de agua ocultas en cañerías mediante ultrasonido. Esta técnica no invasiva de detección de fugas permite encontrar el punto exacto de la filtración en muros, pisos y bajo tierra, ahorrando tiempo y evitando demoliciones innecesarias. La detección de fugas con geófono es especialmente recomendada para propietarios de viviendas en estratos 4, 5 y 6 en el sur y oeste de Cali, condominios campestres en Jamundí y hoteles o edificios comerciales donde romper pisos representaría costos elevados. Plomeros en Cali con tecnología de diagnóstico de precisión.",
    icon: "search",
    category: "plomeria",
    image: "/geofono.png",
    imagePlaceholder: "técnico utilizando geófono para detectar fugas en cañerías",
  },
];

export const electricalServices: Service[] = [
  {
    slug: "instalacion-tomacorrientes",
    title: "Instalación de Tomacorrientes e Interruptores",
    shortDescription:
      "Instalación de tomacorrientes e interruptores en Cali bajo norma RETIE. Puntos eléctricos nuevos y cambio de tomas dañadas con materiales certificados.",
    longDescription:
      "Los tomacorrientes e interruptores son elementos esenciales en cualquier hogar. Nuestros electricistas en Cali instalan nuevos puntos eléctricos, reemplazan tomacorrientes dañados o anticuados e instalan interruptores modernos incluyendo reguladores de intensidad (dimmers). Trabajamos bajo la norma RETIE con materiales certificados para garantizar la seguridad eléctrica de tu hogar. También instalamos tomacorrientes GFCI para áreas húmedas como baños y cocinas. Electricista a domicilio en Cali, Yumbo y Palmira con cotización gratis.",
    icon: "outlet",
    category: "electricidad",
    image: "/switch.jpg",
    imagePlaceholder: "electricista instalando tomacorriente en pared",
  },
  {
    slug: "reparacion-cortos",
    title: "Reparación de Cortocircuitos en Cali",
    shortDescription:
      "Reparación urgente de cortocircuitos y fallas eléctricas en Cali. Diagnóstico con equipos de medición y solución de breakers que se caen o tomas recalentadas.",
    longDescription:
      "Un cortocircuito en casa es una emergencia eléctrica que puede causar incendios si no se atiende de inmediato. Nuestros electricistas en Cali realizan diagnóstico completo del sistema eléctrico para identificar la causa raíz del cortocircuito. Reparamos cables dañados, conexiones sueltas, sobrecargas en circuitos, breakers que se disparan y tomacorrientes o interruptores calientes al tacto. Si tienes olor a plástico quemado, pérdida total de energía o parpadeo de luces, llámanos de inmediato. Electricista urgente a domicilio en Cali, Palmira y área metropolitana.",
    icon: "zap",
    category: "electricidad",
    image: "/burned.jpg",
    imagePlaceholder: "electricista diagnosticando cortocircuito con multímetro",
  },
  {
    slug: "instalacion-lamparas",
    title: "Instalación de Lámparas y Ventiladores de Techo",
    shortDescription:
      "Instalación de lámparas LED, plafones y ventiladores de techo en Cali. Cableado seguro y montaje en todo tipo de techo con trabajo garantizado.",
    longDescription:
      "Dale un nuevo aire a tus espacios con nuestro servicio de instalación de lámparas y ventiladores de techo en Cali. Instalamos lámparas colgantes, plafones, rieles de iluminación LED, lámparas de pared y ventiladores de techo con o sin luz integrada bajo la norma RETILAP para proyectos comerciales. Nuestros electricistas en Cali se encargan de todo el proceso, desde el cableado hasta el montaje seguro en cualquier tipo de techo o losa. Asesoramos sobre la ubicación ideal y el tipo de iluminación más eficiente para cada espacio de tu hogar o negocio.",
    icon: "lightbulb",
    category: "electricidad",
    image: "/roof_lamp.JPG",
    imagePlaceholder: "instalación de lámpara colgante en sala",
  },
  {
    slug: "mantenimiento-tableros",
    title: "Mantenimiento de Tableros Eléctricos y Breakers",
    shortDescription:
      "Mantenimiento y reparación de tableros eléctricos y breakers en Cali. Revisión de conexiones, medición de voltajes y cambio de protecciones.",
    longDescription:
      "El tablero eléctrico es el corazón del sistema eléctrico de tu hogar o empresa. La reparación de tableros eléctricos y el cambio de breakers en Cali son servicios críticos para prevenir cortocircuitos, sobrecargas e incendios. Nuestros electricistas certificados realizan inspección completa de breakers, verificación de conexiones, medición de voltajes y amperajes, ajuste de terminales, balanceo de cargas y reemplazo de protecciones deterioradas. Si tus breakers se disparan con frecuencia o el tablero eléctrico emite calor, contáctanos. Recomendamos mantenimiento preventivo anual para hogares y empresas en Cali, Palmira y Yumbo.",
    icon: "panel",
    category: "electricidad",
    image: "/electrical_panel.jpg",
    imagePlaceholder: "técnico revisando tablero eléctrico y breakers",
  },
  {
    slug: "instalacion-cableado",
    title: "Instalación de Cableado Eléctrico y Duchas",
    shortDescription:
      "Instalación de cableado eléctrico y duchas eléctricas en Cali. Tendido de cable certificado para nuevas construcciones y remodelaciones bajo norma RETIE.",
    longDescription:
      "Ofrecemos el servicio completo de instalación de cableado eléctrico en Cali para nuevas construcciones, remodelaciones o ampliaciones residenciales y comerciales. Utilizamos cables certificados del calibre adecuado para cada circuito bajo la norma RETIE y NTC 2050, asegurando una instalación eléctrica segura y eficiente. También somos especialistas en la instalación de duchas eléctricas, servicio que requiere conocimiento técnico específico para garantizar la seguridad del usuario. Cada instalación incluye pruebas de continuidad, aislamiento y funcionamiento. Electricistas certificados en Cali, Palmira y Yumbo.",
    icon: "cable",
    category: "electricidad",
    image: "/duct_wiring.jpg",
    imagePlaceholder: "instalación de cableado eléctrico en ducto",
  },
];

export const allServices: Service[] = [...plumbingServices, ...electricalServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}
