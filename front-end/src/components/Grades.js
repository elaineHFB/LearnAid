import React, { useState } from 'react';
import '../stylesheets/Grades.css';

function Grades() {
  const [gradesVisible, setGradesVisible] = useState({
    'CS23-4GTH': false,
    'CS23-2222': false,
    'CS23-3333': false,
  });

  const toggleGradesVisibility = (gradeId) => {
    setGradesVisible({
      ...gradesVisible,
      [gradeId]: !gradesVisible[gradeId],
    });
  };

  return (
    <div>
      <a href="./..">
        <img
          className="image"
          src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
          alt="Return"
        ></img>
      </a>
      <div className="main">
        <div className="information">
          <h1>Grades</h1>
          <h2>Student ID: 210368867</h2>
        </div>

        <div className="blue_box box_extra">
          <div name="ModuleGrade">
            <button
              className="white_box button_style normal_text"
              id="CS23-4GTH_button"
              onClick={() => toggleGradesVisibility('CS23-4GTH')}
            >
              <div className="headline">
                <h4>Technology in Business</h4>
                <p>- CS23-4GTH</p>
              </div>
            </button>

            {gradesVisible['CS23-4GTH'] && (
              <div id="CS23-4GTH">
                <div className="white_box box_extra">
                  <div className="headline center">
                    <h4>Technology in Business</h4>
                    <p>- CS23-4GTH</p>
                  </div>

                  <br></br>
                  <br></br>

                  <table>
                    <tr>
                      <th className="center assignment">Assignment</th>
                      <th className="center grade">Grade</th>
                      <th className="center feedback">Feedback</th>
                    </tr>
                    <tr>
                      <td className="center">Assignment 1</td>
                      <td className="center">%</td>
                      <td className="center">Feedback 1</td>
                    </tr>
                    <tr>
                      <td className="center">Assignment 2</td>
                      <td className="center">%</td>
                      <td className="center">Feedback 2</td>
                    </tr>
                    <tr>
                      <td className="center">Assignment 3</td>
                      <td className="center">%</td>
                      <td className="center">Feedback 3</td>
                    </tr>
                    <tr>
                      <td className="center">Assignment 5</td>
                      <td className="center">%</td>
                      <td className="center">Feedback 5</td>
                    </tr>
                    <tr>
                      <td className="center">Assignment 5</td>
                      <td className="center">%</td>
                      <td className="center">Feedback 5</td>
                    </tr>
                  </table>

                  <br></br>
                  <br></br>

                  <button
                    className="close_box button_style"
                    onClick={() => toggleGradesVisibility('CS23-4GTH')}
                  >
                    <h3>Close</h3>
                    <p></p>
                    </button>
            </div>
          </div>
        )}
      </div>

      <br></br>

      <div name="ModuleGrade">
        <button
          className="white_box button_style normal_text"
          id="CS23-2222_button"
          onClick={() => toggleGradesVisibility('CS23-2222')}
        >
          <div className="headline">
            <h4>Business Administration</h4>
            <p>- CS23-2222</p>
          </div>
        </button>

        {gradesVisible['CS23-2222'] && (
          <div id="CS23-2222">
            <div className="white_box box_extra">
              <div className="headline center">
                <h4>Business Administration</h4>
                <p>- CS23-2222</p>
              </div>

              <br></br>
              <br></br>

              <h4 className="center">No Grades Available</h4>

              <br></br>
              <br></br>

              <button
                className="close_box button_style"
                onClick={() => toggleGradesVisibility('CS23-2222')}
              >
                <h3>Close</h3>
                <p></p>
              </button>
            </div>
          </div>
        )}
      </div>

      <br></br>

      <div name="ModuleGrade">
        <button
          className="white_box button_style normal_text"
          id="CS23-3333_button"
          onClick={() => toggleGradesVisibility('CS23-3333')}
        >
          <div className="headline">
            <h4>Fiscal Law</h4>
            <p>- CS23-3333</p>
          </div>
        </button>

        {gradesVisible['CS23-3333'] && (
          <div id="CS23-3333">
            <div className="white_box box_extra">
              <div className="headline center">
                <h4>Fiscal Law</h4>
                <p>- CS23-3333</p>
              </div>

              <br></br>
              <br></br>

              <h4 className="center">No Grades Available</h4>

              <br></br>
              <br></br>

              <button
                className="close_box button_style"
                onClick={() => toggleGradesVisibility('CS23-3333')}
              >
                <h3>Close</h3>
                <p></p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
);
}

export default Grades;
