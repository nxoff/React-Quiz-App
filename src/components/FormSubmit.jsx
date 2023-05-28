function FormSubmit(props) {
	const card = props.card;

	function OnSubmit() {
		const collection = card.filter((item) => item.userAnswer);
		alert(`${collection.length}/4 correct!`);
	}

	return (
		<div className="form-submit-wrapper">
			<input
				type="button"
				value="Submit"
				className="form-submit"
				onClick={OnSubmit}
			/>
		</div>
	);
}

export default FormSubmit;
