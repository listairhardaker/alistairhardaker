-- ─── Lunar Law — Supabase Schema ────────────────────────────────────────
-- Run this in your Supabase project's SQL Editor (supabase.com → SQL Editor)

-- Episodes
CREATE TABLE IF NOT EXISTS episodes (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  number       INTEGER     UNIQUE NOT NULL,
  title        TEXT        NOT NULL,
  published_at DATE        NOT NULL,
  audio_url    TEXT,
  description  TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Laws
CREATE TABLE IF NOT EXISTS laws (
  id                 UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  number             INTEGER     UNIQUE NOT NULL,
  code               TEXT        UNIQUE NOT NULL,   -- e.g. LL-001
  title              TEXT        NOT NULL,
  status             TEXT        DEFAULT 'proposed'
                                 CHECK (status IN ('proposed','under_review','passed','rejected')),
  summary            TEXT,
  full_text          TEXT,
  proposer_name      TEXT        NOT NULL,
  proposer_location  TEXT,
  episode_id         UUID        REFERENCES episodes(id) ON DELETE SET NULL,
  transcript_excerpt TEXT,
  created_at         TIMESTAMPTZ DEFAULT NOW()
);

-- Votes
CREATE TABLE IF NOT EXISTS votes (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  law_id     UUID        NOT NULL REFERENCES laws(id)       ON DELETE CASCADE,
  vote       BOOLEAN     NOT NULL,   -- true = in favour, false = against
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, law_id)
);

-- ─── Row Level Security ───────────────────────────────────────────────────

ALTER TABLE episodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE laws     ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes    ENABLE ROW LEVEL SECURITY;

-- Public can read everything
CREATE POLICY "public_read_episodes" ON episodes FOR SELECT USING (true);
CREATE POLICY "public_read_laws"     ON laws     FOR SELECT USING (true);
CREATE POLICY "public_read_votes"    ON votes    FOR SELECT USING (true);

-- Authenticated users can insert/update their own votes
CREATE POLICY "auth_insert_vote" ON votes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "auth_update_vote" ON votes
  FOR UPDATE USING (auth.uid() = user_id);

-- ─── Sample Data ─────────────────────────────────────────────────────────

INSERT INTO episodes (number, title, published_at) VALUES
  (1, 'Foundations',      '2031-01-08'),
  (2, 'Necessities',      '2031-01-15'),
  (3, 'Who Gets to Speak','2031-01-22'),
  (4, 'Rest',             '2031-01-29'),
  (5, 'Growing',          '2031-02-05'),
  (6, 'What We Bring',    '2031-02-12'),
  (7, 'Names',            '2031-02-19')
ON CONFLICT DO NOTHING;

-- Insert laws referencing episodes by ID.
-- Replace the episode_id UUIDs below with the actual IDs from your episodes table
-- (run: SELECT id, number FROM episodes ORDER BY number; to get them).

-- Example (replace UUIDs with real values after inserting episodes):
--
-- INSERT INTO laws (number, code, title, status, full_text, proposer_name,
--                  proposer_location, episode_id, transcript_excerpt)
-- VALUES (
--   1, 'LL-001',
--   'Every resident shall maintain an unobstructed viewport...',
--   'passed',
--   'Every resident of Selene Base Alpha is entitled to...',
--   'Amara Osei', 'Accra, Ghana',
--   '<UUID of episode 1>',
--   '"...because if we lose sight of the sky..."'
-- );
