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

// type user = {
//   username  :String,   
//   email     :String,   
//   password  :String,   
//   img       :String | null,
//   isAdmin   :String, 
//   isActive  :String, 
//   phones    :String | null,
//   address   :String | null, 
//   createdAt :DateTime 
// }