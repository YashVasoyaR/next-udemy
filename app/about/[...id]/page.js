import React from 'react'

const page = ({params}) => {
  console.log('params :>> ', params);
  const {id}=params;
  return (
    <div>Dynamic Router is : {id}</div>
  )
}

export default page