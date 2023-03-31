import React from "react";
import Registerp from '../Images/Register.jpg'



export default function Register() {
    return (
        <div className="h-screen w-full p-16">
            <div className="border-2 h-full rounded-lg shadow-2xl flex">


                <div className=" w-1/2">
                    <img src={Registerp} alt='source' className="w-96 m-36" />
                </div>

                <div className=" bg-gradient-to-r from-sky-50 to-sky-100 w-1/2 h-full">
                    <div>
                        <h2 className="text-xl font-bold">Register</h2>
                    </div>
                    <div className=" flex flex-col justify-items-center border-8 h-96">
                        <input className="w-96 h-9 rounded-lg border-2 border-sky-100 focus:outline-sky-300" />
                        <input className="w-96 h-9 rounded-lg border-2 border-sky-100 focus:outline-sky-300" />
                        <input className="w-96 h-9 rounded-lg border-2 border-sky-100 focus:outline-sky-300" />
                        <input className="w-96 h-9 rounded-lg border-2 border-sky-100 focus:outline-sky-300" />
                        <button className="bg-sky-500 rounded-lg w-12">Click</button>
                    </div>
                </div>

            </div>
        </div>
    )
}