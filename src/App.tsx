import { useState } from "react";

export function App() {

  return (
    <>
      Olá
    </>
  )
}


// JS Function
const test = () => {
  return 1 + 1;
}


// JS Function
const useTest = () => {
  return 1 + 1;
}


// React Hook 
const useTeste = () => {
  const [value] = useState(1 + 1);
  
  return value;
}


// React Functional Component
const MyParagraph = () => {
  return (
    <p>Lorem ipsum</p>
  )
}


// JS Function that return "html react"
// Bad idea
const myParagraph = () => {
  return (
    <p>Lorem ipsum</p>
  )
}

