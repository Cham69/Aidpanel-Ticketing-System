import TicketsList from "./TicketsList";
import AdminHead from "./AdminHead";

const AdminView = () => {
  return (
    <div className="adminLayout">
        <div className="leftColumnAdmin">
            <h1 className="helpDeskTitle">Aidpanel</h1>
        </div>
        <div className="rightColumnAdmin">
            <div className="adminHeader">
                <h2 style={{color:'#fff'}}>Welcome back, Admin!</h2>
            </div>
            <div>
                <AdminHead />
                <TicketsList />
            </div>
        </div>
    </div>
  )
}

export default AdminView