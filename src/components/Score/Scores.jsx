import React from "react"

const Scores = (props) => {
    return (
        <div>
            {props.scores.map((score, idx) => 
            <div>
                <p>Date: {score.date}</p>
                <p>Score: {score.score}</p>
            </div>
            )}
        </div>
    )
}


export default Scores 