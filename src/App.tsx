import { useEffect, useState } from "react";
import Header from "./components/Header";
import Errorr from "./components/Error";
import ScreenSection from "./components/ScreenSection";
import Loader from "./components/Loader";
import Question from "./components/Question";
import FinishScreen from "./components/FinishScreen";
import {type QuestionSchema} from "./QuestionSchema";
function App() {
  const [questions, setQuestions] = useState<QuestionSchema[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError,setIsError] = useState<string | null>(null)
  const [activeQuestion, setActiveQuestion] = useState<boolean>(false)
  const [activeFinish,setActiveFinish] = useState<boolean>(false)
  const [calPoints,setCalPoints] = useState<number>(0)

  function handleFinish(){
    setActiveFinish(true)
  }
  useEffect(() => {
    async function fetchQuestions() {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/questions`);
        if (!response.ok)
          throw new Error("Some thing went wrong while fetching data from the url.");
        const data: QuestionSchema[] = await response.json();
        setQuestions(data)
      } catch (err) {
        if(err instanceof Error)
          setIsError(err.message)
        else setIsError("Unknown error is occured.") // how this error going to occur.
      } 
      finally{
        setIsLoading(false)
      }
    }
    fetchQuestions();
  }, []);
  const totalPoints = questions?.reduce((prev,cur)=>prev+cur.points,0)
  return (
    <div className="app">
      <Header />
      {isLoading && <Loader/>}

      { !isLoading && !isError && activeQuestion?(
        activeFinish?<FinishScreen points={calPoints} totalPoints={totalPoints}/>:<Question questions={questions} openFinish={handleFinish} setCalPoints={setCalPoints} calPoints={calPoints} />):
          <ScreenSection setActive={setActiveQuestion}/>
      }
      {isError && <Errorr/>}
    </div>
  );    
}

export default App;
