import React, { useState } from "react";

const Checkboxes = () => {
	const [allChecked, setAllChecked] = useState(false);

	const handleSelectAll = (event) => {
		const newCheckedStatus = event.target.checked;
		setAllChecked(newCheckedStatus);
	};

	const handleSubmit = () => {
		console.log("Selected items:");
	};

	let options = [
		{
			id: 1,
			text: "Page 1",
		},
		{
			id: 2,
			text: "Page 2",
		},
		{
			id: 3,
			text: "Page 3",
		},
		{
			id: 4,
			text: "Page 4",
		},
	];

	return (
		<div className="main">
			<div className="box">
				<div className="option">
					<label htmlFor="selectAll">All Pages</label>
					<input
						type="checkbox"
						id="selectAll"
						className="checkbox"
						checked={allChecked}
						onChange={handleSelectAll}
					/>
				</div>

				<div className="separatorDiv">
					<hr className="separator" />
				</div>

				<div className="options">
					{options.map((option, idx) => {
						return (
							<div className="option" key={option.id}>
								<label htmlFor={option.id}>{option.text}</label>

								<div className="checkBox">
									<input
										id={option.id}
										type="checkbox"
										className="checkbox"
										placeholder="1"
									/>
								</div>
							</div>
						);
					})}
				</div>

				<div className="separatorDiv">
					<hr className="separator" />
				</div>

				<div className="btnDiv">
					<button onClick={handleSubmit} className="btn">
						Done
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkboxes;
