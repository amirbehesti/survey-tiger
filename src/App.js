import React, { useState } from 'react';
import { contextMain } from './contextProvider/contextMain';
import Image from './components/logo';
import './App.css';
import Container from './components/Container';

function App() {
  const [activePage, setactivePage] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [showField, setshowField] = useState(false);
  const [allSurvey,setAllservey] = useState([]);
  const [multiQuestion, setMultiQuestion] = useState({ question: "", options: ["",] });
  const [singleQuestion, setSingleQuestion] = useState({ question: "", options: ["",""] });

  const publish = ()=>{
        if(allSurvey.length>0){
          setactivePage('publish');
        }
  }

  const addQuestion = ()=>{
     if(questionType === 'single' && singleQuestion.question){
      const newArr1 = [...allSurvey,singleQuestion];
      setAllservey(newArr1);
      setSingleQuestion({ question: "", options: ["",""] });
     }else if(questionType === 'multi' && multiQuestion.question){
         const newArr2 = [...allSurvey,multiQuestion];
         setAllservey(newArr2);
         setMultiQuestion({ question: "", options: ["",] });
     }
     console.log(allSurvey)
  }

  const confirmServey=()=>{
       alert('Survey Posted Sucessfully')
       setAllservey([]);
       setQuestionType('');
       setSingleQuestion({ question: "", options: ["",""] });
       setMultiQuestion({ question: "", options: ["",] });
       setactivePage('');
  }

  return (
    <div className="App">
      <Image />
      <contextMain.Provider value={{ activePage, setactivePage, questionType, setQuestionType, showField, setshowField, multiQuestion,setMultiQuestion, singleQuestion, setSingleQuestion,singleQuestion, setSingleQuestion, allSurvey,setAllservey,addQuestion,publish,confirmServey}}>
        <Container />
      </contextMain.Provider>
    </div>
  );
  
}

export default App;