import {useContext} from 'react';
import {contextMain} from '../contextProvider/contextMain';
import React from 'react'

function Home() {
    const { setactivePage } = useContext(contextMain);
  return (
    <div className='pages'>
        <div>
           <button className="big-btn" onClick={()=>{setactivePage("survey")}}>Create Survey</button>
        </div>

        <div>
           <button className="big-btn">Take Survey</button>
        </div>
    </div>
  )
}

export default Home