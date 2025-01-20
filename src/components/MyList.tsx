import React from 'react'

export type TItem = {
    id: string;
    text: string;
    clicked: boolean;
}

interface ListProps {
    header: string;
    items: TItem[];
}

const MyList: React.FC<ListProps> = ({header, items}) => {
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => (
                    <li>{item.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default MyList;