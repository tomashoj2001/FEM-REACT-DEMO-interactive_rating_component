import thanks from "../images/illustration-thank-you.svg"

export default function Result({value}) {
  return(
    <section className="second-page">
      <figure>
        <img src={thanks} alt="Thank you" />        
      </figure>
      <p className="result">You selected {value} out of 5</p>
      <h2 className="title">Thank you!</h2>
      <p className="paragraph">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </section>
  )
}