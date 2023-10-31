import { MenuItem, MenuList } from "@mui/material";
import { useSelector } from "react-redux";

export default function Listing(type) {
  const { volunteers } = useSelector(state => state.volunteers)
  const { events } = useSelector(state => state.events)

return <div>
  <MenuList/>
</div>


}