import { useEffect, useState } from "react";
import Header from "./Header";
import Errorr from "./Error";
import Main from "./components/Main";
import Loader from "./Loader";
import { type QuestionData } from "./QuestionSchema";
function App() {
  const [questions, setQuestions] = useState<QuestionData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError,setIsError] = useState<string | null>(null)
  useEffect(() => {
    async function fetchQuestions() {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/questions`);
        if (!response.ok)
          throw new Error("Some thing went wrong while fetching data from the url.");
        const data: QuestionData = await response.json();
        setQuestions(data);
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
    <div>
      <Header />
      {isLoading && <Loader/>}

      { !isLoading && !isError &&
        <Main>
          <p>1/15</p>
          <p>Question?</p>
        </Main>
      }
      {isError && <Errorr/>}
    </div>
  );
}

export default App;
