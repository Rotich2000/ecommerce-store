"use client";

import { ShoppingCart } from 'lucide-react';

import { Product } from '@/types'
import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';

type Props = {
    data: Product;
}

const Info = ({data}: Props) => {
    const cart = useCart();
    const addToCart = () => {
        cart.addItem(data);
    }
  return (
    <div>
        <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
        <div className='mt-3 items-end justify-between'>
            <p className='text-2xl text-gray-900'>
                <Currency value={data?.price}/>
            </p>
        </div>
        <hr className='my-4'/>
        <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Size:</h3>
            <p>{data?.size?.name}</p>
        </div>
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Color:</h3>
            <div className='w-6 h-6 rounded-full border border-gray-600' style={{backgroundColor: data?.color?.value}}/>
        </div>
        </div>
        <div className='mt-10 flex items-center gap-x-3'>
            <Button onClick={addToCart} className='flex gap-x-2 items-center'>
                Add To Cart
                <ShoppingCart className='w-4 h-4'/>
            </Button>
        </div>
    </div>
  )
}

export default Info