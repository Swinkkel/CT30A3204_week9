import MyList, {TItem} from './MyList'

function MyContainer() {
    const header: string = 'this is list header'
    const items: TItem[] = ([
        {id: '1', text: 'This is first task'},
        {id: '2', text: 'this is second task'}
    ])

    return (
        <MyList header={header} items= {items} />
    )
}

export default MyContainer