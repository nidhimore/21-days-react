import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


// DAY - 3
// This is a practice code for Password Show and Hide
function PasswordToggle(){
    const [password,setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div>
            <input type={showPassword?"text": "password"} name="pass" id="pass"
            placeholder="Enter Password" 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
            <button 
 onClick={() => setShowPassword(!showPassword)}
            >
        {showPassword?<EyeOff size={10}></EyeOff> : <Eye size={10}></Eye>}
            </button>
        </div>
    )

}
export default PasswordToggle;