import { FC } from "react";

const Note: FC = () => {
	return (
		<div className="note">
			<div className="note_star"></div>
			<div className="note_color_block"></div>
			<div className="note_left_corner"></div>
			<h2 className="note_title">Title</h2>
			<p className="note_text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Officiis nulla voluptatum accusamus ex. Sequi modi sint pariatur
				assumenda aut ea illum. Excepturi, totam necessitatibus debitis
				nihil praesentium repudiandae commodi accusamus. Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Assumenda,
				distinctio, laudantium suscipit maxime mollitia sed illum
				voluptatem eos earum sit reiciendis, necessitatibus recusandae
				quidem porro. Tempora obcaecati ex numquam vitae.
			</p>
		</div>
	);
};

export default Note;
