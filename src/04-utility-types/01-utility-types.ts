type Product = {
    id: number, 
    name: string,
    price: number, 
    description?: string
}

//all fields are required
type CreateProduct = Required <Product>;

//all fields are optional
type UpdateProduct = Partial <Product>;

//only id and name
type ProductPreview = Pick <Product, "id" | "name">;

//included all properties except price
type ProductWithoutPrice = Omit <Product, "price">;