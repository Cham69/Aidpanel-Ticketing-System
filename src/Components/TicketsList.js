import ListItem from "./ListItem"
const TicketsList = () => {
  return (
    <>
        <div className='ticketsList'>
            <div style={{flexGrow:'1', backgroundColor:'#131312'}}><b>ID</b></div>
            <div style={{flexGrow:'6', backgroundColor:'#acdabc'}}><b>TICKET</b></div>
            <div style={{flexGrow:'4', backgroundColor:'#123acd'}}><b>CUSTOMER</b></div>
            <div style={{flexGrow:'1', backgroundColor:'#acf345'}}><b>PRIORITY</b></div>
            <div style={{flexGrow:'1', backgroundColor:'#125acd'}}><b>RESOLVED</b></div>
        </div>
        <div>
            <ListItem />
        </div>
    </>
    
  )
}

export default TicketsList