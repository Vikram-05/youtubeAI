import React from 'react'
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Login({ isLoginOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div
            className={`z-[300] fixed inset-0 bg-black/20  flex items-center justify-center transition-all duration-300 ${isLoginOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
        >
           
            <div
                className={`bg-white rounded-2xl shadow-lg w-[90%] max-w-[350px] p-6 pt-[60px] transform transition-all duration-300 ${isLoginOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition cursor-pointer   "
                >
                    <IoMdClose size={24} />
                </button>

              
                <div className="flex justify-center mb-6 space-x-2 bg-gray-100 p-1 rounded-xl ">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${isLogin
                                ? "bg-gray-900 text-white shadow-sm"
                                : "text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${!isLogin
                                ? "bg-gray-900 text-white shadow-sm"
                                : "text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

               
                <form className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border text-sm border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border text-sm border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                            required
                        />
                    </div>

                    

                    <button
                        type="submit"
                        className="w-[30%] text-sm bg-gray-900 text-white py-1.5 rounded-lg font-medium hover:bg-gray-800 transition-all"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

         
                <p className="text-xs text-gray-500 text-center mt-4">
                    No credit card required • Free 3 videos per day
                </p>
            </div>
        </div>

    )
}

export default Login




