// ---- 1. Define your navigation tree here ----
// Adjust titles and file paths as you add posts.
const navData = [
  {
    title: "Home",
    children: [
      {
        title: "Homepage",
        file: "homepage.md"
      },
      {
        title: "Intro",
        file: "home/intro.md"
      }
    ]
  },
  {
    title: "Section 1",
    children: [
      {
        title: "Post 1",
        file: "section1/post1.md"
      }
    ]
  },
  {
    title: "Section 2",
    children: [
      {
        title: "Subsection 1",
        children: [
          {
            title: "Post 2",
            file: "section2/subsection1/post2.md"
          }
        ]
      }
    ]
  }
];

// Default file to show on first load if no hash
const DEFAULT_FILE = "homepage.md";

// ---- 2. Build sidebar UI ----

function createTreeList(items, level = 0) {
  const ul = document.createElement("ul");
  ul.className = "tree-list";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "tree-item";

    if (item.children && item.children.length) {
      // Section / group node with children
      const btn = document.createElement("button");
      btn.className = "tree-toggle";
      btn.type = "button";
      btn.setAttribute("aria-expanded", "true");

      const chevron = document.createElement("span");
      chevron.className = "chevron";
      chevron.textContent = "▾"; // expanded by default

      const label = document.createElement("span");
      label.textContent = item.title;

      btn.appendChild(chevron);
      btn.appendChild(label);
      li.appendChild(btn);

      const childrenContainer = document.createElement("div");
      childrenContainer.className = "tree-children";
      childrenContainer.appendChild(createTreeList(item.children, level + 1));
      li.appendChild(childrenContainer);

      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        chevron.textContent = expanded ? "▸" : "▾";
        childrenContainer.style.display = expanded ? "none" : "block";
      });
    } else if (item.file) {
      // Leaf node (actual post)
      const link = document.createElement("a");
      link.href = "#" + encodeURIComponent(item.file);
      link.textContent = item.title;
      link.className = "tree-link";
      link.dataset.file = item.file;

      link.addEventListener("click", (e) => {
        e.preventDefault();
        const file = link.dataset.file;
        window.location.hash = encodeURIComponent(file);
        loadMarkdown(file);
        setActiveLink(file);
      });

      li.appendChild(link);
    }

    ul.appendChild(li);
  });

  return ul;
}

function renderSidebar() {
  const navRoot = document.getElementById("sidebar-nav");
  navRoot.innerHTML = "";
  navRoot.appendChild(createTreeList(navData));
}

// ---- 3. Markdown loading ----

async function loadMarkdown(filePath) {
  const contentEl = document.getElementById("content");
  contentEl.innerHTML = `<p>Loading <code>${filePath}</code>…</p>`;

  try {
    const res = await fetch(filePath);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const text = await res.text();
    const html = marked.parse(text);
    contentEl.innerHTML = html;
  } catch (err) {
    contentEl.innerHTML = `
      <h1>Oops</h1>
      <p>Could not load <code>${filePath}</code>.</p>
      <pre>${String(err)}</pre>
    `;
  }
}

// Highlight current link in sidebar
function setActiveLink(filePath) {
  const links = document.querySelectorAll(".tree-link");
  links.forEach((link) => {
    if (link.dataset.file === filePath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ---- 4. Initial setup ----

function getFileFromHash() {
  const hash = window.location.hash;
  if (!hash) return null;
  try {
    return decodeURIComponent(hash.replace(/^#/, ""));
  } catch {
    return null;
  }
}

function init() {
  renderSidebar();

  let fileToLoad = getFileFromHash() || DEFAULT_FILE;
  loadMarkdown(fileToLoad);
  setActiveLink(fileToLoad);

  // If the user changes the hash manually / via back button
  window.addEventListener("hashchange", () => {
    const file = getFileFromHash() || DEFAULT_FILE;
    loadMarkdown(file);
    setActiveLink(file);
  });
}

document.addEventListener("DOMContentLoaded", init);
