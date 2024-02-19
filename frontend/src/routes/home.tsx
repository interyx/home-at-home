import React from "react"

export default function Home() {
  return (
    <>
      <div className="text-center pt-2 mt-2">
        <h1 className="text-5xl font-kaushan text-slate-300 text-shadow shadow-slate-300">Welcome to Home At Home!</h1>
      </div>
      <div className="p-3 m-3 grid grid-cols-1 md:grid-cols-2 row-span-2 md:justify-center">
        <div className="max-w-40 m-auto text-center">This app is a <span className="text-warning">work in progress.</span>  Eventually, I'd like to get it up and running so that it's useful to a lot of people.  Currently, it is useful to <span className="text-success">nobody</span>!</div>
        <div className="max-w-60 p-3 m-3 text-center">I'm working on the Inventory component right now, which is why none of the other buttons work.  There is no way to store information and precious little way to add it.  It's still coming.  If I ever actually work on it instead of redesigning the visual elements.</div>
      </div>
    </>
  )
}