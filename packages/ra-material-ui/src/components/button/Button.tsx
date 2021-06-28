import PropTypes from "prop-types";

/**
 * The only true button.
 */
const Button = ({
	color = "#333",
	size = "normal",
	children,
}: ButtonProps) => {
	const styles = {
		color,
		fontSize: sizes[size],
	};
	return (
		<button className="button" style={styles}>
			{children}
		</button>
	);
};

interface ButtonProps {
	children: string;
	color?: string;
	size?: "small" | "normal" | "large"
}

Button.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(["small", "normal", "large"]),
};

const sizes = {
	small: "10px",
	normal: "14px",
	large: "18px",
};


export default Button;