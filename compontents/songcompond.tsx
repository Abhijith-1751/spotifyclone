import * as React from 'react'
import '../css/Songcompond.css'


function Songcompond(){
  return(
   <div className="container">
     <img src="https://i.ytimg.com/vi/imysuB0twTg/sddefault.jpg" alt="img"/>
     <audio controls>
     <source src="https://naasongs.vip/myuploads/uploads/Varisu/Jimikki%20Ponnu.mp3"/>
    </audio>
   </div>
  );
}

export default Songcompond
