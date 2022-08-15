import { useContext } from 'react';
import { contextMain } from '../contextProvider/contextMain';
import '../App.css';
import React from 'react'

function PublishPage() {
  const { allSurvey,confirmServey } = useContext(contextMain);
  return (
    <div className='publish-page'>
        {
          allSurvey.map((data, index) => {
            if (data.options.length === 4) {
              return (
                <div key={index} className='each-question'>
                  <div className='question-name'>
                    <p className='question-name'>{data.question}</p>
                  </div>
                    {
                      data.options.map((data) => {
                        return (
                          <div key={data} className='check-option'>
                            <input type={'checkbox'} /><span className='checkbox'>{data}</span>
                          </div>
                        )
                      })
                    }
                </div>

              )
            } else {
              return (
              <div key={index} className='each-question'>
                <div className='question-name'>
                  <p className='question-name'>{data.question}</p>
                </div>
                <div  className='radio-option'>
                  {
                    data.options.map((data) => {
                      return (
                        <div key={data} className='radio-item'>
                          <input type={'radio'} /><span className='checkbox'>{data}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              )
            }
          })}

          <div className='confirm'>
              <div><button className='confirm-btn' onClick={confirmServey}>Confirm</button></div>
          </div>
      </div>
  )
}

export default PublishPage