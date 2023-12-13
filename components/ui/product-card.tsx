"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

type Props = {
    data: Product;
}

const Productcard = ({data}: Props) => {
    const router = useRouter();
    const previewModal = usePreviewModal();
    const cart = useCart();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        return previewModal.onOpen(data);
    }

    const onAddToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* Images and Actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image
            src={data?.images?.[1]?.url}
            alt="product"
            fill
            className="aspect-square object-contain rounded-md"
            />
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton 
                    onClick={onPreview}
                    icon={<Expand size={20} className="text-gray-600"/>}
                    className=""
                    />
                      <IconButton 
                    onClick={onAddToCart}
                    icon={<ShoppingCart size={20} className="text-gray-600"/>}
                    className=""
                    />
                </div>
            </div>
        </div>
        {/* Description. */}
        <div>
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
        {/* price */}
        <div className="flex items-center justify-between">
            <Currency value={data?.price}/>
        </div>
    </div>
  )
}

export default Productcard