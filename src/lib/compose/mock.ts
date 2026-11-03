/**
 * The scripted offline composer: what the beta routes use when no
 * DISCOVER_API is set, so the page can be designed, demoed and screenshot
 * without the app. It streams the same events as the real composer and only
 * uses the site's own sections, visuals and bands. French only, a handful of
 * topics; the live composer answers anything, in the visitor's language.
 */
import type { UpstreamEvent, UpstreamSession } from './upstream';

export function mockSession(locale: string): UpstreamSession {
  return {
    token: 'mock',
    locale,
    turns: 0,
    max_turns: 15,
    available: true,
    page: [],
    profile: {},
    handoff_url: `https://app.strivn.net/register?lang=${locale}`,
  };
}

interface Script {
  match: RegExp;
  status: string[];
  profile?: Record<string, string>;
  items: any[];
}

const SCRIPTS: Script[] = [
  {
    match: /wellness|bien-être|croise|cross/i,
    status: ['import GPS', 'check-in wellness', 'readiness'],
    items: [
      { type: 'section', section: { kind: 'columns', kicker: 'GPS et wellness', title: 'Lisez la charge à côté de ce que le joueur ressent.', body: 'Le GPS mesure ce que le corps a fait. Le check-in du matin dit comment il l’a encaissé. STRIVN les met sur la même ligne, joueur par joueur.', cols: [
        { eyebrow: 'Veille', title: 'Le GPS de la séance', desc: 'Distance, HSR, sprints et charge, importés depuis l’export.' },
        { eyebrow: '7 h', title: 'Le check-in', desc: 'Sommeil, fatigue et douleurs, saisis par le joueur sur son téléphone.' },
        { eyebrow: 'Avant la séance', title: 'La readiness', desc: 'Qui est prêt, qui surveiller, et pourquoi.' },
      ] } },
      { type: 'band', id: 'home-readiness' },
      { type: 'section', section: { kind: 'callout', tone: 'blue', icon: 'info', text: 'STRIVN signale et classe. La décision d’alléger une séance reste celle du staff, joueur par joueur.' } },
      { type: 'ask', question: 'Quel GPS utilisez-vous aujourd’hui ?', field: 'gps_vendor', options: ['Catapult', 'STATSports', 'Polar', 'Kinexon', 'Pas encore de GPS'] },
      { type: 'section', section: { kind: 'crosslink', link: { label: 'Le check-in du matin en détail', href: '/fr/features/check-in/' } } },
      { type: 'suggestions', items: ['Comment marche l’import du fichier GPS ?', 'Comment le joueur fait son check-in ?', 'Que voit le kiné ?'] },
    ],
  },
  {
    match: /gps|catapult|statsports|polar|kinexon|import/i,
    status: ['import GPS', 'rapprochement des noms'],
    profile: { persona: 'sc_coach' },
    items: [
      { type: 'section', section: { kind: 'rail', kicker: 'Import GPS', title: 'Importez l’export GPS, quel que soit le capteur.', body: 'Vous déposez le fichier de la séance. STRIVN lit les en-têtes de colonnes, sans format imposé.', steps: [
        { num: '01', title: 'Exportez', desc: 'Le fichier de votre logiciel GPS, tel quel.' },
        { num: '02', title: 'Déposez', desc: 'Jusqu’à 20 fichiers, rattachés à la séance du calendrier.' },
        { num: '03', title: 'Rapprochez', desc: 'Les étiquettes des boîtiers sont reliées aux joueurs, une fois pour toutes.' },
        { num: '04', title: 'Lisez', desc: 'Charge de la semaine, ACWR et zones, joueur par joueur.' },
      ] } },
      { type: 'section', section: { kind: 'visual', name: 'gps-blocks' } },
      { type: 'section', section: { kind: 'compare', title: 'Votre lundi matin.', heads: ['Aujourd’hui', 'Avec STRIVN'], rows: [
        { label: 'GPS', a: 'Export collé dans Excel', b: 'Un dépôt de fichier' },
        { label: 'RPE', a: 'Recopié depuis un formulaire', b: 'Saisi par les joueurs dans l’app' },
        { label: 'ACWR', a: 'Recalculé à la main', b: 'Recalculé chaque nuit' },
      ] } },
      { type: 'section', section: { kind: 'note', label: 'Import, puis connexion', desc: 'Semi-Pro : vous importez votre GPS. Pro : la connexion directe se met en place avec le club.' } },
      { type: 'section', section: { kind: 'crosslink', link: { label: 'Charge, RPE et GPS en détail', href: '/fr/features/training-load/' } } },
      { type: 'suggestions', items: ['Comment le GPS se croise avec le wellness ?', 'Comment est calculé l’ACWR ?', 'Et la mesure par exercice ?'] },
    ],
  },
  {
    match: /parent|enfant|child/i,
    status: ['tuteurs', 'consentement parental'],
    profile: { persona: 'parent' },
    items: [
      { type: 'section', section: { kind: 'cards', kicker: 'Parents', title: 'Suivez les convocations de votre enfant.', body: 'Le coach rattache un tuteur à chaque jeune joueur. Vous voyez son agenda, répondez aux convocations et gérez son consentement.', cards: [
        { icon: 'calendar', title: 'Agenda', desc: 'Lieu, heure de rendez-vous et réponse en un geste.' },
        { icon: 'shield', title: 'Consentement', desc: 'Pour un mineur, le suivi bien-être et médical demande votre accord.' },
        { icon: 'bell', title: 'Annonces', desc: 'Les messages du staff, sans groupe de discussion à part.' },
      ] } },
      { type: 'band', id: 'home-players' },
      { type: 'handoff', target: 'share', title: 'Votre club n’utilise pas encore STRIVN ?', body: 'Transmettez cette page à l’entraîneur de votre enfant. C’est lui qui invite les familles.' },
      { type: 'suggestions', items: ['Que voit mon enfant dans l’app ?', 'Qui a accès aux données médicales ?'] },
    ],
  },
  {
    match: /scout|recrut|prospect|adversaire|opponent/i,
    status: ['scouting', 'prospects'],
    profile: { persona: 'scout' },
    items: [
      { type: 'section', section: { kind: 'rows', kicker: 'Scouting', title: 'Gardez chaque observation au même endroit.', rows: [
        { name: 'Prospects', desc: 'Une fiche par joueur suivi : observations datées, poste, vidéo liée.' },
        { name: 'Essais', desc: 'La décision du staff après un essai, et le prospect promu dans l’effectif.' },
        { name: 'Adversaires', desc: 'Le dossier d’avant-match : effectif observé, documents, présentation.' },
      ] } },
      { type: 'section', section: { kind: 'visual', name: 'scouting-brief' } },
      { type: 'suggestions', items: ['Comment préparer une présentation adversaire ?', 'Qui voit les rapports de scouting ?'] },
    ],
  },
  {
    match: /.*/,
    status: ['charge et ACWR', 'planification'],
    profile: { persona: 'sc_coach' },
    items: [
      { type: 'section', section: { kind: 'panels', kicker: 'Préparateurs physiques', title: 'Arrêtez de reconstruire la semaine dans Excel.', body: 'Vous exportez le GPS puis le croisez à la main avec le RPE, le wellness et le plan. STRIVN reprend ce dernier kilomètre.', panels: [
        { eyebrow: 'Aujourd’hui', title: 'Le croisement à la main', items: ['Export GPS collé dans un tableur', 'RPE recopié', 'ACWR recalculé le lundi'] },
        { eyebrow: 'Avec STRIVN', title: 'Une vue par joueur', items: ['Prévu contre réalisé', 'Wellness du matin à côté', 'Alertes avant la séance'], tone: 'blue' },
      ] } },
      { type: 'band', id: 'sc-load-planning' },
      { type: 'ask', question: 'Combien de joueurs suivez-vous avec un GPS ?', field: 'squad_size', options: ['Moins de 15', '15 à 25', '25 à 40', 'Plusieurs équipes'] },
      { type: 'suggestions', items: ['Comment marche l’import GPS ?', 'Comment le GPS se croise avec le wellness ?', 'Combien coûte STRIVN ?'] },
    ],
  },
];

let turns = 0;
let signedUp = false;
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function* mockTurn(message: string): AsyncGenerator<UpstreamEvent> {
  const script = SCRIPTS.find((s) => s.match.test(message)) ?? SCRIPTS[SCRIPTS.length - 1];
  turns += 1;

  for (const label of script.status) {
    yield { event: 'status', data: { label } };
    await wait(350);
  }
  if (script.profile) yield { event: 'profile', data: { profile: script.profile } };

  const items = [...script.items];
  // The sign-up close carries fixed ids: once per page, like the real composer.
  if (turns >= 3 && !signedUp && !items.some((i) => i.type === 'handoff')) {
    signedUp = true;
    items.splice(items.length - 1, 0, { type: 'handoff', target: 'signup' });
  }
  for (const item of items) {
    await wait(300);
    yield { event: 'item', data: { item } };
  }
  yield { event: 'done', data: { turn: turns, handoff_url: 'https://app.strivn.net/register?lang=fr' } };
}
