import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className=" w-full h-screen bg-gray-700 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-extrabold pt-6">MiniContextAPI</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
