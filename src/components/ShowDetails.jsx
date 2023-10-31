import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteEventData,
  fetchEvents,
  updateEvent,
} from "../features/events/eventSlice";
import {
  deleteVolunteer,
  fetchVolunteers,
  updateVolunteer,
} from "../features/volunteer/volunteerSlice";
import VolunteersForm from "./VolunteersForm";
import EventsForm from "./EventsForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ShowDetails() {
  const { events } = useSelector((state) => state?.events);
  const { volunteers } = useSelector((state) => state?.volunteers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, type } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data =
    type === "events"
      ? events?.find((item) => item._id === id)
      : volunteers?.find((item) => item._id === id);
  console.log({ data });
  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchVolunteers());
  }, []);
  return (
    <div className="detailsCard">
      <h3>{data?.name} Details </h3>
      <h4>{type?.toUpperCase()} </h4>

      <div>
        {Object?.name ? (
          Object.keys(data ?? {}).map(
            (key) =>
              key !== "_id" &&
              key !== "__v" && (
                <p>
                  {key[0].toUpperCase() + key.slice(1)} :
                  <b>
                    <i>
                      {" "}
                      {Array.isArray(data[key])
                        ? data[key].map((item) => <span>| {item} | </span>)
                        : typeof data[key] === "boolean"
                        ? data[key] === true
                          ? "Yes"
                          : "No"
                        : data[key]}{" "}
                    </i>
                  </b>{" "}
                </p>
              )
          )
        ) : (
          <p>No data found for this Id</p>
        )}
      </div>
      <button onClick={handleOpen}>Edit Data</button>
      <button
        onClick={() => {
          dispatch(
            type === "events"
              ? deleteEventData(data?._id)
              : deleteVolunteer(data?._id)
          );
          navigate(-1);
        }}
      >
        Delete forever
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="formToUpdate">
            {type === "volunteer" && (
              <VolunteersForm
                type="update"
                preData={data}
                onClose={handleClose}
                submitFunction={updateVolunteer}
              />
            )}
            {type === "events" && (
              <EventsForm
                type="update"
                preData={data}
                onClose={handleClose}
                submitFunction={updateEvent}
              />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
