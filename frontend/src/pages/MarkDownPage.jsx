import React from 'react'
import Markdown from '../Components/markDown'

const MarkDownPage = () => {
  return (
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editor Markdown</h1>
      <Markdown></Markdown>
    </div>
    </>
  )
}

export default MarkDownPage