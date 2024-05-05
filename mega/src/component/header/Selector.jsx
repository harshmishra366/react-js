import React,{useId} from "react";

function Selector(
   { label,
    option,
    className='',
    ...props},ref
)


{
    const id= useId()
    return(
        <div className="w-full">
            {label && <label htmlFor={id} className="">{label}</label>}
           <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>

           </select>
           {
           option?.map((option)=>(<option key={option} value={option}>
            {option}
           </option>))
           }
        </div>
    )
}
export default React.forwardRef(Selector)