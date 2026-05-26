const board = document.querySelector(".portfolio-board");
const stickers = document.querySelectorAll(".sticker");
const modal = document.querySelector("#mountguide-modal");
const modalPanel = modal?.querySelector(".case-study-panel");
const modalTrigger = document.querySelector("[data-modal-trigger='mountguide']");
const reportModal = document.querySelector("#ux-report-modal");
const reportModalPanel = reportModal?.querySelector(".case-study-panel");
const reportModalTrigger = document.querySelector("[data-modal-trigger='ux-report']");
const hiker = document.querySelector("[data-hiker]");
const stageCount = document.querySelector("[data-stage-count]");
const stageTitle = document.querySelector("[data-stage-title]");
const stageCopy = document.querySelector("[data-stage-copy]");
const stageTags = document.querySelector("[data-stage-tags]");
const stageImage = document.querySelector("[data-stage-image]");
const stageCaption = document.querySelector("[data-stage-caption]");
const mountainWorld = document.querySelector(".mountain-world");
const summitBurst = document.querySelector("[data-summit-burst]");
const dragThreshold = 6;
let topLayer = 20;
let lastModalTrigger = null;
let currentStage = 0;

const trailPoints = [
  { left: 42.3, top: 98 },
  { left: 70.7, top: 91.4 },
  { left: 59.5, top: 77.2 },
  { left: 76.2, top: 64.6 },
  { left: 72, top: 47.1 },
  { left: 88.7, top: 27.8 },
];

const caseStages = [
  {
    title: "The idea started with one tension: mountains require a plan, but planning is fragmented.",
    copy: "Planning a mountain trip often meant piecing decisions together from many sources: maps, weather, TOPR alerts, parking details, and other people's opinions. The project identified an opportunity for an app that organizes this process in one place, especially for less experienced hikers. Safety became the key filter: preparation, awareness of risks, and proper equipment had to be part of planning, not an afterthought.",
    tags: ["Idea", "Safety", "Research"],
    image: "./MountGuide/image.png",
    caption: "Research: fragmented intentions around mountain trips.",
  },
  {
    title: "Interviews turned intuition into a map of decisions, frustrations, and product gaps.",
    copy: "The research phase included in-depth conversations with people at different levels of mountain experience to understand what preparing for a route really looks like. The synthesis revealed pain points, moments of uncertainty, and the information users need before setting off. This became an assumption map, while a competitor benchmark helped check whether any existing tool already supports the full planning process in a compact way.",
    tags: ["Interviews", "Assumption mapping", "Benchmark"],
    image: "./img/mapa założeń.png",
    caption: "Assumption map: synthesis of interviews, pain points, and opportunities to improve the planning process.",
  },
  {
    title: "Information architecture turned the concept into a clear product structure.",
    copy: "At this stage, the app's functionality was organized into key sections and the information structure was defined across the experience. Low-fidelity screens helped check whether the final vision matched the product intent and included the critical route, weather, safety, and planning information users would need before going into the mountains.",
    tags: ["Information Architecture", "Low-Fi", "Product Structure"],
    image: "./img/low-fi.jpg",
    caption: "Low-fi screens: checking the information architecture before moving into high-fidelity UI.",
  },
  {
    title: "The visual system had to feel structured, usable, and close to the mountain context.",
    copy: "Next, the design system direction, typography, and primary color were selected so the UI outline stayed consistent and carried a clear mountain vibe. From there, the screens moved into hi-fi and then into a clickable prototype that could be tested with real users and improved through iteration.",
    tags: ["Design System", "Hi-Fi UI", "Prototype"],
    image: "./funkcje.png",
    caption: "Feature structure: translating the product concept into a coherent set of app functions.",
  },
  {
    title: "The final product can go out into the world.",
    copy: "At this point, the product is ready to be shared, tested further, and developed beyond the portfolio concept. MountGuide brings safety and convenience into one experience, so planning a mountain trip can finally feel both practical and reassuring.",
    tags: ["Final Product", "Safety", "Convenience"],
    image: "./mockupss.png",
    caption: "Final mockups: safety and convenience working together in one mountain-planning experience.",
  },
];

function canDrag() {
  return window.matchMedia("(min-width: 901px)").matches;
}

function isInteractiveTarget(target) {
  return target instanceof Element && Boolean(target.closest("a, button, input, textarea, select, [contenteditable='true']"));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function placeSticker(sticker, left, top) {
  const boardRect = board.getBoundingClientRect();
  const stickerRect = sticker.getBoundingClientRect();
  const maxLeft = boardRect.width - stickerRect.width;
  const maxTop = boardRect.height - stickerRect.height;

  sticker.style.left = `${clamp(left, 0, maxLeft)}px`;
  sticker.style.top = `${clamp(top, 0, maxTop)}px`;
  sticker.style.right = "auto";
  sticker.style.bottom = "auto";
}

function renderStage() {
  const isIntro = currentStage === 0;
  const isFinal = currentStage === trailPoints.length - 1;
  const stage = caseStages[Math.max(currentStage - 1, 0)];
  const point = trailPoints[currentStage];

  if (mountainWorld) {
    mountainWorld.classList.toggle("is-start", isIntro);
    mountainWorld.classList.toggle("is-stage", !isIntro);
    mountainWorld.classList.toggle("is-final-stage", isFinal);
  }

  if (hiker) {
    hiker.style.left = `${point.left}%`;
    hiker.style.top = `${point.top}%`;
    hiker.classList.add("is-walking");
    window.setTimeout(() => hiker.classList.remove("is-walking"), 260);
  }

  if (stageCount) {
    stageCount.textContent = `Stage ${currentStage} / ${caseStages.length}`;
  }

  if (stageTitle) {
    stageTitle.textContent = stage.title;
  }

  if (stageCopy) {
    stageCopy.textContent = stage.copy;
  }

  if (stageImage) {
    stageImage.src = stage.image;
    stageImage.alt = stage.caption;
  }

  if (stageCaption) {
    stageCaption.textContent = stage.caption;
  }

  if (stageTags) {
    stageTags.replaceChildren(
      ...stage.tags.map((tag) => {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        return tagElement;
      }),
    );
  }

  if (summitBurst && currentStage === trailPoints.length - 1) {
    summitBurst.classList.remove("is-visible");
    void summitBurst.offsetWidth;
    summitBurst.classList.add("is-visible");
  }
}

function moveStage(direction) {
  currentStage = clamp(currentStage + direction, 0, trailPoints.length - 1);
  renderStage();
}

function openModal(trigger) {
  if (!modal || !modalPanel) {
    return;
  }

  lastModalTrigger = trigger;
  currentStage = 0;
  renderStage();
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalPanel.focus({ preventScroll: true });
}

function openReportModal(trigger) {
  if (!reportModal || !reportModalPanel) {
    return;
  }

  lastModalTrigger = trigger;
  reportModal.hidden = false;
  document.body.classList.add("modal-open");
  reportModalPanel.focus({ preventScroll: true });
}

function closeModal() {
  if (modal) {
    modal.hidden = true;
  }

  if (reportModal) {
    reportModal.hidden = true;
  }

  document.body.classList.remove("modal-open");

  if (lastModalTrigger) {
    lastModalTrigger.focus({ preventScroll: true });
  }
}

stickers.forEach((sticker) => {
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let boardRect = null;
  let isDragging = false;
  let suppressNextClick = false;

  sticker.addEventListener("pointerdown", (event) => {
    if (!canDrag() || event.button !== 0 || isInteractiveTarget(event.target)) {
      return;
    }

    const stickerRect = sticker.getBoundingClientRect();
    boardRect = board.getBoundingClientRect();
    startX = event.clientX;
    startY = event.clientY;
    offsetX = event.clientX - stickerRect.left;
    offsetY = event.clientY - stickerRect.top;
    isDragging = false;
    sticker.setPointerCapture(event.pointerId);

    function startDrag() {
      if (isDragging) {
        return;
      }

      isDragging = true;
      suppressNextClick = true;
      sticker.classList.add("is-arranged");
      sticker.classList.add("is-dragging");
      sticker.style.zIndex = String(++topLayer);
      placeSticker(sticker, stickerRect.left - boardRect.left, stickerRect.top - boardRect.top);
    }

    function onPointerMove(moveEvent) {
      const distanceX = moveEvent.clientX - startX;
      const distanceY = moveEvent.clientY - startY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance > dragThreshold) {
        startDrag();
      }

      if (!isDragging) {
        return;
      }

      const nextLeft = moveEvent.clientX - boardRect.left - offsetX;
      const nextTop = moveEvent.clientY - boardRect.top - offsetY;
      placeSticker(sticker, nextLeft, nextTop);
    }

    function onPointerUp() {
      sticker.classList.remove("is-dragging");
      sticker.removeEventListener("pointermove", onPointerMove);
      sticker.removeEventListener("pointerup", onPointerUp);
      sticker.removeEventListener("pointercancel", onPointerUp);

      if (suppressNextClick) {
        window.setTimeout(() => {
          suppressNextClick = false;
        }, 0);
      }
    }

    sticker.addEventListener("pointermove", onPointerMove);
    sticker.addEventListener("pointerup", onPointerUp);
    sticker.addEventListener("pointercancel", onPointerUp);
  });

  sticker.addEventListener("click", (event) => {
    if (isInteractiveTarget(event.target)) {
      return;
    }

    if (suppressNextClick) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (sticker.matches("[data-modal-trigger='mountguide']")) {
      openModal(sticker);
    }

    if (sticker.matches("[data-modal-trigger='ux-report']")) {
      openReportModal(sticker);
    }
  });
});

modalTrigger?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openModal(modalTrigger);
  }
});

reportModalTrigger?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openReportModal(reportModalTrigger);
  }
});

modal?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.matches("[data-modal-close]")) {
    closeModal();
  }
});

reportModal?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.matches("[data-modal-close]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  const isMountguideOpen = modal?.hidden === false;
  const isReportOpen = reportModal?.hidden === false;

  if (isMountguideOpen) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveStage(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveStage(-1);
    }

    if (event.key === "Escape") {
      closeModal();
    }
  }

  if (isReportOpen && event.key === "Escape") {
    closeModal();
  }
});

renderStage();
