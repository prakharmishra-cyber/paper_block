import React from 'react'

const QuestionPoster = () => {
  return (
    <div className="m-3 p-2 ">
      <form className="flex flex-col space-y-2 w-2/5 shadow-lg rounded-md p-3">
        <label for="Sname">Student Name</label>
        <input placeholder="Student Name" type="text" id="Sname"/>

        <label for="Trade">Student Trade</label>
        
        <input placeholder="Trade" type="text" id="Trade"/>

        <label for="RegnNo">Student RegnNo.</label>
        
        <input placeholder="RegnNo" type="text" id="RegnNo"/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default QuestionPoster