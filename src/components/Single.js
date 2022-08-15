import {useContext} from 'react';
import {contextMain} from '../contextProvider/contextMain';

import React from 'react'

function Single() {
  const { singleQuestion, setSingleQuestion,addQuestion,publish,allSurvey } = useContext(contextMain);
  const { question, options } = singleQuestion;
  return (
    <div className='multi-select'>
        <div className='answer-container'>
             <span className='icon'>?</span>
             <span className='question-span'><input className='question' type='text' value={question} onChange={(e) => setSingleQuestion({ ...singleQuestion, question: `${e.target.value}` })} placeholder={'Type question here...'}></input></span>
        </div>
        <div className='option'>Options: </div>

        <div className='answer'>
              {
                options.map((data,index)=>{
                    return (
                        <div key={index} className='answer-container'>
                            <input className='question-box' type={'text'} placeholder={'Type answer here...'} value={data} onChange={(e) => {
                                const optionsArray = options;
                                optionsArray[index] = e.target.value;
                                setSingleQuestion({ ...singleQuestion, options: optionsArray });
                            }} />
                            <button className='add' disabled={true}>+</button>
                            <button className='remove' disabled={true}>-</button>
                        </div>
                    )
                })
              }
        </div>
        <div className='medium-buttons'>
            <button className='add-publish' onClick={addQuestion}>Add Question</button>
            {allSurvey.length>0 ? (
              <button className='add-publish' onClick={publish}>Publish</button>
           ):null} 
        </div>

    </div>
  )
}

export default Single