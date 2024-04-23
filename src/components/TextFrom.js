import React , {useState}from 'react'

export default function TextFrom(props) {

   const handleupclick =()=>{
   // console.log("Uppercase was clickeds"+text);
    let uppercase1 =text.toUpperCase();
    setText(uppercase1);
   }
   const handleloclick =()=>{
    // console.log("Uppercase was clickeds"+text);
     let lowercase1 =text.toUpperCase();
     setText(lowercase1);
    }
    const handleclearclick =()=>{
      // console.log("Uppercase was clickeds"+text);
       let lowercase1 ='';
       setText(lowercase1);
      }
   const handleonchange=(event) =>{
    //console.log("on change ");
    setText(event.target.value);
   }

    const [text,setText] = useState('');
    
    //setText("Enter text 2");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleupclick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleloclick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleclearclick}>Clear Text</button>
    </div>
    <div className='container my-3'>
     <h2>Your Text summry</h2>
     <p>{text.split(" ").length} words and {text.length} charcters</p>
     <p>{0.008*text.split(" ").length} minutes read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  )
}
