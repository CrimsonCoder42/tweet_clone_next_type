import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

// Define the HeaderProps interface to describe the props of the Header component
interface HeaderProps {
  showBackArrow?: boolean; // Flag to determine if the back arrow should be shown
  label: string; // Label for the header
}

// Define the Header component
const Header: React.FC<HeaderProps> = ({ showBackArrow, label }) => {
  const router = useRouter(); // Get the router instance from Next.js

  // Handle the back arrow click event
  const handleBack = useCallback(() => {
    router.back(); // Navigate back to the previous page
  }, [router]);

  // Render the Header component
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && ( // Render the back arrow only if showBackArrow is true
          <BiArrowBack 
            onClick={handleBack} // Handle the click event of the back arrow
            color="white" 
            size={20} 
            className="
              cursor-pointer 
              hover:opacity-70 
              transition
          "/>
        )}
        <h1 className="text-white text-xl font-semibold">
          {label} {/* Render the label */}
        </h1>
      </div>
    </div>
  );
}

export default Header; // Export the Header component as the default export

// This is a React functional component that represents a header with an optional back arrow and a label. The component receives props showBackArrow to determine if the back arrow should be displayed and label for the header text.

// The component utilizes the useRouter hook from Next.js to get the router instance.

// The handleBack function is a callback function that handles the click event of the back arrow. When clicked, it navigates back to the previous page using router.back().

// The component renders a border at the bottom, and inside, it displays the header content. The header content consists of a flex container with the label and optionally the back arrow. The back arrow is rendered conditionally based on the value of showBackArrow. If showBackArrow is true, the BiArrowBack component is rendered with the appropriate styles and the handleBack function as the click event handler. The label is rendered as an h1 element with the specified styles.

// Overall, this component provides a header with an optional back arrow and a label, allowing for easy navigation and visual identification of the current page.