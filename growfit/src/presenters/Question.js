import React from 'react';
import QuestionView from './QuestioView'

const Question = ({ res, index, onOptionClick, i, next, skip }) => {
  let data = Array.from(res)
  let indexList = Array.from(index)
  return (<div>

    {data ?
      data.map((item) =>
        <QuestionView index={indexList} data={item} onOptionClick={onOptionClick} i={i} next={next} skip={skip} />) : 'hey'
    }
  </div>
  )
};

export default Question;