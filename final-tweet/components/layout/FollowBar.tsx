import useUsers from '@/hooks/useUsers';
import Avatar from '../Avatar';

// Define the FollowBar component
const FollowBar = () => {
  const { data: users = [] } = useUsers(); // Get the users data using the useUsers hook

  // If there are no users, don't render anything
  if (users.length === 0) {
    return null;
  }

  // Render the FollowBar component
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {/* Render the list of users */}
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} /> {/* Render the Avatar component */}
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p> {/* Render the user's name */}
                <p className="text-neutral-400 text-sm">@{user.username}</p> {/* Render the user's username */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar; // Export the FollowBar component as the default export

// This is a React functional component that represents a follow bar in the sidebar. The component uses the useUsers hook to fetch data about users to follow.

// The component checks if there are any users in the users array. If there are no users, it returns null, meaning nothing will be rendered.

// If there are users, the component renders the follow bar. It has a title "Who to follow" and a list of users to display. The users are mapped over using the users.map method, and for each user, an Avatar component is rendered along with their name and username.

// The Avatar component is rendered using the userId prop to display the user's avatar.

// Overall, this component provides a follow bar in the sidebar, suggesting users to follow based on the fetched data.