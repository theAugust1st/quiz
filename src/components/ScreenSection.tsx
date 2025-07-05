import { type SetStateAction } from "react";
interface Props{
    setActive: React.Dispatch<SetStateAction<boolean>>
}
function ScreenSection({setActive}:Props) {
  return (
    <div className="start">
        <h2>Welcome to the React Quiz</h2>
        <h3>X questions to test your React mastery</h3>
        <button className="btn btn-ui" onClick={()=>{setActive(true)}}>Start</button>
    </div>
  )
}

export default ScreenSection