type ProgressProps={
    questionLength:number
    questionNumber:number
    totalPoints: number
    calPoints: number
}
function Progress({questionLength,questionNumber,totalPoints,calPoints}:ProgressProps) {
  return (
    <header className="progress">
        <progress max={15} value={1}></progress>
        <p>Questions <strong>{questionNumber + 1}</strong>/{questionLength}</p>
        <p>Points <strong>{calPoints}</strong>/{totalPoints}</p>
    </header>
  )
}

export default Progress