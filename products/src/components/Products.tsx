import { useEffect, useState } from "react"
import { productsList, type Product } from "../lib/products"

export default function Products() {
    if (!productsList) {
        return <h2 className="text-center text-red-700 font-bold my-5">Nincsenek termékek raktáron</h2>
    }

    const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsList)
    const [searchTerm, setSearchTerm] = useState<string>("")

    useEffect(() => {
        setFilteredProducts(productsList.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [searchTerm])

    return (
        <>
            <div className="w-1/2 mx-auto mt-10 flex items-center justify-center">
                <input
                    type="search"
                    name="search"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Termék keresése..."
                    id="search"
                    className="w-1/2 border border-gray-300 p-2 rounded-lg outline-none focus:border-cyan-600"
                    />
            </div>
            <div className="grid grid-cols-1 w-[80%] mx-auto md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
                {filteredProducts.map(product => (
                    <div key={product.id} className="px-5 py-3 shadow-xl rounded-lg border h-96 relative select-none">
                        <img src={product.img} alt="Product Image" className="w-72 mx-auto rounded-lg" loading="lazy" />
                        <h2 className="my-2 text-center font-semibold">{product.name}</h2>
                        <button type="button" className="absolute bottom-0 left-0 text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-bl-lg rounded-tr-lg text-sm px-5 py-2.5 text-center">Érdekel</button>
                        <div className="absolute bottom-0 right-0 flex flex-col bg-lime-600 rounded-br-lg rounded-tl-lg p-2 text-right">
                            <small className="text-white font-semibold">{product.price} Ft</small>
                            {product.oldPrice && <small className="text-red-700 font-semibold line-through">{product.oldPrice} Ft</small>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
