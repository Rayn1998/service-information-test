import { FC, PropsWithChildren } from "react";

const ButtonsBlock: FC<PropsWithChildren> = (props) => {
	return <div className="buttons-block">{props.children}</div>;
};

export default ButtonsBlock;
