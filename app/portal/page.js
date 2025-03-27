"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../foot/footer";
import Navbar from "../nav/AdminNavbar";
import { Router } from "next/router";

export default function Auth() {
    const router = useRouter();
    const [isOfficer, setIsOfficer] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const endpoint = (isAdmin || isOfficer) ? "/api/auth/admin" : "/api/auth/student";
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                sessionStorage.setItem("role", (isAdmin || isOfficer) ? data.role : "Student");
                if(sessionStorage.getItem("role") === "Student") {
                    router.push("/student/dashboard");
                } else if(isOfficer && data.role === "Officer") {
                    router.push("/officer/dashboard");
                } else if(isAdmin && data.role === "Admin") {
                    router.push("/admin/dashboard");
                } else {
                    setError("Invalid Credentials");
                }
            } else {
                setError(data.message || "Authentication failed. Please try again.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
            console.error("Authentication error:", error);
        }
    };

    return (
        <div className="bg-blue-50 min-h-screen">
            <Navbar item={"Portal"}/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6 bg-gradient-to-r from-blue-500 to-gray-200">
                <div className="bg-white shadow-gray-600 shadow-2xl rounded-3xl p-6 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">
                        {!isAdmin ? !isOfficer ? "Student Login" : "Officer Login" : "Admin Login"}
                    </h1>
                    {error && <p className="text-center text-red-600">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-black">Institutional Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full text-black p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-black">Password</label>
                            <input type="password" id="password" value={formData.password} onChange={handleChange} className="w-full text-black p-2 border border-gray-300 rounded" required />
                        </div>
                        <button type="submit" className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                            {isOfficer ? "Officer Login" : isAdmin ? "Admin Login" : "Student Login"}
                        </button>
                    </form>
                    <div className="text-center mt-4 text-sm text-gray-700">
                        {!isAdmin && (
                            <p>
                                {isOfficer ? "Student?" : "Officer?"}
                                <button onClick={() => {
                                    setIsOfficer(!isOfficer);
                                    setError("");
                                    setIsAdmin(false);
                                }} className="cursor-pointer text-blue-600 ml-1">
                                    {isOfficer ? "Student Login" : "Officer Login"}
                                </button>
                            </p>
                        )}
                        <p>
                            <button onClick={() => {
                                setIsAdmin(!isAdmin);
                                setError("");
                                setIsOfficer(false);
                            }} className="cursor-pointer text-blue-600 mt-3">
                                {isAdmin ? "Back to Login" : "Login as Admin"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
