import React from 'react'

interface ContainerProps {

    children?:React.ReactNode;
    classname?:string;
}


export function Container(props:Readonly<ContainerProps>) {
  return (
    <div>
        <div className={`container p-8 mx-auto xl:px-0 ${props.classname ? props.classname : ''}`}>

             {props.children}
        </div>
     
    </div>
  )
}
