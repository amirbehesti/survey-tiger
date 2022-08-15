import {useContext} from 'react';
import {contextMain} from '../contextProvider/contextMain';
import React from 'react';
import Single from './Single';
import Multi from './Multi';

function SurveyPage() {
    const { questionType,setQuestionType,showField,setshowField } = useContext(contextMain);

    const handleChange = (e) =>{
      setQuestionType(e.target.value);
      setshowField(true);
    }
    
  return (
    <div className='pages'>
         <div className='q-type'>
                <select className='select' defaultValue="DEFAULT" onChange={handleChange}>
                    <option value="DEFAULT" disabled>Select Question Type</option>
                    <option value={"multi"}>Multi-Select</option>
                    <option value={"single"}>Single-Select</option>
                </select>
         </div>

         {showField && (
             <div>
              {questionType === 'multi' && <Multi/>}
              {questionType === 'single' && <Single/>}
             </div>
         )}
    </div>
  )
}

export default SurveyPage