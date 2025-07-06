type FinishScreenProps = {
    points:number,
    totalPoints:number
}
function FinishScreen({points,totalPoints}:FinishScreenProps) {
    const totalPercentage = (points/totalPoints)*100
  return (
    <p className="result">You scored <strong>{points}</strong> out of {totalPoints} points ({Math.ceil(totalPercentage)}%)</p>
  )
}

export default FinishScreen