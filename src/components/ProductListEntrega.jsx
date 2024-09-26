import { useContext } from "react"
import CartContext from "../context/cartContext"

export default function ProductListEntrega({ data }) {

  const {id, name, color, price} = data 
  const {cartItems, setCartItems} = useContext(CartContext)

  const handleAddClick = () => setCartItems([...cartItems, data])

  return (
    <>
      <tr key={id} className="border-b border-gray-200 dark:border-gray-700 ">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
          {name}
        </th>
        <td className="px-6 py-4">
          {color}
        </td>
        <td className="px-6 py-4">
          ${price}
        </td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
          <button onClick={handleAddClick} className="p-2 bg-green-400 rounded-lg shadow-xl hover:bg-green-700 duration-300 text-white font-bold">Adicionar</button>
        </td>
      </tr>
    </>
  )
}
