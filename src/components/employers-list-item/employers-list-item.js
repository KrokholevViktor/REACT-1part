import './employers-list-item.css';


const EmployersListItem = (props) => {


    const {name, salary, onDelete, onToggleProp, increase, rise} = props
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase'
        }

        let nameClasses = 'list-group-item-label'
        if (rise) {
            classNames += ' like'
        }
        return (
            <li className={classNames}>
                <span 
                    className={nameClasses}
                    onClick={onToggleProp}
                    data-toggle="rise"
                    style={{fontSize: '20px', color: 'red'}}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase"
                    >
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button 
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );

}

export default EmployersListItem;