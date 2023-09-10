import { handleGoogleLogin } from "./FireBase";

export const Login = () => {
    return (
        <button onClick={handleGoogleLogin}>Login com o Google</button>
    )
} 