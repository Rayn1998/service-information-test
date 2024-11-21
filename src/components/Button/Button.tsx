import { FC } from "react";
import { useDispatch } from "react-redux";
import { openPopup } from "../../redux/slices/AddNotePopup_slice";

const Button: FC = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(openPopup());
	};
	return (
		<div className="button" onClick={() => handleClick()}>
			Add Note
		</div>
	);
};

export default Button;
