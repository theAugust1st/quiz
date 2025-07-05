import {type QuestionSchema } from "../QuestionSchema"
import Options from "./Options"
interface QuestionProps{
    questions: QuestionSchema[] | null
}
function Question({questions}:QuestionProps) {
if (!questions || questions.length === 0) {
  return <h4>No question available</h4>;
}

return (
  <div>
    <h4>{questions[0].question}</h4>
    <Options
      questionOptions={questions[0].options}
      answer={questions[0].correctOption}
    />
  </div>
);
}

export default Question