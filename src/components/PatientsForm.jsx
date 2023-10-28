
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PatientForm({ preData, type, submitFunction , onClose }) {
  const dispatch = useDispatch();
  const initialValue = {
    name: '',
    age: '',
    gender: 'Male',
    contact: '',
    ward: '',
    medical_history: '',
  }
  const [formData, setFormData] = useState(preData ?? initialValue);
  const { wards } = useSelector(state => state.wards)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "add") {
      dispatch(submitFunction(formData))
    }
    else if (type === 'update') {
      dispatch(submitFunction({ id: preData._id, formData }))
    }
    setFormData(initialValue)
    if(onClose){
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <br />

      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />

      <label>
        Contact:
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} />
      </label>
      <br />

      <label>
        Ward:
        <select name="ward" value={formData.ward} onChange={handleChange} required>
          <option value="">Select </option>
          {
            wards?.map(item => <option value={item.w_number}>Ward {item.w_number}</option>
            )
          }
        </select>
      </label>
      <br />

      <label>
        Medical History:
        <input type="text" name="medical_history" aria-label="history medical" value={formData.medical_history} placeholder="example - Diabetes" onChange={handleChange} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
