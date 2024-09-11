import { twMerge } from "tailwind-merge"

// eslint-disable-next-line react/prop-types
const Container = ({ children,className }) => {
  
  const newClassName = twMerge("max-w-screen-xl mx-auto py-10 lg:px-0 ",className)

  return (
    <div className={newClassName}>{ children}</div>
  )
}

export default Container