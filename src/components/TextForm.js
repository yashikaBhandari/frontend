// text form component 
import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        console.log("uppercase was clicked"+text);// yahan se text ki value bhi aa gyi 
        /*setText("you have clicked on convert to uppercase");/* when we will click on button
         hamri text ki value yeh hojayegi */ 
         //convert to uppercase 
         let newText=text.toUpperCase();
         setText(newText);

    }
    const handlelowclick=()=>{
        console.log("lowercase was clicked"+text);// yahan se text ki value bhi aa gyi 
        /*setText("you have clicked on convert to uppercase");/* when we will click on button
         hamri text ki value yeh hojayegi */ 
         //convert to uppercase 
         let newText=text.toLowerCase();
         setText(newText);

    }
    const handleclear=()=>{
        console.log("lowercase was clicked"+text);// yahan se text ki value bhi aa gyi 
        /*setText("you have clicked on convert to uppercase");/* when we will click on button
         hamri text ki value yeh hojayegi */ 
         //convert to uppercase 
         let newText=" ";
         setText(newText);

    }
    const handleonchange=(event)=>{
        console.log("onchange");
        setText(event.target.value)
    }
    const[text,setText]=useState('enter text');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
       {/*<label for="mybox" className="form-label">enter your text here</label>
       now we wnat ->
       whatever text entered in textarea get converted to uppercase after clicking button
       pass value as text (state var) and give function so that it be called on clicking */}
        <textarea className="form-control"value={text} onChange={handleonchange} id="mybox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleupclick}>convert to uppercase </button>
        <button className="btn btn-primary mx-3" onClick={handlelowclick}>convert to lowercase </button>
        <button className="btn btn-primary" onClick={handleclear}>clear text </button>
      
      
    </div>
    <div className="container my-3">
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters in your text </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h3> preview </h3>
        <p>{text}</p>

    </div>
    </>
  )
}
