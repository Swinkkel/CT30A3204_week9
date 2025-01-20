import React, {useState} from 'react'
import MyList, {TItem} from './MyList'

const MyContainer: React.FC = () => {
    const header: string = 'this is list header'
    const [items, setItems] = useState<TItem[]>([])
    const [content, setContent] = useState<string>("")
 
    const updateClickedItem = (id: string): void => {
        setItems((prevItems) =>
            prevItems.map((item) =>
              item.id === id ? { ...item, clicked: !item.clicked } : item
            )
          );
    }

    const addItem = () => {
        const newItem = {id: Date.now().toString(), text: content, clicked: false};
        setItems([...items, newItem]);
        setContent("")
    }

    return (
        <div>
            <textarea name="text" id="test" onChange={(e) => setContent(e.target.value)} value={content} />
            <button onClick={addItem}>Add</button>
            <MyList header={header} items={items} updateList={updateClickedItem}/>
        </div>
    )
}

export default MyContainer