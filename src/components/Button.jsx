import React from "react";
import { useState } from "react";
import useCalc from "../CalcContext";

const colorClasses = {
    'red-500': 'bg-red-500',
    'blue-700': 'bg-blue-700',
    'gray-500': 'bg-gray-500',
    'neutral-800': 'bg-neutral-800'
};  

const hoverColorClasses = {
    'red-500': 'hover:bg-red-400',
    'blue-700': 'hover:bg-blue-800',
    'gray-700': 'hover:bg-gray-900',
    'gray-400': 'hover:bg-gray-400',
    'neutral-800': 'hover:bg-neutral-700'
};

function Button({
    width,
    bgcolor='sky-700',
    text='',
    isActive=false,
    logoCode='',
    hoverBgcolor='gray-700',
    type=''
    })
    {
        const bgClass = (bgcolor==='black' ? 'bg-black': colorClasses[bgcolor])
        const bgHoverClass= hoverColorClasses[hoverBgcolor]
        const {value, setValue}= useCalc();

        const clicked=(e)=>{
            if(e.target.innerHTML>=0 && e.target.innerHTML<=9){
                setValue((prev)=>((prev=='0') ?  (e.target.innerHTML) :prev+ e.target.innerHTML))
            }
            else if(e.target.innerHTML==='.'){
                    setValue((prev)=>prev+ e.target.innerHTML)
                
            }
            else if(e.target.innerHTML==='AC'){
                setValue('0');
            }
            else if(type==='symbol'){
                
                switch(e.target.innerHTML){
                    case '+': 
                    case '-':
                    case '÷':
                    case '×':
                        setValue((prev)=>(prev+e.target.innerHTML))
                        break;
                    case '=':
                        let exp= (value.replaceAll('÷', '/'))
                        exp = exp.replaceAll('×', '*')
                        exp=exp.replaceAll('√' , 'Math.sqrt')
                        exp= exp.replaceAll('^', '**')
                        console.log(exp)
                        setValue(eval(exp))
                        console.log('yes')
                        break;
                    case '±':
                        setValue((prev)=> String(Number(prev)*-1))
                        break;
                    case '√':
                        setValue((prev)=>  '√('+prev+')')
                        break;
                    case 'x^2':
                        setValue((prev)=>('('+prev+')^2'))
                        break;
                    case '1/x':
                        setValue((prev)=>('1/(' + prev+ ')'))
                        break;

                }
            }
            else if(e.target.innerHTML==='C'){
                setValue((prev)=>(prev.slice(0, -1)))
                
            }
        }

        return(
            <>
            {text ? 
            (<button className= {`border-none text-white text-center font-sans font-medium rounded-2xl py-2.5 my-0.5 mx-1 sm:rounded-full ${bgClass} ${bgHoverClass}`} style={{width: `${width}`}}  onClick={(e)=>{clicked(e)}}>{text}</button>)    :   (<button className={`${bgClass} ${bgHoverClass} text-white text-center pl-10 font-sans font-medium rounded-2xl py-2.5 mx-1 my-0.5`} style={{width: `${width}`}}>{logoCode}</button>)}
            </>
        )
    }

export default Button;