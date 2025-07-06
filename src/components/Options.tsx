
type OptionsProps = {
    questionOptions : string[]
    answer:number
    selectedOption:number | null
    handleClickedAnswer:(i:number)=>void
}
function Options({questionOptions,answer,selectedOption,handleClickedAnswer}:OptionsProps) {

  return (
    <div className="options">
        {questionOptions.map((option,i)=>(<button key={i} className={`btn btn-option ${i===selectedOption?"answer":""} ${selectedOption!==null?i===answer ?'correct':'wrong':''}`} onClick={()=>handleClickedAnswer(i)}
        disabled={selectedOption !== null}>{option}</button>))}
    </div>
  )
}

export default Options