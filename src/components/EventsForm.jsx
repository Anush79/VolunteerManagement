
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function EventsForm({ preData, type, submitFunction ,onClose }) {
  const dispatch = useDispatch();
  const initialValue = {
    name: '',
    date: '',
    location: '',
    description: '',
    volunteerRoles: []
  }
  const [formData, setFormData] = useState(preData ?? initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleVolunteerRolesChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      volunteerRoles: value.split(',') // Assuming the roles are comma-separated
    });
  };
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
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Volunteer Roles (comma-separated):</label>
        <input
          type="text"
          name="volunteerRoles"
          value={formData.volunteerRoles}
          onChange={handleVolunteerRolesChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
