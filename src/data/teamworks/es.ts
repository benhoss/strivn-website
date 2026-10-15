import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** Spanish of the pricing page: usted. Translates fr.ts, does not extend it. */
export function esPage(b: LandingBits): SwitchPage {
  const migration = mail('Pasar de Teamworks a STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN o Teamworks',
    meta: {
      title: 'Alternativa a Teamworks: STRIVN, la IA que lee su plantilla',
      description: `¿STRIVN o Teamworks? Un asistente que lee carga, GPS y enfermería, un conector Claude y ChatGPT, precios públicos. ${b.trialPerk}.`,
      ogTitle: '¿Usa Teamworks? Pase a STRIVN, la IA que lee a sus jugadores.',
      ogDescription:
        'El asistente de STRIVN lee la carga, el wellness, el GPS, la enfermería y los partidos, y prepara las acciones que su staff valida.',
      twitterTitle: 'STRIVN o Teamworks: la IA que lee a sus jugadores.',
      twitterDescription: `Un asistente sobre todos sus datos, un conector Claude y ChatGPT, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, la torre de control del staff de rendimiento',
    },
    hero: {
      eyebrow: 'STRIVN o Teamworks',
      titleLead: '¿Usa Teamworks?',
      title: 'Pase a STRIVN, la IA que lee a sus jugadores.',
      lede: 'Ask Teamworks responde a las preguntas sobre sus documentos. El asistente de STRIVN lee la carga, el wellness, el GPS, la enfermería y los partidos de cada jugador, y prepara las acciones que su staff valida.',
      primaryCta: 'Crear mi espacio gratis',
      secondaryCta: 'Comparar con Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Por qué STRIVN',
      title: 'Ponga la IA a trabajar sobre todos sus datos.',
      lede: 'Un staff profesional elige su herramienta por lo que hace con los datos del club. Ocho razones para elegir STRIVN.',
      items: [
        {
          title: 'Consulte todos sus datos con una sola pregunta',
          body: 'El asistente lee juntos la carga, el wellness, el GPS, la enfermería y los partidos, con más de 200 herramientas. Cada respuesta cita sus fuentes. Una pregunta guardada se vuelve a lanzar sobre las cifras del día.',
        },
        {
          title: 'Valide cada acción que prepara la IA',
          body: 'Una sesión que añadir al plan, una lesión que actualizar, un 1RM que registrar: el asistente prepara la acción en una tarjeta. Se aplica con su aprobación, y usted dispone de 60 segundos para anularla.',
        },
        {
          title: 'Conecte Claude o ChatGPT a sus datos',
          body: 'El propietario del equipo activa el conector, y su IA lee la plantilla, la carga, el GPS y los partidos con sus permisos. Nunca escribe a jugadores, padres ni al público. Usted revoca el acceso desde los ajustes.',
        },
        {
          title: 'Prepare al rival entre varios',
          body: 'El analista anota, graba y dibuja bajo cada rival. Fotografíe la hoja del partido: la IA extrae a los jugadores, que solo entran en la plantilla rival cuando usted lo confirma. Después se genera el informe, del dosier de scouting a la charla.',
        },
        {
          title: 'Controle la carga hasta el ejercicio',
          body: 'El RPE da la carga interna y la exportación GPS la carga externa, frente a frente. ACWR, monotonía y tensión se calculan solos, la previsión proyecta la semana y cada ejercicio conserva su medida GPS.',
        },
        {
          title: 'Filtre las convocatorias desde la enfermería',
          body: 'El panel médico reúne las lesiones activas, los jugadores en readaptación y la disponibilidad de cada uno. Filtra por sí solo las convocatorias, y el jugador sigue su programa de vuelta al juego en su app.',
        },
        {
          title: 'Dicte el debrief del partido',
          body: 'Hable después del partido: STRIVN da forma a su debrief. Usted lo relee y después lo aplica.',
        },
        {
          title: 'Hable con quien construye STRIVN',
          body: 'El botón «Hablar con Benoit» abre un e-mail a quien construye STRIVN. Describa su staff y su herramienta actual, y le responderemos.',
        },
      ],
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN o Teamworks',
      title: 'Compare STRIVN y Teamworks, punto por punto.',
      lede: 'Seis puntos en los que Teamworks publica su respuesta, frente a lo que STRIVN ofrece hoy.',
      columns: {
        criterion: 'Criterio',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Asistente de IA',
          teamworks: 'Ask Teamworks responde a las preguntas sobre un documento PDF: reglamento, guía, manual.',
          strivn:
            'El asistente lee la carga, el wellness, el GPS, la enfermería y los partidos, cita sus fuentes y prepara acciones que el staff valida.',
        },
        {
          criterion: 'Sus datos en su IA',
          teamworks: 'Una API para integrar Teamworks AMS en sus herramientas técnicas.',
          strivn: 'Un conector para Claude y ChatGPT, activado y revocable por el staff, con sus permisos.',
        },
        {
          criterion: 'Para quién',
          teamworks: 'Más de 6500 organizaciones deportivas de élite.',
          strivn: 'El staff de un club, del regional al profesional: 141 equipos, 14 de ellos profesionales.',
        },
        {
          criterion: 'Precio',
          teamworks: 'Bajo presupuesto, tras una demostración.',
          strivn: `Publicados en la página: ${b.publicPrices}.`,
        },
        {
          criterion: 'Puesta en marcha',
          teamworks: 'Solicitud de demostración a su equipo comercial.',
          strivn: `El staff crea la cuenta por sí mismo, sin aprobación del club. ${b.trialSentence}`,
        },
        {
          criterion: 'Clubes de Opteamal',
          teamworks: 'Paso anunciado a la plataforma Teamworks desde la compra del 18 de diciembre de 2025.',
          strivn: 'Historial importado por archivo, mientras su contrato sigue vigente.',
        },
      ],
      note: 'Fuentes: teamworks.com (páginas AMS y Performance), blog de Teamworks del 5 de agosto de 2026 sobre Ask Teamworks, comunicado del 18 de diciembre de 2025, a 15 de octubre de 2026. Cifras de STRIVN a 18 de septiembre de 2026.',
    },
    switch: {
      id: 'changer',
      eyebrow: 'Cambiar',
      title: 'Abra STRIVN mientras su contrato sigue vigente.',
      lede: `El preaviso figura en su contrato con Teamworks u Opteamal. Abra STRIVN en paralelo y pruébelo ${b.trialDays} días con sus propias sesiones.`,
      steps: [
        {
          n: '01',
          title: 'Cree el espacio',
          body: `Nombre, e-mail, teléfono, contraseña, idioma y país bastan. La cuenta arranca en Semi-Pro durante ${b.trialDays} días, sin tarjeta.`,
        },
        {
          n: '02',
          title: 'Importe el historial',
          body: 'Suba sus CSV o XLSX de carga, de RPE y de wellness, y después sus exportaciones GPS. Las columnas se reconocen y quedan memorizadas para el equipo.',
        },
        {
          n: '03',
          title: 'Haga su primera pregunta',
          body: 'Pregunte al asistente por la carga de la semana o por los jugadores a vigilar. Responde sobre su historial importado, con las fuentes a la vista.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Sus preguntas antes de dejar Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: '¿Mis datos siguen siendo míos?',
          a: 'Sí. Los consulta en STRIVN o desde su propia IA, mediante el conector que usted activa y revoca. Exporta las asistencias en CSV, el calendario en ICS, las pizarras tácticas y las presentaciones en PDF. Si vuelve al plan Free, todo su historial sigue consultable.',
        },
        {
          q: '¿Puede la IA actuar sin mi aprobación?',
          a: 'En STRIVN, cada acción preparada por el asistente espera su validación. A través del conector, Claude o ChatGPT actúan con sus permisos, como un miembro del staff, sin escribir nunca a jugadores, padres ni al público, ni tocar las convocatorias.',
        },
        {
          q: '¿Puedo recuperar mi historial de Teamworks u Opteamal?',
          a: `Sí, por archivo. Exporte la carga, el RPE y el wellness en CSV o XLSX y súbalos a STRIVN. Las exportaciones GPS se importan ${b.gpsTiers}, es decir, durante la prueba de ${b.trialDays} días. Para la primera correspondencia, escríbanos a hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Todavía tengo contrato. ¿Cuándo puedo cambiar?',
          a: `El preaviso y la fecha de renovación figuran en su contrato. Abra STRIVN en paralelo, sin aprobación del club y sin tarjeta, con ${b.trialDays} días de Semi-Pro. Usted rescinde en la fecha que le convenga.`,
        },
        {
          q: 'Usaba Opteamal. ¿Qué cambia con la compra de Teamworks?',
          a: 'Teamworks compró Opteamal el 18 de diciembre de 2025 y anuncia que pasará sus clubes a su propia plataforma. Si cambia de herramienta, cambie una sola vez: importe su historial en STRIVN mientras su contrato sigue vigente.',
        },
        {
          q: '¿Cuánto cuesta STRIVN?',
          a: `Los precios son públicos: ${b.publicPrices}. ${b.trialSentence} El Pro, bajo presupuesto, fija por contrato los volúmenes de IA y de WhatsApp.`,
        },
        {
          q: '¿STRIVN lee los datos de mi GPS?',
          a: `Sí, a partir de la exportación de la sesión. Suba el CSV o el XLSX de Catapult, de STATSports o de otro sistema, o la traza SPT / GameTraka. STRIVN reconoce las columnas en la primera importación y calcula la distancia y las zonas de velocidad sobre la traza en bruto. Importación ${b.gpsTiers}.`,
        },
        {
          q: '¿STRIVN funciona en español?',
          a: 'Sí. STRIVN existe en español, francés, neerlandés, inglés, alemán y portugués, para el staff y para los jugadores. Cada miembro del staff elige su idioma al abrir su cuenta.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Cree su espacio y haga su primera pregunta.',
      body: `Importe su historial y después consúltelo. ${b.trialSentence} Su staff se une cuando ve sus primeros informes.`,
      primaryCta: 'Crear mi espacio gratis',
      secondaryCta: 'Hablar con Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks y Opteamal son marcas de sus titulares. STRIVN no está afiliado a estas empresas ni cuenta con su aprobación. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka y WHOOP son marcas de sus titulares. La información sobre Teamworks y Opteamal procede de fuentes públicas a 15 de octubre de 2026.',
  };
}
