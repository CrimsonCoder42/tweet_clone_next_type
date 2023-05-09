# tweet_clone_next_type

final-tweet/
├── components/
│ ├── Avatar.tsx
│ │ - Fetch user data
│ │ - Render avatar image and navigate to user's profile page
│ │ - Export Avatar component
│ ├── Button.tsx
│ │ - Render Button component with label prop
│ ├── Form.tsx
│ │ - Initialize registerModal and loginModal
│ │ - Handle form submission and success/error handling
│ │ - Render form content based on user's presence
│ │ - Export Form component
│ ├── Header.tsx
│ │ - Render Header component with conditional back arrow
│ ├── ImageUpload.tsx
│ │ - Handle file drop event and update base64 state
│ │ - Configure dropzone with options and accepted file types
│ │ - Render dropzone content based on base64 state presence
│ │ - Export ImageUpload component
│ ├── Layout.tsx
│ │ - Render Layout component with grid structure
│ ├── layout/
│ │ ├── Sidebar.tsx
│ │ │ - Use useCurrentUser hook
│ │ │ - Render SidebarLogo, SidebarTweetButton, SidebarItem components
│ │ ├── SidebarLogo.tsx
│ │ │ - Render and export SidebarLogo component with Twitter icon
│ │ ├── SidebarItem.tsx
│ │ │ - Render SidebarItem component
│ │ ├── FollowBar.tsx
│ │ │ - Render FollowBar component
│ │ ├── SidebarTweetButton.tsx
│ │ │ - Render SidebarTweetButton component
├── modals/
│ ├── EditModal.tsx
│ │ - Manage state with useState and useEffect hooks
│ │ - Handle PATCH request and success/error handling
│ ├── LoginModal.tsx
│ │ - Handle signIn and success/error handling
│ │ - Switch between login and registration
│ ├── RegisterModal.tsx
│ │ - Handle registration and success/error handling
│ │ - Switch between registration and login
├── posts/
│ ├── PostItem.tsx
│ │ - Render CommentFeed component
│ ├── CommentItem.tsx
│ │ - Render CommentItem component
│ │ - Navigate to user's profile page
│ ├── PostFeed.tsx
│ │ - Render PostFeed component
│ │ - Fetch posts data with usePosts custom hook
│ ├── CommentFeed.tsx
│ │ - Import CommentItem component
│ │ - Render CommentItem components within a fragment
│ │ - Export CommentFeed component
├── users/
│ ├── UserBio.tsx
│ │ - Fetch current user and target user data
│ │ - Calculate and display join date
│ │ - Conditionally render Edit or Follow/Unfollow buttons
│ │ - Export UserBio component
│ ├── UserHero.tsx
│ │ - Fetch user data
│ │ - Render cover image and avatar
│ │ - Export UserHero component

final-tweet/hooks/
├── useCurrentUser.ts
│ - Fetch data from '/api/current'
│ - Export useCurrentUser hook
├── useEditModal.ts
│ - Manage EditModal state
│ - Export useEditModal hook
├── useFollow.ts
│ - Manage follow/unfollow actions
│ - Export useFollow hook
├── useLike.ts
│ - Manage like/unlike actions
│ - Export useLike hook

https://github.com/AntonioErdeljac/twitter-clone/blob/master/hooks/useLike.ts
