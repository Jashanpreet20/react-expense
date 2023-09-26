import './ExpanseItem.css';

function ExpanseItem(){
    return <div className='expense-item'>
        <div>march 28th 2023</div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className='expense-item__price'>$294.34</div>
        </div>
        
    </div>
}

export default ExpanseItem;