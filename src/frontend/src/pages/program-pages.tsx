/**
 * All 17 program pages for Built For Life PDF
 * Each page uses class="pdf-page" and is styled at A4 ratio
 */
import type React from "react";

const GOLD = "#C9A84C";
const NAVY = "#1A2744";
const WHITE = "#FFFFFF";
const BLACK = "#0A0A0A";

// ─────────────────────────────────────────────
// Shared primitives
// ─────────────────────────────────────────────
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="pdf-page shadow-md overflow-hidden"
      style={{
        width: 794,
        minHeight: 1123,
        backgroundColor: WHITE,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}

function GoldRule({ topBottom = 24 }: { topBottom?: number }) {
  return (
    <div
      style={{
        height: 1,
        backgroundColor: GOLD,
        marginTop: topBottom,
        marginBottom: topBottom,
      }}
    />
  );
}

function PageNum({ n }: { n: number }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 40,
        right: 40,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 11,
        color: GOLD,
        letterSpacing: "0.12em",
      }}
    >
      {n < 10 ? `0${n}` : `${n}`}
    </div>
  );
}

function FooterBar() {
  return (
    <div
      style={{
        backgroundColor: NAVY,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 10,
          letterSpacing: "0.25em",
          color: GOLD,
          textTransform: "uppercase",
        }}
      >
        BUILT FOR LIFE
      </span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 10,
        letterSpacing: "0.2em",
        color: GOLD,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

interface WorkoutPageProps {
  pageNum: number;
  heading: string;
  mobility: string;
  circuits: { name: string; exercises: string[] }[];
  coachingNote: string;
}

function WorkoutPage({
  pageNum,
  heading,
  mobility,
  circuits,
  coachingNote,
}: WorkoutPageProps) {
  const tags = [
    "40 sec work",
    "20 sec rest",
    "3 rounds",
    "60–90 sec rest between rounds",
  ];

  return (
    <PageWrapper>
      <div style={{ backgroundColor: NAVY, padding: "24px 40px 20px" }}>
        <Tag>Training Protocol</Tag>
        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 32,
            fontWeight: 700,
            color: WHITE,
            margin: "8px 0 0",
            letterSpacing: "-0.02em",
          }}
        >
          {heading}
        </h1>
      </div>

      <div style={{ padding: "28px 40px 80px" }}>
        <div
          style={{
            backgroundColor: "#F9F7F2",
            borderLeft: `3px solid ${GOLD}`,
            padding: "12px 16px",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 10,
              color: GOLD,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Mobility Warm-up
          </span>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 12,
              color: BLACK,
              margin: "4px 0 0",
            }}
          >
            {mobility}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            marginBottom: 24,
          }}
        >
          {circuits.map((circuit) => (
            <div
              key={circuit.name}
              style={{
                backgroundColor: "#FAFAFA",
                border: "1px solid #E8E8E4",
                padding: 14,
              }}
            >
              <div
                style={{
                  backgroundColor: NAVY,
                  padding: "4px 10px",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                  }}
                >
                  {circuit.name}
                </span>
              </div>
              {circuit.exercises.map((ex, exIdx) => (
                <div
                  key={ex}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 11,
                    color: BLACK,
                    padding: "5px 0",
                    borderBottom:
                      exIdx < circuit.exercises.length - 1
                        ? "1px solid #EBEBEB"
                        : "none",
                  }}
                >
                  {ex}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10,
                color: NAVY,
                backgroundColor: "#F0EDE5",
                padding: "4px 10px",
                letterSpacing: "0.06em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <GoldRule />

        <div style={{ marginTop: 20 }}>
          <Tag>Coach's Note</Tag>
          <p
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 15,
              fontStyle: "italic",
              color: NAVY,
              margin: "6px 0 0",
              lineHeight: 1.6,
            }}
          >
            &ldquo;{coachingNote}&rdquo;
          </p>
        </div>
      </div>

      <FooterBar />
      <PageNum n={pageNum} />
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 01 — COVER
// ─────────────────────────────────────────────
export function Page01Cover() {
  return (
    <PageWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: 1123,
        }}
      >
        <div
          style={{
            position: "relative",
            flex: 1,
            backgroundColor: NAVY,
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/generated/hero-cover.dim_794x1000.jpg"
            alt="Built For Life"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.5,
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, #1A2744CC 0%, #1A274466 40%, #1A2744EE 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              padding: "52px 52px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: `1.5px solid ${GOLD}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  BFL
                </span>
              </div>
              <div
                style={{ height: 1, width: 60, backgroundColor: `${GOLD}66` }}
              />
            </div>

            <div style={{ paddingBottom: 60 }}>
              <div style={{ marginBottom: 16 }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.28em",
                    color: GOLD,
                    textTransform: "uppercase",
                  }}
                >
                  6-Week Program
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 72,
                  fontWeight: 900,
                  color: WHITE,
                  margin: 0,
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                }}
              >
                BUILT
                <br />
                FOR
                <br />
                LIFE
              </h1>
              <div
                style={{
                  height: 3,
                  width: 80,
                  backgroundColor: GOLD,
                  margin: "24px 0",
                }}
              />
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.85)",
                  margin: "0 0 8px",
                  letterSpacing: "0.04em",
                }}
              >
                Strength &amp; Lifestyle Program for Men 35+
              </p>
              <p
                style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: 13,
                  color: `${GOLD}CC`,
                  margin: 0,
                }}
              >
                ३५+ पुरुषांसाठी स्ट्रेंथ आणि लाइफस्टाइल प्रोग्राम
              </p>
              <div style={{ marginTop: 32 }}>
                <p
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 16,
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.7)",
                    margin: "0 0 4px",
                  }}
                >
                  Rebuild Strength. Restore Energy. Live With Discipline.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    fontSize: 12,
                    color: `${GOLD}99`,
                    margin: 0,
                  }}
                >
                  ताकद पुन्हा उभारा. ऊर्जा वाढवा. शिस्तीत जगा.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: GOLD, padding: "18px 52px" }}>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: NAVY,
              margin: "0 0 2px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Nilesh Bomble
          </p>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11,
              color: `${NAVY}BB`,
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            World Championship Gold Medalist (2014) &nbsp;|&nbsp; 17+ Years
            Coaching Experience
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 02 — IDENTITY
// ─────────────────────────────────────────────
export function Page02Identity() {
  const identityPoints = [
    "Busy",
    "Responsible",
    "Yet feel their health is slipping",
  ];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ backgroundColor: NAVY, padding: "52px 52px 40px" }}>
          <Tag>Who This Is For</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 42,
              fontWeight: 700,
              color: WHITE,
              margin: "14px 0 0",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            This program is not
            <br />
            for everyone.
          </h1>
        </div>

        <div style={{ padding: "48px 52px", flex: 1 }}>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16,
              color: BLACK,
              marginBottom: 32,
              lineHeight: 1.7,
            }}
          >
            It is for men who are:
          </p>

          {identityPoints.map((point, idx) => (
            <div
              key={point}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 20,
                paddingLeft: 8,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  border: `1.5px solid ${GOLD}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 13,
                    color: GOLD,
                    fontWeight: 700,
                  }}
                >
                  0{idx + 1}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 22,
                  color: NAVY,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                {point}
              </span>
            </div>
          ))}

          <GoldRule topBottom={40} />

          <p
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              color: NAVY,
              lineHeight: 1.8,
              margin: "0 0 28px",
            }}
          >
            ३५ नंतर शरीर बदलायला लागतं… आणि अनेक पुरुषांकडे वेळ असूनही योग्य दिशा नसते.
          </p>

          <div
            style={{
              backgroundColor: "#F9F7F2",
              borderLeft: `4px solid ${GOLD}`,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 20,
                fontStyle: "italic",
                color: NAVY,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              If you are ready to take control again —<br />
              continue.
            </p>
          </div>
        </div>

        <FooterBar />
        <PageNum n={2} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 03 — PROBLEM
// ─────────────────────────────────────────────
export function Page03Problem() {
  const problems = [
    { label: "Lack of Structure", desc: "No clear plan to follow day to day." },
    {
      label: "Lack of Consistency",
      desc: "Starting strong but unable to stay on track.",
    },
    {
      label: "Lack of Accountability",
      desc: "No one holding you to your commitment.",
    },
  ];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ padding: "52px 52px 0" }}>
          <Tag>The Real Problem</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 38,
              fontWeight: 700,
              color: NAVY,
              margin: "16px 0 40px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            After 35, the problem
            <br />
            is not knowledge.
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 1,
              backgroundColor: `${GOLD}33`,
              marginBottom: 48,
            }}
          >
            {problems.map((item, idx) => (
              <div
                key={item.label}
                style={{ backgroundColor: WHITE, padding: "28px 24px" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: NAVY,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 14,
                      color: GOLD,
                      fontWeight: 700,
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: NAVY,
                    margin: "0 0 8px",
                  }}
                >
                  {item.label}
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13,
                    color: "#666",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <GoldRule />

          <p
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              color: NAVY,
              lineHeight: 1.8,
              margin: "28px 0",
            }}
          >
            हा प्रोग्राम तुम्हाला योग्य दिशा आणि सवय देण्यासाठी तयार केला आहे.
          </p>
        </div>

        <FooterBar />
        <PageNum n={3} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 04 — APPROACH
// ─────────────────────────────────────────────
export function Page04Approach() {
  const points = [
    {
      title: "Structured Training",
      desc: "Every day is planned. No guesswork. No improvisation.",
    },
    {
      title: "Mobility + Strength Balance",
      desc: "Build muscle while protecting your joints for the long term.",
    },
    {
      title: "Simple Lifestyle Habits",
      desc: "Sleep, water, steps — the fundamentals that multiply your results.",
    },
    {
      title: "Accountability Through Routine",
      desc: "Repeating the right actions builds the discipline you need.",
    },
  ];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ backgroundColor: NAVY, padding: "52px 52px 40px" }}>
          <Tag>The Approach</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 38,
              fontWeight: 700,
              color: WHITE,
              margin: "14px 0 0",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Built For Life is based on:
          </h1>
        </div>

        <div style={{ padding: "48px 52px", flex: 1 }}>
          {points.map((p, idx) => (
            <div
              key={p.title}
              style={{
                display: "flex",
                gap: 20,
                marginBottom: 28,
                paddingBottom: 28,
                borderBottom:
                  idx < points.length - 1 ? "1px solid #E8E8E4" : "none",
              }}
            >
              <div
                style={{
                  width: 4,
                  backgroundColor: GOLD,
                  flexShrink: 0,
                  marginTop: 4,
                }}
              />
              <div>
                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: NAVY,
                    margin: "0 0 6px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 14,
                    color: "#555",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}

          <GoldRule topBottom={32} />

          <p
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 16,
              color: NAVY,
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            हा फक्त fitness नाही… ही एक जगण्याची पद्धत आहे.
          </p>
          <p
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 16,
              fontStyle: "italic",
              color: GOLD,
              margin: 0,
            }}
          >
            This is not just fitness… this is a way of living.
          </p>
        </div>

        <FooterBar />
        <PageNum n={4} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 05 — HOW TO FOLLOW
// ─────────────────────────────────────────────
export function Page05HowToFollow() {
  const stats = [
    { num: "6", label: "Days per week" },
    { num: "30–40", label: "Minutes daily" },
    { num: "6", label: "Weeks total" },
  ];
  const steps = [
    "6 days per week",
    "30–40 minutes daily",
    "Repeat and improve",
  ];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ padding: "52px 52px 0" }}>
          <Tag>Instructions</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 40,
              fontWeight: 700,
              color: NAVY,
              margin: "14px 0 48px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Follow this program
            <br />
            for 6 weeks.
          </h1>

          <div
            style={{
              display: "flex",
              gap: 1,
              backgroundColor: `${GOLD}22`,
              marginBottom: 48,
            }}
          >
            {stats.map((item) => (
              <div
                key={item.label}
                style={{
                  flex: 1,
                  backgroundColor: WHITE,
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 52,
                    fontWeight: 900,
                    color: NAVY,
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    color: GOLD,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginTop: 8,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 48,
            }}
          >
            {steps.map((point) => (
              <div
                key={point}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: GOLD,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 16,
                    color: BLACK,
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>

          <GoldRule />

          <div
            style={{
              backgroundColor: NAVY,
              padding: "24px 28px",
              marginTop: 28,
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.18em",
                color: GOLD,
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
              }}
            >
              Rule
            </span>
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 20,
                color: WHITE,
                margin: 0,
                fontStyle: "italic",
                lineHeight: 1.5,
              }}
            >
              Don&rsquo;t keep changing plans. Stay consistent.
            </p>
          </div>
        </div>

        <FooterBar />
        <PageNum n={5} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 06 — TRAINING FORMAT
// ─────────────────────────────────────────────
export function Page06TrainingFormat() {
  const details = [
    { label: "Exercises per Circuit", value: "5" },
    { label: "Work Interval", value: "40 sec" },
    { label: "Rest Interval", value: "20 sec" },
    { label: "Rounds per Circuit", value: "3" },
    { label: "Rest Between Rounds", value: "60–90 sec" },
  ];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ backgroundColor: NAVY, padding: "52px 52px 40px" }}>
          <Tag>Training Protocol</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 42,
              fontWeight: 700,
              color: WHITE,
              margin: "14px 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Circuit Training Format
          </h1>
        </div>

        <div style={{ padding: "48px 52px", flex: 1 }}>
          {details.map((d, idx) => (
            <div
              key={d.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 0",
                borderBottom:
                  idx < details.length - 1 ? "1px solid #E8E8E4" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  color: "#555",
                }}
              >
                {d.label}
              </span>
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: NAVY,
                }}
              >
                {d.value}
              </span>
            </div>
          ))}

          <GoldRule topBottom={40} />

          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 28,
                fontStyle: "italic",
                color: NAVY,
                margin: "0 0 8px",
              }}
            >
              Simple. Effective. Practical.
            </p>
            <div
              style={{
                height: 2,
                width: 60,
                backgroundColor: GOLD,
                margin: "0 auto",
              }}
            />
          </div>

          <div
            style={{
              backgroundColor: "#F9F7F2",
              border: `1px solid ${GOLD}33`,
              padding: "20px 24px",
              marginTop: 16,
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                color: "#555",
                margin: 0,
                lineHeight: 1.8,
              }}
            >
              This format is designed for real-world schedules. 30–40 minutes is
              all it takes. The discipline you build inside these sessions will
              extend into every part of your life.
            </p>
          </div>
        </div>

        <FooterBar />
        <PageNum n={6} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 07 — WEEKLY STRUCTURE
// ─────────────────────────────────────────────
export function Page07WeeklyStructure() {
  const days = [
    { day: "Day 1", label: "Upper Body", isRest: false },
    { day: "Day 2", label: "Lower Body", isRest: false },
    { day: "Day 3", label: "Core", isRest: false },
    { day: "Day 4", label: "Functional", isRest: false },
    { day: "Day 5", label: "Full Body", isRest: false },
    { day: "Day 6", label: "Outdoor Cardio", isRest: false },
    { day: "Day 7", label: "Recovery", isRest: true },
  ];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ padding: "52px 52px 0" }}>
          <Tag>Weekly Blueprint</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 40,
              fontWeight: 700,
              color: NAVY,
              margin: "14px 0 40px",
              letterSpacing: "-0.02em",
            }}
          >
            Weekly Structure
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {days.map((d) => (
              <div
                key={d.day}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: d.isRest ? "#F5F5F5" : "#FAFAFA",
                  border: "1px solid #E8E8E4",
                }}
              >
                <div
                  style={{
                    width: 80,
                    padding: "18px 16px",
                    backgroundColor: d.isRest ? "#999" : NAVY,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 10,
                      color: d.isRest ? "rgba(255,255,255,0.7)" : GOLD,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {d.day}
                  </span>
                </div>
                <div style={{ padding: "18px 24px", flex: 1 }}>
                  <span
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: d.isRest ? "#888" : NAVY,
                    }}
                  >
                    {d.label}
                  </span>
                  {d.isRest && (
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 11,
                        color: "#999",
                        marginLeft: 12,
                      }}
                    >
                      — Rest &amp; Reflect
                    </span>
                  )}
                </div>
                {!d.isRest && (
                  <div style={{ paddingRight: 24 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: GOLD,
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <GoldRule topBottom={40} />

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            This weekly schedule provides a complete training stimulus while
            allowing adequate recovery. Follow the sequence as written for
            optimal results.
          </p>
        </div>

        <FooterBar />
        <PageNum n={7} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGES 08–12 — DAILY WORKOUTS
// ─────────────────────────────────────────────
export function Page08Day1Upper() {
  return (
    <WorkoutPage
      pageNum={8}
      heading="Day 1 — Upper Body"
      mobility="Shoulder rolls, thoracic rotation, wrist circles — 5 min"
      circuits={[
        {
          name: "Circuit 1",
          exercises: [
            "Push-ups",
            "Dumbbell shoulder press",
            "Bent-over rows",
            "Tricep dips",
            "Band pull-aparts",
          ],
        },
        {
          name: "Circuit 2",
          exercises: [
            "Incline push-ups",
            "Lateral raises",
            "Single-arm row",
            "Diamond push-ups",
            "Face pulls",
          ],
        },
        {
          name: "Circuit 3",
          exercises: [
            "Pike push-ups",
            "Arnold press",
            "Renegade rows",
            "Close-grip push-ups",
            "Rear delt fly",
          ],
        },
      ]}
      coachingNote="Form is more important than speed. Consistency is more important than intensity."
    />
  );
}

export function Page09Day2Lower() {
  return (
    <WorkoutPage
      pageNum={9}
      heading="Day 2 — Lower Body"
      mobility="Hip circles, leg swings, ankle rotations — 5 min"
      circuits={[
        {
          name: "Circuit 1",
          exercises: [
            "Bodyweight squats",
            "Reverse lunges",
            "Glute bridges",
            "Step-ups",
            "Calf raises",
          ],
        },
        {
          name: "Circuit 2",
          exercises: [
            "Sumo squats",
            "Walking lunges",
            "Single-leg glute bridge",
            "Box step-ups",
            "Standing calf raises",
          ],
        },
        {
          name: "Circuit 3",
          exercises: [
            "Pulse squats",
            "Bulgarian split squats",
            "Hip thrusts",
            "Lateral lunges",
            "Donkey calf raises",
          ],
        },
      ]}
      coachingNote="Knee alignment is critical. Never let knees cave inward."
    />
  );
}

export function Page10Day3Core() {
  return (
    <WorkoutPage
      pageNum={10}
      heading="Day 3 — Core"
      mobility="Cat-cow, child's pose, seated spinal twist — 5 min"
      circuits={[
        {
          name: "Circuit 1",
          exercises: [
            "Plank hold",
            "Dead bug",
            "Bird dog",
            "Hollow body hold",
            "Side plank",
          ],
        },
        {
          name: "Circuit 2",
          exercises: [
            "Ab wheel rollout",
            "Reverse crunches",
            "Pallof press",
            "Mountain climbers",
            "Russian twists",
          ],
        },
        {
          name: "Circuit 3",
          exercises: [
            "Dragon flag (assisted)",
            "Hanging knee raises",
            "Suitcase carry",
            "Stir the pot",
            "V-ups",
          ],
        },
      ]}
      coachingNote="Breathe through every rep. Core strength begins with breath control."
    />
  );
}

export function Page11Day4Functional() {
  return (
    <WorkoutPage
      pageNum={11}
      heading="Day 4 — Functional"
      mobility="World's greatest stretch, hip flexor stretch, thoracic opener — 5 min"
      circuits={[
        {
          name: "Circuit 1",
          exercises: [
            "Farmer's carry",
            "Kettlebell swing",
            "Box jumps (step-up option)",
            "TRX rows",
            "Med ball slam",
          ],
        },
        {
          name: "Circuit 2",
          exercises: [
            "Single-leg deadlift",
            "Bear crawl",
            "Lateral band walks",
            "Pull-throughs",
            "Rotational chop",
          ],
        },
        {
          name: "Circuit 3",
          exercises: [
            "Turkish get-up",
            "Resistance band push",
            "Jumping jacks",
            "Goblet squat",
            "Landmine press",
          ],
        },
      ]}
      coachingNote="Functional training builds real-life strength. Move with intention."
    />
  );
}

export function Page12Day5FullBody() {
  return (
    <WorkoutPage
      pageNum={12}
      heading="Day 5 — Full Body"
      mobility="Full body dynamic warm-up flow — 5 min"
      circuits={[
        {
          name: "Circuit 1",
          exercises: [
            "Burpees (low impact option)",
            "Dumbbell thruster",
            "Renegade row",
            "High knees",
            "Plank to push-up",
          ],
        },
        {
          name: "Circuit 2",
          exercises: [
            "Clean and press",
            "Front squat",
            "Band-assisted pull-ups",
            "Mountain climbers",
            "Single-leg RDL",
          ],
        },
        {
          name: "Circuit 3",
          exercises: [
            "Dumbbell power clean",
            "Overhead squat",
            "Jumping pull-ups",
            "Sprint in place",
            "Farmer's carry to press",
          ],
        },
      ]}
      coachingNote="Full body day tests your conditioning. Focus on breathing rhythm."
    />
  );
}

// ─────────────────────────────────────────────
// PAGE 13 — PROGRESSION
// ─────────────────────────────────────────────
export function Page13Progression() {
  const weeks = [
    {
      range: "Week 1–2",
      label: "Learn the movements",
      desc: "Focus on form, understand the exercises, build the habit of showing up.",
      highlight: false,
    },
    {
      range: "Week 3–4",
      label: "Improve control and stamina",
      desc: "Your body adapts. Push slightly harder each round. Rest less if you can.",
      highlight: false,
    },
    {
      range: "Week 5–6",
      label: "Push your limits",
      desc: "By now the routine is yours. Add resistance, reduce rest, test your capacity.",
      highlight: true,
    },
  ];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ backgroundColor: NAVY, padding: "52px 52px 40px" }}>
          <Tag>6-Week Journey</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 42,
              fontWeight: 700,
              color: WHITE,
              margin: "14px 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Progression
          </h1>
        </div>

        <div style={{ padding: "48px 52px", flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              backgroundColor: `${GOLD}22`,
            }}
          >
            {weeks.map((w) => (
              <div
                key={w.range}
                style={{ display: "flex", backgroundColor: WHITE }}
              >
                <div
                  style={{
                    width: 120,
                    backgroundColor: w.highlight ? GOLD : `${GOLD}22`,
                    padding: "28px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      color: w.highlight ? NAVY : GOLD,
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    {w.range}
                  </span>
                </div>
                <div style={{ padding: "28px 24px" }}>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: NAVY,
                      margin: "0 0 8px",
                    }}
                  >
                    {w.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 13,
                      color: "#666",
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <GoldRule topBottom={40} />

          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 26,
                fontStyle: "italic",
                color: NAVY,
                margin: 0,
              }}
            >
              You will feel change before you see it.
            </p>
          </div>
        </div>

        <FooterBar />
        <PageNum n={13} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 14 — LIFESTYLE
// ─────────────────────────────────────────────
export function Page14Lifestyle() {
  const doList = [
    { label: "Sleep", value: "6–7 hours per night" },
    { label: "Water", value: "3–4 litres daily" },
    { label: "Daily Steps", value: "6,000–8,000" },
  ];
  const avoidList = ["Late night eating", "Excess sugar", "Alcohol"];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ padding: "52px 52px 0" }}>
          <Tag>Outside the Gym</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 40,
              fontWeight: 700,
              color: NAVY,
              margin: "14px 0 40px",
              letterSpacing: "-0.02em",
            }}
          >
            Lifestyle Habits
          </h1>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            <div>
              <div
                style={{
                  backgroundColor: NAVY,
                  padding: "10px 18px",
                  marginBottom: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                  }}
                >
                  Non-Negotiables
                </span>
              </div>
              {doList.map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: "#FAFAFA",
                    borderLeft: `3px solid ${GOLD}`,
                    padding: "18px 18px",
                    marginBottom: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 11,
                      color: GOLD,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: NAVY,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <div
                style={{
                  backgroundColor: "#888",
                  padding: "10px 18px",
                  marginBottom: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: WHITE,
                    textTransform: "uppercase",
                  }}
                >
                  Eliminate
                </span>
              </div>
              {avoidList.map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: "#FAFAFA",
                    borderLeft: "3px solid #ccc",
                    padding: "18px 18px",
                    marginBottom: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 16,
                      color: "#555",
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <GoldRule topBottom={40} />

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              color: "#666",
              lineHeight: 1.8,
            }}
          >
            Training without lifestyle discipline is like building on sand.
            These habits support your recovery, your energy, and your results.
            Start with one change at a time.
          </p>
        </div>

        <FooterBar />
        <PageNum n={14} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 15 — SELF CHECK
// ─────────────────────────────────────────────
export function Page15SelfCheck() {
  const fields = ["Age", "Weight", "Goal", "Biggest Challenge"];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ backgroundColor: NAVY, padding: "52px 52px 40px" }}>
          <Tag>Accountability</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 42,
              fontWeight: 700,
              color: WHITE,
              margin: "14px 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Self Check
          </h1>
        </div>

        <div style={{ padding: "48px 52px", flex: 1 }}>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              color: "#555",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Fill this out and send on WhatsApp to get personalised guidance from
            the coach.
          </p>

          {fields.map((field) => (
            <div key={field} style={{ marginBottom: 32 }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  color: GOLD,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {field}
              </div>
              <div
                style={{
                  height: 40,
                  borderBottom: `1.5px solid ${NAVY}`,
                  width: "100%",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: -1,
                    left: 0,
                    width: 40,
                    height: 2,
                    backgroundColor: GOLD,
                  }}
                />
              </div>
            </div>
          ))}

          <GoldRule topBottom={40} />

          <div
            style={{
              backgroundColor: "#F9F7F2",
              border: `1px solid ${GOLD}44`,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                color: "#555",
                margin: 0,
                lineHeight: 1.8,
              }}
            >
              Sharing your starting point creates commitment. It is not about
              being judged — it is about being seen and supported by someone who
              knows the path.
            </p>
          </div>
        </div>

        <FooterBar />
        <PageNum n={15} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 16 — COMMUNITY
// ─────────────────────────────────────────────
export function Page16Community() {
  const points = [
    "Daily live training sessions",
    "Consistent routine, every single day",
    "Real accountability from real people",
    "Direct guidance from the coach",
  ];

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: 1123 }}
      >
        <div style={{ padding: "52px 52px 0" }}>
          <Tag>The Next Level</Tag>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 38,
              fontWeight: 700,
              color: NAVY,
              margin: "14px 0 16px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            You can do this alone.
          </h1>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 24,
              fontWeight: 400,
              fontStyle: "italic",
              color: GOLD,
              margin: "0 0 40px",
              lineHeight: 1.4,
            }}
          >
            Or you can train with a group that shows up every day.
          </h2>

          <div
            style={{
              backgroundColor: NAVY,
              padding: "32px 32px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.22em",
                color: GOLD,
                textTransform: "uppercase",
                display: "block",
                marginBottom: 12,
              }}
            >
              Community
            </span>
            <h3
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 22,
                fontWeight: 700,
                color: WHITE,
                margin: "0 0 24px",
              }}
            >
              Built For Life 35+ Men&rsquo;s Community
            </h3>
            {points.map((p) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: GOLD,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 18,
                fontStyle: "italic",
                color: "#555",
                marginBottom: 20,
              }}
            >
              Click below to join.
            </p>
            <div
              style={{
                display: "inline-block",
                backgroundColor: GOLD,
                padding: "14px 48px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: NAVY,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Join the Community
              </span>
            </div>
          </div>
        </div>

        <FooterBar />
        <PageNum n={16} />
      </div>
    </PageWrapper>
  );
}

// ─────────────────────────────────────────────
// PAGE 17 — FINAL
// ─────────────────────────────────────────────
export function Page17Final() {
  return (
    <PageWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: 1123,
          backgroundColor: NAVY,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 52px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 52,
            }}
          >
            <div
              style={{ height: 1, width: 80, backgroundColor: `${GOLD}44` }}
            />
            <div style={{ width: 8, height: 8, backgroundColor: GOLD }} />
            <div
              style={{ height: 1, width: 80, backgroundColor: `${GOLD}44` }}
            />
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 52,
              fontWeight: 700,
              color: WHITE,
              margin: "0 0 8px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            You don&rsquo;t need
            <br />
            motivation.
          </h1>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 52,
              fontWeight: 900,
              color: GOLD,
              margin: "0 0 48px",
              letterSpacing: "-0.02em",
            }}
          >
            You need discipline.
          </h2>

          <div
            style={{
              height: 2,
              width: 80,
              backgroundColor: `${GOLD}66`,
              margin: "0 auto 40px",
            }}
          />

          <p
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.9,
              margin: "0 0 60px",
              maxWidth: 480,
            }}
          >
            आपण motivation च्या मागे पळत नाही… आपण सवयी बदलतो.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                border: `1.5px solid ${GOLD}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: GOLD,
                }}
              >
                BFL
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 28,
                fontWeight: 900,
                color: WHITE,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              BUILT FOR LIFE
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 8,
              }}
            >
              <div
                style={{ height: 1, width: 40, backgroundColor: `${GOLD}44` }}
              />
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 10,
                  color: `${GOLD}99`,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                }}
              >
                Nilesh Bomble
              </span>
              <div
                style={{ height: 1, width: 40, backgroundColor: `${GOLD}44` }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: GOLD,
            padding: "18px 52px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11,
              color: NAVY,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            World Championship Gold Medalist (2014) &nbsp;|&nbsp; 17+ Years
            Coaching Experience
          </span>
        </div>
      </div>
    </PageWrapper>
  );
}
