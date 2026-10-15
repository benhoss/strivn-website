import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** Spanish of the pricing page: usted. Translates fr.ts, does not extend it. */
export function esPage(b: LandingBits): SwitchPage {
  const migration = mail('Pasar de Teamworks a STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN o Teamworks',
    meta: {
      title: 'Alternativa a Teamworks: STRIVN, para el staff de su club',
      description: `¿STRIVN o Teamworks? Precios públicos, cuenta abierta en línea, ${b.trialPerk}, en seis idiomas. Clubes de Opteamal, bienvenidos.`,
      ogTitle: '¿Usa Teamworks? Pase a STRIVN, pensado para su staff.',
      ogDescription: `Teamworks equipa a más de 6500 organizaciones de élite, previa demostración. STRIVN publica sus precios y se abre en línea: ${b.trialPerk}.`,
      twitterTitle: 'STRIVN o Teamworks: pase a STRIVN.',
      twitterDescription: `Precios públicos, cuenta abierta en línea, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, la torre de control del staff de rendimiento',
    },
    hero: {
      eyebrow: 'STRIVN o Teamworks',
      titleLead: '¿Usa Teamworks?',
      title: 'Pase a STRIVN, pensado para su staff.',
      lede: `Teamworks equipa a más de 6500 organizaciones deportivas de élite, previa demostración y bajo presupuesto. STRIVN está pensado para el staff de un club: precios públicos, cuenta abierta en línea y ${b.trialDays} días de Semi-Pro para comparar con sus sesiones.`,
      primaryCta: 'Crear mi espacio gratis',
      secondaryCta: 'Comparar con Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN o Teamworks',
      title: 'Compare STRIVN y Teamworks, punto por punto.',
      lede: 'Cinco puntos en los que Teamworks publica su respuesta, frente a lo que ofrece STRIVN. El resto se juzga con sus propias sesiones.',
      columns: {
        criterion: 'Criterio',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
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
          criterion: 'Hoja de ruta',
          teamworks: 'Decidida en Durham, Estados Unidos, para 6500 organizaciones.',
          strivn:
            'Decidida por STRIVN, editor independiente. Anunciamos cada novedad por e-mail a los entrenadores.',
        },
        {
          criterion: 'Clubes de Opteamal',
          teamworks: 'Paso anunciado a la plataforma Teamworks desde la compra del 18 de diciembre de 2025.',
          strivn: 'Historial importado por archivo, mientras su contrato sigue vigente.',
        },
      ],
      note: 'Fuentes: teamworks.com y comunicado de Teamworks del 18 de diciembre de 2025, a 15 de octubre de 2026. Cifras de STRIVN a 18 de septiembre de 2026.',
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Por qué STRIVN',
      title: 'Lea el estado de cada jugador antes de entrenar.',
      lede: 'Teamworks cubre el reclutamiento, las operaciones y el rendimiento de las organizaciones de élite. STRIVN se centra en la semana de su staff. Siete razones para elegirlo.',
      items: [
        {
          title: 'Envíe el check-in por WhatsApp',
          body: 'El jugador recibe un enlace por WhatsApp o e-mail y responde sin instalar ninguna aplicación. Anota fatiga, sueño, ánimo y estrés, y después su RPE tras la sesión. El envío automático está en Semi-Pro y en Pro. Usted lee las respuestas antes del entrenamiento.',
        },
        {
          title: 'Planifique la semana en UA',
          body: 'Fije el objetivo, siga lo previsto frente a lo realizado y ajuste jugador por jugador. STRIVN calcula el ACWR a 7 y 28 días y sitúa a cada jugador en uno de tres estados.',
        },
        {
          title: 'Importe la exportación GPS, sea cual sea el sensor',
          body: `Suba el CSV o el XLSX de Catapult, de STATSports o de otro sistema, o la traza SPT / GameTraka. Las columnas se reconocen en la primera importación y quedan memorizadas. Importación ${b.gpsTiers}.`,
        },
        {
          title: 'Dirija la sesión desde la banda',
          body: 'Asistencia, cronómetro por bloque, equipos y marcador caben en el teléfono. Sin red, el teléfono guarda un registro y lo sincroniza al volver. Sin duración introducida, STRIVN calcula la carga sobre el tiempo realmente jugado.',
        },
        {
          title: 'Trabaje en español, francés o neerlandés',
          body: 'STRIVN existe en seis idiomas: español, francés, neerlandés, inglés, alemán y portugués. Cada miembro del staff elige el suyo al abrir su cuenta.',
        },
        {
          title: 'Dé a cada miembro del staff su rol',
          body: 'Nueve roles, del primer entrenador al fisioterapeuta y al analista, cada uno con sus permisos. En Semi-Pro y en Pro, el número de miembros del staff es ilimitado.',
        },
        {
          title: 'Hable con quien construye STRIVN',
          body: 'El botón «Hablar con Benoit» abre un e-mail a quien construye STRIVN. Describa su staff y su herramienta actual, y le responderemos.',
        },
      ],
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
          title: 'Invite al staff',
          body: 'Asigne un rol a cada persona, con sus permisos. Free incluye una plaza, Amateur dos, y Semi-Pro y Pro un número ilimitado.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Sus preguntas antes de dejar Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: '¿Puedo recuperar mi historial de Teamworks u Opteamal?',
          a: `Sí, por archivo. Exporte la carga, el RPE y el wellness en CSV o XLSX y súbalos a STRIVN. Las exportaciones GPS se importan ${b.gpsTiers}, es decir, durante la prueba de ${b.trialDays} días. Las columnas se reconocen por sus encabezados y quedan memorizadas para el equipo. Para la primera correspondencia, escríbanos a hello@strivn.net.`,
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
          a: `Los precios son públicos: ${b.publicPrices}. ${b.trialSentence} Empieza sin tarjeta bancaria.`,
        },
        {
          q: '¿STRIVN lee los datos de mi GPS?',
          a: `Sí, a partir de la exportación de la sesión. Suba el CSV o el XLSX de Catapult, de STATSports o de otro sistema, o la traza SPT / GameTraka. STRIVN reconoce las columnas en la primera importación y calcula la distancia y las zonas de velocidad sobre la traza en bruto. Importación ${b.gpsTiers}.`,
        },
        {
          q: '¿Qué cambia para los jugadores?',
          a: 'Responden al check-in con un enlace de WhatsApp o e-mail, sin instalar ninguna aplicación. El envío automático de mañana y tarde está en Semi-Pro y en Pro. Las apps STRIVN Player y STRIVN Coach, en iOS y Android, añaden las notificaciones.',
        },
        {
          q: '¿STRIVN funciona en español?',
          a: 'Sí. STRIVN existe en español, francés, neerlandés, inglés, alemán y portugués, para el staff y para los jugadores. Cada miembro del staff elige su idioma al abrir su cuenta.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Cree su espacio y compare con sus sesiones.',
      body: `Empiece hoy, sin demostración ni presupuesto. ${b.trialSentence} Su staff se une cuando ve sus primeros informes.`,
      primaryCta: 'Crear mi espacio gratis',
      secondaryCta: 'Hablar con Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS y Opteamal son marcas de sus titulares. STRIVN no está afiliado a estas empresas ni cuenta con su aprobación. Catapult, STATSports, SPT, GameTraka y WHOOP son marcas de sus titulares. La información sobre Teamworks y Opteamal procede de fuentes públicas a 15 de octubre de 2026.',
  };
}
