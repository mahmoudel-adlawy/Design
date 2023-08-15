import React from 'react'
import $ from 'jquery';


export default function Togle() {

    function log(){
        document.body.classList.add('dark');
       

    
      }
      function lig(){
        document.body.classList.remove('dark');


      }
     
    
      
      return (
        <>

        <button className='btn btn-black' onClick={log}> Dark</button>
        <button className='btn1 btn-light' onClick={lig}> light</button>
       {/* <label for="theme"  className="theme me-3 ">
        <span className="theme__toggle-wrap">
            <input id="theme" onClick={log}  className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark"/>
            <span  className="theme__fill"></span>
            <span className="theme__icon">
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
            </span>
        </span>
    </label> */}
        </>
      )
 
}
