import React from 'react'
import ShowProjects from './ShowProjects'

const PortFolio = () => {
  return (
    <section
      id="projects"
      className="container px-4 mx-auto my-4 md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl font-semibold md:my-20">PortFolio</h1>

      <ShowProjects/>
    </section>
  )
}

export default PortFolio
