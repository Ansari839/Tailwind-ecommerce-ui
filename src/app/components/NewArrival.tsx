"use client"
import React from 'react'
import Image from 'next/image'
const NewArrival = () => {
    const product = [
        {
            name: "Product Name",
            price: "$10",
            img: "1.png"
        },
        {
            name: "Product Name",
            price: "$20",
            img: "2.png"
        },
        {
            name: "Product Name",
            price: "$30",
            img: "3.png"
        },
        {
            name: "Product Name",
            price: "$40",
            img: "4.png"
        },
        {
            name: "Product Name",
            price: "$10",
            img: "5.png"
        },
        {
            name: "Product Name",
            price: "$20",
            img: "6.png"
        },
        {
            name: "Product Name",
            price: "$30",
            img: "7.png"
        },
        {
            name: "Product Name",
            price: "$40",
            img: "4.png"
        },
    ]
    return (
        <div className='new-arrival container'>
            <div className='py-8 px-10'>
                <div className='heading text-center'>
                    <h1 className='text-2xl font-extrabold'>Discover New Arrivals</h1>
                    <p className=' text-slate-500'>Recently added shirts!</p>
                </div>
                <div className='product-box mt-10 flex flex-wrap justify-around gap-3'>
                    {product.map((item: any, ind: any) => (
                        <div key={ind} className='product-card text-center border'>
                            <div className='product-img-box w-60'>
                                <Image src={`/images/${item.img}`}
                                    alt={item.name}
                                    className="object-cover cursor-pointer product-img"
                                    width='100'
                                    height='100'
                                />
                            </div>
                            <div className='product-content '>
                                <p className='product-name text-lg'>{item.name}</p>
                                <p className='product-price text-blue-800'> {item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewArrival
