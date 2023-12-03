import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="w-full h-screen bg-gray-700 ">
        <h1 className="text-center text-3xl font-extrabold pt-6">MiniContextAPI</h1>
        <div className=" w-full h-full flex flex-col justify-center items-center">
        <Login />
        <Profile />
        </div>
        
      </div>
    </UserContextProvider>
  );
}

export default App;
