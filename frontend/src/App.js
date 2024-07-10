import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center border-4 border-black'>
      {/* <h1>This works</h1> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Home/> */}

      
      

    </div>
  );
}

export default App;




// we have installed tailwindcss, we have also installed daisyUI to simplify tailwind, we have installed an extension called "Tailwind CSS IntelliSense" to see all the css properties that are present inside any daisyUI class


// Please Remember, we are using react-router-dom only for surface level routing(only for routing or navigating through web pages)

// The end points that we were trying to hit using postman , we don't define those with react-router-dom, those endpoints we hit when 
