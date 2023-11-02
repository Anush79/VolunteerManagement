import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import Summary from "../components/Summary";
export default function Dashboard() {
  const { volunteers } = useSelector((state) => state?.volunteers);
  const { events } = useSelector((state) => state?.events);
  const [summary, setSummary] = useState("");
  const [dataObj, setDataObj]  =useState(null)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickEve = (event) => {
    setSummary(() => "events");
    setAnchorEl(event.currentTarget);
    setDataObj(null)
  
  };
  const handleClickVol = (event) => {
    setSummary(() => "volunteers");
    setAnchorEl(event.currentTarget);
    setDataObj(null)
  };
  const handleClose = (event) => {
    setAnchorEl(null);  
    const listItem = event.target.innerText
    const newDataObj = summary === 'volunteers' ? volunteers?.find(item=>item.name===listItem)  : events?.find(item=>item.name===listItem)
    setDataObj(newDataObj)

  };

  return (
    <>
      <h2>Welcome to Volunteer Management System</h2>
      <p>
        Users can view a summary of a specific event, which includes the list of
        registered volunteers, volunteer roles, and event details.
      </p>
      <p>
        Users can view a summary of a specific volunteer, which includes their
        contact information, assigned events, and volunteer history.
      </p>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickEve}
      >
        Events Summary
      </button>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickVol}
      >
        Volunteers summary
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {summary === "volunteers"
          ? volunteers?.map((item) => (
              <MenuItem key={item._id} onClick={handleClose}>{item.name}</MenuItem>
            ))
          : events?.map((item) => (
              <MenuItem onClick={handleClose}>{item.name}</MenuItem>
            ))}
      </Menu>
      {dataObj &&
      <Summary type={summary} data= {dataObj} />
      }
    </>
  );
}
