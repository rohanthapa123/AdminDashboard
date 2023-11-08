type menuitem = {
    title : string,
    list: {
        title: string,
        path: string,
        icon: React.JSX.Element,
    }[]
}[]

type dataItem = {
    name: string,
    visit: number,
    sell: number,
    amt: number
}