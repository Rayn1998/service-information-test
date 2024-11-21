import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../redux/slices/AddNotePopup_slice";
import { UseDispatch } from "react-redux";

const AddNotePopup: FC = () => {
	const popup = useSelector(
		(state: RootState) => state.AddNotePopup_slice.isOpen,
	);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(closePopup());
	};
	return (
		<div
			className="addnotepopup-wrapper"
			style={{
				visibility: popup ? "visible" : "hidden",
				opacity: popup ? 1 : 0,
			}}
		>
			<div className="addnotepopup">
				<div className="addnotepopup_close" onClick={handleClose}></div>
				<form className="addnotepopup_form">
					<h2 className="addnotepopup_form_input-name">Title:</h2>
					<input className="addnotepopup_form_input title" />
					<h2 className="addnotepopup_form_input-name">Text</h2>
					<textarea className="addnotepopup_form_input textarea" />
					<input type="submit" className="addnotepopup_form_submit" />
				</form>
			</div>
		</div>
	);
};

export default AddNotePopup;
