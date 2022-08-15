import {  Navbar,Footer } from "../../components";
import "./rules.css";
import {useNavigate} from "react-router-dom";
export function Rules(){
  const navigate = useNavigate();
    return (
        <>
        <Navbar/>
        <br/>
          <div className="rules-section">
            <div className="rules-heading">Rules for the Quiz </div>
            <ol className="rules-list">
              <li>Choose only one from the given four options</li>
              <li>You have total 5 questions</li>
              <li>Each question carries 1 mark</li>
              <li>Click on next to view next question</li>
              <li>No Negative marks</li>
              <li>Your score will be displayed at the End</li>
            </ol>
            <div class="start-quiz">
            <button onClick={()=> navigate("/Question")} className="bt btn-primary">Start Quiz</button>
            </div>
          </div>
        <Footer/>
        </>
    )
}
