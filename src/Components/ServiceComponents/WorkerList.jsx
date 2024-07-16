import React, { useContext } from 'react';
import {Context} from '../../main'


const WorkerList = ({ workers }) => {
  const {isUserAuthenticated} = useContext(Context);
  const [workers,setWorkers] = useState({});

 
useEffect(() => {
  const fetchWorkers = async()=>{
    try{
      const { data } = await axios.get('http://localhost:8000/api/v1/user/getWorkers',{
        withCredentials:true,
      })
      setWorkers(data.workers)

    }catch(error){
      console.log(error);
    }
  }
fetchWorkers();
}, [])

  
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Available Workers</h3>
      <div className="space-y-4">
        {workers.map(worker => (
          <div key={worker._id} className="flex items-center p-2 border rounded-lg">
            <img src={worker.image} alt={worker.name} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h4 className="font-bold">{worker.name}</h4>
              <p>Availability: {worker.availability}</p>
              <p>Reviews: {worker.reviews}</p>
              <p>Gender: {worker.gender}</p>
              <p>Gender: {worker.phone}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkerList;
