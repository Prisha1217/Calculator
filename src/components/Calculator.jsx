import React from "react";
import { useState } from "react";
import Button from "./Button";
import Logo1 from "./Logo1"
import ReloadLogo from "./ReloadLogo";
import useCalc from "../CalcContext";

function Calculator(){
    const {value, setValue}= useCalc();
    return(
        <>
            <div className=" bg-black py-8 px-6 my-16 mx-auto max-w-xl rounded-2xl text-center">
                <div className="text-right bg-gray-200 py-5 px-3 text-4xl font-semibold">{value}</div>
                <div className="bg-gray-700  rounded-2xl mt-5 p-5">
                    <div className="flex items-center justify-center text-lg mb-2">
                        <Button bgcolor='neutral-800' width='118px'  logoCode={<ReloadLogo />} hoverBgcolor="neutral-800" />
                        <Button bgcolor='neutral-800' width='118px' text='' logoCode= {<Logo1 />} hoverBgcolor="neutral-800" />
                        <Button bgcolor='neutral-800' width='118px' text='C' hoverBgcolor="neutral-800"/>
                        <Button bgcolor='neutral-800' width='118px' text='AC' hoverBgcolor="neutral-800"/>
                    </div>
                    <div className="flex items-center justify-center text-xl">
                        <Button bgcolor='black' width='98px' text='7' type='number'/>
                        <Button bgcolor='black' width='98px' text='8' type='number'/>
                        <Button bgcolor='black' width='98px' text='9' type='number'/>
                        <Button bgcolor='gray-500' width='98px' text='÷' hoverBgcolor="gray-400" type='symbol'/>
                        <Button bgcolor='gray-500' width='98px' text='√' hoverBgcolor="gray-400" type='symbol'/>
                    </div>
                    <div className="flex items-center justify-center text-xl">
                        <Button bgcolor='black' width='98px' text='4' type='number'/>
                        <Button bgcolor='black' width='98px' text='5' type='number'/>
                        <Button bgcolor='black' width='98px' text='6' type='number'/>
                        <Button bgcolor='gray-500' width='98px' text='×' hoverBgcolor="gray-400" type='symbol'/>
                        <Button bgcolor='gray-500' width='98px' text='x^2' hoverBgcolor="gray-400" type='symbol'/>
                    </div>
                    <div className="flex items-center justify-center text-xl">
                        <Button bgcolor='black' width='98px' text='1' type='number'/>
                        <Button bgcolor='black' width='98px' text='2' type='number'/>
                        <Button bgcolor='black' width='98px' text='3' type='number'/>
                        <Button bgcolor='gray-500' width='98px' text='-' hoverBgcolor="gray-400" type='symbol'/>
                        <Button bgcolor='gray-500' width='98px' text='1/x' hoverBgcolor="gray-400" type='symbol'/>
                    </div>
                    <div className="flex items-center justify-center text-xl">
                        <Button bgcolor='black' width='98px' text='0'/>
                        <Button bgcolor='gray-500' width='98px' text='.' hoverBgcolor="gray-400" type='symbol'/>
                        <Button bgcolor='gray-500' width='98px' text='±' hoverBgcolor="gray-400" type='symbol'/>
                        <Button bgcolor='gray-500' width='98px' text='+' hoverBgcolor="gray-400" type='symbol'/>
                        <Button bgcolor='red-500' width='98px' text='=' hoverBgcolor="red-500" type='symbol'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator