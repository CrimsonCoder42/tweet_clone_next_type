import React, { useCallback } from 'react';
import { IconType } from "react-icons";
import { useRouter } from 'next/router';

import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import { BsDot } from 'react-icons/bs';

// Define the SidebarItemProps interface to describe the props of the SidebarItem component
interface SidebarItemProps {
  label: string; // Label for the sidebar item
  icon: IconType; // Icon component from react-icons library
  href?: string; // Link to navigate to when clicked
  onClick?: () => void; // Custom onClick event handler
  auth?: boolean; // Flag to determine if the item requires authentication
  alert?: boolean; // Flag to indicate if there's an alert for the item
}

// Define the SidebarItem component
const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, href, auth, onClick, alert }) => {
  const router = useRouter(); // Get the router instance from Next.js
  const loginModal = useLoginModal(); // Custom hook to handle the login modal
  const { data: currentUser } = useCurrentUser(); // Get the current user using the useCurrentUser hook

  // Handle the click event of the sidebar item
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick(); // Call the custom onClick event handler if provided
    }

    if (auth && !currentUser) {
      loginModal.onOpen(); // Open the login modal if the item requires authentication and the user is not logged in
    } else if (href) {
      router.push(href); // Navigate to the specified href if provided
    }
  }, [router, href, auth, loginModal, onClick, currentUser]);

  // Render the SidebarItem component
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      {/* Render the mobile version of the sidebar item */}
      <div className="
        relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      ">
        <Icon size={28} color="white" /> {/* Render the icon */}
        {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null} {/* Render an alert dot if alert is true */}
      </div>

      {/* Render the desktop version of the sidebar item */}
      <div className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      ">
        <Icon size={24} color="white" /> {/* Render the icon */}
        <p className="hidden lg:block text-white text-xl">
          {label} {/* Render the label */}
        </p>
        {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null} {/* Render an alert dot if alert is true */}
      </div>
    </div>
  );
};

export default SidebarItem; // Export the SidebarItem component as the default export



// This is a React functional component that represents a sidebar item. The component receives various props such as label for the item label, icon for the icon component from the react-icons library, href