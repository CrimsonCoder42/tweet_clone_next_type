import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/router";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

// Define the SidebarTweetButton component
const SidebarTweetButton = () => {
  const router = useRouter(); // Get the router instance from Next.js
  const loginModal = useLoginModal(); // Custom hook to handle the login modal
  const { data: currentUser } = useCurrentUser(); // Get the current user using the useCurrentUser hook

  // Handle the click event of the tweet button
  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen(); // Open the login modal if the user is not logged in
    }

    router.push('/'); // Navigate to the home page
  }, [loginModal, router, currentUser]);

  // Render the SidebarTweetButton component
  return (
    <div onClick={onClick}>
      {/* Render the mobile version of the tweet button */}
      <div className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center 
        bg-sky-500 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      ">
        <FaFeather size={24} color="white" /> {/* Render the tweet icon */}
      </div>

      {/* Render the desktop version of the tweet button */}
      <div className="
        mt-6
        hidden 
        lg:block 
        px-4
        py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90 
        cursor-pointer
      ">
        <p 
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        ">
          Tweet {/* Render the tweet text */}
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton; // Export the SidebarTweetButton component as the default export



// This is a React functional component that represents a tweet button in the sidebar. The component provides a tweet button with different styles for mobile and desktop views.

// The component utilizes the useRouter hook from Next.js to get the router instance, the useLoginModal hook to handle the login modal, and the useCurrentUser hook to get information about the current user.

// The tweet button has an onClick event handler that checks if the user is logged in. If the user is not logged in, it opens the login modal. If the user is logged in, it navigates to the home page.

// The component renders different styles for the mobile and desktop versions of the tweet button. The mobile version has a circular shape with an icon, while the desktop version has a rounded shape with text.

// Overall, this component provides a tweet button that allows users to compose a new tweet when clicked.