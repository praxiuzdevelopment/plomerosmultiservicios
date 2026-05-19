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
    title: "Destape de tuberías y desagües",
    shortDescription:
      "Destape de cañerías sin romper en Cali. Eliminamos obstrucciones con sondas eléctricas, hidrojet y cámaras de inspección para restaurar el flujo normal del agua.",
    longDescription:
      "Nuestro servicio de destape de cañerías y desagües en Cali utiliza técnicas profesionales y equipos especializados para eliminar todo tipo de obstrucciones. Ya sea en cocinas, baños, lavamanos o cañerías principales, contamos con herramientas como sondas eléctricas, hidrojet y cámaras de inspección para identificar y resolver el problema de raíz. Realizamos el destape de cañerías sin romper paredes ni pisos, garantizando un trabajo limpio, rápido y con resultados duraderos para que tu sistema de drenaje funcione como nuevo.",
    icon: "pipe",
    category: "plomeria",
    image: "/Destape.jpg",
    imagePlaceholder: "técnico destapando tubería con equipo especializado",
  },
  {
    slug: "reparacion-fugas",
    title: "Reparación de fugas y goteras",
    shortDescription:
      "Detección de fugas con geófono ultrasónico en Cali. Localizamos filtraciones ocultas en paredes y pisos sin romper enchapados ni causar daños innecesarios.",
    longDescription:
      "Las fugas de agua pueden causar daños significativos en la estructura de tu hogar si no se atienden a tiempo. Nuestro equipo de plomeros profesionales cuenta con la experiencia y herramientas necesarias para detectar fugas visibles y ocultas en paredes, techos y pisos. Realizamos reparaciones precisas que garantizan la eliminación total de la fuga, protegiendo tu hogar de humedades, filtraciones y deterioro. Trabajamos con materiales de primera calidad para asegurar soluciones duraderas.",
    icon: "droplet",
    category: "plomeria",
    image: "/goteras.jpeg",
    imagePlaceholder: "plomero reparando fuga de agua en tubería",
  },
  {
    slug: "instalacion-griferia",
    title: "Instalación y cambio de griferías y sanitarios",
    shortDescription:
      "Instalación y cambio de griferías, lavamanos, sanitarios e inodoros en Cali. Arreglo de llaves goteando y renovación de baños con acabados profesionales.",
    longDescription:
      "¿Quieres renovar tu baño o cocina? Nuestro servicio de instalación y cambio de griferías y sanitarios cubre desde la selección del producto adecuado hasta la instalación profesional. Trabajamos con todas las marcas del mercado e instalamos lavamanos, sanitarios, duchas, grifos de cocina y accesorios de baño. Nos aseguramos de que cada instalación quede perfectamente sellada y funcional, con acabados impecables que le dan un toque moderno a tus espacios.",
    icon: "faucet",
    category: "plomeria",
    image: "/Bath_install.jpg",
    imagePlaceholder: "instalación de grifería moderna en baño",
  },
  {
    slug: "instalacion-lavadoras",
    title: "Instalación de lavadoras y calentadores",
    shortDescription:
      "Instalación de lavadoras y calentadores de agua en Cali. Conexión hidráulica completa con verificación de fugas y garantía en todos los trabajos.",
    longDescription:
      "La instalación correcta de lavadoras y calentadores de agua es fundamental para su buen funcionamiento y durabilidad. Nuestros técnicos realizan la conexión hidráulica completa, incluyendo las tomas de agua fría y caliente, desagüe y nivelación del equipo. Para calentadores, manejamos instalaciones de calentadores eléctricos y a gas, asegurándonos de cumplir con todas las normas de seguridad. Cada instalación incluye prueba de funcionamiento y verificación de que no existan fugas.",
    icon: "washer",
    category: "plomeria",
    image: "/heathers_install.jpg",
    imagePlaceholder: "técnico instalando calentador de agua",
  },
  {
    slug: "reparacion-tuberias",
    title: "Reparación y cambio de tuberías",
    shortDescription:
      "Reparación y cambio de tuberías dañadas u oxidadas en Cali. Diagnóstico completo del sistema hidráulico con soluciones en PVC, CPVC o cobre garantizadas.",
    longDescription:
      "Las tuberías deterioradas, oxidadas o dañadas pueden causar problemas graves como fugas, baja presión de agua y contaminación. Ofrecemos un servicio integral de reparación y cambio de tuberías que incluye diagnóstico completo del sistema hidráulico, retiro de tuberías viejas e instalación de nuevas tuberías en materiales modernos como PVC, CPVC o cobre según la necesidad. Nuestro trabajo garantiza un sistema de plomería seguro, eficiente y de larga duración.",
    icon: "wrench",
    category: "plomeria",
    image: "/wall_plumbing.jpg",
    imagePlaceholder: "cambio de tuberías en pared",
  },
  {
    slug: "inspeccion-tuberias-camara",
    title: "Cámara endoscópica para inspección de tuberías",
    shortDescription: "Inspección de tuberías con cámara endoscópica en Cali. Localizamos obstrucciones y roturas internas sin romper paredes ni hacer excavaciones.",
    longDescription: "Nuestra tecnología de cámara endoscópica nos permite visualizar el interior de las tuberías para localizar obstrucciones, roturas o raíces sin necesidad de realizar excavaciones o romper paredes. Es la solución ideal para un diagnóstico preciso y preventivo.",
    icon: "camera",
    category: "plomeria",
    image: "/Endoscopio.png",
    imagePlaceholder: "inspección de tuberías con cámara endoscópica",
  },
  {
    slug: "servicio-geofono",
    title: "Servicio de geófono",
    shortDescription: "Detección de fugas con geófono acústico en Cali. Tecnología ultrasónica no invasiva para encontrar pérdidas de agua ocultas sin demoliciones.",
    longDescription: "Utilizamos geófonos de última generación para detectar fugas de agua ocultas mediante ultrasonido. Esta técnica no invasiva nos permite encontrar el punto exacto de la filtración, ahorrando tiempo y evitando daños innecesarios en la estructura de su hogar.",
    icon: "search",
    category: "plomeria",
    image: "/geofono.png",
    imagePlaceholder: "técnico utilizando geófono para detectar fugas",
  },
];

export const electricalServices: Service[] = [
  {
    slug: "instalacion-tomacorrientes",
    title: "Instalación y cambio de tomacorrientes e interruptores",
    shortDescription:
      "Instalación de tomacorrientes e interruptores en Cali bajo norma RETIE. Puntos eléctricos nuevos y cambio de tomas dañadas con materiales certificados.",
    longDescription:
      "Los tomacorrientes e interruptores son elementos esenciales en cualquier hogar. Nuestro servicio incluye la instalación de nuevos puntos eléctricos, reemplazo de tomacorrientes dañados o anticuados, e instalación de interruptores modernos incluyendo reguladores de intensidad (dimmers). Trabajamos con materiales certificados y seguimos todas las normas eléctricas vigentes para garantizar la seguridad de tu hogar. También realizamos instalación de tomacorrientes GFCI para áreas húmedas como baños y cocinas.",
    icon: "outlet",
    category: "electricidad",
    image: "/switch.jpg",
    imagePlaceholder: "electricista instalando tomacorriente en pared",
  },
  {
    slug: "reparacion-cortos",
    title: "Reparación de cortos y fallas eléctricas",
    shortDescription:
      "Reparación urgente de cortocircuitos y fallas eléctricas en Cali. Diagnóstico con equipos de medición y solución de breakers que se caen o tomas recalentadas.",
    longDescription:
      "Los cortocircuitos y fallas eléctricas pueden ser peligrosos si no se atienden correctamente. Nuestro equipo de electricistas certificados realiza un diagnóstico completo de tu sistema eléctrico para identificar la causa raíz del problema. Reparamos cables dañados, conexiones sueltas, sobrecargas en circuitos y cualquier anomalía que pueda representar un riesgo. Utilizamos equipos de medición profesionales y garantizamos que tu instalación eléctrica quede segura y funcionando correctamente.",
    icon: "zap",
    category: "electricidad",
    image: "/burned.jpg",
    imagePlaceholder: "electricista diagnosticando falla eléctrica con multímetro",
  },
  {
    slug: "instalacion-lamparas",
    title: "Instalación de lámparas y ventiladores",
    shortDescription:
      "Instalación de lámparas LED, plafones y ventiladores de techo en Cali. Cableado seguro y montaje en todo tipo de techo con trabajo garantizado.",
    longDescription:
      "Dale un nuevo aire a tus espacios con nuestro servicio de instalación de lámparas y ventiladores de techo. Instalamos todo tipo de luminarias: lámparas colgantes, plafones, rieles de iluminación LED, lámparas de pared y ventiladores de techo con o sin luz integrada. Nos encargamos de todo el proceso, desde el cableado hasta el montaje seguro en cualquier tipo de techo. También asesoramos sobre la ubicación ideal y el tipo de iluminación más adecuado para cada espacio de tu hogar.",
    icon: "lightbulb",
    category: "electricidad",
    image: "/roof_lamp.JPG",
    imagePlaceholder: "instalación de lámpara colgante en sala",
  },
  {
    slug: "mantenimiento-tableros",
    title: "Mantenimiento de tableros eléctricos",
    shortDescription:
      "Mantenimiento y reparación de tableros eléctricos en Cali. Revisión de breakers, ajuste de conexiones, medición de voltajes y cambio de protecciones.",
    longDescription:
      "El tablero eléctrico es el corazón del sistema eléctrico de tu hogar. Nuestro servicio de mantenimiento incluye inspección completa de breakers, verificación de conexiones, medición de voltajes y amperajes, ajuste de terminales, limpieza de componentes y reemplazo de elementos deteriorados. Un tablero eléctrico bien mantenido previene cortocircuitos, sobrecargas y riesgos de incendio. Recomendamos realizar este mantenimiento al menos una vez al año para garantizar la seguridad de tu familia.",
    icon: "panel",
    category: "electricidad",
    image: "/electrical_panel.jpg",
    imagePlaceholder: "técnico revisando tablero eléctrico residencial",
  },
  {
    slug: "instalacion-cableado",
    title: "Instalación de cableado y duchas eléctricas",
    shortDescription:
      "Instalación de cableado eléctrico y duchas eléctricas en Cali. Tendido de cable certificado para nuevas construcciones y remodelaciones bajo norma RETIE.",
    longDescription:
      "Ofrecemos el servicio completo de instalación de cableado eléctrico para nuevas construcciones, remodelaciones o ampliaciones. Utilizamos cables certificados del calibre adecuado para cada circuito, asegurando una instalación segura y eficiente. También somos especialistas en la instalación de duchas eléctricas, un servicio que requiere conocimiento técnico específico para garantizar la seguridad del usuario. Cada instalación incluye pruebas de continuidad, aislamiento y funcionamiento para tu tranquilidad.",
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
