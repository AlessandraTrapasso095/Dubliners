import React, { useMemo, useState } from "react";

const recapItems = [
  "James Joyce was an Irish modernist writer.",
  "Dubliners is a collection of 15 short stories published in 1914.",
  "The stories portray ordinary people living in Dublin.",
  "Two key concepts are paralysis and epiphany.",
];

const concepts = [
  {
    title: "Paralysis",
    tone: "red",
    definition:
      "Paralysis refers to the inability of Joyce's characters to act, change their lives or escape from social, moral or psychological limits.",
    keywords: ["fear of change", "social pressure", "emotional immobility"],
  },
  {
    title: "Epiphany",
    tone: "blue",
    definition:
      "Epiphany is a sudden moment of awareness or revelation in which a character understands something important about life or themselves.",
    keywords: ["sudden awareness", "personal revelation", "deeper understanding"],
  },
];

const evelineChoices = {
  Duty:
    "Eveline feels bound to her promise to her mother and to the responsibilities she has at home.",
  Fear:
    "The unknown future frightens her, so the possibility of change becomes emotionally overwhelming.",
  "Desire for freedom":
    "Her wish to escape is real, but desire alone is not strong enough to overcome duty and fear.",
};

const glossaryTerms = [
  { term: "Paralysis", definition: "inability to act or change" },
  { term: "Epiphany", definition: "sudden moment of awareness" },
  {
    term: "Modernism",
    definition: "literary movement focused on inner life and fragmented reality",
  },
  { term: "Escape", definition: "the act of leaving a place or situation" },
  { term: "Duty", definition: "moral obligation" },
  { term: "Identity", definition: "the way people understand themselves" },
];

const quizQuestions = [
  {
    question: "Dubliners was written by:",
    options: ["Virginia Woolf", "James Joyce", "T.S. Eliot"],
    answer: "James Joyce",
  },
  {
    question: "Dubliners is:",
    options: ["a novel", "a collection of short stories", "a poem"],
    answer: "a collection of short stories",
  },
  {
    question: "Paralysis means:",
    options: ["freedom to act", "inability to act or change", "happiness"],
    answer: "inability to act or change",
  },
  {
    question: "Epiphany is:",
    options: ["a sudden revelation", "a journey", "a historical event"],
    answer: "a sudden revelation",
  },
  {
    question: "Eveline wants to:",
    options: [
      "stay in Dublin happily",
      "escape from her difficult life",
      "become a writer",
    ],
    answer: "escape from her difficult life",
  },
  {
    question: "Joyce is associated with:",
    options: ["Modernism", "Romanticism", "Medieval literature"],
    answer: "Modernism",
  },
];

const meterSliders = [
  {
    key: "duty",
    label: "Duty",
    description: "Family promises and responsibilities",
  },
  {
    key: "fear",
    label: "Fear",
    description: "The emotional weight of the unknown",
  },
  {
    key: "freedom",
    label: "Desire for freedom",
    description: "The wish to begin a different life",
  },
];

const detectiveSituations = [
  {
    text: "A teenager wants to study abroad but is afraid of leaving home.",
    answer: "Paralysis",
    correctFeedback: "Exactly. Fear blocks action, so this is paralysis.",
    retryFeedback:
      "Good try. Look again at the keyword: afraid. Fear can make a person unable to act.",
  },
  {
    text: "A student suddenly understands that fear has shaped many of her choices.",
    answer: "Epiphany",
    correctFeedback: "Exactly. Sudden understanding is an epiphany.",
    retryFeedback:
      "Good try. Look again at the keyword: suddenly understands. That points to epiphany.",
  },
  {
    text: "Eveline wants to escape but remains still at the station.",
    answer: "Both",
    correctFeedback:
      "Exactly. Eveline sees the choice, but paralysis stops her action.",
    retryFeedback:
      "Good try. Look again at the keyword: remains still. This scene shows both ideas.",
  },
  {
    text: "A character sees ordinary life in a completely new way.",
    answer: "Epiphany",
    correctFeedback: "Exactly. Seeing life differently is an epiphany.",
    retryFeedback:
      "Good try. Look again at the keyword: new way. That points to a revelation.",
  },
  {
    text: "A young person feels blocked by family expectations.",
    answer: "Paralysis",
    correctFeedback: "Exactly. Family pressure creates paralysis.",
    retryFeedback:
      "Good try. Look again at the keyword: blocked. This means unable to act.",
  },
];

function Header({ inclusiveMode, onToggleInclusive }) {
  const links = [
    ["Recap", "#recap"],
    ["Concepts", "#concepts"],
    ["Eveline", "#eveline"],
    ["Simulator", "#escape-meter"],
    ["Detective", "#detective-lab"],
    ["Glossary", "#glossary"],
    ["Quiz", "#quiz"],
    ["Exit Ticket", "#exit-ticket"],
    ["Resources", "#resources"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to Dubliners home">
        <span>Dubliners</span>
        <small>Joyce Learning Hub</small>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <button
        className={`inclusive-toggle ${inclusiveMode ? "active" : ""}`}
        type="button"
        aria-label={
          inclusiveMode ? "Turn Inclusive Mode off" : "Turn Inclusive Mode on"
        }
        aria-pressed={inclusiveMode}
        onClick={onToggleInclusive}
      >
        <span className="toggle-track" aria-hidden="true">
          <span className="toggle-dot" />
        </span>
        Inclusive Mode
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero-scene"
        role="img"
        aria-label="Stylised Dublin skyline, books and a literary portrait silhouette"
      >
        <div className="skyline">
          <span className="tower tower-one" />
          <span className="roof roof-one" />
          <span className="tower tower-two" />
          <span className="roof roof-two" />
          <span className="spire" />
        </div>
        <div className="portrait">
          <span className="head" />
          <span className="glasses" />
          <span className="collar" />
        </div>
        <div className="book-stack" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hero-content">
        <p className="eyebrow">James Joyce | Irish Modernism | 1914</p>
        <h1>DUBLINERS</h1>
        <p className="subtitle">
          Paralysis and Epiphany in James Joyce's Short Stories
        </p>
        <div className="hero-actions" aria-label="Learning actions">
          <a className="button primary" href="#recap" aria-label="Start learning">
            Start Learning
          </a>
          <a className="button secondary" href="#quiz" aria-label="Take the quiz">
            Take the Quiz
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function ActivitySupport({ hint, keywords, id }) {
  const [showHint, setShowHint] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);

  return (
    <div className="activity-support">
      <div className="support-actions">
        <button
          className="support-button"
          type="button"
          aria-controls={`${id}-hint`}
          aria-expanded={showHint}
          onClick={() => setShowHint((isVisible) => !isVisible)}
        >
          Read hint
        </button>
        <button
          className="support-button"
          type="button"
          aria-controls={`${id}-keywords`}
          aria-expanded={showKeywords}
          onClick={() => setShowKeywords((isVisible) => !isVisible)}
        >
          Show keywords
        </button>
      </div>
      {showHint && (
        <p className="support-panel" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {showKeywords && (
        <div className="support-panel keyword-panel" id={`${id}-keywords`}>
          {keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function RecapCards() {
  return (
    <section className="section band-light" id="recap">
      <div className="container">
        <SectionHeader eyebrow="Quick Recap" title="Before We Begin">
          Four essential ideas to activate prior knowledge.
        </SectionHeader>
        <div className="recap-grid">
          {recapItems.map((item, index) => (
            <article className="recap-card" key={item}>
              <span aria-hidden="true">0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptCards() {
  return (
    <section className="section" id="concepts">
      <div className="container">
        <SectionHeader eyebrow="Key Concepts" title="Paralysis and Epiphany">
          Two ideas that help students read Dubliners with precision.
        </SectionHeader>
        <div className="concept-grid">
          {concepts.map((concept) => (
            <article className={`concept-card ${concept.tone}`} key={concept.title}>
              <h3>{concept.title}</h3>
              <p className="definition">{concept.definition}</p>
              <div className="keywords" aria-label={`${concept.title} keywords`}>
                {concept.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvelineActivity({ inclusiveMode }) {
  const [selectedChoice, setSelectedChoice] = useState("Duty");

  return (
    <section className="section band-navy" id="eveline">
      <div className="container eveline-layout">
        <div>
          <p className="eyebrow">Focus On Eveline</p>
          <h2>Duty, Fear and the Dream of Escape</h2>
          {inclusiveMode ? (
            <p>
              Eveline wants to leave Dublin. At the station, she cannot move.
              Duty and fear are stronger than her wish to escape.
            </p>
          ) : (
            <p>
              In "Eveline", the protagonist dreams of escaping from her difficult
              life in Dublin, but at the end she is unable to leave. Her paralysis
              reveals the conflict between duty, fear and desire for freedom.
            </p>
          )}
        </div>

        <div className="activity-panel" aria-labelledby="eveline-question">
          <h3 id="eveline-question">Why does Eveline remain unable to act?</h3>
          <p className="activity-instructions">
            Work in pairs. Choose one reason, then explain your choice.
          </p>
          <ActivitySupport
            id="eveline-support"
            hint="Think about what makes Eveline unable to act."
            keywords={["duty", "fear", "freedom", "unable to act"]}
          />
          <div className="choice-group" role="group" aria-label="Choose a reason">
            {Object.keys(evelineChoices).map((choice) => (
              <button
                className={selectedChoice === choice ? "selected" : ""}
                key={choice}
                type="button"
                aria-label={`Choose ${choice} as Eveline's reason`}
                aria-pressed={selectedChoice === choice}
                onClick={() => setSelectedChoice(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
          <p className="choice-feedback">{evelineChoices[selectedChoice]}</p>
        </div>
      </div>
    </section>
  );
}

function EscapeMeter() {
  const [values, setValues] = useState({
    duty: 7,
    fear: 8,
    freedom: 6,
  });
  const [result, setResult] = useState("");

  const pressureScore = Number(values.duty) + Number(values.fear);
  const freedomScore = Number(values.freedom);

  function updateValue(key, value) {
    setValues((currentValues) => ({
      ...currentValues,
      [key]: Number(value),
    }));
    setResult("");
  }

  function calculateChoice() {
    setResult(
      freedomScore > pressureScore
        ? "Your Eveline tries to leave."
        : "Your Eveline stays in Dublin.",
    );
  }

  return (
    <section className="section" id="escape-meter">
      <div className="container simulator-layout">
        <SectionHeader
          eyebrow="Escape Meter"
          title="Eveline Simulator"
        >
          Move the sliders in small groups. Then calculate Eveline's choice.
        </SectionHeader>

        <div className="simulator-panel">
          <p className="activity-instructions">
            Work with a partner. Set the three values from 0 to 10.
          </p>
          <ActivitySupport
            id="meter-support"
            hint="If duty and fear are stronger than freedom, Eveline cannot act."
            keywords={["duty", "fear", "freedom", "paralysis"]}
          />

          <div className="slider-grid">
            {meterSliders.map((slider) => (
              <label className="meter-slider" key={slider.key}>
                <span>
                  <strong>{slider.label}</strong>
                  <small>{slider.description}</small>
                </span>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={values[slider.key]}
                  aria-label={`${slider.label} value`}
                  onChange={(event) => updateValue(slider.key, event.target.value)}
                />
                <output aria-label={`${slider.label} current value`}>
                  {values[slider.key]}
                </output>
              </label>
            ))}
          </div>

          <button
            className="button primary action-button"
            type="button"
            aria-label="Calculate Eveline's choice"
            onClick={calculateChoice}
          >
            Calculate Eveline's choice
          </button>

          <div className="meter-result" role="status" aria-live="polite">
            {result && <strong>{result}</strong>}
            <p>
              Joyce's ending shows that Eveline's paralysis is stronger than her
              desire for escape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetectiveLab() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentSituation = detectiveSituations[currentIndex];
  const hasAnswered = selectedAnswer !== "";
  const isCorrect = selectedAnswer === currentSituation.answer;

  function chooseAnswer(answer) {
    if (hasAnswered) {
      return;
    }

    setSelectedAnswer(answer);
  }

  function goToNextSituation() {
    if (currentIndex === detectiveSituations.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((index) => index + 1);
    }

    setSelectedAnswer("");
  }

  return (
    <section className="section band-light" id="detective-lab">
      <div className="container detective-layout">
        <SectionHeader
          eyebrow="Detective Lab"
          title="Paralysis/Epiphany Detective Lab"
        >
          Read one situation. Choose the best concept. Discuss in pairs.
        </SectionHeader>

        <div className="detective-panel">
          <p className="activity-instructions">
            No timer. Read slowly. Look for the keyword.
          </p>
          <ActivitySupport
            id="detective-support"
            hint="Paralysis means unable to act. Epiphany means sudden awareness."
            keywords={["unable to act", "sudden awareness", "blocked", "new way"]}
          />

          <div className="lab-progress">
            Situation {currentIndex + 1} of {detectiveSituations.length}
          </div>
          <p className="situation-card">{currentSituation.text}</p>

          <div
            className="detective-options"
            role="group"
            aria-label="Choose paralysis, epiphany or both"
          >
            {["Paralysis", "Epiphany", "Both"].map((answer) => (
              <button
                className={[
                  "detective-button",
                  selectedAnswer === answer ? "selected" : "",
                  hasAnswered && answer === currentSituation.answer ? "correct" : "",
                  selectedAnswer === answer && !isCorrect ? "wrong" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={answer}
                type="button"
                disabled={hasAnswered}
                aria-label={`Choose ${answer} for the detective lab`}
                aria-pressed={selectedAnswer === answer}
                onClick={() => chooseAnswer(answer)}
              >
                {answer}
              </button>
            ))}
          </div>

          {hasAnswered && (
            <div
              className={`feedback detective-feedback ${isCorrect ? "correct" : "wrong"}`}
              role="status"
              aria-live="polite"
            >
              {isCorrect
                ? currentSituation.correctFeedback
                : currentSituation.retryFeedback}
            </div>
          )}

          <button
            className="button secondary next-button"
            type="button"
            disabled={!hasAnswered}
            aria-label={
              currentIndex === detectiveSituations.length - 1
                ? "Restart detective lab"
                : "Go to next situation"
            }
            onClick={goToNextSituation}
          >
            {currentIndex === detectiveSituations.length - 1
              ? "Start Again"
              : "Next Situation"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Glossary() {
  const [openTerm, setOpenTerm] = useState("Paralysis");

  return (
    <section className="section band-light" id="glossary">
      <div className="container">
        <SectionHeader eyebrow="Interactive Glossary" title="Click and Revise">
          Build confidence with the vocabulary of the lesson.
        </SectionHeader>
        <div className="glossary-grid">
          {glossaryTerms.map((item) => {
            const isOpen = openTerm === item.term;
            return (
              <button
                className={`glossary-card ${isOpen ? "open" : ""}`}
                key={item.term}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenTerm(isOpen ? "" : item.term)}
              >
                <span>{item.term}</span>
                <strong>{item.definition}</strong>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const hasAnswered = selectedOption !== "";
  const isCorrect = selectedOption === currentQuestion.answer;

  const resultMessage = useMemo(() => {
    if (score === quizQuestions.length) {
      return "Excellent work: you can explain both key concepts clearly.";
    }

    if (score >= 4) {
      return "Good progress: revise one or two details, then try again.";
    }

    return "Keep revising: focus on paralysis, epiphany and Eveline's choice.";
  }, [score]);

  function handleAnswer(option) {
    if (hasAnswered) {
      return;
    }

    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  }

  function handleNext() {
    if (currentIndex === quizQuestions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedOption("");
  }

  function handleReset() {
    setCurrentIndex(0);
    setSelectedOption("");
    setScore(0);
    setIsFinished(false);
  }

  return (
    <section className="section" id="quiz">
      <div className="container quiz-layout">
        <SectionHeader eyebrow="Mini Quiz" title="Check Your Understanding">
          One question at a time, with instant feedback.
        </SectionHeader>

        <div className="quiz-panel" aria-live="polite">
          {isFinished ? (
            <div className="quiz-result">
              <p className="score">
                Final score: {score}/{quizQuestions.length}
              </p>
              <p>{resultMessage}</p>
              <button className="button primary" type="button" onClick={handleReset}>
                Reset Quiz
              </button>
            </div>
          ) : (
            <>
              <div className="quiz-progress">
                Question {currentIndex + 1} of {quizQuestions.length}
              </div>
              <p className="activity-instructions">
                Choose one answer. You get feedback immediately.
              </p>
              <ActivitySupport
                id="quiz-support"
                hint="Look for key words from the recap and concept cards."
                keywords={["Joyce", "short stories", "paralysis", "epiphany"]}
              />
              <h3>{currentQuestion.question}</h3>
              <div className="answer-grid">
                {currentQuestion.options.map((option, index) => {
                  const label = String.fromCharCode(65 + index);
                  const isSelected = selectedOption === option;
                  const shouldMarkCorrect = hasAnswered && option === currentQuestion.answer;
                  return (
                    <button
                      className={[
                        "answer-button",
                        isSelected ? "selected" : "",
                        shouldMarkCorrect ? "correct" : "",
                        isSelected && !isCorrect ? "wrong" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      key={option}
                      type="button"
                      disabled={hasAnswered}
                      aria-label={`Answer ${label}: ${option}`}
                      onClick={() => handleAnswer(option)}
                    >
                      <span>{label}</span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {hasAnswered && (
                <div className={`feedback ${isCorrect ? "correct" : "wrong"}`}>
                  {isCorrect
                    ? "Correct. Nice work."
                    : `Good try. Look again at the keyword. The correct answer is: ${currentQuestion.answer}.`}
                </div>
              )}

              <button
                className="button secondary next-button"
                type="button"
                disabled={!hasAnswered}
                onClick={handleNext}
              >
                {currentIndex === quizQuestions.length - 1 ? "See Results" : "Next Question"}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ExitTicket() {
  const [answers, setAnswers] = useState({
    understood: "",
    revise: "",
    opinion: "",
  });
  const [copyMessage, setCopyMessage] = useState("");

  const fields = [
    ["understood", "Today I understood that..."],
    ["revise", "One concept I still need to revise is..."],
    ["opinion", "In my opinion, Eveline does/does not escape because..."],
  ];

  function updateAnswer(key, value) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [key]: value,
    }));
  }

  async function handleCopy() {
    const text = fields
      .map(([key, label]) => `${label}\n${answers[key] || "-"}`)
      .join("\n\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopyMessage("Your exit ticket has been copied.");
    } catch {
      const temporaryTextarea = document.createElement("textarea");
      temporaryTextarea.value = text;
      document.body.appendChild(temporaryTextarea);
      temporaryTextarea.select();
      document.execCommand("copy");
      document.body.removeChild(temporaryTextarea);
      setCopyMessage("Your exit ticket has been copied.");
    }
  }

  return (
    <section className="section band-light" id="exit-ticket">
      <div className="container">
        <SectionHeader eyebrow="Exit Ticket" title="Reflect Before You Leave">
          Copy your answers and paste them into your class notebook or LMS.
        </SectionHeader>
        <div className="ticket-grid">
          {fields.map(([key, label]) => (
            <label className="ticket-field" key={key}>
              <span>{label}</span>
              <textarea
                value={answers[key]}
                onChange={(event) => updateAnswer(key, event.target.value)}
                rows="4"
              />
            </label>
          ))}
        </div>
        <button
          className="button primary copy-button"
          type="button"
          aria-label="Copy my exit ticket answers"
          onClick={handleCopy}
        >
          Copy my answers
        </button>
        <p className="copy-message" role="status" aria-live="polite">
          {copyMessage}
        </p>
      </div>
    </section>
  );
}

function TeacherResources() {
  const resources = [
    ["Key concepts", "paralysis, epiphany, modernism, identity"],
    ["Guided questions", "What stops the characters from changing?"],
    ["Suggested classroom task", "Compare Eveline's final decision with another story."],
    ["Assessment focus", "Use textual evidence to explain Joyce's ideas."],
    [
      "Inclusive teaching choices",
      "This learning hub includes short instructions, clear visual structure, immediate feedback, no time pressure, keyboard-friendly navigation and an optional Inclusive Mode. These choices support students with DSA/BES and help the whole class work more confidently.",
    ],
  ];

  return (
    <section className="section" id="resources">
      <div className="container">
        <SectionHeader eyebrow="Teacher Resources" title="Ready for Classroom Use">
          This resource supports active learning, self-assessment and revision after the
          lesson.
        </SectionHeader>
        <div className="resource-grid">
          {resources.map(([title, text]) => (
            <article className="resource-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>DUBLINERS | Paralysis and Epiphany</p>
      <p>Designed as a responsive learning hub for literature lessons.</p>
    </footer>
  );
}

export default function App() {
  const [inclusiveMode, setInclusiveMode] = useState(false);

  return (
    <div className={inclusiveMode ? "app inclusive-mode" : "app"}>
      <a className="skip-link" href="#recap">
        Skip to learning content
      </a>
      <Header
        inclusiveMode={inclusiveMode}
        onToggleInclusive={() => setInclusiveMode((isActive) => !isActive)}
      />
      <main>
        <Hero />
        <RecapCards />
        <ConceptCards />
        <EvelineActivity inclusiveMode={inclusiveMode} />
        <EscapeMeter />
        <DetectiveLab />
        <Glossary />
        <Quiz />
        <ExitTicket />
        <TeacherResources />
      </main>
      <Footer />
    </div>
  );
}
