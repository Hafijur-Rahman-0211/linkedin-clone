import React, { useState } from "react";
import "./css/Login.css";

const Login = () => {
    const [signup, setSignUp] = useState(false);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();

        if (!name) {
            return alert("Please enter your name");
        }
        if (!photoURL) {
            return alert("Please enter your photo URL");
        }
        if (!email) {
            return alert("Please enter your email");
        }
        if (!password) {
            return alert("Please enter your password");
        }

        setName("");
        setPhotoURL("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="loginScreen">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMjR7gx6W5-B-hglc98RYENcZeIrSg0t6aA&s"
                alt=""
            />
            {signup ? (
                <form onSubmit={register}>
                    <input
                        type="text"
                        placeholder="Full name (Required if Registering)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Profile Picture URL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value="Sign Up" />
                    <h4>
                        Already a member?{" "}
                        <span onClick={() => setSignUp(false)}>Login Here</span>
                    </h4>
                </form>
            ) : (
                <form action="">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Sign In" />
                    <h4>
                        Not a member?{" "}
                        <span onClick={() => setSignUp(true)}>Register Here</span>
                    </h4>
                </form>
            )}
        </div>
    );
};

export default Login;
