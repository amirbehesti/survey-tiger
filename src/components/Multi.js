import { useContext } from 'react';
import { contextMain } from '../contextProvider/contextMain';
import React from 'react'

function Multi() {
  const { multiQuestion, setMultiQuestion, addQuestion, publish, allSurvey } = useContext(contextMain);
  const { question, options } = multiQuestion;
  const addOption = () => {
    setMultiQuestion({ ...multiQuestion, options: [...multiQuestion.options, ""] });
  }
  const removeOption = (index) => {
    const newOptions = [...multiQuestion.options];
    newOptions.splice(index, 1);
    setMultiQuestion({ ...multiQuestion, options: newOptions });
  }
  return (
    <div className='multi-select'>
      <div className='answer-container'>
        <span className='icon'>?</span>
        <span className='question-span'><input className='question' type='text' value={question} onChange={(e) => setMultiQuestion({ ...multiQuestion, question: `${e.target.value}` })} placeholder={'Type question here...'}></input></span>
      </div>
      <div className='option'>Options: </div>

      <div className='answer'>
        {
          options.map((data, index) => {
            return (
              <div key={index} className='answer-container'>
                <input className='question-box' type={'text'} placeholder={'Type answer here...'} value={data} onChange={(e) => {
                  const optionsArray = multiQuestion.options;
                  optionsArray[index] = e.target.value;
                  setMultiQuestion({ ...multiQuestion, options: optionsArray });
                }} />
                <button className='add' onClick={addOption} disabled={options.length < 4 ? false : true}>+</button>
                <button className='remove' onClick={() => removeOption(index)} disabled={options.length > 1 ? false : true}>-</button>
              </div>
            )
          })
        }
      </div>
      <div className='medium-buttons'>
        {options.length === 4 && (
          <button className='add-publish' onClick={addQuestion} >Add Question</button>
        )}
        {allSurvey.length > 0 ? (
          <button className='add-publish' onClick={publish}>Publish</button>
        ) : null}
      </div>
    </div>
  )
}

export default Multi;