import React from 'react'

const QuestionPoster = () => {
  return (
    <div className="m-3 p-2 shadow-lg rounded-md">
      <form className="flex flex-col">
        <label for="Sname">Student Name</label>
        <br/>
        <input placeholder="Student Name" type="text" id="Sname"/>

        <label for="Trade">Student Name</label>
        <br/>
        <input placeholder="Student Name" type="text" id="Trade"/>

        <label for="RegnNo">Student Name</label>
        <br/>
        <input placeholder="Student Name" type="text" id="RegnNo"/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default QuestionPoster