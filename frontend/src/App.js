import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home"

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center border-4 border-black'>
      {/* <h1>This works</h1> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Home/>
      

    </div>
  );
}

export default App;




// we have installed tailwindcss, we have also installed daisyUI to simplify tailwind, we have installed an extension called "Tailwind CSS IntelliSense" to see all the css properties that are present inside any daisyUI class
