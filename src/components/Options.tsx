import { useState } from "react"

type OptionsProps = {
    questionOptions : string[]
    answer:number
}
function Options({questionOptions,answer}:OptionsProps) {
    const [selectedOption, setSelectedOption] = useState<number| null>(null)
    function handleClickedAnswer(i:number){
        setSelectedOption(i)
    }
  return (
    <div className="options">
        {questionOptions.map((option,i)=>(<button key={i} className={`btn btn-option ${i===selectedOption?"answer":""} ${selectedOption!==null?i===answer ?'correct':'wrong':''}`} onClick={()=>handleClickedAnswer(i)}
        disabled={selectedOption !== null}>{option}</button>))}
    </div>
  )
}

export default Options