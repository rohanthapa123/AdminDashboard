export const addProduct = async (formData :FormData) =>{
    const {title, category, price,color, stock, size, description} = Object.fromEntries(formData)
}