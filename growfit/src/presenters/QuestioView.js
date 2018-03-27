import React from 'react';


const QuestionView = ({ index, data, onOptionClick, skip, i, next }) => {
  return (<div > test window
   <div >
      {next === undefined ?
        <div>
          {data[i].title}
          <br />
          {data[i].text}
          {data[i].options.map(element => <div>

            <button className='btn-primary' onClick={(event) => {
              return onOptionClick(event, element.id, data[i].answer_id, i, data[i + 1])
            }}>  {element.text} </button>
          </div>
          )}
        </div>
        :

        <div>
          {next.title}
          <br />
          {next.text}
          {next.options.map(element => <div>

            <button className='btn-primary' onClick={(event) => {
              return onOptionClick(event, element.id, next.answer_id, i, data[i + 1])
            }}>  {element.text} </button>
          </div>
          )}
        </div>
      }


      <button className='btn-primary' onClick={(event) => { event.preventDefault(); skip(data[i + 1], i) }}> Skip </button>
    </div>
  </div>);
}




export default QuestionView;