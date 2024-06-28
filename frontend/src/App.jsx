import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  console.log(jokes);
  useEffect(() => {
    axios
      .get("/api/joke")
      .then((res) => {
        setJokes(res?.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  return (
    <>
      <h2>Hello Jokes</h2>
      <h5>Jokes : {jokes?.length}</h5>

      <div>
        {jokes?.map((joke, index) => {
          return (
            <div key={index}>
              <h6>{joke?.joke}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
