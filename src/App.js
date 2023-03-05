import { useState, useEffect } from "react";
import Score from './Score.js'
import Thanks from './Thanks.js'

function App() {
  const [submitted, setSubmitted] = useState(false)
  let view;
  const {rating, render} = Score({click: () => setSubmitted(true)});

  if(!submitted){
    view = render
  }
  else {
    view = <Thanks rating={rating}/>
  }

  return (
    <div className='bg-Very-Dark-Blue h-screen flex items-center justify-center'>
      <div className='bg-Personal-CmpBg-Dark-Gray w-96 h-96 rounded-3xl'>
        {view}
      </div>
    </div>
 );
}

export default App;
