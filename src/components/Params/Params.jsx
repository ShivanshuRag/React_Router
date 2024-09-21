import { useParams } from "react-router-dom"

function Params() {
    const { userId } = useParams()
  return (
    <div className="text-center bg-slate-500 text-slate-900 font-extrabold">Params : {userId}</div> 
  )
}

export default Params