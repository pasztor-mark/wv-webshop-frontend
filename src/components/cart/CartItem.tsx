import { Item } from "@/lib/types";

export default function CartItemDisplay({item}: {item: Item}) {
    return (
        <div className="flex flex-row items-center gap-2 p-2">
        <div className="flex flex-col items-center gap-2">
            <p>{item.name}</p>
            <p>by {item.author.name}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
            <p>{item.price} Ft</p>
            <div className="flex flex-row items-center gap-2">
            <button className="p-2">-</button>
            <p>1</p>
            <button className="p-2">+</button>
            </div>
        </div>
        <button className="p-2">Delete</button>
        </div>
    );
}