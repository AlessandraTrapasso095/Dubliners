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

function Header() {
  const links = [
    ["Recap", "#recap"],
    ["Concepts", "#concepts"],
    ["Eveline", "#eveline"],
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

function EvelineActivity() {
  const [selectedChoice, setSelectedChoice] = useState("Duty");

  return (
    <section className="section band-navy" id="eveline">
      <div className="container eveline-layout">
        <div>
          <p className="eyebrow">Focus On Eveline</p>
          <h2>Duty, Fear and the Dream of Escape</h2>
          <p>
            In "Eveline", the protagonist dreams of escaping from her difficult
            life in Dublin, but at the end she is unable to leave. Her paralysis
            reveals the conflict between duty, fear and desire for freedom.
          </p>
        </div>

        <div className="activity-panel" aria-labelledby="eveline-question">
          <h3 id="eveline-question">Why does Eveline remain unable to act?</h3>
          <div className="choice-group" role="group" aria-label="Choose a reason">
            {Object.keys(evelineChoices).map((choice) => (
              <button
                className={selectedChoice === choice ? "selected" : ""}
                key={choice}
                type="button"
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
                    : `Not quite. The correct answer is: ${currentQuestion.answer}.`}
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
  return (
    <>
      <a className="skip-link" href="#recap">
        Skip to learning content
      </a>
      <Header />
      <main>
        <Hero />
        <RecapCards />
        <ConceptCards />
        <EvelineActivity />
        <Glossary />
        <Quiz />
        <ExitTicket />
        <TeacherResources />
      </main>
      <Footer />
    </>
  );
}
