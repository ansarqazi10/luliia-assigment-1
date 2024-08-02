import { useState, useEffect } from "react";

const Checkboxes = () => {
	const [allChecked, setAllChecked] = useState(false);
	const [checkedItems, setCheckedItems] = useState({});
	const [showResult, setShowResult] = useState(false);
	let [result, setResult] = useState([]);

	let options = [
		{ id: 1, text: "Page 1" },
		{ id: 2, text: "Page 2" },
		{ id: 3, text: "Page 3" },
		{ id: 4, text: "Page 4" },
	];

	const handleSelectAll = (event) => {
		const newCheckedStatus = event.target.checked;
		setAllChecked(newCheckedStatus);
		const newCheckedItems = {};
		options.forEach((option) => {
			newCheckedItems[option.id] = newCheckedStatus;
		});
		setCheckedItems(newCheckedItems);
	};

	const handleCheckboxChange = (id) => (event) => {
		setCheckedItems({ ...checkedItems, [id]: event.target.checked });
	};

	useEffect(() => {
		const areAllChecked = options.every(
			(option) => checkedItems[option.id]
		);
		setAllChecked(areAllChecked);
		setShowResult(false);
	}, [checkedItems]);

	const handleSubmit = () => {
		let k = [];
		Object.keys(checkedItems).forEach((key) => {
			if (checkedItems[key]) {
				k.push(options[key - 1]);
			}
		});
		setResult(k);
		setShowResult(true);
	};

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
					{options.map((option, idx) => (
						<div className="option" key={option.id}>
							<label htmlFor={option.id}>{option.text}</label>
							<div className="checkBox">
								<input
									id={option.id}
									type="checkbox"
									className="checkbox"
									checked={checkedItems[option.id] || false}
									onChange={handleCheckboxChange(option.id)}
								/>
							</div>
						</div>
					))}
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

			{showResult && (
				<div className="result">
					<p>Here is the list of selected item(s)</p>
					<hr className="separator" />
					{result.length > 0 && (
						<ul>
							{result.map((opt, idx) => {
								return (
									<li key={idx}>
										{idx + 1}. {opt.text}
									</li>
								);
							})}
						</ul>
					)}
					{result.length === 0 && (
						<i className="noMessage">No item selected</i>
					)}
				</div>
			)}
		</div>
	);
};

export default Checkboxes;
