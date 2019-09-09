import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


// FUNCTIONAL COMPONENT FOR TEAM DETAILS
function TeamSummary(props) {
  return (
    <div className={props.status}>
      <h2 className={`${props.status}__name`}>{props.name}</h2>
      <div className={`${props.status}__score`}>{props.score}</div>
    </div>
  )
}

// FUNCTIONAL COMPONENT FOR SCORE BUTTONS: TOUCHDOWN & FIELD GOAL
function ScoreButton(props) {

  // CAPITALIZE FIRST LETTER OF STATUS :)
  const status = props.status.charAt(0).toUpperCase() + props.status.slice(1);

  return(
    <div className={`${props.status}Buttons`}>
      {/* TOUCHDOWN BUTTON */}
      <button 
        className={`${props.status}Buttons__touchdown`} 
        onClick={() => props.handleClick(props.name, 7)}
      > 
        {`${status} Touchdown`} 
      </button>

      {/* FIELD GOAL BUTTON */}
      <button 
        className={`${props.status}Buttons__fieldGoal`} 
        onClick={() => props.handleClick(props.name, 3)}
      > 
        {`${status} Field Goal`} 
      </button>
    </div>
  )
}

// FUNCTIONAL COMPONENT FOR THE APP
function App() {
  
  //  SET UP STATE FOR THE TWO TEAMS
  const [team1, setTeam1Score] = useState({
    name: 'Lions',
    score: 0,
    status: 'home'
  });
  const [team2, setTeam2Score] = useState({
    name: 'Tigers',
    score: 0,
    status: 'away'
  });

  // HANDLER FUNCTION TO UPDATE SCORE ON CLICK
  const setScore = (teamName, amount) => {
    teamName === team1.name ?
      setTeam1Score({ ...team1, score: team1.score + amount }) :
      setTeam2Score({ ...team2, score: team2.score + amount });
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamSummary status={team1.status} name={team1.name} score={team1.score} />
          <div className="timer">00:03</div>
          <TeamSummary status={team2.status} name={team2.name} score={team2.score} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <ScoreButton status={team1.status} name={team1.name} handleClick={setScore} />
        <ScoreButton status={team2.status} name={team2.name} handleClick={setScore} />
      </section>
    </div>
  );
}

export default App;
