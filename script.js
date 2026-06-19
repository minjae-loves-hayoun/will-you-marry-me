// ── 데이터 ──────────────────────────────────────────────────────────────────
const SLIDES = [
  { img: 'images/1.jpg',  caption: '내가 옷 골라달라하고 같이 스타필드 갔던 날. 그 날 내가 네컷 찍을까 하고 살짝 제안했었는데. 그 때 찍었으면 우리한테 너무 큰 추억이었을 텐데 너무 아쉬운 것 같아ㅜㅜ' },
  { img: 'images/2.jpg',  caption: '우리 처음 사귄 날. 하윤이는 사진 찍히기 너무 싫었는지 우리끼리 찍은 사진이 없네ㅋㅋ 우리 그 때 계속 붙어 있었는데 어쩜 그렇게 좋았는지 몰라.' },
  { img: 'images/3.jpg',  caption: '철순이형 공연 보러 간 날. 그 날 진짜 추웠는데 하윤이가 더 추울 것 같아서 아무렇지 않은 척 코트 벗어줬었던 기억이ㅎㅎ 아무튼 내가 제안한 공연에 커리도 다 좋아해줘서 너무 좋았어' },
  { img: 'images/4.jpg',  caption: '내 생일에 챙겨준 케이크. 시간이 너무 촉박해서 생일 당일날 아무것도 못 받을 줄 알았는데 서프라이즈까지 준비해주고... 아직도 생각하지만 정말 과분한 사랑을 받고 있구나 느꼈어.' },
  { img: 'images/5.jpg',  caption: '우리 처음으로 여행 간 날. 초행이어서 무서웠을 텐데 춘천까지 운전해오고 고생이 너무 많았어. 내가 컨디션만 좋았다면 좋은 여행이 됐을 텐데 아쉽다. 그래도 경치는 좋았잖아~' },
  { img: 'images/6.jpg',  caption: '보홀 여행. 내가 짜증도 많이 내고 이래서 많이 속상했지ㅠㅠ. 고생 많았지만 지나고 보면 다 추억인데 너무 열만 낸 것 같아서 미안해.' },
  { img: 'images/7.jpg',  caption: '나 건강검진한 날. 건강검진 끝나고 식당이랑 국중박 가서도 계속 화장실 가서 나 스스로 되게 웃겼는데 ㅋㅋ 아 그리고 하윤이 머리 찍던 거 나한테 들킨 거 아직도 내 인생에서 젤 웃긴 일 Top 1이야 ㅋㅋ 웃을 일이 많았던 날이었던 것 같아' },
  { img: 'images/8.jpg',  caption: '광주 여행. 지금 돌이켜보면 무슨 자신감으로 부모님이랑 뵌다고 했는지 모르겠네ㅋㅋ 그만큼 나 스스로 그리고 하윤이도 믿음과 확신이 넘쳤던 거겠지? 광주 내려가면 죽농원은 한 번 더 가자! 진짜 좋았어.' },
  { img: 'images/9.jpg',  caption: '벚꽃 보러 행궁동 간 날. 이 때 목걸이 잃어버려 가지고 진짜 앞으로 우리 어떻게 살아가야 하지 진지하게 고민했었어ㅎㅎ 그래도 어떻게든 살아지겠지?' },
  { img: 'images/10.jpg', caption: '광교산 등반한 날. 우리 나와서 갑자기 뜬금없이 등산을 가서 진짜 더웠었지 ㅋㅋ 우리 아무리 생각해도 너무 즉흥적인 것 같아. 그래도 컵라면도 먹고 추억도 남겼으니 럭키~' },
  { img: 'images/11.jpg', caption: '에버랜드 간 날. 이 날 진짜 머리 아팠는데 꾹 참고 탄 거 알고 있니 ㅎㅎ 그래도 하윤이가 좋아하는 모습 보니까 진짜 열심히 참았다. 꼼꼼이 태어나면 자주 와야 할 것 같은데 하윤이가 데꼬 타!!' },
  { img: 'images/12.jpg', caption: '꼼꼼이 첫 사진 찍은 날. 이 날 진짜 하루 종일 벙쪘었는데. 하윤이가 꼼꼼이 때문에 고생 많이 해서 맘 아프지만 그래두 꼼꼼이 덕에 결혼도 일찍 하니까 좋게 생각하자' },
  { img: 'images/13.jpg', caption: '야구 본 날. 임산부 데리고 열심히 왔다 갔다 해서 정작 야구 내용은 하나도 기억이 안나. 이제 야구장은 꼼꼼이가 좀 커서 말 잘 들으면 가자!' },
  { img: 'images/14.jpg', caption: '부산 간 날. 내가 살면서 여행에서 컨텐츠가 먹는 것 밖에 한 적은 처음이라서 많이 당황했어. 근데 부산 뭐 볼 거 없긴 해! 이젠 그래도 명절마다 갈 테니 다음에는 더 맛있는 거 먹는 걸로' },
  { img: 'images/15.jpg', caption: '우리 웨딩사진 찍은 날. 우리 화장 잘 먹고 옷도 예쁜 거 입어서 인생사진 많이 남겨서 아주아주 만족했어. 웨딩 사진 예쁜 거 많으니까 우리 사진은 덜 잘 나온 걸로 ㅋㅋ' },
  { img: 'images/16.jpg', caption: '대전 간 날. 내 추억이 오히려 부산보다 많은 곳이라 하윤이랑 와서 더 좋았어. 다음에는 시루도 먹고 넙죽이 굿즈도 사는 걸로 하자~' },
  { img: 'images/17.jpg', caption: '동물 카페 간 날. 내가 더 좋아했는데 하윤이한테 동물들이 더 간 게 아직도 억울하네ㅠㅠ 강아지 카페 가면 먹이로 유혹하던가 할 거야!' },
  { img: 'images/18.jpg', caption: '주경신아가 사진 찍어준 날. 첨 만날 땐 좀 기빨렸었는데 그래도 이제는 좀 편해진 것 같아. 사진도 잘 찍어주고 하윤이 친구들 생각보다 착해 ㅎㅎ 너무 금방 비가 와서 서울숲은 비 안 올 때 다시 한 번 가자.' },
];

const LETTER_LINES = [
  '하윤아,',
  '',
  '우리 짧은 시간 동안 참 많이도 붙어다녔다.',
  '',
  '같이 밥 먹고, 같이 웃고,',
  '별거 아닌 것 같은 날들이 쌓이다 보니',
  '',
  '어느새 우리는 서로의 일부분이 된 것 같아.',
  '',
  '앞으로도 이런 날들을',
  '너랑 계속 만들어 가고 싶어.',
];

const CHAR_DELAY = 55;
const LINE_PAUSE = 380;
const SLIDE_DURATION = 10000;

// ── 화면 전환 ──────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── 인트로 ────────────────────────────────────────────────────────────────
function runIntro() {
  SLIDES.forEach(s => preloadImage(s.img));

  const nameEl = document.getElementById('intro-name');
  const questionEl = document.getElementById('intro-question');

  setTimeout(() => nameEl.classList.add('visible'), 400);
  setTimeout(() => questionEl.classList.add('visible'), 1400);

  Promise.all([
    new Promise(resolve => setTimeout(resolve, 3200)),
    preloadImage(SLIDES[0].img),
  ]).then(startSlideshow);
}

// ── 슬라이드쇼 ────────────────────────────────────────────────────────────
let currentSlide = 0;
let slideActive = 'a';
let slideTimer = null;

const imagePromises = new Map();
function preloadImage(src) {
  if (!imagePromises.has(src)) {
    const p = new Promise(resolve => {
      const img = new Image();
      img.onload = img.onerror = () => resolve();
      img.src = src;
    });
    imagePromises.set(src, p);
  }
  return imagePromises.get(src);
}

function startProgressBar() {
  const bar = document.getElementById('slide-progress-bar');
  bar.style.transition = 'none';
  bar.style.width = '0%';
  bar.getBoundingClientRect(); // force reflow
  bar.style.transition = `width ${SLIDE_DURATION}ms linear`;
  bar.style.width = '100%';
}

function startSlideshow() {
  currentSlide = 0;
  slideActive = 'a';

  const bgA = document.getElementById('slide-bg-a');
  const bgB = document.getElementById('slide-bg-b');
  bgA.style.backgroundImage = `url('${SLIDES[0].img}')`;
  bgA.style.opacity = '1';
  bgB.style.opacity = '0';

  showScreen('slideshow-screen');

  if (SLIDES[1]) preloadImage(SLIDES[1].img);

  const caption = document.getElementById('slide-caption');
  caption.textContent = SLIDES[0].caption;
  setTimeout(() => caption.classList.add('visible'), 700);

  startProgressBar();
  slideTimer = setTimeout(advanceSlide, SLIDE_DURATION);
}

function advanceSlide() {
  clearTimeout(slideTimer);

  if (currentSlide >= SLIDES.length - 1) {
    showScreen('letter-screen');
    typeLetter(() => {
      showScreen('proposal-screen');
      initNoButton();
    });
    return;
  }

  currentSlide++;
  const slide = SLIDES[currentSlide];

  preloadImage(slide.img).then(() => {
    const bgA = document.getElementById('slide-bg-a');
    const bgB = document.getElementById('slide-bg-b');
    const caption = document.getElementById('slide-caption');

    const incoming = slideActive === 'a' ? bgB : bgA;
    const outgoing = slideActive === 'a' ? bgA : bgB;

    incoming.style.backgroundImage = `url('${slide.img}')`;
    incoming.style.opacity = '0';

    caption.classList.remove('visible');

    requestAnimationFrame(() => {
      outgoing.style.opacity = '0';
      incoming.style.opacity = '1';
      slideActive = slideActive === 'a' ? 'b' : 'a';
    });

    setTimeout(() => {
      caption.textContent = slide.caption;
      caption.classList.add('visible');
    }, 500);

    startProgressBar();
    slideTimer = setTimeout(advanceSlide, SLIDE_DURATION);
  });
}

document.getElementById('slideshow-screen').addEventListener('click', advanceSlide);

// ── 타이핑 엔진 ───────────────────────────────────────────────────────────
function typeLetter(onDone) {
  const el = document.getElementById('letter-text');
  const cursor = document.getElementById('letter-cursor');
  el.textContent = '';
  cursor.style.display = '';
  let lineIdx = 0;
  let charIdx = 0;

  function typeNext() {
    if (lineIdx >= LETTER_LINES.length) {
      cursor.style.display = 'none';
      setTimeout(onDone, 600);
      return;
    }

    const line = LETTER_LINES[lineIdx];

    if (charIdx === 0 && lineIdx > 0) {
      el.textContent += '\n';
    }

    if (charIdx < line.length) {
      el.textContent += line[charIdx];
      charIdx++;
      setTimeout(typeNext, CHAR_DELAY);
    } else {
      lineIdx++;
      charIdx = 0;
      setTimeout(typeNext, LINE_PAUSE);
    }
  }

  typeNext();
}

// ── "싫어" 버튼 도망 로직 ──────────────────────────────────────────────────
function initNoButton() {
  const btn = document.getElementById('btn-no');
  let lastEscapeAt = 0;

  function escape() {
    const now = Date.now();
    if (now - lastEscapeAt < 300) return;
    lastEscapeAt = now;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const bw = btn.offsetWidth;
    const bh = btn.offsetHeight;
    const x = Math.random() * (vw - bw - 48) + 16;
    const y = Math.random() * (vh - bh - 48) + 16;
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
  }

  document.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    if (Math.hypot(e.clientX - cx, e.clientY - cy) < 80) escape();
  });

  let wasTouched = false;
  btn.addEventListener('touchstart', e => {
    e.preventDefault();
    wasTouched = true;
    escape();
  }, { passive: false });

  btn.addEventListener('click', () => {
    if (wasTouched) { wasTouched = false; return; }
    escape();
  });
}

// ── 축하 화면 ─────────────────────────────────────────────────────────────
const CONFETTI_COLORS = ['#f9a8d4','#ffd700','#a78bfa','#86efac','#fb923c','#fff'];
let celebrated = false;

function onYes() {
  if (celebrated) return;
  celebrated = true;
  showScreen('celebrate-screen');
  document.getElementById('celebrate-screen').scrollTop = 0;
  spawnConfetti();
  buildGallery();
}

function spawnConfetti() {
  const container = document.getElementById('confetti-container');
  container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:10;';

  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      c.style.animationDuration = (2 + Math.random() * 2) + 's';
      c.style.animationDelay = '0s';
      c.style.width = (6 + Math.random() * 6) + 'px';
      c.style.height = (6 + Math.random() * 6) + 'px';
      container.appendChild(c);
      c.addEventListener('animationend', () => c.remove());
    }, i * 40);
  }
}

function buildGallery() {
  const gallery = document.getElementById('memory-gallery');
  if (gallery.children.length > 0) return;

  SLIDES.forEach((slide, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = slide.img;
    img.alt = `추억 ${i + 1}`;
    img.loading = 'lazy';

    const cap = document.createElement('p');
    cap.className = 'gallery-caption';
    cap.textContent = slide.caption;

    item.appendChild(img);
    item.appendChild(cap);
    gallery.appendChild(item);
  });
}

// ── BGM ───────────────────────────────────────────────────────────────────
let bgmPlaying = false;

function setBgmState(playing) {
  bgmPlaying = playing;
  const btn = document.getElementById('bgmBtn');
  const icon = document.getElementById('bgmIcon');
  btn.classList.toggle('playing', playing);
  icon.textContent = playing ? '♬' : '♪';
}

function toggleBgm() {
  const audio = document.getElementById('bgm');
  if (bgmPlaying) {
    audio.pause();
    setBgmState(false);
  } else {
    audio.play().catch(() => {});
    setBgmState(true);
  }
}

let autoPlayDone = false;
function autoPlayBgm() {
  if (autoPlayDone) return;
  autoPlayDone = true;
  document.removeEventListener('click', autoPlayBgm);
  document.removeEventListener('touchend', autoPlayBgm);
  const audio = document.getElementById('bgm');
  audio.play().then(() => setBgmState(true)).catch(() => {});
}
document.addEventListener('click', autoPlayBgm);
document.addEventListener('touchend', autoPlayBgm);

// ── 멀티터치 줌 방지 ──────────────────────────────────────────────────────
document.addEventListener('touchstart', e => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

// ── 초기 실행 ─────────────────────────────────────────────────────────────
showScreen('intro-screen');
runIntro();
