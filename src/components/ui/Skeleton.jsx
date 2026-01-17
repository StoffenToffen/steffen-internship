import "./Skeleton.css";

const Skeleton = ({ width, height, borderRadius }) => {
	return (
		<div
			className="skeleton"
			style={{
				width,
				height,
				borderRadius,
			}}
		></div>
	);
};

export default Skeleton;
