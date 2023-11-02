import { useState } from "react";
import Listing from "./List";
import { useSelector } from "react-redux";

export default function Summary({ type , data}) {
  const { volunteers } = useSelector(state => state?.volunteers)
  const { events } = useSelector(state => state?.events)

  const allVolunteers =type === 'events' ? volunteers?.filter(item=> item.assigned.includes(data?.name)) : null

  return <>
    <h3>{type.toUpperCase()} SUMMARY</h3>
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
                    ? data[key].map((item) => <span>| {item ?? "N/A"} | </span>)
                    : typeof data[key] === "boolean"
                      ? data[key] === true
                        ? "Yes"
                        : "No"
                      : data[key] ?? "Not available"}{" "}
                </i>
              </b>{" "}
            </p>
          )
      )
    ) : (
      <p>No data found for this Id</p>
    )}
    <ul>
    {type==='events' &&"Associated Volunteers : "} 
   {
    type==='events' &&
    allVolunteers.length > 0 &&
    allVolunteers?.map(item=><li key={item._id}>{item.name}</li>)
   }
   </ul>

  </>
}