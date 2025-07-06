import type { SetStateAction } from "react"
import type React from "react"

type NextButtonProps = {
  nextQuestion: React.Dispatch<SetStateAction<number>>
  setSelectedOption: React.Dispatch<SetStateAction<number | null>>
  questionNumber:number
  questionLength:number
  openFinish : ()=>void
}
function NextButton({nextQuestion,setSelectedOption,questionNumber,questionLength,openFinish}:NextButtonProps) {
  if(questionNumber < questionLength-1)
  return (
    <div>
    <button className="btn btn-ui" onClick={()=>{nextQuestion(prev=>prev+1); setSelectedOption(null) }}>Next</button>
    </div>
  )
  return(
    <div>
      <button className="btn btn-ui" onClick={()=>openFinish()}>Finish</button>
    </div>
  )
}

export default NextButton