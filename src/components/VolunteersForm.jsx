
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleSelectCheckmarks from "./MultiSelect";
import TextField from '@mui/material/TextField';
export default function VolunteersForm({ preData, type, submitFunction , onClose }) {
  const dispatch = useDispatch();
  const initialValue = {
    name: '',
    gender: '',
    contact: '',
    skills: [],
    availability: false,
    areasOfInterest: [],
    assigned: ''
  
  }
  const [volunteerData, setvolunteerData] = useState(preData ?? initialValue);
  // const { events } = useSelector(state => state.events)
  const handleChange = (event) => {
    let { name, value ,checked, type} = event.target;
  
if(name==='areasOfInterest'|| name === "skills"){
  value= value.split(',')
} 
else if( type === "checkbox" ){
  value=  checked
}
    setvolunteerData({ ...volunteerData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "add") {
      dispatch(submitFunction(volunteerData))
    }
    else if (type === 'update') {
      dispatch(submitFunction({ id: preData._id, volunteerData }))
    }

    setvolunteerData(initialValue)
    if(onClose){
      onClose()
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={volunteerData.name} onChange={handleChange} required />
      </div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={volunteerData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label>Contact:</label>
        <input type="text" name="contact" value={volunteerData.contact} onChange={handleChange} required />
      </div>

      <div>
        <label>Skills:</label>
       <textarea name="skills" id="" cols="20" rows="2" placeholder="seperate skills by commas" onChange={handleChange} value={volunteerData.skills.join()}></textarea>
      </div>

      <div>
        <label>Availability:</label>
        <input type="checkbox" name="availability" checked={volunteerData.availability===true?'on':''} onChange={handleChange} />
      </div>

      <div>
        <label>Areas of Interest:</label>
          <textarea onChange={handleChange} value={volunteerData.areasOfInterest.join(',')} name="areasOfInterest" id="" cols="20" rows="2" placeholder="Interests should be seperate by comma" />
      </div>
      <div>
     
      <MultipleSelectCheckmarks preData={volunteerData} handleChangeFunction={setvolunteerData} />
</div>
      <button type="submit">Submit</button>
    </form>
  );
}
