const ListItem = () => {
    const ListItems = [
        {
            id: 1,
            ticket: 'Router signal not showing',
            customer: 'John Doe',
            priority: 'High',
            resolved: 'No'
        },
        {
            id: 2,
            ticket: 'Mobile display error',
            customer: 'Jane Doe',
            priority: 'Medium',
            resolved: 'Yes'
        },
        {
            id: 3,
            ticket: 'My PC is slow',
            customer: 'Max Plank',
            priority: 'High',
            resolved: 'No'
        },
    ]
  return (
    <div>
        {ListItems.map(listItem => (
            <li className="itemContainer">
                <div>{listItem.id}</div>
                <div>{listItem.ticket}</div>
                <div>{listItem.customer}</div>
                <div>{listItem.priority}</div>
                <div>{listItem.resolved}</div>
            </li>
        ))}
    </div>
  )
}

export default ListItem