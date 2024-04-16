import { useEffect, useState } from "react";
import ReactConfetti from 'react-confetti';

function App() {
  const [input, setInput] = useState("");
  const [inputSub, setInputSub] = useState('');
  const [conf, setConf] = useState(false);

  useEffect(() => {
    const savedInput = localStorage.getItem('userInput');
    if(savedInput){
      setInputSub(savedInput);
    }
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setInputSub(input);
    localStorage.setItem('userInput', input);
    if (input.toLowerCase() === '"><p>donkey kong</p><!--'){
      console.log(input);
      setConf(true);
    } else{
      setConf(false);
    }
  }
  
  return (
    <div className="container">
      <div className="row">
        
        <div className="col">
          <h1 className="mt-3">Challenge 3</h1>
          <hr></hr>
        </div>
      </div>
      <div className="row justify-content-center text-center mt-5">
      <div className="col"></div>
      <div className="col">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="input" id="input" autoComplete="input-new" className="form-control mb-2" onChange={(event) => setInput(event.target.value)}>
            </input>
            <input type="submit" value="Submit" className="btn btn-primary"></input>
          </div>
        </form>
        </div>
        <div className="col"></div>
        {conf && <ReactConfetti 
          width={1000}
          height={1000}
        />
        
        }
        <div dangerouslySetInnerHTML={{ __html: `<div class="${inputSub}"/>` }}></div>
        

      </div>
    </div>
  );
}

export default App;
