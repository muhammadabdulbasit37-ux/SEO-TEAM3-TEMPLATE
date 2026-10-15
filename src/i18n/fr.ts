import type { Translations } from './types';

export const fr: Omit<Translations, 'pageSeo'> = {
  "site": {
    "name": "DotaCheats",
    "domain": "{siteDomain}",
    "title": "Astuces et hacks Dota | Scripts Dota 2, maphack et ESP",
    "description": "Astuces Dota 2 non détectées avec scripts, maphack, zoom hack et skin changer pour PC classé, mis à jour chaque patch sur {siteDomain}."
  },
  "nav": [
    {
      "id": "products",
      "href": "/product/",
      "label": "Produit",
      "shortLabel": "Produit"
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
      "label": "Forum"
    },
    {
      "id": "faq",
      "href": "/faq/",
      "label": "FAQ"
    },
    {
      "id": "support",
      "href": "/support/",
      "label": "Assistance"
    }
  ],
  "hero": {
    "status": "Dota 2, build du patch en ligne",
    "eyebrow": "Fournisseur de cheats n°1",
    "titleLine1": "Dota 2",
    "titleLine2": "Astuces et hacks",
    "subtitle": "Des cheats Dota avec des scripts, un maphack, un zoom hack et un skin changer pour PC classé sur Steam: chaque patch est mis à jour avec des configurations prédéfinies et une assistance sur {siteDomain}.",
    "ctaPrimary": "Voir les produits",
    "modesLabel": "Modes Dota 2",
    "modes": [
      "Classé",
      "Turbo",
      "All Pick",
      "Captain's Mode"
    ],
    "metrics": [
      {
        "label": "Sûr pour le streaming",
        "strong": "Oui"
      },
      {
        "label": "Vitesse des correctifs",
        "strong": "<24h"
      },
      {
        "label": "Utilisateurs",
        "strong": "300+"
      },
      {
        "label": "Assistance en direct",
        "strong": "24/7"
      }
    ],
    "statusPills": [
      "ESP actif",
      "Radar en ligne",
      "Build de saison",
      "Indétectable",
      "Soft aim prêt",
      "Sans recul",
      "Stream proof",
      "Loot ESP",
      "Skeleton ESP",
      "Radar UAV",
      "Map hack",
      "Support 24/7",
      "Livraison instantanée",
      "Sûr en classé",
      "Trigger bot",
      "Sélection d'os",
      "Statut en direct",
      "Mises à jour auto"
    ]
  },
  "features": {
    "eyebrow": "Caractéristiques",
    "title": "Tout ce dont vous avez besoin dans un seul paquet",
    "subtitle": "Les scripts, les contrôles de carte et les outils utilitaires pour Dota 2 ont été maintenus à chaque patch.",
    "items": [
      {
        "title": "Scripts",
        "subtitle": "Combo. Cast. Victoire.",
        "desc": "Moteur de script complet pour les classements et les Turbo, optimisé pour Invoker, Lion, PA et des dizaines de héros en rafale.",
        "bullets": [
          "Chaînes Auto Combo pour Invoker, Lion, PA et noyaux burst",
          "Orbwalker et assistance au dernier coup pour les carries",
          "Smart Cast avec curseurs de retard humanisés",
          "Modules de prédiction pour les skillshots et les blinks",
          "Préréglages du portail par héros, rôle et mode de jeu"
        ],
        "tags": [
          "scripts Dota 2",
          "auto combo",
          "smart cast"
        ],
        "bento": "sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1"
      },
      {
        "title": "Map hack / ESP",
        "subtitle": "Voir Ganks avant qu'ils ne frappent.",
        "desc": "Avantage de la vision sans deviner: l'ESP reste lisible lors des combats d'équipe et lorsque plusieurs héros plongent dans votre voie.",
        "bullets": [
          "Boîtes de héros, barres HP et affichages du temps de recharge",
          "Localisateur de wards et de sentries avec indications de portée",
          "Alertes de fumée, de TP et d'ennemis disparus"
        ],
        "tags": [
          "hack de carte Dota 2",
          "dota 2 esp",
          "ward esp"
        ],
        "bento": "sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2"
      },
      {
        "title": "Mini-carte et runes",
        "subtitle": "Contrôle de la carte sans wards.",
        "desc": "Des minuteries et des superpositions de mini-cartes pour que vous puissiez effectuer une rotation en fonction des primes, des runes de puissance et du timing des vagues, sans aucune conjecture.",
        "bullets": [
          "Comptes à rebours des primes et des runes de puissance",
          "Dernière position ennemie sur le minimap hack",
          "Rappels de pile de camp dans la jungle"
        ],
        "tags": [
          "hack de mini-carte",
          "timer de runes",
          "connaissance de la carte"
        ],
        "bento": "sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3"
      },
      {
        "title": "Auto Combo",
        "subtitle": "Effectuez des combos comme un pro.",
        "desc": "Rafales à une touche avec des valeurs par défaut raisonnables pour le classement: resserrez les timings à mesure que vous vous sentez à l'aise.",
        "bullets": [
          "Sélecteur de cible pour le tir concentré",
          "Activateur pour BKB, Hex et Orchid",
          "Chaînes de combos par héros dans le portail"
        ],
        "tags": [
          "auto combo",
          "activateur",
          "sélecteur de cible"
        ],
        "bento": "sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3"
      },
      {
        "title": "Suite utilitaire",
        "subtitle": "Outils en plus pour les moments décisifs.",
        "desc": "Skin Changer, Kill Steal, Auto Dagon et bien plus encore, au-delà des scripts bruts et du maphack.",
        "bullets": [
          "Skin Changer: prévisualisez les arcanes et les immortels localement",
          "Auto Kill Steal: éliminez les ennemis à faible HP avec un timing parfait",
          "Auto Dagon: activation d'un objet mortel à la fin du combo",
          "Stream Proof: masquer les superpositions de la capture OBS"
        ],
        "tags": [
          "changeur de peau",
          "tuer voler",
          "preuve de flux"
        ],
        "bento": "sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4"
      },
      {
        "title": "Auto Farm Bot",
        "subtitle": "Farm efficace. Zéro tilt.",
        "desc": "Récupérez votre net worth quand les lanes tournent mal: l'automatisation reste humanisée pour éviter les chemins de bot évidents.",
        "bullets": [
          "Last hit et deny en lane sous la tour",
          "Cheminement dans la jungle avec timing de pile de camp",
          "Retraite en toute sécurité lorsque des héros ennemis apparaissent sur ESP",
          "Presets de farm pour Turbo"
        ],
        "tags": [
          "auto farm",
          "last hit bot",
          "pile de jungle"
        ],
        "bento": "sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4"
      },
      {
        "title": "Stream Proof",
        "subtitle": "Les créateurs restent en sécurité.",
        "desc": "Gardez les superpositions sur votre moniteur pendant que le logiciel de capture enregistre un flux de jeu propre.",
        "bullets": [
          "Modes sans échec OBS et Game Bar",
          "Basculer la preuve de flux par module",
          "Liste de contrôle des tests dans la documentation du portail"
        ],
        "tags": [
          "coffre-fort",
          "preuve de flux",
          "capturer cacher"
        ],
        "bento": "sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6"
      },
      {
        "title": "Zoom Hack",
        "subtitle": "Voir plus du combat.",
        "desc": "Tirez la caméra vers l'arrière pour connaître la carte sans perdre la précision du dernier coup dans la voie.",
        "bullets": [
          "Limites de distance par mode de jeu",
          "Réinitialisation rapide au champ de vision par défaut",
          "Se couple avec la mini-carte ESP"
        ],
        "tags": [
          "zoom hack",
          "caméra",
          "vue"
        ],
        "bento": "sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6"
      },
      {
        "title": "Configuration et mises à jour du cloud",
        "subtitle": "Prêt pour le jour du patch.",
        "desc": "Mêmes préréglages sur chaque PC: les mises à jour du portail suivent les jours de patch Dota 2 et VAC.",
        "bullets": [
          "Sauvegarde cloud pour les profils de curseur",
          "Poussée du chargeur quelques heures après les correctifs",
          "Discord #status pour les notes de construction"
        ],
        "tags": [
          "synchronisation cloud",
          "mise à jour automatique",
          "préréglages"
        ],
        "bento": "sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2"
      }
    ]
  },
  "whyUs": {
    "eyebrow": "Pourquoi nous",
    "title": "Des outils classés soutenus par des correctifs, pas des promesses",
    "subtitle": "La plupart des magasins de triche Dota 2 proposent des chargeurs obsolètes, une automatisation évidente et des bots de tickets. Nous avons construit {siteDomain} autour de la livraison le jour du correctif, de scripts humanisés et d'opérateurs en direct.",
    "usLabel": "DotaCheats",
    "otherLabel": "Fournisseur type",
    "rows": [
      {
        "title": "Mises à jour du chargeur le jour du patch",
        "desc": "Constructions compatibles VAC publiées quelques heures après les mises à jour de Dota 2: vérifiez le #statut de Discord avant de vous classer dans la file d'attente."
      },
      {
        "title": "Scripts et délais humanisés",
        "desc": "Le réglage du délai, le sélecteur de cible et les valeurs par défaut conservatrices imitent le timing d'un MMR élevé, et non les rafales instantanées de bots qui inondent les rapports."
      },
      {
        "title": "Opérateurs Live Discord",
        "desc": "De vrais ingénieurs pour la configuration du chargeur, les configurations de héros et les réinitialisations HWID: couverture des équipes 24h/24 et 7j/7, pas de tickets de FAQ copiés-collés."
      },
      {
        "title": "Chargeur externe + stream proof",
        "desc": "Suite de superposition avec modes sécurisés OBS: pas d'injection de DLL risquée dans le processus Dota 2 comme les anciens fournisseurs le vendent encore."
      },
      {
        "title": "Synchronisation prédéfinie dans le cloud",
        "desc": "Sauvegarde des profils classés, Turbo et par héros sur le portail: mêmes curseurs sur n'importe quel PC sans reconstruire à partir de zéro."
      },
      {
        "title": "Réinitialisation du HWID et déplacements de licence",
        "desc": "Effacements HWID et transferts de machines gérés via les opérations Discord: la plupart des fournisseurs verrouillent une plate-forme ou facturent pour chaque échange."
      }
    ],
    "metrics": [
      {
        "value": "<24h",
        "title": "Retournement des correctifs",
        "desc": "Délai moyen pour expédier une version de chargeur après des modifications majeures de Dota 2 ou VAC."
      },
      {
        "value": "24/7",
        "title": "Assistance opérateur",
        "desc": "Ingénieurs Discord en poste pour l'installation, les configurations et les problèmes de compte."
      },
      {
        "value": "300+",
        "title": "Opérateurs actifs",
        "desc": "Lecteurs Steam PC exécutant des scripts, des hacks de cartes et des utilitaires sur {siteDomain}."
      }
    ]
  },
  "setup": {
    "eyebrow": "Guide de configuration",
    "titleLead": "Du paiement à la file d'attente classée en seulement",
    "titleHighlight": "trois étapes simples",
    "intro": "Commencer est facile. Suivez le flux du portail de l'opérateur pour télécharger le chargeur, charger les préréglages et mettre Dota 2 en file d'attente sur Steam PC, avec l'aide Discord en direct si quelque chose vous bloque.",
    "ctaPrimary": "Voir les produits",
    "ctaSecondary": "FAQ de configuration",
    "ctaPrimaryHref": "/product/",
    "ctaSecondaryHref": "/faq/",
    "steps": [
      {
        "step": "Étape 1",
        "title": "Déverrouiller le portail et le chargeur de téléchargement",
        "desc": "Terminez le paiement, ouvrez le tableau de bord de votre opérateur et extrayez la dernière version du chargeur de correctifs pour Windows."
      },
      {
        "step": "Étape 2",
        "title": "Lancer et configurer les modules",
        "desc": "Exécutez le chargeur externe, importez les préréglages classés ou Turbo et ajustez les scripts ainsi que les curseurs de maphack."
      },
      {
        "step": "Étape 3",
        "title": "Vérifier le statut et la file d'attente Dota 2",
        "desc": "Vérifiez la bannière d'état en direct, lancez Steam Dota 2 et jouez avec les profils sauvegardés dans le cloud enregistrés dans le portail."
      }
    ]
  },
  "compatibility": {
    "eyebrow": "Prise en charge de la plateforme",
    "title": "Fonctionne sur votre plate-forme.",
    "subtitle": "Vérifiez la bannière d'état en direct avant de lancer Dota 2 après les mises à jour.",
    "items": [
      "Windows 10 et 11",
      "Steam",
      "Client Dota 2",
      "Programme de mise à jour automatique",
      "Configurer la synchronisation cloud",
      "Support Discord",
      "Réinitialisation du HWID",
      "Chargeur externe"
    ]
  },
  "cheats": {
    "eyebrow": "Triche d'élite",
    "title": "Astuces Dota 2 Elite",
    "subtitle": "Suite complète: maphack, scripts, bots, Skin Changer et livraison prioritaire de correctifs.",
    "viewAll": "Voir les détails d'Élite",
    "explore": "Explorer",
    "items": [
      {
        "badge": "Places limitées",
        "tier": "Privé",
        "name": "Elite",
        "title": "Dota 2 Élite",
        "desc": "Les astuces privées de Dota 2 sont créées avec Auto Farm Bot, Auto Kill Steal, Auto Dagon, Skin Changer et le support direct des développeurs.",
        "features": [
          "Auto Farm Bot",
          "Vol de tuerie automatique",
          "Auto Dagon",
          "Suite de hack de carte complète",
          "Changeur de peau",
          "File d'attente des correctifs prioritaires"
        ],
        "more": 42,
        "href": "/product/",
        "variant": "limited"
      }
    ]
  },
  "products": {
    "eyebrow": "Boutique",
    "title": "Nos produits",
    "subtitle": "Dota 2 Cheats et HWID Spoofer, deux outils pour le classé et la réinitialisation matérielle.",
    "viewAll": "Voir tous les cheats",
    "spooferHubNote": "Besoin d'une réinitialisation matérielle avant un nouveau compte ? Voir ",
    "spooferHubLink": "HWID Spoofer",
    "backToCheats": "Retour au produit",
    "showcaseHeading": "Présentation du produit",
    "swipeHint": "Balayez pour voir plus de captures",
    "checkoutEyebrow": "Paiement",
    "checkoutSelect": "Choisir l'abonnement",
    "checkoutSingle": "Option d'achat",
    "checkoutTotal": "Total",
    "bestValue": "Meilleur prix",
    "planMonthly": "Mensuel",
    "planLifetime": "À vie",
    "planOneTime": "Accès unique",
    "planPerMonth": "USD / mois",
    "planOneTimeNote": "USD, paiement unique",
    "get": "Obtenez",
    "explore": "Explorer",
    "buyNow": "Acheter maintenant",
    "viewDetails": "Voir les détails",
    "items": [
      {
        "badge": "Disponible",
        "category": "Utilitaire système",
        "title": "HWID Spoofer",
        "subtitle": "Table rase pour votre PC",
        "desc": "Usurpation d'ID matériel pour les numéros de série de disques, les adresses MAC et les ID GPU: suivez le guide de configuration du portail avant de lancer Dota 2.",
        "features": [
          "Outils de spoofer et de nettoyage",
          "Rotation du profil en série",
          "Analyse de compatibilité",
          "Vérification post-usurpation d'identité"
        ],
        "more": 9,
        "href": "/hwid-spoofer/"
      }
    ]
  },
  "blog": {
    "eyebrow": "Blog",
    "title": "Guides et mises à jour",
    "subtitle": "Codes de triche, configuration du script, configuration du maphack et vérifications des jours de patch pour Dota 2.",
    "latestTitle": "Derniers articles",
    "latestSubtitle": "Filtrez par sujet pour trouver des guides de configuration, des analyses de fonctionnalités et des notes du jour de patch.",
    "filterAll": "Tous les articles",
    "sortLabel": "Trier par",
    "sortNewest": "Le plus récent en premier",
    "sortOldest": "Le plus ancien en premier",
    "sortShortRead": "Lecture la plus courte",
    "sortLongRead": "Lecture la plus longue",
    "emptyFilter": "Aucun article ne correspond à ce filtre.",
    "emptyArchive": "Pas encore d'articles. Les nouveaux guides apparaîtront ici.",
    "viewAll": "Voir tous les articles",
    "read": "Lire",
    "articleActionsAria": "Continuer la lecture",
    "buyCta": "Acheter des triches Dota 2",
    "moreArticles": "Plus d'articles",
    "sidebarAria": "Barre latérale de l'article",
    "tocTitle": "Dans cet article",
    "relatedTitle": "Guides associés",
    "filterToolbarAria": "Filtrer les articles par sujet",
    "items": []
  },
  "toolkit": {
    "eyebrow": "Logiciel",
    "title": "Organisé, facile à configurer",
    "subtitle": "Chaque module est regroupé pour un réglage rapide en cours de match sans passer par le chaos.",
    "items": [
      {
        "num": "01",
        "label": "Scripts",
        "title": "Des combos qui s'adaptent à votre héros",
        "desc": "Auto Combo, Orbwalker, Smart Cast et Delay Setting dans un seul onglet de scripts."
      },
      {
        "num": "02",
        "label": "Vision",
        "title": "Hack de carte qui reste lisible",
        "desc": "Filtrez par distance, couleur d'équipe, type de ward et sensibilité des alertes de fumée."
      },
      {
        "num": "03",
        "label": "Mini-carte",
        "title": "Runes et rotations verrouillées",
        "desc": "Timers de runes, indices d'ennemis et hack de mini-carte sur une superposition compacte."
      },
      {
        "num": "04",
        "label": "Héros",
        "title": "Profils de script par héros",
        "desc": "Enregistrez Invoker, Lion, PA et les scripts de support et échangez avec des raccourcis clavier."
      },
      {
        "num": "05",
        "label": "Bots",
        "title": "Auto farm et lanes",
        "desc": "Auto Farm Bot, minuterie de pile et gestionnaire de messagerie pour une agriculture efficace."
      },
      {
        "num": "06",
        "label": "Profils",
        "title": "Configurations pour chaque mode",
        "desc": "Séparez les préréglages classés, Turbo et occasionnels avec sauvegarde dans le cloud."
      }
    ]
  },
  "workflow": {
    "eyebrow": "Comment ça marche",
    "badge": "4 étapes simples",
    "titleBefore": "De la vérification de l'état à",
    "titleHighlight": "profil enregistré.",
    "subtitle": "Un chemin direct depuis l'achat vers un profil Dota 2 que vous pouvez réutiliser à chaque session.",
    "ctaLabel": "Voir les produits",
    "ctaHref": "/product/",
    "ctaSecondary": "FAQ de configuration",
    "ctaSecondaryHref": "/faq/",
    "items": [
      {
        "num": "01",
        "phase": "Avant l'achat",
        "title": "Vérifier le statut du VAC",
        "desc": "Lisez la bannière en direct sur {siteDomain} avant d'acheter ou de lancer."
      },
      {
        "num": "02",
        "phase": "Commander",
        "title": "Choisissez votre niveau",
        "desc": "Choisissez Lite, Pro ou Elite: le niveau d'accès qui correspond à vos objectifs de classement."
      },
      {
        "num": "03",
        "phase": "Chargeur",
        "title": "Lancer et configurer",
        "desc": "Téléchargez depuis le portail, activez les modules et ajustez les délais dans un hall d'entraînement."
      },
      {
        "num": "04",
        "phase": "En jeu",
        "title": "Enregistrez votre profil",
        "desc": "Lorsque les paramètres vous conviennent, enregistrez les préréglages classés et Turbo dans le cloud."
      }
    ]
  },
  "fieldNotes": {
    "eyebrow": "Notes de terrain",
    "title": "Conçu pour la façon dont Dota 2 joue.",
    "items": [
      {
        "num": "01",
        "title": "Prêt pour le patch-day",
        "desc": "Les notes de mise à jour arrivent sur Discord et sur le portail avant le blog officiel: vérifiez avant de vous classer dans la file d'attente."
      },
      {
        "num": "02",
        "title": "Défauts conservateurs",
        "desc": "Commencez par des délais de script sûrs et des plages de maphack, puis resserrez-les, pas l'inverse."
      },
      {
        "num": "03",
        "title": "Véritable support opérateur",
        "desc": "Coincé sur les configurations du chargeur ou du héros ? Le personnel de Discord vous guide en direct, sans copier-coller les FAQ."
      }
    ]
  },
  "support": {
    "eyebrow": "Assistance",
    "title": "Prise en charge de DotaCheats",
    "subtitle": "Faites-nous savoir comment nous pouvons vous aider.",
    "channels": [
      {
        "icon": "users",
        "title": "Discutez avant de payer",
        "desc": "Parlez à notre équipe des niveaux et de l'accès.",
        "linkLabel": "Commencer le paiement",
        "href": "/go/dota-2/"
      },
      {
        "icon": "headphones",
        "title": "Discutez pour soutenir",
        "desc": "Nous sommes là pour les problèmes de chargeur, de HWID et de compte.",
        "linkLabel": "{supportEmail}",
        "href": "mailto:{supportEmail}"
      },
      {
        "icon": "navFaq",
        "title": "Lire la FAQ",
        "desc": "Compatibilité, interdictions et configuration, avant d'acheter.",
        "linkLabel": "Voir toutes les FAQ",
        "href": "/faq/"
      },
      {
        "icon": "clock",
        "title": "Opérateurs en direct",
        "desc": "Ingénieurs Discord en poste 24h/24 et 7j/7.",
        "linkLabel": "Ouvrir la page de contact",
        "href": "/support/"
      }
    ],
    "ticketTitle": "Inclure dans votre billet",
    "ticketItems": [
      {
        "title": "E-mail de commande",
        "desc": "L'adresse utilisée lors du paiement sur {siteDomain} ou via notre paiement sécurisé."
      },
      {
        "title": "Plateforme",
        "desc": "Steam sur Windows 10 ou 11 et votre version client Dota 2."
      },
      {
        "title": "Détail de l'erreur",
        "desc": "Capture d'écran ou message exact du chargeur ou de Steam."
      }
    ]
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Des réponses claires avant le paiement.",
    "subtitle": "Compatibilité, interdictions et accès: pas de vagues promesses.",
    "items": [
      {
        "num": "01",
        "q": "Où puis-je vérifier si les astuces Dota 2 sont en ligne ?",
        "a": "La bannière de statut en direct se trouve sur {siteDomain} et sur la chaîne Discord #status. Vérifiez toujours après une mise à jour Dota 2 ou VAC."
      },
      {
        "num": "02",
        "q": "Que se passe-t-il après mon achat ?",
        "a": "Votre portail déverrouille le chargeur, le guide de configuration et la bibliothèque de configuration via notre paiement sécurisé. Suivez le guide avant de lancer Dota 2."
      },
      {
        "num": "03",
        "q": "Puis-je être banni en utilisant des astuces Dota tierces ?",
        "a": "Oui, toute modification comporte des risques. Les systèmes de CRDV et de rapports évoluent. Lisez l'état actuel et acceptez le risque avant utilisation."
      },
      {
        "num": "04",
        "q": "Quelles plateformes sont prises en charge ?",
        "a": "Dota 2 via Steam sur Windows 10/11 64 bits uniquement.macOS et Linux ne sont pas pris en charge."
      },
      {
        "num": "05",
        "q": "Puis-je déplacer ma licence vers un nouveau PC ?",
        "a": "Oui: utilisez la réinitialisation HWID dans votre portail ou ouvrez un ticket Discord. Les limites dépendent de votre niveau."
      },
      {
        "num": "06",
        "q": "Où les produits et utilitaires sont-ils répertoriés ?",
        "a": "Les niveaux de triche, HWID Spoofer, UGC et Skin Changer sont disponibles sur {siteDomain}/products/dota-2-cheats avec des listes de fonctionnalités et un paiement via notre partenaire."
      }
    ]
  },
  "footer": {
    "tagline": "Astuces Dota 2, scripts, hack de carte et outils pour PC.{siteDomain}",
    "explore": "Explorer",
    "exploreLinks": [
      {
        "id": "products",
        "href": "/",
        "label": "Présentation des fonctionnalités",
        "ariaLabel": "Caractéristiques",
        "scrollTarget": "features"
      },
      {
        "id": "products",
        "href": "/product/",
        "label": "Produit",
        "ariaLabel": "Produit"
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
        "label": "Forum",
        "ariaLabel": "Forum"
      }
    ],
    "supportLinks": [
      {
        "href": "/faq/",
        "label": "FAQ pré-achat",
        "ariaLabel": "FAQ"
      },
      {
        "href": "/support/",
        "label": "Contacter l'assistance",
        "ariaLabel": "Assistance"
      }
    ],
    "support": "Assistance",
    "legal": "Juridique",
    "privacy": "Politique de confidentialité",
    "terms": "Conditions générales",
    "about": "À propos"
  },
  "legalPages": {
    "about": {
      "title": "À propos de DotaCheats",
      "description": "DotaCheats fournit des niveaux de triche Dota 2, des outils utilitaires et des ressources de support PC sur {siteDomain}.",
      "sections": [
        {
          "heading": "Qui nous sommes",
          "paragraphs": [
            "DotaCheats est une ressource axée sur PC pour les joueurs Dota 2 explorant les scripts, le maphack, le zoom hack et les flux de travail Skin Changer. Nous publions des comparaisons de niveaux, des guides de configuration et des notes de statut en direct afin que vous puissiez évaluer les astuces Dota avant de passer à la caisse.",
            "Tous les noms de produits sont utilisés uniquement à des fins d’identification."
          ]
        },
        {
          "heading": "Ce que nous publions",
          "paragraphs": [
            "Notre site couvre les niveaux de triche Lite, Pro et Elite, les utilitaires HWID, Skin Changer et les workflows de récupération de compte. Les articles du blog expliquent les configurations classées sécurisées, les vérifications des jours de mise à jour et le comportement des mises à jour VAC.",
            "Le contenu est mis à jour lorsque des correctifs arrivent ou lorsque les modules de chargement sont déplacés. Vérifiez la bannière d'état de la page d'accueil et le statut Discord avant chaque session."
          ]
        },
        {
          "heading": "Assistance",
          "paragraphs": [
            "Les questions concernant la compatibilité, les erreurs de chargement ou le paiement sont traitées via Discord et l'assistance par courrier électronique. Incluez votre e-mail de commande, votre compte Steam et votre version Windows lors de l'ouverture d'un ticket."
          ]
        }
      ]
    },
    "privacy": {
      "title": "Politique de confidentialité",
      "description": "Comment DotaCheats gère les analyses, les cookies et les données de contact lorsque vous utilisez {siteDomain}.",
      "sections": [
        {
          "heading": "Informations que nous collectons",
          "paragraphs": [
            "Nous pouvons collecter des analyses Web standard telles que les pages vues, le type d'appareil, le navigateur et la région approximative via Google Analytics lorsqu'il est activé. Le paiement et la délivrance de la licence s'effectuent sur des pages de paiement externes: nous ne stockons pas les données de carte de paiement sur {siteDomain}."
          ]
        },
        {
          "heading": "Comment nous utilisons les données",
          "paragraphs": [
            "Les analyses nous aident à comprendre quels guides et pages de produits sont utiles afin que nous puissions améliorer le contenu et réparer les liens rompus. Les tickets d'assistance peuvent conserver l'adresse e-mail et le contenu du message que vous fournissez jusqu'à ce que le problème soit résolu."
          ]
        },
        {
          "heading": "Biscuits",
          "paragraphs": [
            "Nous utilisons le minimum de cookies requis pour l'analyse. Vous pouvez bloquer les cookies dans les paramètres de votre navigateur; le contenu principal du site reste accessible sans eux."
          ]
        },
        {
          "heading": "Assistance",
          "paragraphs": [
            "Pour les questions de confidentialité, utilisez les options de la page Support. Les règles d'achat et de remboursement figurent dans nos conditions générales."
          ]
        }
      ]
    },
    "terms": {
      "title": "Conditions générales",
      "description": "Conditions d'achat, de licence, de remboursement et d'utilisation des produits DotaCheats et de {siteDomain}.",
      "sections": [
        {
          "heading": "Accord",
          "paragraphs": [
            "Dernière mise à jour: septembre 2026. En utilisant {siteDomain} ou en effectuant le paiement pour tout produit répertorié ici, vous acceptez ces conditions générales et notre politique de confidentialité."
          ]
        },
        {
          "heading": "Ce que vous achetez",
          "paragraphs": [
            "Nous vendons l'accès aux niveaux de triche de Dota 2 (Lite, Pro, Elite) et aux outils utilitaires (HWID Spoofer, UGC, Skin Changer / Unlock All) fournis via un portail opérateur et un chargeur pour Steam sous Windows.",
            "Les listes de fonctionnalités sur chaque page de produit décrivent ce qui est inclus au moment de l'achat. Les modules peuvent changer lors de la mise à jour de Dota 2 ou des systèmes anti-triche."
          ]
        },
        {
          "heading": "Paiement et livraison",
          "paragraphs": [
            "Le paiement et la livraison des licences s'effectuent sur des pages de paiement externes.{siteDomain} ne traite ni ne stocke les numéros de carte de paiement.",
            "Après l'achat, utilisez le portail de l'opérateur lié à votre flux de commande pour télécharger le chargeur actuel et le guide de configuration avant de lancer Dota 2."
          ]
        },
        {
          "heading": "Utilisation de la licence",
          "paragraphs": [
            "Les licences sont réservées à votre usage personnel. Ne partagez pas de fichiers de chargeur, de connexions au portail ou de clés de licence. Les limites de HWID et d’appareils dépendent de votre niveau et sont appliquées dans le portail."
          ]
        },
        {
          "heading": "Remboursements et achats",
          "paragraphs": [
            "Toutes les ventes sont définitives une fois le paiement terminé. Nous ne remboursons pas les achats pour changement d'avis, les interdictions de compte, les pénalités VAC ou les problèmes causés par l'ignorance des guides de configuration ou de l'exécution de modules alors que la bannière d'état s'affiche hors ligne.",
            "Si le produit ne fonctionne pas comme décrit sur une configuration prise en charge (Steam Dota 2 sur Windows 10/11, le chargeur actuel du portail et la bannière d'état en direct affichée en ligne lorsque vous avez démarré), contactez-nous via la page d'assistance. Incluez votre e-mail de commande, la version de Windows, la version de Dota 2 et des captures d'écran ou le texte d'erreur exact du chargeur.",
            "Nous pouvons, à notre discrétion, proposer une solution, un accès au remplacement ou un remboursement partiel/total lorsque nous confirmons un défaut de notre part. Nous ne sommes pas obligés d’approuver chaque demande."
          ]
        },
        {
          "heading": "Disponibilité et risque",
          "paragraphs": [
            "Les outils tiers pour Dota 2 peuvent entrer en conflit avec les mises à jour du jeu et les systèmes anti-triche. Vous utilisez ce logiciel à vos propres risques, y compris en cas d'action éventuelle sur votre compte.",
            "Vérifiez la bannière d'état de la page d'accueil avant chaque session. Ne faites pas la queue lorsque les modules sont hors ligne ou mal alignés après un correctif."
          ]
        },
        {
          "heading": "Changements",
          "paragraphs": [
            "Nous pouvons mettre à jour ces conditions. La date « Dernière mise à jour » en haut changera lorsque nous le ferons. L'utilisation continue du site après les modifications signifie que vous acceptez les conditions révisées."
          ]
        },
        {
          "heading": "Assistance",
          "paragraphs": [
            "Pour les questions sur les conditions, la facturation ou le chargeur, utilisez les boutons de la page Support. Consultez également notre politique de confidentialité pour savoir comment nous traitons les données du site."
          ]
        }
      ]
    },
    "support": {
      "title": "Assistance DotaCheats",
      "description": "Obtenez de l'aide pour les questions relatives au chargeur, au HWID et au paiement sur {siteDomain}."
    }
  },
  "common": {
    "breadcrumbHome": "Accueil",
    "breadcrumbProducts": "Produit",
    "breadcrumbBlog": "Blog",
    "breadcrumbForum": "Forum",
    "breadcrumbFaq": "FAQ",
    "breadcrumbAbout": "À propos",
    "breadcrumbCompareUtilities": "Comparez les utilitaires",
    "breadcrumbPrivacy": "Confidentialité",
    "breadcrumbTerms": "Conditions",
    "breadcrumbSupport": "Assistance",
    "contactSupport": "Contacter le support",
    "backToProducts": "Retour au produit"
  },
  "notFound": {
    "metaDescription": "La page que vous avez demandée est introuvable sur {siteDomain}.",
    "title": "Page introuvable",
    "body": "Cette URL n'existe pas ou a peut-être été déplacée. Revenez à la page d'accueil ou parcourez les niveaux et les produits de triche.",
    "backHome": "Retour à la maison",
    "viewProducts": "Voir les produits",
    "viewElite": "Voir les astuces Elite"
  },
  "pages": {
    "faq": {
      "eyebrow": "Centre d'aide",
      "title": "FAQ sur les astuces, les produits et les guides",
      "description": "Tout sur les niveaux Lite, Pro, Elite, les utilitaires, la sécurité et les sujets de blog en un seul endroit.",
      "schemaName": "FAQ: Astuces et produits Dota 2",
      "schemaDescription": "Réponses sur les niveaux de triche de Dota 2, le maphack, les scripts, les outils HWID, les guides de blog et le paiement sur {siteDomain}."
    },
    "forum": {
      "eyebrow": "Forum communautaire Dota 2",
      "title": "Forum communautaire Dota 2",
      "description": "Fils archivés en lecture seule sur la console, la carte, les patchs et les builds. Les réponses sont fermées.",
      "exploreGuides": "Découvrez les guides",
      "postsAria": "Messages de la communauté",
      "sortAria": "Tri des messages",
      "sortPopular": "Populaire",
      "sortLatest": "Dernier",
      "sortTop": "Les plus discutés",
      "searchPlaceholder": "Rechercher des discussions",
      "searchAria": "Rechercher des discussions",
      "filterAria": "Filtrer les discussions par sujet",
      "filterAll": "Tous les sujets",
      "resultsCount": "guider les discussions",
      "voteAria": "Vote de discussion",
      "upvoteAria": "Votez pour cette discussion",
      "downvoteUnavailableAria": "Le vote négatif n'est pas disponible",
      "guideTeam": "Équipe de guides DotaCheats",
      "guideBasedQa": "Questions et réponses basées sur un guide",
      "fromGuide": "Extrait du guide:",
      "comments": "commentaires",
      "closedThread": "Fil fermé",
      "closedBy": "Fermé par l'archive",
      "repliesClosed": "Les réponses sont fermées",
      "readDiscussion": "Lire la discussion",
      "empty": "Aucune discussion ne correspond. Essayez une autre recherche ou un autre sujet.",
      "emptyArchive": "Pas encore de discussions. Les nouveaux sujets apparaîtront ici.",
      "categoryGeneral": "Général",
      "categoryGuides": "Guides et builds",
      "categoryPatch": "Mises à jour",
      "categoryCommunity": "Communauté",
      "paginationAria": "Pages de discussions",
      "pagePrevious": "Précédent",
      "pageNext": "Suivant",
      "sidebarTitle": "Communauté DotaCheats",
      "sidebarIntro": "Archive en lecture seule. Les fils restent en référence, impossible d'ouvrir un fil ou de répondre.",
      "statsDiscussions": "guider les discussions",
      "statsTopics": "sujets",
      "exploreAllGuides": "Explorez tous les guides",
      "communitiesHeading": "Communautés",
      "browseRelated": "Parcourir les questions et réponses connexes",
      "browseAllCommunities": "Parcourez toutes les communautés",
      "guidelinesHeading": "Lignes directrices de la communauté",
      "guideline1": "Restez amical et constructif",
      "guideline2": "Restez sur le sujet et ajoutez du contexte",
      "guideline3": "Marquer les spoilers et le contenu sensible",
      "readFullGuidelines": "Lire les directives complètes",
      "sidebarFoot": "À propos · Lignes directrices · Confidentialité · Conditions"
    },
    "utilities": {
      "title": "Comparez les utilitaires",
      "description": "HWID Spoofer, UGC et Skin Changer résolvent différents problèmes. Adaptez l'outil à votre situation avant de procéder au paiement.",
      "tableAria": "Comparaison des utilitaires",
      "tableUtility": "Utilitaire",
      "tableBestFor": "Idéal pour",
      "tableProductPage": "Page produit",
      "viewDetails": "Voir",
      "includes": "Comprend:",
      "moreFeatures": "plus",
      "backToProducts": "Retour au produit",
      "schemaName": "Comparez les utilitaires Dota 2",
      "useCases": {
        "hwid-spoofer": "Nouveau flag PC ou matériel après un ban. Réinitialise l'apparence de ta machine avant un nouveau compte."
      }
    }
  },
  "ui": {
    "skipLink": "Passer au contenu principal",
    "browseCheats": "Essayez maintenant",
    "browseCheatsNav": "Essayer",
    "browseCheatsMobile": "Commencer le paiement",
    "homeAria": "Accueil DotaCheats",
    "checkoutAria": "Commencer le paiement",
    "menuOpen": "Ouvrir le menu",
    "menuClose": "Fermer le menu",
    "themeLight": "Passer en mode lumière",
    "themeDark": "Passer en mode sombre",
    "languageSwitcherLabel": "Langue",
    "languageNames": {
      "en": "English",
      "es": "Español",
      "de": "Deutsch",
      "fr": "Français"
    }
  }
};
