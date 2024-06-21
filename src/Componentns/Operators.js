import React, { useEffect, useRef } from "react";

function Operators() {
  let telMarksInput = useRef();
  let engMarksInput = useRef();
  let hinMarksInput = useRef();
  let matMarksInput = useRef();
  let sciMarksInput = useRef();
  let socMarksInput = useRef();
  let engMarksSpan = useRef();
  let telMarksSpan = useRef();
  let hinMarksSpan = useRef();
  let socMarksSpan = useRef();
  let matMarksSpan = useRef();
  let sciMarksSpan = useRef();
  let resultPara = useRef();
  let sumOf= (a,b,c)=>{
    c= a+b;
   
    console.log(c);
  }
  sumOf(10,10);
  sumOf(50,50);

  let totalResult = () => {
    let engMarks = Number(engMarksInput.current.value);
    let telMarks = Number(telMarksInput.current.value);
    let matMarks = Number(matMarksInput.current.value);
    let sciMarks = Number(sciMarksInput.current.value);
    let socMarks = Number(socMarksInput.current.value);
    let hinMarks = Number(hinMarksInput.current.value);

    let total = engMarks + telMarks + matMarks + sciMarks + socMarks + hinMarks;
    let result =
      engMarks >= 35 &&
      telMarks >= 35 &&
      matMarks >= 35 &&
      sciMarks >= 35 &&
      socMarks >= 35 &&
      hinMarks >= 35;
    console.log(result);
    let perc = (total / 600) * 100;
    let remarks = "";
    
    if (result == true) {
      remarks = "Passed";
      resultPara.current.style.color="#06D001"
      resultPara.current.innerHTML = ` Congratulations  😃 your'e${remarks} . Total marks of ${total} with percentage of ${perc.toFixed(
        0
      )}%.`;
    } else {
      resultPara.current.style.color="#FF0000"
      remarks = "Failed";
      resultPara.current.innerHTML = `Sorry to saying 😞 your'e ${remarks} .Total marks of ${total} with percentage of ${perc.toFixed(0)}% better luck next time.`;
    }
    console.log(total);
  };
  let inputOnFocus = (inputRef)=>{
    inputRef.current.style.backgroundColor="yellow";
  }
  let inputOnBlur =(inputRef)=>{
    inputRef.current.style.backgroundColor="#BBE9FF";
  }
  let marksOnChange =(inputRef,spanRef)=>{
    if (inputRef.current.value >= 35) {
      spanRef.current.innerHTML = "PASSED!";
      spanRef.current.style.backgroundColor = "palegreen";
    } else {
      spanRef.current.innerHTML = "FAILED!";
      spanRef.current.style.backgroundColor = "red";
    }

  }
  
  

  return (
    
    <div>
      <div >
        <form className="marks">
          <h1>Marks Sheet </h1>  

          <div>
            <label>TelMarks</label>
            <input
              type="number"
              ref={telMarksInput}
              onChange={() => {marksOnChange(telMarksInput,telMarksSpan)} } onFocus={()=>{inputOnFocus(telMarksInput)}} onBlur={()=>{inputOnBlur(telMarksInput)}}
            ></input>
            <span ref={telMarksSpan}></span>
          </div>
          <div>
            <label>EngMarks</label>
            <input
              type="number"
              ref={engMarksInput}
              onChange={() => { marksOnChange(engMarksInput,engMarksSpan);}} onFocus={()=>{inputOnFocus(engMarksInput)}} onBlur={()=>{inputOnBlur(engMarksInput)}}
            ></input>
            <span ref={engMarksSpan}></span>
          </div>
          <div>
            <label>HinMarks</label>
            <input
              type="number"
              ref={hinMarksInput}
              onChange={() => {marksOnChange(hinMarksInput,hinMarksSpan);}} onFocus={()=>{inputOnFocus(hinMarksInput)}} onBlur={()=>{inputOnBlur(hinMarksInput)}}
            ></input>
            <span ref={hinMarksSpan}></span>
          </div>
          <div>
            <label>MatMarks</label>
            <input
              type="number"
              ref={matMarksInput}
              onChange={() => {marksOnChange(matMarksInput,matMarksSpan);}} onFocus={()=>{inputOnFocus(matMarksInput)}} onBlur={()=>{inputOnBlur(matMarksInput)}}
            ></input>
            <span ref={matMarksSpan}></span>
          </div>
          <div>
            <label>SciMarks</label>
            <input
              type="number"
              ref={sciMarksInput} onChange={() => {marksOnChange(sciMarksInput,sciMarksSpan);}} onFocus={()=>{inputOnFocus(sciMarksInput)}} onBlur={()=>{inputOnBlur(sciMarksInput)}}
              
            ></input>
            <span ref={sciMarksSpan}></span>
          </div>
          <div>
            <label>SocMarks</label>
            <input
              type="number"
              ref={socMarksInput}
              onChange={() => {marksOnChange(socMarksInput,socMarksSpan);}} onFocus={()=>{inputOnFocus(socMarksInput)}} onBlur={()=>{inputOnBlur(socMarksInput)}}
            ></input>
            <span ref={socMarksSpan}></span>
          </div>
          <button
            type="button"
            onClick={() => {
              totalResult();
            }}
          >
            Result
          </button>

          <p ref={resultPara}></p>
        </form>
      </div>
    
    </div>
    
  );
  
}

export default Operators;
