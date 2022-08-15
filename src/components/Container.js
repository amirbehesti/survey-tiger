import { useContext } from 'react';
import { contextMain } from '../contextProvider/contextMain';
import Home from './Home';
import SurveyPage from './SurveyPage';
import PublishPage from './PublishPage'
import React from 'react'

function Container() {
  const { activePage } = useContext(contextMain);

  if (activePage === 'survey') {
    return (
      <div className='container'>
        <SurveyPage />
      </div>
    )
  }

  if (activePage === 'publish') {
    return (
      <div className='container'>
        <PublishPage />
      </div>
    )
  }

  return (
    <div className='container'>
      <Home />
    </div>
  )
}

export default Container