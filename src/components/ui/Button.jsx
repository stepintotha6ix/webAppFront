import React from 'react'
import clsx from 'clsx'

const MainButton= ({children, className, ...rest}) => {
    return (
     <button {...rest}  className={clsx('bg-orange-500 text-xs font-normal py-2 px-10 text-white rounded-2xl', className)}>{children}</button>
    )
  }
  
  export default MainButton