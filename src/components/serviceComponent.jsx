import { useEffect, useState } from "react";


const serviceComponent = () => {
    const [eventService, setEventService] = useState([]);
    
      useEffect(() => {
          fetch("./event.json")
              .then(res=>res.json())
              .then(data=>setEventService(data));
      }, []);
    console.log(eventService);
    
    return (
        <div>
           
        </div>
    );
};

export default serviceComponent;