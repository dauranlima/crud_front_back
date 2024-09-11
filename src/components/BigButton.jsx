import { twMerge } from "tailwind-merge"


export default function BigButton({ children, className }) {
  
  const newClassName = twMerge("bg-yellow-500 hover:bg-orange-700 text-white font-5xl font-bold py-20 px-40 rounded",className)
  
  
  return (
    <>

    <button className={newClassName}>{children}</button>
    </>
  )
}
