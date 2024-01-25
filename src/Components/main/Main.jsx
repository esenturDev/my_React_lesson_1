import { Card } from "../Ul/cards/Card";
import css from "./Main.module.css";
// import { Input } from "../Ul/ulInput/Input.jsx";
// import { Button } from "../Ul/ulButton/Button.jsx";
import { Expenses } from "../Expenses/Expenses.jsx";

export const Main = () => {
	return (
		<div className={css.mainContainer}>
			<div className={css.container}>
				<div className={css.content}>
					<h1>ВЫХОДНЫЕ С АЛЕКСАНДРОМ ПЕТРОВЫМ</h1>
					<a href="#">Смотреть все!</a>
				</div>

				{/* Card */}
				<Card />
				{/* <div className={css.inputs}>
					<Input style="input" placeholder="Кино!" type="text" />
					<Input style="input" placeholder="photo is url" type="url" />
					<Button style="button11" name="Add" />
					<Button style="button11" name="Delete" />
				</div> */}
				<div className={css.expenseContainer}>
					<Expenses />
				</div>
			</div>
		</div>
	);
};
