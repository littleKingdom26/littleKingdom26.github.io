/* ===== DATA ===== */
const matches = [
  { date: "2026-04-25", opponent: "FC 서울",   home: true,  time: "19:30", stadium: "수원종합운동장" },
  { date: "2026-05-02", opponent: "전북 현대", home: false, time: "16:00", stadium: "전주월드컵경기장" },
  { date: "2026-05-09", opponent: "울산 HD",   home: true,  time: "19:00", stadium: "수원종합운동장" },
  { date: "2026-05-16", opponent: "인천 유나이티드", home: false, time: "14:00", stadium: "인천축구전용경기장" },
  { date: "2026-05-23", opponent: "대구 FC",   home: true,  time: "19:30", stadium: "수원종합운동장" },
  { date: "2026-05-30", opponent: "포항 스틸러스", home: false, time: "19:00", stadium: "포항스틸야드" },
  { date: "2026-06-06", opponent: "강원 FC",   home: true,  time: "16:00", stadium: "수원종합운동장" },
  { date: "2026-06-13", opponent: "광주 FC",   home: false, time: "19:30", stadium: "광주축구전용구장" },
];

const players = [
  { name: "박민준", number: 1,  position: "GK", desc: "탁월한 반사 신경과 강인한 정신력으로 수원FC의 골문을 지키는 베테랑 골키퍼.", age: 29, height: "189cm", nation: "대한민국" },
  { name: "이재호", number: 4,  position: "DF", desc: "좌측 수비를 담당하는 든든한 풀백. 강렬한 태클과 뛰어난 공중 볼 처리 능력을 보유.", age: 26, height: "182cm", nation: "대한민국" },
  { name: "김태양", number: 5,  position: "DF", desc: "센터백의 핵심. 침착한 빌드업과 뛰어난 위치 선정으로 수비 조직의 중심을 이룬다.", age: 28, height: "186cm", nation: "대한민국" },
  { name: "최성진", number: 6,  position: "DF", desc: "우측 풀백. 빠른 스피드와 정확한 크로스로 공수 양면에서 팀에 기여하는 멀티 플레이어.", age: 24, height: "178cm", nation: "대한민국" },
  { name: "오세훈", number: 3,  position: "DF", desc: "센터백. 공중 볼 경합에서 압도적인 강점을 보이며 세트피스 상황에서 득점 능력도 갖춘 선수.", age: 27, height: "191cm", nation: "대한민국" },
  { name: "정우진", number: 8,  position: "MF", desc: "중앙 미드필더. 경기 흐름을 읽고 정확한 배급으로 팀의 공격을 조율하는 플레이메이커.", age: 25, height: "176cm", nation: "대한민국" },
  { name: "나승현", number: 14, position: "MF", desc: "공격형 미드필더. 창의적인 드리블과 시야로 전방에 공간을 만들고 팀의 창의성을 담당.", age: 23, height: "174cm", nation: "대한민국" },
  { name: "박지훈", number: 16, position: "MF", desc: "수비형 미드필더. 강한 압박과 볼 탈취로 팀의 수비 1선을 책임지는 에너지 넘치는 선수.", age: 27, height: "180cm", nation: "대한민국" },
  { name: "한도현", number: 11, position: "MF", desc: "왼쪽 측면 미드필더. 스피드와 드리블을 앞세워 측면을 돌파하며 득점과 어시스트 모두 능하다.", age: 22, height: "172cm", nation: "대한민국" },
  { name: "홍길동", number: 9,  position: "FW", desc: "팀의 에이스 스트라이커. 폭발적인 득점력과 빠른 발을 앞세워 상대 수비를 붕괴시키는 핵심 공격수.", age: 26, height: "180cm", nation: "대한민국" },
  { name: "유민혁", number: 7,  position: "FW", desc: "오른쪽 윙어. 날카로운 커팅과 정확한 마무리로 상대 수비를 위협하는 차세대 공격 자원.", age: 21, height: "175cm", nation: "대한민국" },
  { name: "강현우", number: 18, position: "FW", desc: "포워드. 왕성한 활동량과 헤딩 능력을 갖춘 타깃형 스트라이커로 세트피스 상황에서 강점.", age: 24, height: "185cm", nation: "대한민국" },
];

const events = [
  { title: "홈 개막전 팬 파티",    date: "2026-04-25", location: "수원종합운동장 광장", status: "upcoming" },
  { title: "선수단 팬 사인회",     date: "2026-05-01", location: "수원역 광장",          status: "upcoming" },
  { title: "유소년 클리닉 데이",   date: "2026-05-10", location: "수원FC 트레이닝센터",  status: "upcoming" },
  { title: "서포터즈 킥오프 행사", date: "2026-04-18", location: "팔달구 문화센터",       status: "ongoing"  },
  { title: "2026 시즌권 론칭 이벤트", date: "2026-03-15", location: "수원FC 클럽하우스", status: "ended"    },
];

/* ===== MATCHES RENDER ===== */
const MATCHES_INIT = 6;
let showAll = false;

function renderMatches() {
  const grid = document.getElementById('matches-grid');
  const list = showAll ? matches : matches.slice(0, MATCHES_INIT);
  grid.innerHTML = list.map(m => {
    const cls  = m.home ? 'home' : 'away';
    const badge = m.home ? 'HOME' : 'AWAY';
    const [y, mo, d] = m.date.split('-');
    const dateStr = `${y}.${mo}.${d}`;
    return `
      <article class="match-card ${cls} reveal" role="listitem">
        <span class="match-card__badge">${badge}</span>
        <p class="match-card__date">${dateStr}</p>
        <p class="match-card__opponent">vs ${m.opponent}</p>
        <div class="match-card__meta">
          <span>⏱ ${m.time}</span>
          <span>📍 ${m.stadium}</span>
        </div>
      </article>`;
  }).join('');
  observeReveal();

  const btn = document.getElementById('matches-toggle');
  const remaining = matches.length - MATCHES_INIT;
  btn.textContent = showAll ? '접기' : `더보기 (+${remaining})`;
  btn.style.display = matches.length <= MATCHES_INIT ? 'none' : 'inline-block';
}

document.getElementById('matches-toggle').addEventListener('click', () => {
  showAll = !showAll;
  renderMatches();
});

/* ===== PLAYERS RENDER ===== */
let activePos = 'ALL';

function renderPlayers() {
  const grid = document.getElementById('players-grid');
  const list = activePos === 'ALL' ? players : players.filter(p => p.position === activePos);
  grid.innerHTML = list.map((p, i) => `
    <article class="player-card reveal" role="listitem" tabindex="0"
      data-index="${players.indexOf(p)}"
      aria-label="${p.name} 선수 상세 보기">
      <p class="player-card__num">${p.number}</p>
      <p class="player-card__name">${p.name}</p>
      <span class="player-card__pos">${p.position}</span>
    </article>`
  ).join('');

  grid.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click',  () => openModal(+card.dataset.index));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(+card.dataset.index); });
  });
  observeReveal();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    activePos = btn.dataset.pos;
    renderPlayers();
  });
});

/* ===== EVENTS RENDER ===== */
const statusMap = {
  upcoming: { label: '예정',   cls: 'upcoming' },
  ongoing:  { label: '진행중', cls: 'ongoing'  },
  ended:    { label: '종료',   cls: 'ended'    },
};

function renderEvents() {
  const list = document.getElementById('events-list');
  list.innerHTML = events.map(e => {
    const s = statusMap[e.status];
    const [y, mo, d] = e.date.split('-');
    return `
      <article class="event-card reveal" role="listitem">
        <div class="event-card__date">${y}.${mo}.${d}</div>
        <div>
          <p class="event-card__title">${e.title}</p>
          <p class="event-card__location">📍 ${e.location}</p>
        </div>
        <span class="status-badge ${s.cls}">${s.label}</span>
      </article>`;
  }).join('');
  observeReveal();
}

/* ===== MODAL ===== */
const modal   = document.getElementById('player-modal');
const mClose  = document.getElementById('modal-close');
const mBack   = document.getElementById('modal-backdrop');

function openModal(idx) {
  const p = players[idx];
  document.getElementById('modal-number').textContent   = p.number;
  document.getElementById('modal-position').textContent = p.position;
  document.getElementById('modal-name').textContent     = p.name;
  document.getElementById('modal-desc').textContent     = p.desc;
  document.getElementById('modal-stats').innerHTML = `
    <div class="modal__stat"><div class="modal__stat-val">${p.age}</div><div class="modal__stat-key">나이</div></div>
    <div class="modal__stat"><div class="modal__stat-val">${p.height}</div><div class="modal__stat-key">신장</div></div>
    <div class="modal__stat"><div class="modal__stat-val">${p.nation}</div><div class="modal__stat-key">국적</div></div>
  `;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

mClose.addEventListener('click', closeModal);
mBack.addEventListener('click',  closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ===== HEADER SCROLL ===== */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ===== HAMBURGER ===== */
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('nav-drawer');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  navDrawer.classList.toggle('open', open);
  navDrawer.setAttribute('aria-hidden', !open);
});

document.querySelectorAll('.drawer__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    navDrawer.classList.remove('open');
    navDrawer.setAttribute('aria-hidden', true);
  });
});

/* ===== INTERSECTION OBSERVER (Scroll Reveal) ===== */
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
        io.unobserve(el.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
}

/* ===== INIT ===== */
renderMatches();
renderPlayers();
renderEvents();
observeReveal();
