import React , {useState}from 'react'

export default function TextFrom(props) {

   const handleupclick =()=>{
   // console.log("Uppercase was clickeds"+text);
    let uppercase1 =text.toUpperCase();
    setText(uppercase1);
   // let lowercase1 =text.toLowerCase();
    //setText(lowercase1);
   }
   const handleonchange=(event) =>{
    //console.log("on change ");
    setText(event.target.value);
   }

    const [text,setText] = useState('Enter text here');
    //setText("Enter text 2");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleupclick}>Convert to uppercase</button>
       
    </div>
  )
}
