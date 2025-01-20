import React, {useState} from 'react'
import MyList, {TItem} from './MyList'

const MyContainer: React.FC = () => {
    const header: string = 'this is list header'
    const [items, setItems] = useState<TItem[]>([])
    const [content, setContent] = useState<string>("")
 
    const addItem = () => {
        const newItem = {id: Date.now().toString(), text: content, clicked: false};
        setItems([...items, newItem]);
        setContent("")
    }

    return (
        <div>
            <textarea name="text" id="test" onChange={(e) => setContent(e.target.value)} value={content} />
            <button onClick={addItem}>Add</button>
            <MyList header={header} items= {items} />
        </div>
    )
}

export default MyContainer