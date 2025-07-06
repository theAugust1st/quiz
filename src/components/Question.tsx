import { type QuestionSchema } from "../QuestionSchema";
import Options from "./Options";
import NextButton from "./NextButton";
import { useState } from "react";
import Progress from "./Progress";
interface QuestionProps {
  questions: QuestionSchema[] | null;
}
function Question({ questions }: QuestionProps) {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [calPoints,setCalPoints] = useState<number>(0)
  if (!questions || questions.length === 0) {
    return <h4>No question available</h4>;
  }
  const { question, options, correctOption, points } =
    questions[questionNumber];
  function handleClickedAnswer(i: number) {
    setSelectedOption(i);
    if(i === correctOption)
      setCalPoints(prev=>prev+points)
  }
  const totalPoints = questions.reduce((pre,cur)=>pre=pre + cur.points,0)
  return (
    <div>
      <Progress
        questionLength={questions.length}
        questionNumber={questionNumber}
        totalPoints = {totalPoints}
        calPoints = {calPoints}
      />
      <h4>{question}</h4>
      <Options
        questionOptions={options}
        answer={correctOption}
        selectedOption={selectedOption}
        handleClickedAnswer={handleClickedAnswer}
      />
      {selectedOption !== null && (
        <NextButton
          nextQuestion={setQuestionNumber}
          setSelectedOption={setSelectedOption}
        />
      )}
    </div>
  );
}

export default Question;
