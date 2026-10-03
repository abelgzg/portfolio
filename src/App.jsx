import { useState } from "react";

const currentYear = new Date().getFullYear();

const heroStats = [
  { value: "2 yrs", label: "penetration testing" },
  { value: "5–10", label: "web & API assessments" },
  { value: "3rd", label: "CyberShield CTF 2025" },
  { value: "B.Sc.", label: "Computer Science & Engineering, ASTU" },
];

const experience = [
  {
    company: "Menas Cyber Solution",
    role: "Penetration Tester",
    period: "Feb 2024 – Mar 2025",
    context: "Web and API security assessments.",
    bullets: [
      "Completed 5–10 API and web application penetration tests, identifying critical and high-severity findings including SQL injection, XSS, IDOR, SSRF, command injection, file inclusion, and authentication bypass.",
      "Tested session management, privilege escalation, and API authorization using Burp Suite, SQLMap, Nmap, ffuf, and Gobuster.",
      "Wrote reports with reproduction steps, severity ratings, evidence, and remediation guidance.",
    ],
    tags: ["Burp Suite", "SQLMap", "Nmap", "ffuf", "Gobuster", "OWASP Top 10"],
  },
  {
    company: "Revelo",
    role: "AI Engineer",
    period: "Feb 2025 – Jan 2026",
    context: "LLM features connected to application data.",
    bullets: [
      "Built Python (Django / FastAPI) and React features connecting LLMs to application data for text generation and content processing.",
      "A/B tested model variants across prompt engineering strategies, improving accuracy through iterative refinement and validation.",
      "Improved output reliability via prompt design, input validation, error handling, and secure LLM API communication.",
      "Worked across MongoDB and PostgreSQL, collaborating on testing, debugging, and code review.",
    ],
    tags: ["Python", "Django", "FastAPI", "React", "LLMs", "MongoDB"],
  },
];

const projects = [
  {
    number: "01",
    category: "GRADUATION PROJECT",
    title: "AACP — Ad Campaign Management Platform",
    description:
      "Collaborative ad campaign management platform built with Node.js/Express, React, and MongoDB. Enables teams to create, manage, and track ad campaigns in real time.",
    contribution:
      "Security testing across authentication, authorization, API behavior, input validation, and application vulnerabilities.",
    technologies: ["React", "Node.js", "MongoDB", "API Testing", "Security Testing"],
  },
  {
    number: "02",
    category: "AI / LLM",
    title: "AI / LLM Engineering & Evaluation",
    description:
      "Practical work involving AI-assisted software workflows, LLM tasks, backend workflows, automated testing, and structured evaluation.",
    contribution:
      "Prompt evaluation, backend integration, automated tests, and reliability-focused evaluation.",
    technologies: ["Python", "LLMs", "A/B Testing", "Docker", "Backend APIs"],
  },
  {
    number: "03",
    category: "COMPUTER VISION",
    title: "Ethiopian Car Plate Recognition",
    description:
      "A computer vision project focused on preparing an Ethiopian vehicle license plate dataset and developing a recognition pipeline.",
    contribution:
      "Image preprocessing, dataset organization, annotation handling, and recognition experimentation.",
    technologies: ["Python", "OpenCV", "VGG", "Computer Vision"],
    caseStudy: "#plate-research",
  },
];

const securityPractices = [
  [
    "Recon and surface mapping",
    "Fuzzing endpoints, enumerating parameters and object identifiers, and understanding routing before probing it.",
  ],
  [
    "Access control",
    "Horizontal and vertical authorization, IDOR, privilege escalation, session management, and token scope abuse.",
  ],
  [
    "Injection and execution",
    "SQLi, XSS, SSTI, LFI, SSRF, and command injection through both form fields and API parameters.",
  ],
  [
    "Reporting",
    "Reproduction steps, severity rating, evidence, and remediation guidance a developer can actually apply.",
  ],
];

const securityTools = [
  "Burp Suite",
  "Repeater / Intruder / Scanner",
  "SQLMap",
  "Nmap",
  "ffuf",
  "Gobuster",
  "OWASP Top 10",
  "Source code review",
  "Vulnerability assessment",
];

const skillGroups = [
  {
    title: "Application Security",
    items: [
      "Web & API pentesting",
      "OWASP Top 10",
      "Authn / Authz testing",
      "Vuln assessment",
      "Source code review",
    ],
  },
  {
    title: "Development",
    items: [
      "Python",
      "JavaScript / TypeScript",
      "SQL",
      "Node.js / Express",
      "Django",
      "FastAPI",
      "React",
      "REST APIs",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Linux", "Git", "CI/CD"],
  },
  {
    title: "AI / LLM",
    items: ["LLM API integration", "Prompt engineering", "A/B testing", "Evaluation"],
  },
];

const education = [
  {
    credential: "B.Sc. Computer Science and Engineering",
    school: "Adama Science and Technology University",
    location: "Adama, Ethiopia",
    period: "2021 – 2026",
  },
];

const ctf = {
  event: "Ethiopia CyberShield Showdown CTF 2025",
  placing: "3rd place",
  team: "Team Okiru",
  dates: "September 19 – 21, 2025",
  venue: "CapStone ALX Tech Hub, Addis Ababa",
  organizer: "Ethiopia CyberShield Showdown, with ALX Ethiopia / Sand Technologies",
  points: [
    "Three days on-site and running continuously, so placement measured stamina and clean hand-offs as much as raw solving.",
    "Team work under time pressure: deciding which target was worth the effort, splitting coverage, and keeping notes good enough that another player could pick a thread up mid-attack.",
    "The same craft my day job uses, in a faster loop — reconnaissance, enumeration, injection and authorization flaws, then proving the finding before moving on.",
  ],
};

const certifications = [
  {
    title: "Cisco Certified Network Associate",
    detail: "CCNA v7",
  },
];

const plateCategories = [
  { code: "1", category: "Public Transport (Taxis / Buses)", background: "White", text: "Red" },
  { code: "2", category: "Private Vehicles", background: "White", text: "Blue" },
  { code: "3", category: "Commercial / Business", background: "White", text: "Green" },
  { code: "4", category: "Government (State-owned)", background: "White", text: "Black" },
  { code: "5", category: "NGOs / Religious / Civic", background: "White", text: "Orange" },
];

const plateSpecial = [
  { label: "UN", script: "የተመ", detail: "United Nations vehicles; light blue background, black text." },
  { label: "AU", script: "አሕ", detail: "African Union vehicles; light green background, black text." },
  {
    label: "Temporary",
    script: "ተላላፊ",
    detail: "Vehicles in transit or awaiting permanent registration; light blue background.",
  },
  { label: "Police", script: "ፖሊስ", detail: "Yellow background, black text." },
  {
    label: "Military",
    script: "መከላከያ",
    detail: "Defence force vehicles; black background, white Ge'ez lettering.",
  },
];

const plateDiplomatic = [
  ["01", "Italy"],
  ["02", "France"],
  ["03", "United Kingdom"],
  ["04", "United States"],
  ["46", "Canada"],
  ["56", "China"],
];

const plateRegions = [
  ["አአ", "AA", "Addis Ababa"],
  ["ኦሮ", "OR", "Oromia"],
  ["አማ", "AM", "Amhara"],
  ["ድሬ", "DR", "Dire Dawa"],
  ["ትግራይ", "TG", "Tigray"],
  ["ሶማ", "SM", "Somali"],
];

const plateFindings = [
  {
    title: "Dual-script character set",
    body: "Plates mix Latin and Ge'ez in the same registration, so a recogniser has to handle two writing systems plus the regional prefixes that are still on the road.",
  },
  {
    title: "Colour carries meaning",
    body: "Text colour encodes the vehicle class rather than being decorative, so a preprocessing step that normalises colour destroys signal the model needs.",
  },
  {
    title: "Transitional corpus",
    body: "Old region-coded plates and the new unified national standard coexist, which means the dataset spans two formats at once instead of one clean label space.",
  },
  {
    title: "Security features as occlusion",
    body: "Retro-reflective sheeting, laser-etched serials and directional watermarks change how a plate photographs at night and off-axis.",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#security", label: "Security" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { label: "github.com/abelgzg", href: "https://github.com/abelgzg" },
  {
    label: "linkedin.com/in/abel-gezu-7339a02b6",
    href: "https://www.linkedin.com/in/abel-gezu-7339a02b6",
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-400">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="mb-3 font-mono text-xs tracking-[0.2em] text-blue-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070b12] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-200px] top-[40%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070b12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 font-mono text-sm font-bold text-blue-400">
              AG
            </div>
            <span className="hidden font-semibold tracking-tight sm:block">Abel Gezu</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-400 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Abel-Gezu-CV.pdf"
              className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium transition hover:border-blue-400/30 hover:bg-blue-500/10 sm:block"
            >
              Download CV
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-md border border-white/10 p-2 text-slate-300 lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.06] px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="/Abel-Gezu-CV.pdf">Download CV</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.4fr_.6fr] lg:px-8 lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-4 py-2 text-sm text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                Available for opportunities
              </div>

              <p className="mb-5 font-mono text-sm tracking-[0.2em] text-blue-400">
                APPSEC • BACKEND • AI / LLM
              </p>

              <h1 className="max-w-5xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Abel Gezu
              </h1>

              <p className="mt-4 text-xl font-medium text-slate-300">
                Application Security Engineer | Backend &amp; AI Developer
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
                I build systems and then test whether they hold. Two years of web and API
                penetration testing alongside backend and LLM development in Python, Node.js and
                React.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#experience"
                  className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  See my work
                </a>
                <a
                  href="mailto:abelgezu196@gmail.com"
                  className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                >
                  Get in touch
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-xs text-slate-500">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-blue-400"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="order-2 mt-1 text-xs leading-snug text-slate-500">{stat.label}</dt>
                    <dd className="order-1 font-mono text-2xl font-bold text-blue-400">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="order-first space-y-6 lg:order-none">
              <div className="relative mx-auto w-full max-w-[190px] sm:max-w-[260px] lg:max-w-none">
                <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/15 blur-3xl" />
                <img
                  src="/profile.jpg"
                  alt="Portrait of Abel Gezu"
                  width={600}
                  height={800}
                  className="relative w-full rounded-2xl border border-white/10 object-cover"
                />
              </div>

              <div className="hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 lg:block">
                <p className="mb-5 font-mono text-xs tracking-[0.2em] text-slate-500">FOCUS AREAS</p>
                <div className="space-y-4">
                  {[
                    ["Application security", "OWASP Top 10, authz, API abuse"],
                    ["Backend engineering", "Node.js, Django, FastAPI"],
                    ["AI / LLM engineering", "Prompt design, A/B evaluation"],
                    ["Computer vision", "ALPR pipelines, dataset design"],
                  ].map(([title, detail]) => (
                    <div key={title} className="border-l border-blue-500/30 pl-4">
                      <p className="text-sm font-medium text-white">{title}</p>
                      <p className="mt-1 text-xs text-slate-500">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading eyebrow="01 / ABOUT" title="Security-first, but I ship" />
            <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr]">
              <div className="space-y-6 text-slate-400">
                <p className="text-lg leading-relaxed">
                  Most of my work starts as software that has to function — an API, a platform, a
                  model pipeline — and then becomes a security question: who can reach this endpoint,
                  what does this token actually grant, what happens when the input is not what the
                  form expected. Testing from the attacker's side of the request makes the code I
                  write harder to break.
                </p>
                <p className="leading-relaxed">
                  On the offensive side I have run 5–10 web and API assessments end to end, from
                  surface mapping through to a report with reproduction steps and remediation. On
                  the build side I have shipped Django, FastAPI and React features that connect LLMs
                  to real application data, working across PostgreSQL and MongoDB.
                </p>
                <p className="leading-relaxed">
                  The AI work sits between the two: evaluation is adversarial by default, so I look
                  for the inputs that make a model confident and wrong rather than the ones that
                  confirm it works.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  ["Based in", "Ethiopia"],
                  ["Degree", "B.Sc. Computer Science and Engineering"],
                  ["Languages", "English"],
                  ["Interests", "API abuse, authz flaws, LLM reliability"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <p className="font-mono text-xs tracking-[0.15em] text-blue-400">
                      {label.toUpperCase()}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading eyebrow="02 / EXPERIENCE" title="Where I have worked" />
            <div className="space-y-6">
              {experience.map((job) => (
                <article
                  key={job.role + job.period}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {job.role}
                      <span className="text-slate-500"> · {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs tracking-[0.12em] text-blue-400/80">{job.period}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{job.context}</p>

                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-400">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading eyebrow="03 / PROJECTS" title="Selected work" />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition hover:border-blue-400/25 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-sm text-blue-400/70">{project.number}</span>
                    <span className="font-mono text-xs tracking-[0.18em] text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
                  <p className="mt-4 border-l border-blue-500/30 pl-4 text-sm leading-relaxed text-slate-500">
                    {project.contribution}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  {project.caseStudy && (
                    <div className="mt-6 flex flex-wrap gap-5 border-t border-white/[0.06] pt-5 text-sm">
                      <a
                        href={project.caseStudy}
                        className="font-medium text-slate-300 transition hover:text-white"
                      >
                        Case study →
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="scroll-mt-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading eyebrow="04 / SECURITY" title="How I test" />
            <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
              <div>
                <p className="mb-8 max-w-2xl leading-relaxed text-slate-400">
                  I read an application the way an attacker does: map the surface, then push on the
                  trust boundaries between the client, the API, and whatever the API trusts
                  downstream. Findings I report come with a reproducible request and the actual
                  impact, not a scanner line.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {securityPractices.map(([title, detail]) => (
                    <div key={title} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <h3 className="text-sm font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
                <p className="mb-6 font-mono text-xs tracking-[0.2em] text-slate-500">
                  TECHNIQUES &amp; TOOLS
                </p>
                <div className="flex flex-wrap gap-2">
                  {securityTools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
                <p className="mt-8 border-t border-white/[0.06] pt-6 text-xs leading-relaxed text-slate-600">
                  Assessments are performed against systems I own or have explicit written permission
                  to test.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case study */}
        <section id="plate-research" className="scroll-mt-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading
              eyebrow="05 / CASE STUDY"
              title="Ethiopian vehicle plates: the dataset problem"
            />

            <div className="grid gap-12 lg:grid-cols-[1.4fr_.6fr]">
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-slate-300">
                  Ethiopian registration plates are an awkward target for automatic licence plate
                  recognition. The country is moving from a region-based system to a unified national
                  standard, so both formats are on the road at the same time — and the new one uses
                  two scripts, a colour scheme that carries meaning, and physical security features
                  that change how plates photograph.
                </p>

                <div>
                  <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">
                    The national standard
                  </h3>
                  <ul className="space-y-3 text-sm leading-relaxed text-slate-400">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      <span>
                        National identifiers <span className="font-mono text-slate-300">ETH</span>{" "}
                        and <span className="font-mono text-slate-300">ኢት</span>, alongside a map of
                        Ethiopia, replacing more than 16 regional variations.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      Serial format of three Latin letters followed by four digits.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      RFID chips and QR codes for digital verification.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      Electric and renewable-energy vehicles are marked as green transport with a
                      distinct colour scheme.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">
                    Colour code by vehicle class
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/[0.03] font-mono text-xs tracking-[0.12em] text-slate-500">
                        <tr>
                          <th className="px-4 py-3 font-normal">CODE</th>
                          <th className="px-4 py-3 font-normal">CATEGORY</th>
                          <th className="px-4 py-3 font-normal">BACKGROUND</th>
                          <th className="px-4 py-3 font-normal">TEXT</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.05] text-slate-400">
                        {plateCategories.map((row) => (
                          <tr key={row.code}>
                            <td className="px-4 py-3 font-mono text-blue-400/80">{row.code}</td>
                            <td className="px-4 py-3 text-slate-300">{row.category}</td>
                            <td className="px-4 py-3">{row.background}</td>
                            <td className="px-4 py-3">{row.text}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    Diplomatic plates start with <span className="font-mono text-slate-400">CD</span>,
                    and the leading digits identify the country by the order in which it established
                    relations with Ethiopia:{" "}
                    {plateDiplomatic.map(([digits, country], index) => (
                      <span key={digits} className="whitespace-nowrap">
                        <span className="font-mono text-slate-400">{digits}</span> {country}
                        {index < plateDiplomatic.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">
                    What this did to the pipeline
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {plateFindings.map((finding) => (
                      <div
                        key={finding.title}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5"
                      >
                        <h4 className="text-sm font-semibold text-white">{finding.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{finding.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-500">
                  The practical lesson was that the taxonomy, not the model, was the hard part.
                  Getting the classes, scripts and transitional formats right determined what the
                  pipeline could learn at all.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                  <p className="mb-5 font-mono text-xs tracking-[0.2em] text-slate-500">
                    SPECIAL &amp; DIPLOMATIC
                  </p>
                  <div className="space-y-4">
                    {plateSpecial.map((item) => (
                      <div key={item.label}>
                        <p className="text-sm font-medium text-slate-200">
                          {item.label}{" "}
                          <span className="font-mono text-xs text-blue-400/70">{item.script}</span>
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                  <p className="mb-5 font-mono text-xs tracking-[0.2em] text-slate-500">
                    REGIONAL PREFIXES
                  </p>
                  <p className="mb-4 text-xs leading-relaxed text-slate-600">
                    Phasing out under the unified standard, but still common in the wild.
                  </p>
                  <div className="space-y-2.5">
                    {plateRegions.map(([geez, latin, region]) => (
                      <div key={latin} className="flex items-baseline gap-3 text-sm">
                        <span className="w-14 shrink-0 font-mono text-xs text-blue-400/70">
                          {latin}
                        </span>
                        <span className="text-slate-300">{geez}</span>
                        <span className="ml-auto text-xs text-slate-500">{region}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                  <p className="mb-4 font-mono text-xs tracking-[0.2em] text-slate-500">
                    SPECIFICATIONS
                  </p>
                  <div className="space-y-3 text-xs leading-relaxed text-slate-500">
                    <p>High-grade aluminium alloy with retro-reflective sheeting.</p>
                    <p>
                      Standard <span className="font-mono text-slate-400">520 × 110 mm</span>, square{" "}
                      <span className="font-mono text-slate-400">305 × 155 mm</span>.
                    </p>
                    <p>Laser-etched serials, directional watermarks, non-removable security screws.</p>
                    <p>
                      Motorcycles use a smaller two-line plate; construction and agricultural
                      machinery carries a yellow or brown scheme as a non-highway vehicle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading eyebrow="06 / SKILLS" title="Stack" />
            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                >
                  <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="mb-6 font-mono text-xs tracking-[0.2em] text-blue-400">EDUCATION</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {education.map((item) => (
                  <div
                    key={item.credential}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="text-sm font-semibold text-white">{item.credential}</h4>
                      <p className="font-mono text-xs text-slate-500">{item.period}</p>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{item.school}</p>
                    <p className="mt-1 text-xs text-slate-600">{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="scroll-mt-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading eyebrow="07 / ACHIEVEMENTS" title={ctf.event} />

            <div className="grid gap-12 lg:grid-cols-[1.4fr_.6fr]">
              <div>
                <p className="text-lg leading-relaxed text-slate-300">
                  I took {ctf.placing} at the {ctf.event} with {ctf.team}, a national
                  capture-the-flag competition held {ctf.dates} at the {ctf.venue}.
                </p>

                <ul className="mt-8 space-y-4 text-sm leading-relaxed text-slate-400">
                  {ctf.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-500">
                  A CTF is the only part of my work where nothing is in scope but the target itself:
                  no change requests, no ticket queue, just whether you can find the flaw before the
                  clock runs out. That pressure is why I keep coming back to offensive security
                  alongside building.
                </p>

                <div className="mt-12">
                  <h3 className="mb-6 font-mono text-xs tracking-[0.2em] text-blue-400">
                    CERTIFICATIONS
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {certifications.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5"
                      >
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.05] p-7 text-center">
                  <p className="font-mono text-6xl font-bold text-blue-400">3rd</p>
                  <p className="mt-3 text-sm font-medium text-white">Place</p>
                  <p className="mt-1 text-xs text-slate-400">{ctf.team}</p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                  <p className="mb-5 font-mono text-xs tracking-[0.2em] text-slate-500">DETAILS</p>
                  <dl className="space-y-4 text-sm">
                    {[
                      ["Dates", ctf.dates],
                      ["Venue", ctf.venue],
                      ["Organizer", ctf.organizer],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="font-mono text-xs tracking-[0.12em] text-slate-600">
                          {label.toUpperCase()}
                        </dt>
                        <dd className="mt-1 leading-relaxed text-slate-300">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <figure className="mt-16 max-w-3xl">
              <a
                href="/cybershield-ctf-2025.jpg"
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-2xl border border-white/[0.07] transition hover:border-blue-400/30"
              >
                <img
                  src="/cybershield-ctf-2025.jpg"
                  alt="Certificate of Achievement from the Ethiopia CyberShield Showdown CTF 2025, issued to Abel Gezu of Team Okiru for 3rd place"
                  width={1600}
                  height={1131}
                  loading="lazy"
                  className="w-full"
                />
              </a>
              <figcaption className="mt-4 text-xs leading-relaxed text-slate-600">
                Certificate of Achievement, {ctf.event} — issued to Abel Gezu / {ctf.team}. Click
                to open at full resolution.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="rounded-3xl border border-white/[0.07] bg-gradient-to-b from-blue-500/[0.07] to-transparent p-10 text-center sm:p-16">
              <p className="mb-4 font-mono text-xs tracking-[0.2em] text-blue-400">08 / CONTACT</p>
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Open to application security and backend roles
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
                Internships, entry-level positions, or a system you want assessed from the
                attacker's side of the request.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:abelgezu196@gmail.com"
                  className="rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold transition hover:bg-blue-400"
                >
                  Email me
                </a>
                <a
                  href="https://github.com/abelgzg"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/abel-gezu-7339a02b6"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="/Abel-Gezu-CV.pdf"
                  className="rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-600 sm:flex-row lg:px-8">
          <p>© {currentYear} Abel Gezu Gebremaryam</p>
          <p className="font-mono">Built with React, Vite and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
