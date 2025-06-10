import {format, add} from "date-fns"

function App() {

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
       Hello world!
      </h1>
      Tomorrow's Date : {format(add(new Date(),{days: 1}), "do MMMM yyyy")}
      </div>
      
    </>
  )
}

export default App
