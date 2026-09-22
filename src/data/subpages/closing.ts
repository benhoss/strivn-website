/**
 * Closing band of every feature sub-page.
 *
 * It used to borrow `homeContent.finalCta`, which tied sixteen pages to the
 * homepage's content shape. The words are the same as the homepage's closing
 * band (one promise, said once across the site); they live here so either
 * template can change its layout without breaking the other.
 */
import type { Locale } from '../landingContent';

export interface SubClosing {
  title: string;
  body: string;
  primaryCta: string;
  /** Points at the staff brief; hidden on the staff brief page itself. */
  secondaryCta: string;
  /** Mono fine print under the buttons, one entry per item. */
  fine: string[];
}

export const subClosing: Record<Locale, SubClosing> = {
  fr: {
    title: 'Créez votre espace et importez votre première séance.',
    body: 'Les 30 premiers jours sont au Semi-Pro, import GPS compris, sans carte. Ensuite le plan Free fait tourner l’équipe toute la saison, et votre staff vous rejoint quand il voit vos premiers rapports.',
    primaryCta: 'Créer mon espace gratuitement',
    secondaryCta: 'Partager le dossier staff',
    fine: ['Sans carte bancaire', 'Sans validation du club', 'Vos données restent les vôtres'],
  },
  en: {
    title: 'Create your space and import your first session.',
    body: 'The first 30 days are on Semi-Pro, GPS import included, no card. Then the Free plan runs the team for the whole season, and your staff joins once they see your first reports.',
    primaryCta: 'Create my space for free',
    secondaryCta: 'Share the staff dossier',
    fine: ['No credit card', 'No club approval', 'Your data stays yours'],
  },
  nl: {
    title: 'Maak uw omgeving aan en importeer uw eerste training.',
    body: 'De eerste 30 dagen zitten op Semi-Pro, GPS-import inbegrepen, zonder kaart. Daarna draait het Free-plan het team het hele seizoen, en uw staf sluit aan zodra ze uw eerste rapporten zien.',
    primaryCta: 'Mijn omgeving gratis aanmaken',
    secondaryCta: 'Het stafdossier delen',
    fine: ['Zonder kredietkaart', 'Zonder clubgoedkeuring', 'Uw data blijft van u'],
  },
  de: {
    title: 'Bereich erstellen und die erste Einheit importieren.',
    body: 'Die ersten 30 Tage laufen auf Semi-Pro, GPS-Import inklusive, ohne Karte. Danach trägt der Free-Plan das Team die ganze Saison, und Ihr Staff kommt dazu, sobald er Ihre ersten Berichte sieht.',
    primaryCta: 'Meinen Bereich kostenlos erstellen',
    secondaryCta: 'Staff-Dossier teilen',
    fine: ['Ohne Kreditkarte', 'Ohne Vereinsfreigabe', 'Ihre Daten bleiben Ihre'],
  },
  pt: {
    title: 'Crie o seu espaço e importe a sua primeira sessão.',
    body: 'Os primeiros 30 dias são em Semi-Pro, importação GPS incluída, sem cartão. Depois o plano Free faz girar a equipa toda a época, e o seu staff junta-se quando vir os seus primeiros relatórios.',
    primaryCta: 'Criar o meu espaço gratuitamente',
    secondaryCta: 'Partilhar o dossiê de staff',
    fine: ['Sem cartão de crédito', 'Sem validação do clube', 'Os seus dados são seus'],
  },
  es: {
    title: 'Cree su espacio e importe su primera sesión.',
    body: 'Los primeros 30 días son en Semi-Pro, importación GPS incluida, sin tarjeta. Después el plan Free hace girar al equipo toda la temporada, y su staff se une cuando vea sus primeros informes.',
    primaryCta: 'Crear mi espacio gratis',
    secondaryCta: 'Compartir el dossier de staff',
    fine: ['Sin tarjeta de crédito', 'Sin validación del club', 'Sus datos siguen siendo suyos'],
  },
};
