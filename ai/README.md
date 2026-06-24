# AI assistant skills (provider-agnostic)

Canonical, version-controlled source for the AI "skills" used in this repo.
`ai/skills/<name>/SKILL.md` is the source of truth; install it into whichever
assistant you use.

Each `SKILL.md` is plain Markdown with YAML frontmatter (`name`, `description`)
followed by the runbook — portable across tools.

## Skills

- **strivn-media** — regenerate the marketing media (real-app screenshots, the
  muted Load-planning demo loop, and the narrated explainer with ElevenLabs
  voice-over + subtitles) from the running strivn-app. Backs `tooling/media/`.

## Install per provider

**Claude Code** (skills live in `.claude/skills/`, which is gitignored locally):
```bash
mkdir -p .claude/skills
cp -R ai/skills/* .claude/skills/        # or symlink: ln -s ../../ai/skills/strivn-media .claude/skills/strivn-media
```

**Cursor / Windsurf** (project rules):
```bash
mkdir -p .cursor/rules
cp ai/skills/strivn-media/SKILL.md .cursor/rules/strivn-media.md
```

**Codex / generic agents** — point the agent at `ai/skills/strivn-media/SKILL.md`,
or copy it into that tool's instructions/rules directory.

Keep edits in `ai/skills/` and re-copy, so the providers stay in sync.
