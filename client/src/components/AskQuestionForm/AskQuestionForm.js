
import React, { useState } from "react";
import "./AskQuestionForm.css";
const AskQuestionForm = ({ show }) => {

// Example POST method implementation:
//async function postData(url = "", data = {}) {
  // Default options are marked with *
  //const response = await fetch(url, {
  //  method: "POST", // *GET, POST, PUT, DELETE, etc.
  //  headers: {
   //   "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
  //  },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //  body: JSON.stringify(data), // body data type must match "Content-Type" header
 // });
//  return response.json(); // parses JSON response into native JavaScript objects
//}

// postData("http://localhost:3100/api/form", { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });


//           return (
//           <form>
//             <input
//             name="Title"
//             placeholder="Title"
//              onChange={(e) => this.change(e)}
//             />
//             <br />
//               <textarea name= "description"> Description </textarea>
//              <br />
//                 <input
//                 name="username"
//                 placeholder="Username"
//                 onChange={(e) => this.change(e)}
//              />
//             <button className="button1"  onClick={(e) => this.onSubmit(e)}>Ask Question </button>

//           </form>
//         );

	const [hide, setHide] = useState(false);
	const handleHide = (e) => {
		e.preventDefault();
		setHide(!hide);
		window.location.reload(true);
	};
	return (
		<div className={show ? "show" : ""}>
			<form className="askQuestionStyle form-group card">
				<button type="button" className="AskQtnCloseBtn" onClick={handleHide}>
					<span aria-hidden="true">×</span>
				</button>
				<label htmlFor="title">Title</label>
				<input
					className="form-control"
					type="text"
					id="title"
					name="title"
					placeholder="Which problem are you trying to solve?"
					autoComplete="off"
				/>
				<label htmlFor="expectedOutcome">Body</label>
				<textarea
					className="form-control"
					type="text"
					rows={5}
					cols={5}
					placeholder="Elaborate on your issue"
				/>
				<button className="btn btn-danger m-3">Ask question</button>
			</form>
		</div>
	);
};


export default AskQuestionForm;
