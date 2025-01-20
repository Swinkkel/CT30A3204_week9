import React from 'react'

export type TItem = {
    id: string;
    text: string;
    clicked: boolean;
}

interface ListProps {
    header: string;
    items: TItem[];
    updateClickedItem: (id: string) => void;
}

const MyList: React.FC<ListProps> = ({header, items, updateClickedItem}) => {
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => (
                    <li key={item.id} onClick={() => updateClickedItem(item.id)} style={{textDecoration: item.clicked ? 'line-through': 'none'}}>{item.text} </li>
                ))}
            </ol>
        </div>
    )
}

export default MyList;