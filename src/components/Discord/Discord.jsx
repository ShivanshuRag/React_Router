import { useEffect, useState } from "react"


export default function Discord() {
    const [user , setUser] = useState([])
   
       useEffect(() => {
        
            fetch('https://api.github.com/users/hiteshchoudhary')
            .then( response => response.json())
            .then(data => setUser(data))  
            
            
    
    
       }) 
     
      

  return (
    <div>

        <div className="flex items-center justify-center h-screen">
            
              <div className="p-5 text-slate-600 font-extrabold">
                Follower : {user.followers}
                <img src={user.avatar_url} alt="Git picture" width={300} />
                </div>   
                
        </div>
    </div>
  
  )
}
