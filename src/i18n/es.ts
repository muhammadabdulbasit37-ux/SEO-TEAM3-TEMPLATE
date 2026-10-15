import type { Translations } from './types';

export const es: Omit<Translations, 'pageSeo'> = {
  "site": {
    "name": "DotaCheats",
    "domain": "{siteDomain}",
    "title": "Trucos y hacks de Dota | Scripts de Dota 2, map hack y ESP",
    "description": "Trucos de Dota 2 no detectados con scripts, map hack, zoom hack y skin changer para PC clasificados; actualizados con cada parche en {siteDomain}."
  },
  "nav": [
    {
      "id": "products",
      "href": "/product/",
      "label": "Producto",
      "shortLabel": "Producto"
    },
    {
      "id": "hwidSpoofer",
      "href": "/hwid-spoofer/",
      "label": "HWID Spoofer",
      "shortLabel": "HWID"
    },
    {
      "id": "blog",
      "href": "/blog/",
      "label": "Blog"
    },
    {
      "id": "forum",
      "href": "/forum/",
      "label": "Foro"
    },
    {
      "id": "faq",
      "href": "/faq/",
      "label": "Preguntas frecuentes",
      "shortLabel": "FAQ"
    },
    {
      "id": "support",
      "href": "/support/",
      "label": "Apoyo"
    }
  ],
  "hero": {
    "status": "Dota 2: build del parche en línea",
    "eyebrow": "Proveedor de cheats #1",
    "titleLine1": "Dota 2",
    "titleLine2": "Trucos y hacks",
    "subtitle": "Trucos de Dota con scripts, map hack, zoom hack y skin changer para PC clasificados en Steam: se actualizaron todos los parches con configuraciones preestablecidas y soporte en {siteDomain}.",
    "ctaPrimary": "Ver productos",
    "modesLabel": "Modos de Dota 2",
    "modes": [
      "Clasificado",
      "Turbo",
      "All Pick",
      "Captain's Mode"
    ],
    "metrics": [
      {
        "label": "Transmisión segura",
        "strong": "Sí"
      },
      {
        "label": "Velocidad del parche",
        "strong": "<24h"
      },
      {
        "label": "Usuarios",
        "strong": "300+"
      },
      {
        "label": "Soporte en vivo",
        "strong": "24/7"
      }
    ],
    "statusPills": [
      "ESP activo",
      "Radar en línea",
      "Build de temporada",
      "Indetectado",
      "Soft aim listo",
      "Sin retroceso",
      "A prueba de stream",
      "ESP de botín",
      "ESP de esqueleto",
      "Radar UAV",
      "Map hack",
      "Soporte 24/7",
      "Entrega instantánea",
      "Seguro en ranked",
      "Trigger bot",
      "Selección de huesos",
      "Estado en vivo",
      "Actualizaciones automáticas"
    ]
  },
  "features": {
    "eyebrow": "Características",
    "title": "Todo lo que necesitas en un solo paquete",
    "subtitle": "Scripts, control de mapas y herramientas de utilidad para Dota 2, mantenidos en cada parche.",
    "items": [
      {
        "title": "Scripts",
        "subtitle": "Combo. Cast. Victoria.",
        "desc": "Motor de script completo para clasificaciones y Turbo, optimizado para Invoker, Lion, PA y docenas de héroes explosivos.",
        "bullets": [
          "Cadenas de combo automático para núcleos Invoker, Lion, PA y burst",
          "Orbwalker y asistencia de último golpe para carries",
          "Smart Cast con controles deslizantes de retardo humanizados",
          "Módulos de predicción para tiros de habilidad y parpadeos.",
          "Ajustes preestablecidos del portal por héroe, rol y modo de juego."
        ],
        "tags": [
          "scripts de dota 2",
          "auto combo",
          "smart cast"
        ],
        "bento": "sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1"
      },
      {
        "title": "Map hack / ESP",
        "subtitle": "Ve los ganks antes de que lleguen.",
        "desc": "Ventaja de visión sin adivinar: ESP permanece legible en peleas en equipo y cuando varios héroes se sumergen en tu carril.",
        "bullets": [
          "Cajas de héroe, barras de HP y lecturas de tiempo de reutilización.",
          "Localizador de wards y sentries con alcance",
          "Alertas de humo, TP y enemigos desaparecidos"
        ],
        "tags": [
          "map hack de dota 2",
          "dota 2 esp",
          "ward esp"
        ],
        "bento": "sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2"
      },
      {
        "title": "Minimapa y runas",
        "subtitle": "Control del mapa sin wards.",
        "desc": "Temporizadores y minimapas superpuestos para que puedas rotar según la recompensa, las runas de poder y el tiempo de las olas, sin tener que hacer conjeturas.",
        "bullets": [
          "Cuenta regresiva de runas de poder y recompensas",
          "Enemigo visto por última vez en el hack del minimapa",
          "Recordatorios de pila de campamento en la jungla"
        ],
        "tags": [
          "minimap hack",
          "temporizador de runas",
          "conocimiento del mapa"
        ],
        "bento": "sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3"
      },
      {
        "title": "Auto Combo",
        "subtitle": "Acierta combos como un pro.",
        "desc": "Ráfagas de una tecla con valores predeterminados sensatos para las clasificatorias: ajusta los tiempos a medida que te sientas cómodo.",
        "bullets": [
          "Selector de objetivos para disparo de enfoque",
          "Activator para BKB, Hex y Orchid",
          "Cadenas combinadas por héroe en el portal"
        ],
        "tags": [
          "auto combo",
          "activadora",
          "selector de objetivos"
        ],
        "bento": "sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3"
      },
      {
        "title": "Suite de utilidades",
        "subtitle": "Herramientas extra para los momentos clave.",
        "desc": "Skin Changer, Kill Steal, Auto Dagon y más, más allá de scripts sin formato y map hack.",
        "bullets": [
          "Skin Changer: vista previa de arcanos e inmortales localmente",
          "Auto Kill Steal: acaba con los enemigos con pocos HP en el momento perfecto.",
          "Auto Dagon: Activación de objeto letal al final del combo",
          "Stream Proof: ocultar superposiciones de la captura de OBS"
        ],
        "tags": [
          "skin changer",
          "kill steal",
          "stream proof"
        ],
        "bento": "sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4"
      },
      {
        "title": "Auto Farm Bot",
        "subtitle": "Farmeo eficiente. Sin tilt.",
        "desc": "Recupere el valor neto cuando los carriles vayan mal: la automatización permanece humanizada para evitar rutas obvias de bots.",
        "bullets": [
          "Last hit y deny en lane bajo la torre",
          "Rutas por la jungla con sincronización de campamentos",
          "Retirada segura cuando los héroes enemigos aparecen en ESP",
          "Presets de farm para Turbo"
        ],
        "tags": [
          "auto farm",
          "robot de último golpe",
          "pila de la selva"
        ],
        "bento": "sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4"
      },
      {
        "title": "Stream Proof",
        "subtitle": "Los creadores se quedan seguros.",
        "desc": "Mantenga superposiciones en su monitor mientras el software de captura registra una transmisión limpia del juego.",
        "bullets": [
          "Modos seguros de OBS y Game Bar",
          "Activa stream proof por módulo",
          "Lista de verificación de prueba en documentos del portal"
        ],
        "tags": [
          "Obs segura",
          "stream proof",
          "capturar ocultar"
        ],
        "bento": "sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6"
      },
      {
        "title": "Zoom hack",
        "subtitle": "Ver más de la pelea.",
        "desc": "Retire la cámara para conocer el mapa sin perder la precisión del último golpe en el carril.",
        "bullets": [
          "Límites de distancia por modo de juego",
          "Restablecimiento rápido al FOV predeterminado",
          "Se empareja con el minimapa ESP"
        ],
        "tags": [
          "zoom hack",
          "cámara",
          "visión"
        ],
        "bento": "sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6"
      },
      {
        "title": "Configuración y actualizaciones de la nube",
        "subtitle": "Listo para el día del parche.",
        "desc": "Los mismos ajustes preestablecidos en todas las PC: las actualizaciones del portal rastrean los días de parches de Dota 2 y VAC.",
        "bullets": [
          "Copia de seguridad en la nube para perfiles deslizantes",
          "Empuje del cargador a pocas horas de los parches",
          "Discord #status para notas de compilación"
        ],
        "tags": [
          "sincronización en la nube",
          "actualización automática",
          "preajustes"
        ],
        "bento": "sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2"
      }
    ]
  },
  "whyUs": {
    "eyebrow": "Por qué nosotros",
    "title": "Herramientas clasificadas respaldadas por parches, no promesas",
    "subtitle": "La mayoría de las tiendas de trucos de Dota 2 ofrecen cargadores obsoletos, automatización obvia y bots de tickets. Creamos {siteDomain} en torno a la entrega en el día del parche, scripts humanizados y operadores en vivo.",
    "usLabel": "DotaCheats",
    "otherLabel": "Proveedor típico",
    "rows": [
      {
        "title": "Actualizaciones del cargador del día del parche",
        "desc": "Las compilaciones compatibles con VAC se lanzaron a las pocas horas de las actualizaciones de Dota 2; verifique el estado # de Discord antes de hacer cola en la clasificación."
      },
      {
        "title": "Scripts humanizados y retrasos",
        "desc": "La configuración de retardo, el selector de objetivos y los valores predeterminados conservadores imitan el tiempo de MMR alto, no ráfagas instantáneas de bots que inundan los informes."
      },
      {
        "title": "Operadores de Discord en vivo",
        "desc": "Ingenieros reales para la configuración del cargador, configuraciones de héroe y restablecimientos de HWID: cobertura de turnos las 24 horas, los 7 días de la semana, sin copiar y pegar tickets de preguntas frecuentes."
      },
      {
        "title": "Cargador externo + stream proof",
        "desc": "Suite de superposición con modos seguros para OBS: sin inyección de DLL riesgosa en el proceso de Dota 2, como todavía venden los proveedores heredados."
      },
      {
        "title": "Sincronización preestablecida en la nube",
        "desc": "Copia de seguridad de los perfiles clasificados, Turbo y por héroe en el portal: los mismos controles deslizantes en cualquier PC sin necesidad de reconstruir desde cero."
      },
      {
        "title": "Restablecimiento de HWID y movimientos de licencia",
        "desc": "Las compensaciones de HWID y las transferencias de máquinas se manejan a través de operaciones de Discord: la mayoría de los proveedores bloquean una plataforma o cobran por cada intercambio."
      }
    ],
    "metrics": [
      {
        "value": "<24h",
        "title": "Cambio de parche",
        "desc": "Tiempo promedio para enviar una construcción de cargador después de cambios importantes en Dota 2 o VAC."
      },
      {
        "value": "24/7",
        "title": "Soporte del operador",
        "desc": "Ingenieros de Discord en turno para la instalación, las configuraciones y los problemas de la cuenta."
      },
      {
        "value": "300+",
        "title": "Operadores activos",
        "desc": "Jugadores de Steam en PC que usan scripts, map hack y utilidades en {siteDomain}."
      }
    ]
  },
  "setup": {
    "eyebrow": "Guía de configuración",
    "titleLead": "Del pago a la cola clasificada en solo",
    "titleHighlight": "tres sencillos pasos",
    "intro": "Empezar es fácil. Siga el flujo del portal del operador para descargar el cargador, cargar ajustes preestablecidos y poner en cola Dota 2 en Steam PC, con ayuda en vivo de Discord si algo lo bloquea.",
    "ctaPrimary": "Ver productos",
    "ctaSecondary": "Preguntas frecuentes sobre la configuración",
    "ctaPrimaryHref": "/product/",
    "ctaSecondaryHref": "/faq/",
    "steps": [
      {
        "step": "Paso 1",
        "title": "Desbloquear portal y descargar cargador",
        "desc": "Complete el pago, abra el panel de su operador y obtenga la última versión del cargador de parches para Windows."
      },
      {
        "step": "Paso 2",
        "title": "Lanzar y configurar módulos",
        "desc": "Ejecute el cargador externo, importe ajustes preestablecidos clasificados o Turbo, y ajuste scripts y controles deslizantes de map hack."
      },
      {
        "step": "Paso 3",
        "title": "Verificar estado y poner en cola Dota 2",
        "desc": "Consulte el banner de estado en vivo, inicie Steam Dota 2 y juegue con perfiles respaldados en la nube guardados en el portal."
      }
    ]
  },
  "compatibility": {
    "eyebrow": "Soporte de plataforma",
    "title": "Funciona en tu equipo.",
    "subtitle": "Consulta el banner de estado en vivo antes de iniciar Dota 2 después de las actualizaciones.",
    "items": [
      "Ventanas 10 y 11",
      "Steam",
      "cliente dota 2",
      "Actualizador automático",
      "Configurar sincronización en la nube",
      "Soporte de Discord",
      "Restablecimiento de HWID",
      "Cargador externo"
    ]
  },
  "cheats": {
    "eyebrow": "trampa de élite",
    "title": "Trucos de Dota 2 Élite",
    "subtitle": "Suite completa: map hack, scripts, bots, skin changer y entrega de parches prioritarios.",
    "viewAll": "Ver detalles de Élite",
    "explore": "Explorar",
    "items": [
      {
        "badge": "Plazas limitadas",
        "tier": "Privada",
        "name": "Elite",
        "title": "Dota 2 Élite",
        "desc": "Los trucos privados de Dota 2 se crean con Auto Farm Bot, Auto Kill Steal, Auto Dagon, Skin Changer y soporte directo para desarrolladores.",
        "features": [
          "Auto Farm Bot",
          "Auto Kill Steal",
          "Auto Dagon",
          "Suite completa de hackeo de mapas",
          "Skin Changer",
          "Cola de parches prioritarios"
        ],
        "more": 42,
        "href": "/product/",
        "variant": "limited"
      }
    ]
  },
  "products": {
    "eyebrow": "Tienda",
    "title": "Nuestros productos",
    "subtitle": "Dota 2 Cheats y HWID Spoofer: dos herramientas para ranked y restablecimiento de hardware.",
    "viewAll": "Ver todos los trucos",
    "spooferHubNote": "¿Necesitas restablecer el hardware antes de una cuenta nueva? Ver ",
    "spooferHubLink": "HWID Spoofer",
    "backToCheats": "Volver al producto",
    "showcaseHeading": "Presentación del producto",
    "swipeHint": "Desliza para ver más capturas",
    "checkoutEyebrow": "Pago",
    "checkoutSelect": "Elige la suscripción",
    "checkoutSingle": "Opción de compra",
    "checkoutTotal": "Total",
    "bestValue": "Mejor precio",
    "planMonthly": "Mensual",
    "planLifetime": "De por vida",
    "planOneTime": "Acceso único",
    "planPerMonth": "USD / mes",
    "planOneTimeNote": "USD, pago único",
    "get": "Conseguir",
    "explore": "Explorar",
    "buyNow": "Comprar ahora",
    "viewDetails": "Ver detalles",
    "items": [
      {
        "badge": "Disponible",
        "category": "Utilidad del sistema",
        "title": "HWID Spoofer",
        "subtitle": "Tu PC, listo para una cuenta nueva",
        "desc": "Falsificación de ID de hardware para números de serie de discos, direcciones MAC e ID de GPU: siga la guía de configuración del portal antes de iniciar Dota 2.",
        "features": [
          "Herramientas de limpieza y falsificación",
          "Rotación de perfil en serie",
          "Escaneo de compatibilidad",
          "Verificación posterior a la suplantación de identidad"
        ],
        "more": 9,
        "href": "/hwid-spoofer/"
      }
    ]
  },
  "blog": {
    "eyebrow": "Blog",
    "title": "Guías y actualizaciones",
    "subtitle": "Códigos de trucos, configuración de scripts, configuración de map hack y comprobaciones del día del parche para Dota 2.",
    "latestTitle": "Últimos artículos",
    "latestSubtitle": "Filtra por tema para encontrar guías de configuración, análisis de funciones y notas del día del parche.",
    "filterAll": "Todos los artículos",
    "sortLabel": "Ordenar por",
    "sortNewest": "Lo nuevo primero",
    "sortOldest": "El más viejo primero",
    "sortShortRead": "Lectura más corta",
    "sortLongRead": "lectura más larga",
    "emptyFilter": "Ningún artículo coincide con este filtro.",
    "emptyArchive": "Todavía no hay artículos. Las nuevas guías aparecerán aquí.",
    "viewAll": "Ver todos los artículos",
    "read": "Leer",
    "articleActionsAria": "Seguir leyendo",
    "buyCta": "Comprar trucos de Dota 2",
    "moreArticles": "Más artículos",
    "sidebarAria": "Barra lateral del artículo",
    "tocTitle": "En este artículo",
    "relatedTitle": "Guías relacionadas",
    "filterToolbarAria": "Filtrar artículos por tema",
    "items": []
  },
  "toolkit": {
    "eyebrow": "Software",
    "title": "Organizada, fácil de configurar",
    "subtitle": "Cada módulo está agrupado para un ajuste rápido a mitad del partido sin pasar por el caos.",
    "items": [
      {
        "num": "01",
        "label": "Scripts",
        "title": "Combos que se adaptan a tu héroe",
        "desc": "Auto Combo, Orbwalker, Smart Cast y configuración de retardo en una pestaña de scripts."
      },
      {
        "num": "02",
        "label": "Visión",
        "title": "Hack de mapas que permanece legible",
        "desc": "Filtre por distancia, color del equipo, tipo de ward y sensibilidad de alerta de humo."
      },
      {
        "num": "03",
        "label": "Minimapa",
        "title": "Runas y rotaciones listas",
        "desc": "Temporizadores de runas, pistas de enemigos y minimap hack en una superposición compacta."
      },
      {
        "num": "04",
        "label": "Héroes",
        "title": "Perfiles de scripts por héroe",
        "desc": "Guarde los scripts de Invoker, Lion, PA y de soporte e intercámbielos con teclas de acceso rápido."
      },
      {
        "num": "05",
        "label": "bots",
        "title": "Auto farm y lanes",
        "desc": "Auto Farm Bot, temporizador de pila y administrador de mensajería para una agricultura eficiente."
      },
      {
        "num": "06",
        "label": "Perfiles",
        "title": "Configuraciones para cada modo",
        "desc": "Ajustes preestablecidos clasificados, Turbo y casuales separados con copia de seguridad en la nube."
      }
    ]
  },
  "workflow": {
    "eyebrow": "como funciona",
    "badge": "4 pasos simples",
    "titleBefore": "Desde la verificación de estado hasta",
    "titleHighlight": "perfil guardado.",
    "subtitle": "Un camino directo desde la compra hasta un perfil de Dota 2 que puedes reutilizar en cada sesión.",
    "ctaLabel": "Ver productos",
    "ctaHref": "/product/",
    "ctaSecondary": "Preguntas frecuentes sobre la configuración",
    "ctaSecondaryHref": "/faq/",
    "items": [
      {
        "num": "01",
        "phase": "Antes de la compra",
        "title": "Verificar el estado de VAC",
        "desc": "Lea el banner en vivo en {siteDomain} antes de comprar o lanzar."
      },
      {
        "num": "02",
        "phase": "Verificar",
        "title": "Elige tu nivel",
        "desc": "Elija Lite, Pro o Elite: el nivel de acceso que coincida con sus objetivos clasificados."
      },
      {
        "num": "03",
        "phase": "Cargador",
        "title": "Iniciar y configurar",
        "desc": "Descárguelo desde el portal, habilite módulos y ajuste los retrasos en un lobby de práctica."
      },
      {
        "num": "04",
        "phase": "En el juego",
        "title": "Guarda tu perfil",
        "desc": "Cuando la configuración le parezca correcta, guarde los ajustes preestablecidos clasificados y Turbo en la nube."
      }
    ]
  },
  "fieldNotes": {
    "eyebrow": "Notas de campo",
    "title": "Construida para cómo juega Dota 2.",
    "items": [
      {
        "num": "01",
        "title": "Listo para el día del parche",
        "desc": "Las notas del parche llegan a Discord y al portal antes que al blog oficial; verifíquelas antes de hacer cola en la clasificación."
      },
      {
        "num": "02",
        "title": "Valores predeterminados conservadores",
        "desc": "Comience con retrasos de scripts seguros y rangos de map hack, luego ajuste, y no al revés."
      },
      {
        "num": "03",
        "title": "Soporte real del operador",
        "desc": "¿Atascado en las configuraciones del cargador o del héroe? El personal de Discord lo guiará en vivo, no copiará y pegará las preguntas frecuentes."
      }
    ]
  },
  "support": {
    "eyebrow": "Apoyo",
    "title": "Soporte de DotaCheats",
    "subtitle": "Háganos saber cómo podemos ayudar.",
    "channels": [
      {
        "icon": "users",
        "title": "Chat antes de pagar",
        "desc": "Hable con nuestro equipo sobre niveles y acceso.",
        "linkLabel": "Iniciar compra",
        "href": "/go/dota-2/"
      },
      {
        "icon": "headphones",
        "title": "Chatear para apoyar",
        "desc": "Estamos aquí para problemas con el cargador, HWID y la cuenta.",
        "linkLabel": "{supportEmail}",
        "href": "mailto:{supportEmail}"
      },
      {
        "icon": "navFaq",
        "title": "Lea las preguntas frecuentes",
        "desc": "Compatibilidad, prohibiciones y configuración, antes de comprar.",
        "linkLabel": "Ver todas las preguntas frecuentes",
        "href": "/faq/"
      },
      {
        "icon": "clock",
        "title": "Operadores en vivo",
        "desc": "Ingenieros de Discord en turno 24 horas al día, 7 días a la semana.",
        "linkLabel": "Abrir página de contacto",
        "href": "/support/"
      }
    ],
    "ticketTitle": "Incluir en tu billete",
    "ticketItems": [
      {
        "title": "Correo electrónico de pedido",
        "desc": "La dirección utilizada al realizar el pago en {siteDomain} o mediante nuestro pago seguro."
      },
      {
        "title": "Plataforma",
        "desc": "Steam en Windows 10 u 11 y tu versión cliente de Dota 2."
      },
      {
        "title": "Detalle del error",
        "desc": "Captura de pantalla o mensaje exacto del cargador o Steam."
      }
    ]
  },
  "faq": {
    "eyebrow": "Preguntas frecuentes",
    "title": "Respuestas directas antes de pagar.",
    "subtitle": "Compatibilidad, prohibiciones y acceso: sin promesas vagas.",
    "items": [
      {
        "num": "01",
        "q": "¿Dónde verifico si los trucos de Dota 2 están en línea?",
        "a": "El banner de estado en vivo está en {siteDomain} y en el canal #status de Discord. Verifique siempre después de una actualización de Dota 2 o VAC."
      },
      {
        "num": "02",
        "q": "¿Qué pasa después de comprar?",
        "a": "Su portal desbloquea el cargador, la guía de configuración y la biblioteca de configuración a través de nuestro pago seguro. Sigue la guía antes de iniciar Dota 2."
      },
      {
        "num": "03",
        "q": "¿Me pueden prohibir el uso de trucos de Dota de terceros?",
        "a": "Sí, cualquier modificación conlleva riesgos. Los sistemas VAC y de informes evolucionan. Lea el estado actual y acepte el riesgo antes de su uso."
      },
      {
        "num": "04",
        "q": "¿Qué plataformas son compatibles?",
        "a": "Dota 2 a través de Steam solo en Windows 10/11 de 64 bits.macOS y Linux no son compatibles."
      },
      {
        "num": "05",
        "q": "¿Puedo transferir mi licencia a una nueva PC?",
        "a": "Sí, use el restablecimiento de HWID en su portal o abra un ticket de Discord. Los límites dependen de su nivel."
      },
      {
        "num": "06",
        "q": "¿Dónde se enumeran los productos y utilidades?",
        "a": "Los niveles de trucos, HWID Spoofer, UGC y Skin Changer están disponibles en {siteDomain}/products/dota-2-cheats con listas de funciones y pago a través de nuestro socio."
      }
    ]
  },
  "footer": {
    "tagline": "Trucos de Dota 2: scripts, trucos de mapas y herramientas para PC.{siteDomain}",
    "explore": "Explorar",
    "exploreLinks": [
      {
        "id": "products",
        "href": "/",
        "label": "Descripción general de las funciones",
        "ariaLabel": "Características",
        "scrollTarget": "features"
      },
      {
        "id": "products",
        "href": "/product/",
        "label": "Producto",
        "ariaLabel": "Producto"
      },
      {
        "id": "hwidSpoofer",
        "href": "/hwid-spoofer/",
        "label": "HWID Spoofer",
        "ariaLabel": "HWID Spoofer"
      },
      {
        "id": "blog",
        "href": "/blog/",
        "label": "Blog",
        "ariaLabel": "Blog"
      },
      {
        "id": "forum",
        "href": "/forum/",
        "label": "Foro",
        "ariaLabel": "Foro"
      }
    ],
    "supportLinks": [
      {
        "href": "/faq/",
        "label": "Preguntas frecuentes sobre precompra",
        "ariaLabel": "Preguntas frecuentes"
      },
      {
        "href": "/support/",
        "label": "Contactar soporte",
        "ariaLabel": "Apoyo"
      }
    ],
    "support": "Apoyo",
    "legal": "Legal",
    "privacy": "política de privacidad",
    "terms": "Términos y condiciones",
    "about": "Acerca de"
  },
  "legalPages": {
    "about": {
      "title": "Acerca de DotaCheats",
      "description": "DotaCheats proporciona niveles de trucos de Dota 2, herramientas de utilidad y recursos de soporte para PC en {siteDomain}.",
      "sections": [
        {
          "heading": "Quienes somos",
          "paragraphs": [
            "DotaCheats es un recurso centrado en PC para jugadores de Dota 2 que exploran scripts, map hack, zoom hack y flujos de trabajo de Skin Changer. Publicamos comparaciones de niveles, guías de configuración y notas de estado en vivo para que puedas evaluar los trucos de Dota antes de pagar.",
            "Todos los nombres de productos se utilizan únicamente para identificación."
          ]
        },
        {
          "heading": "lo que publicamos",
          "paragraphs": [
            "Nuestro sitio cubre los niveles de trucos Lite, Pro y Elite, utilidades HWID, Skin Changer y flujos de trabajo de recuperación de cuentas. Los artículos del blog explican las configuraciones clasificadas seguras, las comprobaciones del día del parche y el comportamiento de actualización de VAC.",
            "El contenido se actualiza cuando llegan los parches o cuando los módulos del cargador cambian. Verifique el banner de estado de la página de inicio y el #status de Discord antes de cada sesión."
          ]
        },
        {
          "heading": "Apoyo",
          "paragraphs": [
            "Las preguntas sobre compatibilidad, errores del cargador o pago se manejan a través de Discord y soporte por correo electrónico. Incluya el correo electrónico de su pedido, su cuenta de Steam y la versión de Windows al abrir un boleto."
          ]
        }
      ]
    },
    "privacy": {
      "title": "política de privacidad",
      "description": "Cómo maneja DotaCheats los análisis, las cookies y los datos de contacto cuando utiliza {siteDomain}.",
      "sections": [
        {
          "heading": "Información que recopilamos",
          "paragraphs": [
            "Podemos recopilar análisis web estándar, como visitas a páginas, tipo de dispositivo, navegador y región aproximada a través de Google Analytics cuando esté habilitado. El pago y la entrega de licencias se realizan en páginas de pago externas; no almacenamos datos de tarjetas de pago en {siteDomain}."
          ]
        },
        {
          "heading": "Cómo utilizamos los datos",
          "paragraphs": [
            "Los análisis nos ayudan a comprender qué guías y páginas de productos son útiles para que podamos mejorar el contenido y corregir enlaces rotos. Los tickets de soporte pueden conservar la dirección de correo electrónico y el contenido del mensaje que usted proporcione hasta que se resuelva el problema."
          ]
        },
        {
          "heading": "Galletas",
          "paragraphs": [
            "Utilizamos las cookies mínimas necesarias para el análisis. Puede bloquear las cookies en la configuración de su navegador; el contenido principal del sitio sigue siendo accesible sin ellos."
          ]
        },
        {
          "heading": "Apoyo",
          "paragraphs": [
            "Para preguntas sobre privacidad, utilice las opciones en la página de Soporte. Las reglas de compra y reembolso se encuentran en nuestros Términos y condiciones."
          ]
        }
      ]
    },
    "terms": {
      "title": "Términos y condiciones",
      "description": "Términos de compra, licencia, reembolso y uso de los productos DotaCheats y {siteDomain}.",
      "sections": [
        {
          "heading": "Acuerdo",
          "paragraphs": [
            "Última actualización: septiembre de 2026. Al utilizar {siteDomain} o completar el pago de cualquier producto enumerado aquí, acepta estos Términos y condiciones y nuestra Política de privacidad."
          ]
        },
        {
          "heading": "lo que compras",
          "paragraphs": [
            "Vendemos acceso a niveles de trucos de Dota 2 (Lite, Pro, Elite) y herramientas de utilidad (HWID Spoofer, UGC, Skin Changer/Unlock All) entregados a través de un portal de operador y un cargador para Steam en Windows.",
            "Las listas de funciones en la página de cada producto describen lo que se incluye en el momento de la compra. Los módulos pueden cambiar cuando Dota 2 o los sistemas anti-trampas se actualizan."
          ]
        },
        {
          "heading": "Pago y entrega",
          "paragraphs": [
            "El pago y la entrega de licencias se realizan en páginas de pago externas.{siteDomain} no procesa ni almacena números de tarjetas de pago.",
            "Después de la compra, utilice el portal del operador vinculado desde su flujo de pedidos para descargar el cargador actual y la guía de configuración antes de iniciar Dota 2."
          ]
        },
        {
          "heading": "Uso de licencia",
          "paragraphs": [
            "Las licencias son sólo para su uso personal. No comparta archivos de carga, inicios de sesión del portal ni claves de licencia. Los límites de HWID y de dispositivo dependen de su nivel y se aplican en el portal."
          ]
        },
        {
          "heading": "Reembolsos y compras",
          "paragraphs": [
            "Todas las ventas son definitivas una vez que se completa el pago. No reembolsamos compras por cambio de opinión, prohibiciones de cuentas, penalizaciones por VAC ni problemas causados ​​por ignorar las guías de configuración o ejecutar módulos mientras el banner de estado se muestra sin conexión.",
            "Si el producto no funciona como se describe en una configuración compatible (Steam Dota 2 en Windows 10/11, el cargador actual del portal y el banner de estado en vivo que se muestra en línea cuando comenzó), contáctenos a través de la página de Soporte. Incluya el correo electrónico de su pedido, la versión de Windows, la compilación de Dota 2 y capturas de pantalla o el texto de error exacto del cargador.",
            "Podemos, a nuestra discreción, ofrecer una solución, acceso de reemplazo o un reembolso parcial/completo cuando confirmamos una falla de nuestra parte. No estamos obligados a aprobar todas las solicitudes."
          ]
        },
        {
          "heading": "Disponibilidad y riesgo",
          "paragraphs": [
            "Las herramientas de terceros para Dota 2 pueden entrar en conflicto con las actualizaciones del juego y los sistemas antitrampas. Usted utiliza este software bajo su propio riesgo, incluida la posible acción en la cuenta.",
            "Consulte el banner de estado de la página de inicio antes de cada sesión. No haga cola en la clasificación mientras los módulos estén fuera de línea o desalineados después de un parche."
          ]
        },
        {
          "heading": "Cambios",
          "paragraphs": [
            "Podemos actualizar estos términos. La fecha de \"Última actualización\" en la parte superior cambiará cuando lo hagamos. El uso continuado del sitio después de los cambios significa que usted acepta los términos revisados."
          ]
        },
        {
          "heading": "Apoyo",
          "paragraphs": [
            "Para preguntas sobre términos, facturación o cargadores, utilice los botones en la página de Soporte. Consulte también nuestra Política de privacidad para conocer cómo manejamos los datos del sitio."
          ]
        }
      ]
    },
    "support": {
      "title": "Soporte de DotaCheats",
      "description": "Obtenga soporte para preguntas sobre cargadores, HWID y pago en {siteDomain}."
    }
  },
  "common": {
    "breadcrumbHome": "Hogar",
    "breadcrumbProducts": "Producto",
    "breadcrumbBlog": "Blog",
    "breadcrumbForum": "Foro",
    "breadcrumbFaq": "Preguntas frecuentes",
    "breadcrumbAbout": "Acerca de",
    "breadcrumbCompareUtilities": "Comparar utilidades",
    "breadcrumbPrivacy": "Privacidad",
    "breadcrumbTerms": "Términos",
    "breadcrumbSupport": "Apoyo",
    "contactSupport": "Contactar con soporte",
    "backToProducts": "Volver al producto"
  },
  "notFound": {
    "metaDescription": "La página que solicitó no se pudo encontrar en {siteDomain}.",
    "title": "Página no encontrada",
    "body": "Esa URL no existe o puede que se haya movido. Regrese a la página de inicio o explore los niveles y productos de trucos.",
    "backHome": "De vuelta a casa",
    "viewProducts": "Ver productos",
    "viewElite": "Ver trucos de élite"
  },
  "pages": {
    "faq": {
      "eyebrow": "Centro de ayuda",
      "title": "Preguntas frecuentes sobre trucos, productos y guías",
      "description": "Todo sobre los niveles Lite, Pro, Elite, utilidades, seguridad y temas de blogs en un solo lugar.",
      "schemaName": "Preguntas frecuentes: trucos y productos de Dota 2",
      "schemaDescription": "Respuestas sobre niveles de trucos de Dota 2, trucos de mapas, scripts, herramientas HWID, guías de blogs y pago en {siteDomain}."
    },
    "forum": {
      "eyebrow": "Foro de la comunidad de Dota 2",
      "title": "Foro de la comunidad de Dota 2",
      "description": "Hilos archivados de solo lectura sobre configuración de consola, conocimiento de mapas, parches y builds. Las respuestas están cerradas.",
      "exploreGuides": "Explora las guías",
      "postsAria": "Publicaciones de la comunidad",
      "sortAria": "Clasificación de publicaciones",
      "sortPopular": "Popular",
      "sortLatest": "El último",
      "sortTop": "Más discutida",
      "searchPlaceholder": "Buscar discusiones",
      "searchAria": "Buscar discusiones",
      "filterAria": "Filtrar discusiones por tema",
      "filterAll": "Todos los temas",
      "resultsCount": "guiar las discusiones",
      "voteAria": "Votación de discusión",
      "upvoteAria": "Vota a favor de esta discusión",
      "downvoteUnavailableAria": "La votación negativa no está disponible",
      "guideTeam": "Equipo guía de DotaCheats",
      "guideBasedQa": "Preguntas y respuestas basadas en guías",
      "fromGuide": "De la guía:",
      "comments": "comentarios",
      "closedThread": "Hilo cerrado",
      "closedBy": "Cerrado por el archivo",
      "repliesClosed": "Las respuestas están cerradas",
      "readDiscussion": "Leer discusión",
      "empty": "Ninguna discusión coincide. Pruebe con otra búsqueda o tema.",
      "emptyArchive": "Todavía no hay discusiones. Los hilos nuevos aparecerán aquí.",
      "categoryGeneral": "General",
      "categoryGuides": "Guías y builds",
      "categoryPatch": "Parches",
      "categoryCommunity": "Comunidad",
      "paginationAria": "Páginas de discusión",
      "pagePrevious": "Previa",
      "pageNext": "Próxima",
      "sidebarTitle": "Comunidad DotaCheats",
      "sidebarIntro": "Archivo de solo lectura. Los hilos quedan como referencia: no se pueden abrir hilos ni responder.",
      "statsDiscussions": "guiar las discusiones",
      "statsTopics": "temas",
      "exploreAllGuides": "Explora todas las guías",
      "communitiesHeading": "Comunidades",
      "browseRelated": "Explorar preguntas y respuestas relacionadas",
      "browseAllCommunities": "Explorar todas las comunidades",
      "guidelinesHeading": "Pautas comunitarias",
      "guideline1": "Mantenlo amigable y constructivo.",
      "guideline2": "Manténgase en el tema y agregue contexto",
      "guideline3": "Marcar spoilers y contenido sensible",
      "readFullGuidelines": "Lea las pautas completas",
      "sidebarFoot": "Acerca de · Pautas · Privacidad · Términos"
    },
    "utilities": {
      "title": "Comparar utilidades",
      "description": "HWID Spoofer, UGC y Skin Changer resuelven diferentes problemas. Haga coincidir la herramienta con su situación antes de realizar el pago.",
      "tableAria": "Comparación de utilidades",
      "tableUtility": "Utilidad",
      "tableBestFor": "La mejor para",
      "tableProductPage": "Página del producto",
      "viewDetails": "Vista",
      "includes": "Incluye:",
      "moreFeatures": "más",
      "backToProducts": "Volver al producto",
      "schemaName": "Comparar utilidades de Dota 2",
      "useCases": {
        "hwid-spoofer": "Nuevo PC o flag de hardware después de un ban. Restablece cómo aparece tu máquina antes de una cuenta nueva."
      }
    }
  },
  "ui": {
    "skipLink": "Saltar al contenido principal",
    "browseCheats": "Pruébalo ahora",
    "browseCheatsNav": "Probar ya",
    "browseCheatsMobile": "Iniciar compra",
    "homeAria": "Inicio de DotaCheats",
    "checkoutAria": "Iniciar compra",
    "menuOpen": "abrir menú",
    "menuClose": "Cerrar menú",
    "themeLight": "Cambiar al modo de luz",
    "themeDark": "Cambiar al modo oscuro",
    "languageSwitcherLabel": "Idioma",
    "languageNames": {
      "en": "English",
      "es": "Español",
      "de": "Deutsch",
      "fr": "Français"
    }
  }
};
