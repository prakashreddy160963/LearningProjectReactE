import React from "react";



export default function Buttons() {




    const dBtn = {
        design: "bg-sky-400 m-2 px-4 py-1 font-sans font-normal text-base text-slate-50 border rounded-md hover:bg-sky-500",
        design1: "bg-rose-400 m-2 px-4 py-1 font-sans font-normal text-base text-slate-50 border rounded-md hover:bg-rose-500",
        design2: "font-sans text-base border border-indigo-300 rounded-md m-2 px-4 py-1",
    }
    const inpt = {
        inpt1: "border border-rose-400 rounded-md h-8 w-72 pl-2 focus:outline-none focus:border-rose-500 focus:ring-rose-500 focus:ring-1",
    }





    return (
        <div className="">
            <div className="flex flex-wrap border border-sky-500 m-4 rounded">
                <button className={dBtn.design}>Click1</button>
                <button className={dBtn.design1}>Click2</button>
                <button className={dBtn.design2}>Click3</button>
                <button className={dBtn.design2}>Click4</button>
                <button className={dBtn.design2}>Click5</button>
            </div>
            <div className="flex flex-column border border-sky-500 m-4 p-4 rounded">

                <input className={inpt.inpt1} placeholder="email@.com" />
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

        </div>
    );
}