import {type QuestionSchema } from "../QuestionSchema"
import Options from "./Options"
import NextButton from "./NextButton"
import { useState } from "react";
interface QuestionProps{
    questions: QuestionSchema[] | null
    setPoints:(points:number)=>void
}
function Question({questions,setPoints}:QuestionProps) {
  const [nextQuestionNumber, setNextQuestionNumber] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState<number| null>(null)
if (!questions || questions.length === 0) {
  return <h4>No question available</h4>;
}
const {question,options,correctOption,points} = questions[nextQuestionNumber]
    function handleClickedAnswer(i:number){
        setSelectedOption(i)
        if(i === correctOption)
        setPoints(points)
    }
return (
  <div>
    <h4>{question}</h4>
    <Options
      questionOptions={options}
      answer={correctOption}
      selectedOption={selectedOption}
      handleClickedAnswer={handleClickedAnswer}
    />
    {selectedOption !== null && <NextButton nextQuestion={setNextQuestionNumber} setSelectedOption={setSelectedOption}/>}
  </div>
);
}

export default Question