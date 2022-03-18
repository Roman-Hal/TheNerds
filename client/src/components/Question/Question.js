import React from "react";

function Question({ data, onPressQuestion }) {
    // const [highlightRow, setHighlightRow] = useState(false);
    // function highlightRowHandler(index) {
	// 		if (index === highlightRow) {
	// 			setHighlightRow(false);
	// 		} else {
	// 			setHighlightRow(index);
	// 		}
	// 	}
  return (
		<div>
			<div
				className="questionStyle card m-3"
				// className={highlightRow === index ? "highlight" : ""}
				// onClick={(e) => highlightRowHandler(index)}
			>
				<h4 className="card-title">
					<span>{data.owner}</span>
					{data.title}
				</h4>
				<p className="card-text">{data.description}</p>
				<p>{data.timestamp}</p>
				<button
					className="btn btn-danger"
					onClick={() => onPressQuestion(data.id)}
				>
					Reply
				</button>
			</div>
		</div>
	);
}

export default Question;