import React from 'react'

export default function About(props) {
    // const [mystyle,setMystyle]=useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
let mystyle ={
    color: props.mode ==='dark' ? 'white':'rgb(36 74 104)',
    backgroundColor: props.mode ==='dark' ? 'rgb(36 74 104)':'white',
    
}
   
    

  return (
        <div className='container my-4'  style={{color: props.mode ==='dark' ? 'white':'rgb(36 74 104)'}}>
        <h1 className='my-2'>About us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyes Your Text
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free TO use
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser compatible
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
  
        </div>
  )
}
/* 

 const[btntext,setBtntext]=useState("Enable dark Mode");

const togglestyle = ()=>{
        if(mystyle.color === "black"){
            setMystyle({
                 color:"white",
                 backgroundColor:"black",
                border:"1px solid white"})

                 setBtntext("Enable light Mode")
        }
        else{
            setMystyle({
                color:"black",
                backgroundColor:"white"
            })
            setBtntext("Enable dark Mode")
        }
    }

      /* <div className='container my-3'>
    <button onClick={togglestyle} className='btn btn-primary '>{btntext}</button>
        </div> */