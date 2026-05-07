// ─── DEMO DATA ────────────────────────────────────────────────────────────

const DEMO = [
  {
    id: 'd1', code: 'LL-001', number: 1, status: 'passed',
    title: 'Every resident shall maintain an unobstructed viewport, or have certified access to a light simulation unit of equivalent specification',
    full_text: 'Every resident of Selene Base Alpha is entitled to a minimum of one unobstructed viewport in their designated living unit, with a direct line of sight to external space or the lunar surface. In cases where structural constraints make this impossible, the resident must be provided with a certified light simulation unit of no less than 40cm diagonal display size, capable of rendering a full 24-hour light cycle and adjusted to match the resident\'s registered time zone of origin. This allocation shall be maintained at no cost to the resident and may not be revoked as a disciplinary measure.',
    proposer_name: 'Amara Osei', proposer_location: 'Accra, Ghana',
    transcript_excerpt: '"...because if we lose sight of the sky — even a simulated one — we lose something fundamental to what makes us who we are. I am not making an argument about comfort. I am making an argument about survival."',
    episodes: { number: 1, title: 'Foundations', published_at: '2031-01-08', audio_url: null },
    votes_for: 4210, votes_against: 887, user_vote: null
  },
  {
    id: 'd2', code: 'LL-002', number: 2, status: 'passed',
    title: 'Every resident is guaranteed a minimum allocation of 3.5 litres of potable water per day, free of charge, regardless of employment or financial status',
    full_text: 'No resident of Selene Base Alpha shall be denied access to potable water on the basis of employment status, financial standing, or any debt owed to the base administration or affiliated contractors. The minimum guaranteed allocation is 3.5 litres per person per 24-hour period. This allocation shall be provided through designated access points located within a maximum of 50 metres of every residential unit. Any restriction of this allocation constitutes a violation of residency rights and is subject to immediate administrative review.',
    proposer_name: 'Dr. Yuki Tanaka', proposer_location: 'Osaka, Japan',
    transcript_excerpt: '"On Earth we debated this for a hundred years. We have an opportunity here to simply start correctly. Start with the assumption that water is not a commodity. It is a condition of existence."',
    episodes: { number: 2, title: 'Necessities', published_at: '2031-01-15', audio_url: null },
    votes_for: 5820, votes_against: 124, user_vote: null
  },
  {
    id: 'd3', code: 'LL-003', number: 3, status: 'under_review',
    title: 'No resident may be compelled to conduct official proceedings in a language other than their registered primary language without a certified interpreter present',
    full_text: 'In all official proceedings — including but not limited to administrative hearings, medical consultations, contractual negotiations, and disciplinary processes — any resident of Selene Base Alpha has the right to be addressed in and to respond in their registered primary language. Where this requires interpretation, a certified interpreter must be provided at no cost to the resident. This right may not be waived under any circumstance, including time pressure or resource constraints. Refusal to provide interpretation shall constitute grounds for the suspension of any proceeding until the requirement is met.',
    proposer_name: 'Luciana Ferreira', proposer_location: 'São Paulo, Brazil',
    transcript_excerpt: '"Language is not merely a tool for conveying information. It is the structure through which we understand ourselves and make ourselves understood. To compel someone to navigate a legal or medical situation in a language they do not fully command is to place them at a systematic disadvantage from the very first sentence."',
    episodes: { number: 3, title: 'Who Gets to Speak', published_at: '2031-01-22', audio_url: null },
    votes_for: 3140, votes_against: 680, user_vote: null
  },
  {
    id: 'd4', code: 'LL-004', number: 4, status: 'passed',
    title: 'Between 02:00 and 06:00 lunar standard time, noise levels in all residential sections must not exceed 35 decibels',
    full_text: 'During the hours of 02:00 to 06:00 LST, all residential sections of Selene Base Alpha shall maintain ambient noise levels below 35 decibels as measured at the nearest acoustic monitoring point. This applies to all sources including mechanical systems, communal activity, and personal equipment. Exemptions may be granted for genuine emergencies only, as defined under the base emergency protocol. Non-emergency violations are subject to a formal warning system; upon a third recorded offence within any 90-day period, the responsible party is referred to a residency review hearing.',
    proposer_name: 'James Whitfield', proposer_location: 'Manchester, England',
    transcript_excerpt: '"I work twelve-hour shifts on the surface systems. When I get back to my unit I need to be able to sleep. It sounds simple. But it is one of the things nobody thought about when they designed this place. You cannot function if you cannot rest."',
    episodes: { number: 4, title: 'Rest', published_at: '2031-01-29', audio_url: null },
    votes_for: 4890, votes_against: 201, user_vote: null
  },
  {
    id: 'd5', code: 'LL-005', number: 5, status: 'proposed',
    title: 'Every resident shall be allocated one square metre of certified growing medium for personal cultivation, maintained at no cost',
    full_text: 'Each resident of Selene Base Alpha is entitled to one square metre of growing medium — whether soil-based, hydroponic, or aeroponic — within the base agricultural zone or within their residential unit where structural conditions permit. This allocation is personal and non-transferable and may be used for any lawful cultivation purpose. Residents may decline the allocation in writing, in which case the growing medium reverts to the communal cultivation pool. The allocation must be made available within 60 days of a resident\'s initial registration and maintained in usable condition at base expense.',
    proposer_name: 'Elif Yılmaz', proposer_location: 'Istanbul, Türkiye',
    transcript_excerpt: '"I am not proposing this because I think everyone will become farmers. I am proposing it because there is something about putting your hands in soil — or whatever we call it up here — and growing something. It changes your relationship to the place you live. It makes it yours."',
    episodes: { number: 5, title: 'Growing', published_at: '2031-02-05', audio_url: null },
    votes_for: 2100, votes_against: 890, user_vote: null
  },
  {
    id: 'd6', code: 'LL-006', number: 6, status: 'proposed',
    title: 'A public archive of pre-departure cultural records and personal testimonies shall be established, maintained, and made freely accessible to all residents',
    full_text: 'Selene Base Alpha shall maintain a publicly accessible archive of cultural records, testimonies, and artefacts contributed by current or former residents. The archive must support audio, video, written, and material formats. Access shall be free and unrestricted for all residents. The archive shall be formally recognised as a protected institutional resource and may not be deleted, restricted in access, or commercially licensed without a full residency vote achieving a 75% threshold. Governance shall be overseen by a committee of seven resident archivists, elected annually by open ballot.',
    proposer_name: 'Miriam Cohen', proposer_location: 'Tel Aviv, Israel',
    transcript_excerpt: '"We are leaving. Not just our homes — our cultures, our languages, our specific ways of saying things. I do not believe we will carry these with us by accident. We will need to make a deliberate decision to bring them. This law is that decision."',
    episodes: { number: 6, title: 'What We Bring', published_at: '2031-02-12', audio_url: null },
    votes_for: 1560, votes_against: 410, user_vote: null
  },
  {
    id: 'd7', code: 'LL-007', number: 7, status: 'under_review',
    title: 'No resident may be assigned an identification number as their primary designation in any official system or communication',
    full_text: 'All official administrative systems within Selene Base Alpha — including housing allocation, employment records, medical systems, and any public-facing interface — must use a resident\'s full registered name as their primary form of identification and address. Identification numbers may exist as secondary reference codes for system efficiency, but may not replace the name as the primary identifier in any official document, display, or direct address. Any communication that addresses a resident by number alone shall be considered a procedural violation subject to formal review.',
    proposer_name: 'Oluwaseun Adeyemi', proposer_location: 'Lagos, Nigeria',
    transcript_excerpt: '"I have had enough of being a number. On Earth I was already reduced in many systems to a reference code. I am moving to the moon in part because I thought we might begin differently. I am making sure we do."',
    episodes: { number: 7, title: 'Names', published_at: '2031-02-19', audio_url: null },
    votes_for: 3450, votes_against: 720, user_vote: null
  }
];

// ─── STATE ────────────────────────────────────────────────────────────────

let sb         = null;
let user       = null;
let laws       = [];
let filter     = 'all';
let activeLaw  = null;
let demoMode   = true;

// ─── INIT ─────────────────────────────────────────────────────────────────

async function init() {
  startClock();
  initSupabase();

  if (!demoMode) {
    await handleMagicLinkReturn();
    await syncAuth();
    await fetchLaws();
  } else {
    laws = DEMO;
    renderAll();
  }

  bindAll();
}

function initSupabase() {
  if (
    typeof SUPABASE_URL === 'undefined' ||
    !SUPABASE_URL ||
    SUPABASE_URL === 'YOUR_SUPABASE_URL'
  ) {
    console.info('[Lunar Law] Running in demo mode. Configure config.js to enable auth + voting.');
    return;
  }
  try {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    demoMode = false;
  } catch (e) {
    console.error('[Lunar Law] Supabase init failed:', e);
  }
}

// ─── AUTH ─────────────────────────────────────────────────────────────────

async function handleMagicLinkReturn() {
  if (!sb) return;
  const { data } = await sb.auth.getSession();
  if (data.session) user = data.session.user;
}

async function syncAuth() {
  if (!sb) return;
  const { data } = await sb.auth.getUser();
  user = data.user ?? null;
  paintAuthUI();
}

function paintAuthUI() {
  const authBtn  = document.getElementById('auth-btn');
  const navUser  = document.getElementById('nav-user');
  const userLbl  = document.getElementById('user-label');

  if (user) {
    authBtn.classList.add('hidden');
    navUser.classList.remove('hidden');
    userLbl.textContent = user.email;
  } else {
    authBtn.classList.remove('hidden');
    navUser.classList.add('hidden');
  }
}

// ─── DATA ─────────────────────────────────────────────────────────────────

async function fetchLaws() {
  if (demoMode) { laws = DEMO; renderAll(); return; }

  const [{ data: rows, error }, { data: votes }] = await Promise.all([
    sb.from('laws').select('*, episodes(*)').order('number'),
    sb.from('votes').select('law_id, vote, user_id')
  ]);

  if (error || !rows) { laws = DEMO; renderAll(); return; }

  const byLaw = {};
  const myVotes = {};

  (votes || []).forEach(v => {
    if (!byLaw[v.law_id]) byLaw[v.law_id] = { for: 0, against: 0 };
    v.vote ? byLaw[v.law_id].for++ : byLaw[v.law_id].against++;
    if (user && v.user_id === user.id) myVotes[v.law_id] = v.vote;
  });

  laws = rows.map(r => ({
    ...r,
    votes_for:     byLaw[r.id]?.for     ?? 0,
    votes_against: byLaw[r.id]?.against ?? 0,
    user_vote:     user ? (myVotes[r.id] ?? null) : null
  }));

  renderAll();
}

async function submitVote(lawId, voteFor) {
  if (!sb || !user) return false;
  const { error } = await sb.from('votes').upsert(
    { user_id: user.id, law_id: lawId, vote: voteFor },
    { onConflict: 'user_id,law_id' }
  );
  return !error;
}

// ─── RENDER ───────────────────────────────────────────────────────────────

function renderAll() {
  renderHero();
  renderList();
  updateCount();
}

function renderHero() {
  if (!laws.length) return;
  const latest = laws[laws.length - 1];
  const ep     = latest.episodes;

  setText('hero-ep-num',   ep ? `EP.${pad(ep.number)}` : '');
  setText('hero-title',    latest.title);
  setText('hero-proposer', `Proposed by ${uc(latest.proposer_name)}${latest.proposer_location ? ', ' + uc(latest.proposer_location) : ''}`);
  setText('hero-date',     ep ? fmtDate(ep.published_at) : '');
  setText('hero-status',   statusLabel(latest.status));

  const total = countTotal(latest);
  setText('hero-votes', total > 0 ? `${total.toLocaleString()} votes cast` : 'Voting open');

  const listenEl = document.getElementById('hero-listen');
  if (ep?.audio_url) {
    listenEl.href = ep.audio_url;
    listenEl.style.display = '';
  } else {
    listenEl.style.display = 'none';
  }

  document.getElementById('hero-view').onclick = () => openDetail(latest.id);
}

function renderList() {
  const list = document.getElementById('laws-list');
  const visible = filter === 'all' ? laws : laws.filter(l => l.status === filter);

  if (!visible.length) {
    list.innerHTML = '<div class="empty-state">NO ENTRIES MATCHING FILTER</div>';
    return;
  }

  list.innerHTML = visible.map(lawCard).join('');

  visible.forEach(l => {
    const el = document.getElementById(`card-${l.id}`);
    if (!el) return;
    el.addEventListener('click', e => {
      if (!e.target.classList.contains('lc-vote-cta')) openDetail(l.id);
    });
    const cta = el.querySelector('.lc-vote-cta');
    if (cta) cta.addEventListener('click', e => { e.stopPropagation(); openDetail(l.id); });
  });
}

function lawCard(l) {
  const pct   = votePct(l);
  const total = countTotal(l);
  const ep    = l.episodes;

  return `
    <article class="law-card" id="card-${l.id}">
      <div class="lc-left">
        <div class="lc-code">${l.code}</div>
        <div class="status-badge sb-${l.status}">${statusLabel(l.status)}</div>
      </div>
      <div class="lc-right">
        <h3 class="lc-title">${l.title}</h3>
        <div class="lc-proposer">
          ${uc(l.proposer_name)}${l.proposer_location ? ', ' + uc(l.proposer_location) : ''}
          ${ep ? `<span class="dot-sep">·</span> EP.${pad(ep.number)}` : ''}
        </div>
        <div class="lc-vote-row">
          <div class="lc-bar-wrap">
            <div class="lc-bar-fill" style="width:${pct}%"></div>
          </div>
          <span class="lc-vote-text">${total > 0 ? `${pct}% · ${total.toLocaleString()} votes` : 'No votes yet'}</span>
          <button class="lc-vote-cta${l.user_vote !== null ? ' voted' : ''}">${l.user_vote !== null ? 'VOTED' : 'VOTE'}</button>
        </div>
      </div>
    </article>`;
}

function updateCount() {
  const visible = filter === 'all' ? laws : laws.filter(l => l.status === filter);
  setText('entry-count', `${visible.length} ${visible.length === 1 ? 'entry' : 'entries'}`);
}

// ─── DETAIL MODAL ─────────────────────────────────────────────────────────

function openDetail(id) {
  const l = laws.find(x => x.id === id);
  if (!l) return;
  activeLaw = l;

  const ep = l.episodes;

  setText('d-code',       l.code);
  const badge = document.getElementById('d-status-badge');
  badge.textContent = statusLabel(l.status);
  badge.className = `status-badge sb-${l.status}`;

  setText('d-title',       l.title);
  setText('d-proposer',    `Proposed by ${uc(l.proposer_name)}${l.proposer_location ? ', ' + uc(l.proposer_location) : ''}`);
  setText('d-episode-ref', ep ? `Episode ${ep.number} — "${ep.title}"${ep.published_at ? ' · ' + fmtDate(ep.published_at) : ''}` : '');
  setText('d-full-text',   l.full_text || l.summary || '');

  const excerptWrap = document.getElementById('d-excerpt-wrap');
  if (l.transcript_excerpt) {
    setText('d-ep-label', ep ? `EPISODE ${ep.number}` : '');
    setText('d-excerpt',  l.transcript_excerpt);
    excerptWrap.classList.remove('hidden');
  } else {
    excerptWrap.classList.add('hidden');
  }

  const epBlock = document.getElementById('d-ep-link-block');
  if (ep?.audio_url) {
    setText('d-ep-num',   `EP.${pad(ep.number)}`);
    setText('d-ep-title', ep.title);
    document.getElementById('d-ep-link').href = ep.audio_url;
    epBlock.classList.remove('hidden');
  } else {
    epBlock.classList.add('hidden');
  }

  refreshDetailVotes(l);
  paintVoteUI(l);

  document.getElementById('law-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function refreshDetailVotes(l) {
  const pct   = votePct(l);
  const total = countTotal(l);

  const fill = document.getElementById('d-vote-fill');
  if (fill) fill.style.width = `${pct}%`;

  setText('d-vote-stats', total > 0
    ? `${pct}% in favour · ${total.toLocaleString()} votes cast`
    : 'No votes cast yet');
}

function paintVoteUI(l) {
  const actions = document.getElementById('d-vote-actions');
  const done    = document.getElementById('d-vote-done');
  const gated   = document.getElementById('d-vote-gated');

  actions.classList.add('hidden');
  done.classList.add('hidden');
  gated.classList.add('hidden');

  if (!user && !demoMode) {
    gated.classList.remove('hidden');
  } else if (demoMode && !user) {
    gated.classList.remove('hidden');
  } else if (l.user_vote !== null && l.user_vote !== undefined) {
    setText('d-vote-done-msg', l.user_vote ? 'You voted in favour.' : 'You voted against.');
    done.classList.remove('hidden');
  } else {
    actions.classList.remove('hidden');
  }
}

function closeDetail() {
  document.getElementById('law-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  activeLaw = null;
}

// ─── AUTH MODAL ───────────────────────────────────────────────────────────

function openAuth() {
  document.getElementById('auth-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeAuth() {
  document.getElementById('auth-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  hide('magic-msg');
  hide('pw-msg');
}

function showMsg(id, text, type) {
  const el = document.getElementById(id);
  el.textContent = text;
  el.className = `form-msg ${type}`;
  el.classList.remove('hidden');
}

// ─── VOTING ───────────────────────────────────────────────────────────────

async function handleVote(voteFor) {
  if (!activeLaw) return;
  if (!user) { closeDetail(); openAuth(); return; }

  const old = activeLaw.user_vote;
  const ok  = await submitVote(activeLaw.id, voteFor);
  if (!ok) return;

  const idx = laws.findIndex(x => x.id === activeLaw.id);
  if (idx < 0) return;

  const l = { ...laws[idx] };

  if (old === true  && !voteFor) { l.votes_for = Math.max(0, l.votes_for - 1); l.votes_against++; }
  if (old === false &&  voteFor) { l.votes_against = Math.max(0, l.votes_against - 1); l.votes_for++; }
  if (old === null || old === undefined) {
    voteFor ? l.votes_for++ : l.votes_against++;
  }

  l.user_vote = voteFor;
  laws[idx] = l;
  activeLaw = l;

  refreshDetailVotes(l);
  paintVoteUI(l);
  renderList();
}

// ─── BINDING ──────────────────────────────────────────────────────────────

function bindAll() {
  // Nav auth
  document.getElementById('auth-btn').addEventListener('click', openAuth);
  document.getElementById('sign-out-btn').addEventListener('click', async () => {
    if (sb) await sb.auth.signOut();
    user = null;
    paintAuthUI();
    await fetchLaws();
  });

  // Auth modal
  document.getElementById('auth-close').addEventListener('click', closeAuth);
  document.getElementById('auth-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeAuth();
  });

  // Law modal
  document.getElementById('law-close').addEventListener('click', closeDetail);
  document.getElementById('law-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeDetail();
  });

  // Auth tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
      tab.classList.add('active');
      document.getElementById(`panel-${tab.dataset.tab}`).classList.remove('hidden');
    });
  });

  // Magic link
  document.getElementById('magic-submit').addEventListener('click', async () => {
    const email = val('magic-email');
    if (!email) return;
    const btn = document.getElementById('magic-submit');
    btn.textContent = 'SENDING...';
    btn.disabled = true;

    if (demoMode) {
      showMsg('magic-msg', 'Demo mode — configure config.js to enable auth.', 'err');
    } else {
      const { error } = await sb.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.href }
      });
      if (error) showMsg('magic-msg', error.message, 'err');
      else       showMsg('magic-msg', 'Link sent. Check your email.', 'ok');
    }

    btn.textContent = 'SEND SIGN-IN LINK';
    btn.disabled = false;
  });

  // Password sign-in
  document.getElementById('pw-signin').addEventListener('click', async () => {
    const email = val('pw-email'), pw = val('pw-password');
    if (!email || !pw) return;
    if (demoMode) { showMsg('pw-msg', 'Demo mode — configure config.js to enable auth.', 'err'); return; }
    const { error } = await sb.auth.signInWithPassword({ email, password: pw });
    if (error) { showMsg('pw-msg', error.message, 'err'); return; }
    await syncAuth();
    closeAuth();
    await fetchLaws();
  });

  // Password sign-up
  document.getElementById('pw-signup').addEventListener('click', async () => {
    const email = val('pw-email'), pw = val('pw-password');
    if (!email || !pw) return;
    if (demoMode) { showMsg('pw-msg', 'Demo mode — configure config.js to enable auth.', 'err'); return; }
    const { error } = await sb.auth.signUp({ email, password: pw });
    if (error) showMsg('pw-msg', error.message, 'err');
    else       showMsg('pw-msg', 'Account created. Check your email to confirm.', 'ok');
  });

  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filter = btn.dataset.filter;
      renderList();
      updateCount();
    });
  });

  // Voting
  document.getElementById('vote-for').addEventListener('click',     () => handleVote(true));
  document.getElementById('vote-against').addEventListener('click', () => handleVote(false));

  document.getElementById('vote-change').addEventListener('click', () => {
    if (!activeLaw) return;
    activeLaw.user_vote = null;
    paintVoteUI(activeLaw);
  });

  document.getElementById('d-gated-signin').addEventListener('click', () => {
    closeDetail();
    openAuth();
  });

  // Supabase auth state changes
  if (sb) {
    sb.auth.onAuthStateChange(async (event, session) => {
      user = session?.user ?? null;
      paintAuthUI();
      if (event === 'SIGNED_IN') {
        await fetchLaws();
        closeAuth();
      }
    });
  }

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeDetail();
    closeAuth();
  });
}

// ─── HELPERS ──────────────────────────────────────────────────────────────

function pad(n)     { return String(n).padStart(3, '0'); }
function uc(s)      { return s ? s.toUpperCase() : ''; }
function val(id)    { return document.getElementById(id)?.value.trim() ?? ''; }
function hide(id)   { document.getElementById(id)?.classList.add('hidden'); }
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function fmtDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00Z');
  return d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  }).toUpperCase();
}

function votePct(l) {
  const total = (l.votes_for || 0) + (l.votes_against || 0);
  if (!total) return 0;
  return Math.round(((l.votes_for || 0) / total) * 100);
}

function countTotal(l) {
  return (l.votes_for || 0) + (l.votes_against || 0);
}

const STATUS_LABELS = {
  passed:       'PASSED',
  under_review: 'UNDER REVIEW',
  proposed:     'PROPOSED',
  rejected:     'REJECTED'
};
function statusLabel(s) { return STATUS_LABELS[s] || (s || '').toUpperCase(); }

// ─── CLOCK ────────────────────────────────────────────────────────────────

function startClock() {
  function tick() {
    const now = new Date();
    const h = String(now.getUTCHours()).padStart(2, '0');
    const m = String(now.getUTCMinutes()).padStart(2, '0');
    const s = String(now.getUTCSeconds()).padStart(2, '0');
    const el = document.getElementById('lst-clock');
    if (el) el.textContent = `LST ${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}

// ─── GO ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', init);
