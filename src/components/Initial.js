import star from "../images/icon-star.svg"

export default function Initial({handleValue, handleSubmit}) {
  return(
    <section className="first-page">
      <figure>
        <img src={star} alt="star"/>
      </figure>
      <h1 className="title">How did we do?</h1>
      <p className="paragraph">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="grades">
        <button className="grade" onClick={() => handleValue(1)}>1</button>
        <button className="grade" onClick={() => handleValue(2)}>2</button>
        <button className="grade" onClick={() => handleValue(3)}>3</button>
        <button className="grade" onClick={() => handleValue(4)}>4</button>
        <button className="grade" onClick={() => handleValue(5)}>5</button>
      </div>
      <input type="submit" value="Submit" onClick={handleSubmit}></input>
    </section>
  )
}