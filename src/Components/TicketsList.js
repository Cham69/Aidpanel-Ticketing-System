import ListItem from "./ListItem"
const TicketsList = () => {
  return (
    <>
        <div className='ticketsList'>
            <div style={{flexGrow:'1'}}><b>Id</b></div>
            <div style={{flexGrow:'6'}}><b>Tickets</b></div>
            <div style={{flexGrow:'4'}}><b>User</b></div>
            <div style={{flexGrow:'1'}}><b>Priority</b></div>
            <div style={{flexGrow:'1'}}><b>Resolved</b></div>
        </div>
        <div>
            <ListItem />
        </div>
    </>
    
  )
}

export default TicketsList