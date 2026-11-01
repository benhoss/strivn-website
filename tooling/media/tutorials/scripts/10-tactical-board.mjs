// Tutorial 10 — Tactical boards: create a board, place players, draw runs and passes, save.
import { coachPage, sh } from '../lib.mjs';

const TITLE = 'Corner — near-post run';
const tool = (h, name) => h.page.locator(`button[\\@click="setTool('${name}')"]`).first();

/** Press, travel with the visible cursor, release — a real drag on the canvas. */
async function drag(h, [x1, y1], [x2, y2], steps = 18) {
  await h.moveTo(x1, y1, 350);
  await h.page.mouse.down();
  for (let i = 1; i <= steps; i++) {
    const x = x1 + ((x2 - x1) * i) / steps; const y = y1 + ((y2 - y1) * i) / steps;
    await h.page.mouse.move(x, y);
    await h.page.evaluate(([xx, yy]) => { const c = document.getElementById('__tut_cursor'); c.style.transition = 'none'; c.style.transform = `translate(${xx}px,${yy}px)`; window.__tutPos = [xx, yy]; }, [x, y]);
    await h.wait(30);
  }
  await h.page.mouse.up();
  await h.wait(450);
}
async function place(h, points) { for (const [x, y] of points) { await h.moveTo(x, y, 380); await h.ripple(); await h.page.mouse.click(x, y); await h.wait(250); } }

export default {
  eyebrow: 'Feature guide · Tactics',
  title: 'Draw a tactical board',
  subtitle: 'Place your players, draw runs and passes, then share the board with the squad or attach it to a session.',
  chapters: ['Create a board', 'Place players', 'Draw the movement', 'Save & share'],
  youtube: {
    title: 'Create tactical boards for your team | strivn feature guide',
    description: `How to draw a set piece in strivn's tactical board: create a board, drop players from your roster or with the player tools, draw runs, passes and shots, then save, export a PNG, share it on WhatsApp or present it full screen — and attach it to a training session.`,
    tags: ['strivn', 'tactical board', 'football tactics', 'set pieces', 'corner routine', 'coaching board', 'football coaching app', 'tactics board app', 'training session'],
  },
  setup: () => { sh(`cd /home/user/P3rform && php artisan tinker --execute='App\\Models\\TacticalBoard::where("team_id", 1)->get()->each->delete();'`); },
  scenes: [{
    prepare: (p) => coachPage(p, '/teams/1/tactical-boards'),
    steps: [
      { chapter: 'Create a board', caption: 'Tactical boards keeps every drawing of the staff. Click New board.',
        run: async (h) => { await h.click(h.page.getByRole('link', { name: /New board/ }).first(), 'New board', 1, { after: 1500 }); } },
      { caption: 'Give it a title, pick the sport and the background — whole field, half or a blank board.',
        run: async (h) => { const t = h.page.locator('input[name=title]:visible'); await h.moveToEl(t); await h.type(t, TITLE, 55); await h.spot(h.page.locator('select:visible').last(), 'Background', 2); } },
      { caption: 'Create the board.',  hold: 2400,
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('button', { name: 'Create board', exact: true }), 'Create board', 3, { after: 1500 });
          // The "board created" banner shrinks the pitch to ~73 %; reloading
          // gives the 100 % layout the coordinates below are measured on.
          await h.page.reload({ waitUntil: 'domcontentloaded' }); await h.wait(1800); await h.ensure(); } },
      { chapter: 'Place players', caption: 'Drag players from your roster onto the pitch — their name and number follow them.',
        run: async (h) => {
          // Field at 100 %: x 587–1364, y 252–757 (CSS px); right penalty box from x 1234.
          for (const [name, to] of [['Lucas Bourg', [1150, 430]], ['Tom Bastin', [1175, 575]], ['Théo Dandois', [1110, 505]]]) {
            const r = h.page.getByText(name).first(); const b = await r.boundingBox();
            if (b) await drag(h, [b.x + 30, b.y + 10], to, 22);
          }
        } },
      { caption: 'Or use the player tools: opponents (B), and a teammate (A) for the corner taker — one click each.',
        run: async (h) => { await h.click(tool(h, 'player-b'), 'Player B', 4, { after: 400 }); await place(h, [[1290, 440], [1300, 560], [1330, 500]]); await h.click(tool(h, 'player-a'), null, null, { spotlight: false, after: 300 }); await place(h, [[1352, 262]]); } },
      { chapter: 'Draw the movement', caption: 'Pick the arrow tool and drag: a run to the near post…',
        run: async (h) => { await h.click(tool(h, 'arrow'), 'Arrow', 5, { after: 500 }); await drag(h, [1172, 436], [1272, 462]); } },
      { caption: '…and a pass. Each arrow can be typed as a pass, a run, a dribble or a shot.',
        run: async (h) => { await drag(h, [1322, 296], [1268, 468]); await h.spot(h.page.getByText('Pass', { exact: true }).first().locator('xpath=ancestor::div[1]'), 'Arrow type', 6); } },
      { caption: 'Add a zone, text or equipment the same way. Undo is one click away.',
        run: async (h) => { await h.clear(); await h.click(tool(h, 'select'), null, null, { spotlight: false, after: 400 }); await h.spot(h.page.locator(`button[\\@click="setTool('zone')"]`).first().locator('xpath=..'), 'Zones, text, equipment', 7); } },
      { chapter: 'Save & share', caption: 'Save. Export a PNG, share it on WhatsApp, or present it full screen in the dressing room.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('button', { name: 'Save', exact: true }).first(), 'Save', 8, { after: 1500 }); await h.spot(h.page.getByRole('button', { name: /Present/ }).first().locator('xpath=..'), 'PNG · Share · Present', 9); } },
      { caption: 'Back in the list, attach the board to a session so it shows up in the session plan.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('link', { name: 'Tactical boards', exact: true }).first(), null, null, { spotlight: false, after: 1800 }); const c = h.page.getByText(TITLE).first(); await h.spot(c.locator('xpath=ancestor::a[1] | ancestor::div[2]').first(), 'Your board', 10); } },
    ],
  }],
};
