import React from 'react'


function addProduct(title, price, description, image) {
  const newProduct = {
    title: title,
    price: price,
    description: description,
    image: image
  }
}

export default function AddPage() {
  return (
    <form action="" className='d-flex flex-column w-25 row-gap-3 m-auto'>
      <label className='text-center fs-1'>Add Form</label>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="number" />
      <button>Add</button>
    </form>
  )
}
