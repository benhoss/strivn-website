import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** Spanish of the pricing page: usted. */
export function esPage(b: LandingBits): SwitchPage {
  const costAnswer = `Los precios son públicos: ${b.publicPrices}. ${b.gpsFiles} ${b.trialSentence} Sin tarjeta. El Pro sigue a medida.`;

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Pasar de Opteamal a STRIVN',
    meta: {
      title: 'Por qué pasar de Opteamal a STRIVN',
      description:
        'Opteamal, editor belga, fue adquirida por Teamworks el 18 de diciembre de 2025. Comparación factual: precios STRIVN públicos, cuenta sin aprobación del club, check-in por enlace. Teamworks AMS anuncia integraciones, un módulo médico y certificaciones.',
      ogTitle: '¿Usa Opteamal? Por qué pasar a STRIVN',
      ogDescription:
        'Adquirida por Teamworks el 18 de diciembre de 2025. Precios STRIVN públicos, arranque en autoservicio, check-in por enlace. La comparación solo atribuye a Opteamal hechos públicos.',
      twitterTitle: 'Por qué pasar de Opteamal a STRIVN',
      twitterDescription: 'Comparación factual para clubes que siguen en Opteamal, ahora en Teamworks.',
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, la torre de control del staff de rendimiento',
    },
    hero: {
      eyebrow: 'Opteamal pasa a Teamworks',
      titleLead: '¿Usa Opteamal?',
      title: 'Por eso se pasa a STRIVN.',
      lede: 'El 18 de diciembre de 2025, Teamworks adquirió Opteamal, editor belga, y la está integrando en Teamworks. Esta página pone lado a lado los hechos públicos de su lado y lo que STRIVN entrega. Donde un detalle de Opteamal no es público, lo escribimos, en lugar de inventar una carencia.',
      primaryCta: 'Pasar a STRIVN',
      secondaryCta: 'Ver la comparación',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Comparación',
      title: 'Opteamal (ahora Teamworks) y STRIVN, punto por punto.',
      lede: 'Dos columnas de hechos, y después una lectura. La ventaja es de Teamworks AMS cuando sus anuncios públicos lo dicen. Es de STRIVN cuando el contraste es público. Si no, la lectura queda sin fallo.',
      columns: {
        criterion: 'Criterio',
        opteamal: 'Opteamal (ahora Teamworks)',
        strivn: 'STRIVN',
        verdict: 'Veredicto',
      },
      rows: [
        {
          criterion: 'Quién decide lo que sigue',
          opteamal:
            'Opteamal, editor belga, fue adquirida por Teamworks el 18 de diciembre de 2025 y se está integrando en Teamworks. Hoja de ruta y migración: Teamworks.',
          strivn: 'Editor independiente. La hoja de ruta es la de STRIVN.',
          verdictLead: 'Hecho',
          verdict: 'Desde la adquisición, lo que sigue de Opteamal se decide en Teamworks.',
        },
        {
          criterion: 'Precio',
          opteamal: 'A medida, no público.',
          strivn: `Público: ${b.publicPrices}.`,
          verdictLead: 'STRIVN',
          verdict: 'Los precios de STRIVN están en la página, salvo el Pro, que sigue a medida.',
        },
        {
          criterion: 'Cómo se compra',
          opteamal: 'Venta a empresas.',
          strivn:
            'El staff crea la cuenta: nombre, correo, teléfono, contraseña, idioma, país. Sin aprobación del club ni de una federación. 30 días de Semi-Pro al abrir, sin tarjeta.',
          verdictLead: 'STRIVN',
          verdict: 'Arranque en autoservicio en STRIVN. Venta a empresas de su lado.',
        },
        {
          criterion: 'Integraciones',
          opteamal:
            'Teamworks AMS anuncia más de 100 integraciones. La lista que aún aplica a un club de Opteamal no es pública aquí.',
          strivn:
            'Solo archivos, en Semi-Pro y en Pro: CSV, XLSX, Catapult, STATSports, trazas SPT / GameTraka. Sin conector GPS directo, sin API pública.',
          verdictLead: 'Teamworks AMS',
          verdict: 'Las integraciones anunciadas son una ventaja de Teamworks AMS. STRIVN se queda en los archivos.',
        },
        {
          criterion: 'Médico',
          opteamal:
            'Teamworks AMS anuncia un módulo médico. El detalle que aún es propio de Opteamal no es público aquí.',
          strivn:
            'Diario de lesión, lista de comprobación y plan de vuelta, sesiones de reatletización. Cuadro médico en Semi-Pro y en Pro. Sin biblioteca de protocolos.',
          verdictLead: 'Teamworks AMS',
          verdict: 'El módulo médico anunciado es una ventaja de Teamworks AMS.',
        },
        {
          criterion: 'Certificaciones',
          opteamal: 'Teamworks AMS anuncia ISO 27001 y SOC 2.',
          strivn:
            'Ninguna certificación reivindicada. Transporte HTTPS. Derecho de acceso, rectificación, supresión o copia a través de hello@strivn.net. Sin país de alojamiento ni acuerdo de tratamiento nombrados.',
          verdictLead: 'Teamworks AMS',
          verdict: 'Las certificaciones anunciadas son una ventaja de Teamworks AMS.',
        },
        {
          criterion: 'Idiomas',
          opteamal: 'No público en esta página.',
          strivn: 'Francés, inglés, neerlandés, alemán, portugués y español. El francés es el texto de origen.',
          verdictLead: 'Sin fallo',
          verdict: 'STRIVN documenta seis idiomas, entre ellos el francés y el neerlandés. El detalle de Opteamal no es público.',
        },
        {
          criterion: 'Check-in del jugador',
          opteamal: 'No público en esta página.',
          strivn:
            'Enlace por WhatsApp o correo, sin aplicación. Envíos automáticos en Semi-Pro y en Pro. WHOOP puede rellenar el check-in de antemano en esos niveles.',
          verdictLead: 'Sin fallo',
          verdict: 'STRIVN documenta el enlace sin aplicación. El equivalente en Opteamal no es público.',
        },
        {
          criterion: 'Al borde del campo',
          opteamal: 'No público en esta página.',
          strivn:
            'Asistencias, crono por bloque, equipos y marcador. Diario sin conexión en el teléfono, sincronizado al volver.',
          verdictLead: 'Sin fallo',
          verdict: 'STRIVN documenta el modo sin conexión. El equivalente en Opteamal no es público.',
        },
        {
          criterion: 'Carga y GPS',
          opteamal: 'No público en esta página.',
          strivn:
            'Semana en UA, ACWR 7 días sobre 28, lecturas Apto, Seguimiento, En riesgo. Importación de archivos GPS en Semi-Pro y en Pro, incluido el cálculo de trazas SPT en bruto.',
          verdictLead: 'Sin fallo',
          verdict: 'STRIVN documenta la carga y los archivos GPS. El detalle de Opteamal no es público.',
        },
      ],
      note: 'Hechos de Opteamal y Teamworks limitados a la información pública a 15 de octubre de 2026: adquisición, precio a medida, venta a empresas, y anuncios de Teamworks AMS (integraciones, módulo médico, ISO 27001, SOC 2). El resto de su columna queda marcado como no público.',
    },
    reasons: {
      id: 'raisons',
      eyebrow: 'Por qué cambiar',
      title: 'Once razones para cambiar',
      lede: 'Lo que STRIVN entrega, y el único hecho nuevo del lado de Opteamal: desde la adquisición, lo que sigue se decide en Teamworks.',
      items: [
        {
          title: 'Los precios están en la página',
          body: `Free, Amateur, Semi-Pro y Pro: ${b.publicPrices}. Los mismos importes del catálogo. El Pro sigue a medida, como un presupuesto, no como un precio oculto de los otros niveles.`,
        },
        {
          title: 'Usted abre la cuenta',
          body: 'Nombre, correo, teléfono, contraseña, idioma, país. Sin aprobación del club ni de una federación. La cuenta empieza con 30 días de Semi-Pro, sin tarjeta.',
        },
        {
          title: 'Los jugadores responden con un enlace',
          body: 'Wellness (fatiga, sueño, humor, estrés) y RPE, por WhatsApp o correo, sin aplicación. El envío automático de mañana y de noche está en Semi-Pro y en Pro. WHOOP puede rellenar el check-in de antemano en esos niveles.',
        },
        {
          title: 'Al borde del campo funciona sin conexión',
          body: 'Asistencias, crono por bloque, equipos y marcador. El teléfono guarda un diario y lo sincroniza al volver. Si no se ha puesto la duración, la carga usa el tiempo realmente jugado.',
        },
        {
          title: 'La semana se planifica en UA',
          body: 'Objetivo, previsto contra realizado, ajuste por jugador (escala, exclusión o trabajo individual) sin cambiar la parrilla del equipo ni la convocatoria. La carga que sale del GPS pide Semi-Pro.',
        },
        {
          title: 'El ejercicio se anima y se comparte',
          body: 'Fútbol, balonmano, rugby, baloncesto, voleibol. Animación, descarga en PNG o WebM, PNG compartido desde la hoja de compartir del teléfono. 3 pizarras y 3 plantillas en Free, sin tope a partir de Amateur.',
        },
        {
          title: 'Francés y neerlandés, más cuatro idiomas',
          body: 'Francés, inglés, neerlandés, alemán, portugués y español, del lado del entrenador y del lado del jugador. El francés es el texto de origen. El neerlandés está para los staffs belgas.',
        },
        {
          title: 'Cada rol tiene sus derechos',
          body: 'Entrenador principal, segundo, médico, fisioterapeuta, preparador físico, analista, delegado, ojeador, entrenador de porteros. Free: solo el propietario. Amateur: una invitación más. Semi-Pro y Pro: sin tope.',
        },
        {
          title: 'La ausencia saca al jugador de la convocatoria',
          body: 'Un jugador ausente sale de las convocatorias de entrenamiento y de partido. Un jugador limitado en el entrenamiento sale de los partidos. Cuidados, programa individual y una selección de concentración explícita siguen disponibles.',
        },
        {
          title: 'La traza SPT se recalcula',
          body: `Solo archivos, ${b.gpsTiers}: CSV o XLSX (Catapult, STATSports, o cualquier tabla) y trazas SPT / GameTraka (.gt). STRIVN calcula distancia y zonas de velocidad sobre la traza en bruto. Sin conector directo.`,
        },
        {
          title: 'Lo que sigue de Opteamal se decide en Teamworks',
          body: 'Desde el 18 de diciembre de 2025, la hoja de ruta y la migración de Opteamal están en manos de Teamworks. Es un cambio de quién decide, no un juicio sobre el producto. STRIVN sigue siendo un editor independiente.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Cómo cambiar',
      title: 'Tres pasos. No un proyecto de integración.',
      lede: 'Puede abrir un espacio mientras su contrato con Opteamal sigue en vigor. No conocemos su preaviso: está en su contrato, no aquí.',
      steps: [
        {
          n: '01',
          title: 'Cree el espacio',
          body: 'Nombre, correo, teléfono, contraseña, idioma, país. Sin aprobación del club. La cuenta empieza con 30 días de Semi-Pro, sin tarjeta.',
        },
        {
          n: '02',
          title: 'Importe el historial',
          body: 'CSV o XLSX para la carga, el RPE y el wellness. Las exportaciones GPS (Catapult, STATSports, SPT / GameTraka) entran en Semi-Pro, así que durante la prueba. Las columnas se adivinan y después se recuerdan para el equipo.',
        },
        {
          n: '03',
          title: 'Invite al staff',
          body: 'Un rol por persona, con sus permisos. En Free, solo el propietario. En Amateur, una invitación más. En Semi-Pro y en Pro, sin tope.',
        },
      ],
      offer: {
        tag: 'Para clubes que dejan Opteamal',
        title: 'Podemos hacer la primera correspondencia con usted.',
        body: 'Los tres pasos bastan para empezar. Si quiere que hagamos la correspondencia de columnas con usted, una vez, escríbanos. La oferta de acompañamiento sigue por confirmar.',
        cta: 'Hablar de mi migración',
        href: mail('Migración desde Opteamal'),
      },
    },
    stay: {
      id: 'rester',
      eyebrow: 'Quedarse',
      title: 'Cuándo Opteamal o Teamworks sigue siendo la elección correcta.',
      lede: 'Cambiar no es el movimiento correcto en estos casos. Los escribimos para que la página siga siendo útil.',
      items: [
        {
          title: 'El módulo médico de empresa',
          body: 'Teamworks AMS anuncia un módulo médico. STRIVN cubre el diario, la vuelta y la reatletización, no una biblioteca de protocolos.',
        },
        {
          title: 'ISO 27001 y SOC 2',
          body: 'Teamworks AMS los anuncia. STRIVN no reivindica certificación, país de alojamiento ni acuerdo de tratamiento.',
        },
        {
          title: 'Las integraciones directas',
          body: 'Teamworks AMS anuncia más de 100 integraciones. STRIVN importa archivos y no tiene conector GPS directo ni API pública.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Las preguntas cuando se deja Opteamal.',
      email: 'hello@strivn.net',
      items: [
        {
          q: '¿Puedo llevarme mi historial de Opteamal?',
          a: 'Por archivo, sí. Carga, RPE y wellness: CSV o XLSX. Las exportaciones GPS (CSV, XLSX, Catapult, STATSports, o una traza SPT / GameTraka) se importan en Semi-Pro y en Pro, el nivel de la prueba de 30 días. La correspondencia de columnas se adivina a partir de cabeceras conocidas y después se guarda para el equipo. No hay API pública para vaciar una cuenta de Opteamal. Escríbanos a hello@strivn.net si quiere hacer la primera correspondencia con nosotros.',
          mailto: mail('Migración desde Opteamal'),
        },
        {
          q: 'Sigo bajo contrato. ¿Cuándo puedo cambiar?',
          a: 'El preaviso, la renovación y el coste de salida están en su contrato con Opteamal o Teamworks. No los publicamos, y esta página no le dice que lo rompa. Puede crear un espacio STRIVN en paralelo: sin aprobación del club, sin tarjeta, con 30 días de Semi-Pro.',
        },
        {
          q: '¿Cuánto cuesta, de verdad?',
          a: costAnswer,
        },
        {
          q: '¿Qué cambia para los jugadores?',
          a: 'Para responder, no instalan nada. Un enlace de WhatsApp o de correo basta para el wellness, el RPE y los recordatorios. El envío automático está en Semi-Pro y en Pro. STRIVN Player y STRIVN coach (iOS y Android) existen además: son carcasas alrededor de la aplicación web, con notificaciones, y un crono al borde del campo en la app del entrenador.',
        },
        {
          q: '¿Y los idiomas, para un club belga?',
          a: 'STRIVN está en francés, inglés, neerlandés, alemán, portugués y español, del lado del entrenador y del lado del jugador. El francés es el texto de origen. El neerlandés está incluido. Los idiomas que Opteamal todavía sirve no se detallan aquí: no es público en esta página.',
        },
        {
          q: '¿Qué es lo que no encuentro?',
          a: 'El módulo médico que anuncia Teamworks AMS, las certificaciones ISO 27001 y SOC 2, y las más de 100 integraciones que anuncian. STRIVN no las reivindica. El diario de lesión, la vuelta y la importación de archivos sí se entregan.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Prueba Semi-Pro',
      title: 'Cree el espacio e importe su historial.',
      body: `${b.trialSentence} Su contrato con Opteamal no se rescinde solo: usted elige el momento.`,
      primaryCta: 'Crear mi espacio',
      secondaryCta: 'Hablar de mi migración',
      secondaryHref: mail('Migración desde Opteamal'),
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks y Teamworks AMS son marcas de sus respectivos titulares. STRIVN no está afiliada a estas sociedades ni está aprobada por ellas. Catapult, STATSports, SPT, GameTraka y WHOOP son marcas de sus titulares. La importación GPS se hace por archivo; WHOOP puede rellenar el check-in de antemano en Semi-Pro y en Pro. La información sobre Opteamal y Teamworks procede de fuentes públicas a 15 de octubre de 2026 y puede cambiar. Cifras de precio de STRIVN: el catálogo vigente.',
  };
}
