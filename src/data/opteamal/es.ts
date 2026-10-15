import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** Spanish of the pricing page: usted. Translates fr.ts, does not extend it. */
export function esPage(b: LandingBits): SwitchPage {
  const migration = mail('Migración desde Opteamal');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Pasar de Opteamal a STRIVN',
    meta: {
      title: 'Pasar de Opteamal a STRIVN',
      description: `Teamworks compró Opteamal el 18 de diciembre de 2025. Pase a STRIVN con su historial: precios públicos, ${b.trialPerk}, en español, francés y neerlandés.`,
      ogTitle: '¿Usa Opteamal? Pase a STRIVN con su historial.',
      ogDescription: `Precios públicos, cuenta abierta por el staff, ${b.trialPerk}. Importe sus archivos de carga y de GPS mientras su contrato sigue vigente.`,
      twitterTitle: 'Pasar de Opteamal a STRIVN',
      twitterDescription: `Precios públicos, ${b.trialPerk}, historial importado por archivo.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, la torre de control del staff de rendimiento',
    },
    hero: {
      eyebrow: 'Opteamal se une a Teamworks',
      titleLead: '¿Usa Opteamal?',
      title: 'Pase a STRIVN con su historial.',
      lede: `Teamworks compró Opteamal el 18 de diciembre de 2025. Abra un espacio STRIVN, importe sus archivos de carga y de GPS y compare con sus propias sesiones durante ${b.trialDays} días.`,
      primaryCta: 'Crear mi espacio',
      secondaryCta: 'Ver la comparativa',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Comparativa',
      title: 'Compare el precio, el alta y la hoja de ruta.',
      lede: 'Tres puntos en los que Opteamal, Teamworks y STRIVN publican cada uno su respuesta. El resto se juzga con sus propias sesiones.',
      columns: {
        criterion: 'Criterio',
        opteamal: 'Opteamal, en Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Precio',
          opteamal: 'Bajo presupuesto.',
          strivn: `Publicados en la página: ${b.publicPrices}.`,
        },
        {
          criterion: 'Alta de la cuenta',
          opteamal: 'Bajo petición, a través de su equipo comercial.',
          strivn: `El staff crea la cuenta por sí mismo, sin aprobación del club. ${b.trialSentence}`,
        },
        {
          criterion: 'Hoja de ruta',
          opteamal:
            'Decidida en Teamworks desde la compra del 18 de diciembre de 2025, migración incluida.',
          strivn:
            'Decidida por STRIVN, editor independiente. Anunciamos cada novedad por e-mail a los entrenadores.',
        },
      ],
      note: 'Fuentes: comunicado de Teamworks del 18 de diciembre de 2025 y páginas públicas de Teamworks y de Opteamal, a 15 de octubre de 2026.',
    },
    reasons: {
      id: 'au-quotidien',
      eyebrow: 'En el día a día',
      title: 'Conserve el seguimiento que ya hace.',
      lede: 'Seis gestos que su staff hace cada semana, y la forma en que STRIVN se encarga de ellos.',
      items: [
        {
          title: 'Envíe el check-in por WhatsApp',
          body: `El jugador recibe un enlace por WhatsApp o e-mail y responde sin instalar ninguna aplicación. Anota fatiga, sueño, ánimo y estrés, y después su RPE tras la sesión. El envío automático está en Semi-Pro y en Pro.`,
        },
        {
          title: 'Dirija la sesión desde la banda',
          body: 'Asistencia, cronómetro por bloque, equipos y marcador caben en el teléfono. Sin red, el teléfono guarda un registro y lo sincroniza al volver.',
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
          title: 'Trabaje en español, francés o neerlandés',
          body: 'STRIVN existe en seis idiomas: español, francés, neerlandés, inglés, alemán y portugués. Cada miembro del staff elige el suyo al abrir su cuenta.',
        },
        {
          title: 'Dé a cada miembro del staff su rol',
          body: 'Nueve roles, del primer entrenador al fisioterapeuta y al analista, cada uno con sus permisos. En Semi-Pro y en Pro, el número de miembros del staff es ilimitado.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Cambiar',
      title: 'Abra STRIVN mientras su contrato sigue vigente.',
      lede: `El preaviso figura en su contrato con Opteamal. Abra STRIVN en paralelo y compare con sus propias sesiones durante ${b.trialDays} días.`,
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
    stay: {
      id: 'rester',
      eyebrow: 'Quedarse',
      title: 'Quédese en Teamworks en dos casos.',
      lede: 'Elija la herramienta que cubre su departamento. Si una de estas dos necesidades es central para usted, Teamworks AMS la cubre hoy.',
      items: [
        {
          title: 'Sus sensores deben llegar en directo',
          body: `Teamworks AMS anuncia más de 100 integraciones. STRIVN importa sus archivos GPS después de la sesión, ${b.gpsTiers}.`,
        },
        {
          title: 'Su departamento médico sigue protocolos',
          body: 'Teamworks AMS anuncia un módulo médico. STRIVN lleva el registro de lesiones, el plan de vuelta al juego y las sesiones de readaptación.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Sus preguntas antes de dejar Opteamal.',
      email: 'hello@strivn.net',
      items: [
        {
          q: '¿Puedo recuperar mi historial de Opteamal?',
          a: `Sí, por archivo. Exporte la carga, el RPE y el wellness en CSV o XLSX y súbalos a STRIVN. Las exportaciones GPS se importan ${b.gpsTiers}, es decir, durante la prueba de ${b.trialDays} días. Las columnas se reconocen por sus encabezados y quedan memorizadas para el equipo. Para la primera correspondencia, escríbanos a hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Todavía tengo contrato. ¿Cuándo puedo cambiar?',
          a: `El preaviso y la fecha de renovación figuran en su contrato con Opteamal o Teamworks. Abra STRIVN en paralelo, sin aprobación del club y sin tarjeta, con ${b.trialDays} días de Semi-Pro. Usted rescinde en la fecha que le convenga.`,
        },
        {
          q: '¿Cuánto cuesta STRIVN?',
          a: `Los precios son públicos: ${b.publicPrices}. ${b.trialSentence} Empieza sin tarjeta bancaria.`,
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
      title: 'Cree su espacio e importe su historial.',
      body: `${b.trialSentence} Su staff se une cuando ve sus primeros informes.`,
      primaryCta: 'Crear mi espacio',
      secondaryCta: 'Hablar con Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks y Teamworks AMS son marcas de sus titulares. STRIVN no está afiliado a estas empresas ni cuenta con su aprobación. Catapult, STATSports, SPT, GameTraka y WHOOP son marcas de sus titulares. La información sobre Opteamal y Teamworks procede de fuentes públicas a 15 de octubre de 2026.',
  };
}
