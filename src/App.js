import React, { Component } from "react";
import "./App.css";
import Statehooks from "./Component/statehooks";
import Counter from "./Component/Counter";
import UseEffectExample from "./Component/UseEffectExample";
import Noteapp from "./Component/Noteapp";
import ReducerComp from "./Component/ReducerComp";

function App() {
  return (
    <>
      <Statehooks />
      <Counter />
      <UseEffectExample />
       <Noteapp /> {/* <=localStorage useEffect useState örnekleri */}
       <ReducerComp /> 
    </>
  );
}

export default App;
