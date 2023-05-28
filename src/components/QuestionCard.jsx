import { useState } from "react";

function QuestionCard(props) {
	const card = props.card;

	let [answer, setAnswer] = useState(Boolean);

	function CheckboxHandler(e) {
		card[0].answer === (e.target.className === "true-checkbox")
			? setAnswer((answer = true))
			: setAnswer((answer = false));

		card[0].userAnswer = answer;
	}

	return (
		<div className="question-card-container">
			<div className="question-card-wrapper">
				<div className="card-top-bar">
					<h2>{card[0].questionNumber}</h2>
				</div>
				<div className="card-question-wrapper">
					<div className="card-question-text-wrapper">
						<span className="card-question__text">{card[0].question}</span>
					</div>
					<div className="card-answers">
						<span>Yes</span>
						<input
							type="checkbox"
							className="true-checkbox"
							onChange={CheckboxHandler}
						></input>
						<input
							type="checkbox"
							className="false-checkbox"
							onChange={CheckboxHandler}
						></input>
						<span>No</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionCard;
