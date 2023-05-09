import React from 'react';
import FollowBar from "@/components/layout/FollowBar";
import Sidebar from "@/components/layout/Sidebar";

// Define the Layout component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar /> {/* Render the Sidebar component */}
          <div 
            className="
              col-span-3 
              lg:col-span-2 
              border-x-[1px] 
              border-neutral-800
          ">
            {children} {/* Render the children components */}
          </div>
          <FollowBar /> {/* Render the FollowBar component */}
        </div>
      </div>
    </div>
  );
};

export default Layout; // Export the Layout component as the default export



// This is a React functional component that represents a layout for a web page. The layout consists of a sidebar, a main content area, and a follow bar.

// The component receives children as a prop, which represents the child components to be rendered within the layout.

// The layout structure is defined using a combination of CSS classes and grid layout. The outermost div has a h-screen class to make it occupy the full height of the screen and a bg-black class to set the background color to black. Inside this div, there's a container div with a maximum width of 6xl (a predefined value in the project) and horizontal padding.

// The grid layout is used to divide the container into four columns (grid-cols-4). The first column contains the Sidebar component, the second and third columns together make up the main content area, and the fourth column contains the FollowBar component.

// The main content area is defined with a div that spans three columns on larger screens (col-span-3 and lg:col-span-2). It has a border on the right side (border-x-[1px]), with a color defined by the border-neutral-800 class.

// Inside the main content area, the children components are rendered using the {children} expression.

// Overall, this component provides a basic layout structure for a web page, with a sidebar, main content area, and follow bar.