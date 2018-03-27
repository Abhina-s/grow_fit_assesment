import React from 'react';


const QuestionView = ({ questionList, onOptionClick, skip, index, next }) => {
  const data = questionList[0]
  return (
    <div className="container" style={{ border: "1px solid " }} >
      <div className="d-flex flex-column">
        {next === undefined ?
          <div className="md-auto p-2" >
            <div className="d-flex justify-content-start">
              <h4>{data[index].title}</h4>
              <br />
            </div>
            <div className="d-flex justify-content-start">
              {data[index].text}
            </div>
            <br />
            {data[index].options.map(element => <div key={element.id} className="d-flex align-items-center">

              <button className='btn btn-light' onClick={(event) => {
                return onOptionClick(event, element.id, data[index].answer_id, index, data[index + 1])
              }}>  {element.text} </button>
            </div>
            )}
          </div>
          :

          <div className="mr-auto p-2" >
            <div className="d-flex justify-content-start">
              <h4> {next.title} </h4>
              <br />
            </div>
            <div className="d-flex justify-content-start">
              {next.text}
            </div>
            <br />
            {next.options.map(element => <div key={element.id} className="d-flex align-items-center" >

              <button className='btn btn-light' onClick={(event) => {
                return onOptionClick(event, element.id, next.answer_id, index, data[index + 1])
              }}>  {element.text} </button>
            </div>
            )}
          </div>
        }
        <div className="d-flex justify-content-end">
          <button className='btn btn-light' onClick={(event) => { event.preventDefault(); skip(data[index + 1], index) }}> Skip </button>
        </div>
        <br />
      </div>
    </div>);
}




export default QuestionView;