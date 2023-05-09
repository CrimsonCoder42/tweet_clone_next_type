import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

// Define the SidebarLogo component
const SidebarLogo = () => {
  const router = useRouter(); // Get the router instance from Next.js

  // Render the SidebarLogo component
  return (
    <div 
      onClick={() => router.push('/')} // Handle click event to navigate to the home page
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <BsTwitter size={28} color="white" /> {/* Render the Twitter icon */}
    </div>
  );
};

export default SidebarLogo; // Export the SidebarLogo component as the default export



// This is a React component that represents a sidebar logo, which is a clickable element with the Twitter icon. The component uses the useRouter hook from Next.js to get the router instance, which allows us to navigate to different pages. When the logo is clicked, it triggers the onClick event and calls router.push('/') to navigate to the home page.

// The component is styled using Tailwind CSS classes to define its size, padding, roundness, and hover effects. The Twitter icon from the react-icons/bs library is rendered with a size of 28 and a white color.

// Overall, this component provides a clickable logo that allows users to navigate to the home page.