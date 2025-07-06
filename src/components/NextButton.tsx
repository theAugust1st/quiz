import type { SetStateAction } from "react"
import type React from "react"

type NextButtonProps = {
  nextQuestion: React.Dispatch<SetStateAction<number>>
  setSelectedOption: React.Dispatch<SetStateAction<number | null>>
}
function NextButton({nextQuestion,setSelectedOption}:NextButtonProps) {
  return (
    <div>
    <button className="btn btn-ui" onClick={()=>{nextQuestion(prev=>prev+1); setSelectedOption(null) }}>Next</button>
    </div>
  )
}

export default NextButton