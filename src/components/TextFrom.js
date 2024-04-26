import React , {useState}from 'react'

export default function TextFrom(props) {

   const handleupclick =()=>{
   // console.log("Uppercase was clickeds"+text);
    let uppercase1 =text.toUpperCase();
    setText(uppercase1);
    props.showalert("converted to uppercase!","success");
   }
   const handleloclick =()=>{
    // console.log("Uppercase was clickeds"+text);
     let lowercase1 =text.toLowerCase();
     setText(lowercase1);
     props.showalert("converted to lowercase!","success");
    }
    const handleclearclick =()=>{
      // console.log("Uppercase was clickeds"+text);
       let lowercase1 ='';
       setText(lowercase1);
       props.showalert("Text has been cleared!","success");
       
      }
      const handlecopyclick = () => {
        navigator.clipboard.writeText(text);
        props.showalert("text has been copied","success");
      }

      const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
         setText(newtext.join(" "));
         props.showalert("Removed extra spaces","success");
      }
   const handleonchange=(event) =>{
    //console.log("on change ");
    setText(event.target.value);
   }

    const [text,setText] = useState('');
    
    //setText("Enter text 2");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white'
              ,color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1'  onClick={handleupclick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleloclick}>Convert To Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclearclick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlecopyclick}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space </button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h2>Your Text Summry</h2>
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Charcters </p>
     <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
