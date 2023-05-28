import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import FormSubmit from "./components/FormSubmit";
import Footer from "./components/Footer";

function App() {
	const [card, setCard] = useState([
		{
			id: 0,
			questionNumber: "Question 1",
			question: "Is Elon Musk Tesla's CEO?",
			answer: true,
			userAnswer: null,
		},
		{
			id: 1,
			questionNumber: "Question 2",
			question: "Does Japan have the highest life expectancy?",
			answer: true,
			userAnswer: null,
		},
		{
			id: 2,
			questionNumber: "Question 3",
			question: "Is Williams the most common surname in United States?",
			answer: false,
			userAnswer: null,
		},
		{
			id: 3,
			questionNumber: "Question 4",
			question: "Does Saturn have the most moons?",
			answer: true,
			userAnswer: null,
		},
	]);

	return (
		<>
			<div id="container">
				<Header />
				<QuestionCard card={card.filter((item) => item.id === 0)} />
				<QuestionCard card={card.filter((item) => item.id === 1)} />
				<QuestionCard card={card.filter((item) => item.id === 2)} />
				<QuestionCard card={card.filter((item) => item.id === 3)} />
				<FormSubmit card={card} />
				<Footer />
			</div>
		</>
	);
}

export default App;
