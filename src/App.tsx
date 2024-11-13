import "./app.css";
import Question1 from "./questions/question1";
import Question2 from "./questions/question2";
import Question3 from "./questions/question3";
import Question4 from "./questions/question4";
import Question5 from "./questions/question5";
import Question6 from "./questions/question6";
import Question7 from "./questions/question7";

function App() {
  return (
    <div
      style={{
        padding: "20px 20px 100px 20px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Metrobi Challenge Questions</h1>
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <Question6 />
      <Question7 />
    </div>
  );
}

export default App;
