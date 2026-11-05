import { useState } from "react"
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      {isLogin? (
        <Login onRegister={() => setIsLogin(false)}/>
        ) : (
        <Register onLogin={() => setIsLogin(true)}/> 
        )}
    </div>
  );
}
export default App;