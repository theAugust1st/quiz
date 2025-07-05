import { useEffect, useState } from "react";
import Header from "./components/Header";
import Errorr from "./components/Error";
import ScreenSection from "./components/ScreenSection";
import Loader from "./components/Loader";
import Question from "./components/Question";
import {type QuestionSchema} from "./QuestionSchema";
function App() {
  const [questions, setQuestions] = useState<QuestionSchema[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError,setIsError] = useState<string | null>(null)
  const [activeQuestion, setActiveQuestion] = useState<boolean>(false)
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
  return (
    <div className="app">
      <Header />
      {isLoading && <Loader/>}

      { !isLoading && !isError && activeQuestion?<Question questions={questions}/>:
          <ScreenSection setActive={setActiveQuestion}/>
      }
      {isError && <Errorr/>}
    </div>
  );    
}

export default App;
