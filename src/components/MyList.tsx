import React from 'react'

export type TItem = {
    id: string;
    text: string;
    clicked: boolean;
}

interface ListProps {
    header: string;
    items: TItem[];
    updateList: (id: string) => void;
}

const MyList: React.FC<ListProps> = ({header, items, updateList}) => {
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => (
                    <li key={item.id} onClick={() => updateList(item.id)} style={{textDecoration: item.clicked ? 'line-through': ''}}>{item.text} </li>
                ))}
            </ol>
        </div>
    )
}

export default MyList;