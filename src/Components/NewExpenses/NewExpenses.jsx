import { Button } from "../Ul/ulButton/Button";
import { Input } from "../Ul/ulInput/Input";
import "./NewExpenses.css";
import { useState } from "react";

export const NewExpenses = ({ expenses, setExpenses }) => {
	const [expenseName, setExpenseName] = useState();
	const [espenseUrl, setExpenseUrl] = useState();
	const inputsRender = () => {
		const data = {
			name: expenseName,
			photo: espenseUrl,
		};
		setExpenseName("");
		setExpenseUrl("");
	};
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				inputsRender();
			}}>
			<div>
				<Input type="text" placeholder="Кино!" value={expenseName} setResult={setExpenseName}/>
				<Input type="url" placeholder="photo is url " value/>
				<Button type="sumbit" text="Add" />
			</div>
		</form>
	);
};
