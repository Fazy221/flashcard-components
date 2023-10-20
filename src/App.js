import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div className="flashcards">
      {questions.map((e) => {
        return (
          <FlashCard
            key={e.id}
            obj={e}
            isSelected={selectedItem === e.id}
            onSelect={() => handleSelect(e.id)}
          />
        );
      })}
    </div>
  );
}

function FlashCard({ obj, isSelected, onSelect }) {
  const style = isSelected ? "selected" : "";

  return (
    <div onClick={onSelect} className={style}>
      {isSelected ? obj.answer : obj.question}
    </div>
  );
}
