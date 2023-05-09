interface ButtonProps {
  label: string; // Label for the button
  secondary?: boolean; // Flag to determine if it's a secondary button
  fullWidth?: boolean; // Flag to determine if the button should have full width
  large?: boolean; // Flag to determine if it's a large button
  onClick: () => void; // Click event handler
  disabled?: boolean; // Flag to determine if the button should be disabled
  outline?: boolean; // Flag to determine if it's an outlined button
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  onClick,
  large,
  disabled,
  outline
}) => {
  return (
    <button
      disabled={disabled} // Disable the button if the disabled prop is true
      onClick={onClick} // Handle the click event
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? 'w-full' : 'w-fit'} // Set the width based on the fullWidth prop
        ${secondary ? 'bg-white' : 'bg-sky-500'} // Set the background color based on the secondary prop
        ${secondary ? 'text-black' : 'text-white'} // Set the text color based on the secondary prop
        ${secondary ? 'border-black' : 'border-sky-500'} // Set the border color based on the secondary prop
        ${large ? 'text-xl' : 'text-md'} // Set the text size based on the large prop
        ${large ? 'px-5' : 'px-4'} // Set the horizontal padding based on the large prop
        ${large ? 'py-3' : 'py-2'} // Set the vertical padding based on the large prop
        ${outline ? 'bg-transparent' : ''} // Set the background to transparent if it's an outlined button
        ${outline ? 'border-white' : ''} // Set the border color to white if it's an outlined button
        ${outline ? 'text-white' : ''} // Set the text color to white if it's an outlined button
      `}
    >
      {label} {/* Render the label */}
    </button>
  );
};

export default Button; // Export the Button component as the default export


// This is a React functional component that represents a customizable button. The component receives various props to control its appearance and behavior.

// The label prop is used to set the button's label. The secondary prop is a flag that determines if the button should have a secondary style. The fullWidth prop is a flag that determines if the button should have full width. The large prop is a flag that determines if the button should be large. The onClick prop is the event handler for the click event. The disabled prop is a flag that determines if the button should be disabled. The outline prop is a flag that determines if the button should be outlined.

// The component renders a button element with different styles and classes based on the provided props. CSS classes are conditionally added or removed based on the prop values.

// Overall, this component provides a customizable button that can be styled and configured based on the provided props.