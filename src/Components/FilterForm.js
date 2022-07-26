const FilterForm = () => {
  return (
    <div className="form filterForm">
        <span>
            <label htmlFor="ticketId">Ticket Id</label>
            <input type="number" />
        </span>
        <span>
            <label htmlFor="employeeId">Employee Id</label>
            <input type="number" />
        </span>
        <span>
            <label htmlFor="employeeDes">Employee designation</label>
            <select name="employeeDes" id="">
                <option value="CEO">CEO</option>
                <option value="CIO">CIO</option>
                <option value="CFO">CFO</option>
                <option value="MD">Managing Director</option>
                <option value="HRManager">HR Manager</option>
            </select>
        </span>
        <span>
            <label htmlFor="priority">Priority type</label>
            <select name="priority" id="">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </span>
        
    </div>
  )
}

export default FilterForm