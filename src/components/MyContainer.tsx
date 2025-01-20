import React, {useState} from 'react'
import MyList, {TItem} from './MyList'

const MyContainer: React.FC = () => {
    const header: string = 'this is list header'
    const [items, setItems] = useState<TItem[]>([
        {id: '1', text: 'This is first task', clicked: false},
        {id: '2', text: 'this is second task', clicked: false}
    ])
 
    const addItem = () => {
        const newItem = {id: 'test', text: 'test', clicked: false}
        setItems([...items, newItem]);
    }

    return (
        <div>
            <textarea name="text" id="test"></textarea>
            <button onClick={addItem}>Add</button>
            <MyList header={header} items= {items} />
        </div>
    )
}

export default MyContainer