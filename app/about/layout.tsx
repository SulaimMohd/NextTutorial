import React from 'react'

export default function AboutLayout({
  children
}:{
  children: React.ReactNode
}) {
  return (

    <div>
      <h2>This is the nav bar in the about page</h2>
      {children}
    </div>
  )
}
