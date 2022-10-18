import { useState } from "react";
import Footer from "./components/Footer";
import Initial from "./components/Initial";
import Result from "./components/Result";
import "./style.css"

function App() {
  const [value, setValue] = useState(null)
  const [submit, setSubmit] = useState(null)

  const handleValue = (id) => {
    setValue(id)

    const grades = [...document.querySelectorAll('.grade')]
    grades.forEach(grade => {
      if (grade.className === 'grade chosen') {
          grade.classList.remove('chosen');
      }
      else if (grade.textContent === id.toString()) grade.classList.add('chosen')
    })
  }

  const handleSubmit = () => setSubmit(true)

  return (
    <>
    <main className="card">
      {!submit 
        ? <Initial handleValue={handleValue} handleSubmit={handleSubmit}/>
        : <Result value={value}/>}
    </main>
    <Footer />
    </>
  );
}

export default App;
