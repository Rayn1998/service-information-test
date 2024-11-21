import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddNotePopup from "../AddNotePopup/AddNotePopup";
import Button from "../Button/Button";
import ButtonsBlock from "../ButtonsBlock/ButtonsBlock";
import Footer from "../Footer/Footer";
import { RootState } from "../../redux/store";
import { openPopup, closePopup } from "../../redux/slices/AddNotePopup_slice";

const App: FC = () => {
	return (
		<div className="App">
			<header className="App_header">NOTES :</header>
			<main className="main">
				<AddNotePopup />
				<ButtonsBlock>
					<Button />
				</ButtonsBlock>
				<div className="main-block">
					<div className="main_left"></div>
					<div className="main_right"></div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default App;
