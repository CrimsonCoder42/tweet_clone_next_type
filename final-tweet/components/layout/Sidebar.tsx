import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import useCurrentUser from '@/hooks/useCurrentUser';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';

// Define the Sidebar component
const Sidebar = () => {
  // Get the current user using the useCurrentUser hook
  const { data: currentUser } = useCurrentUser();

  // Define the sidebar items array
  const items = [
    {
      icon: BsHouseFill, // Home icon
      label: 'Home', // Label for the home item
      href: '/', // Link to the home page
    },
    {
      icon: BsBellFill, // Bell icon
      label: 'Notifications', // Label for the notifications item
      href: '/notifications', // Link to the notifications page
      auth: true, // Only show this item if the user is authenticated
      alert: currentUser?.hasNotification // Show an alert if the user has a notification
    },
    {
      icon: FaUser, // User icon
      label: 'Profile', // Label for the profile item
      href: `/users/${currentUser?.id}`, // Link to the user's profile page
      auth: true, // Only show this item if the user is authenticated
    },
  ];

  // Render the Sidebar component
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo /> {/* Render the sidebar logo */}
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              alert={item.alert}
              auth={item.auth}
              href={item.href} 
              icon={item.icon} 
              label={item.label}
            />
          ))}
          {/* Render the logout button if the user is authenticated */}
          {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
          <SidebarTweetButton /> {/* Render the tweet button */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; // Export the Sidebar component as the default export



// This is a React component that represents a sidebar with different items. The sidebar items are defined as an array of objects, where each object represents a specific item with its icon, label, and link. Some items are conditionally rendered based on the user's authentication status, and one item shows an alert if the user has a notification. The component also includes a logo, a tweet button, and a logout button that calls the signOut function when clicked.