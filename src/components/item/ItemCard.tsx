import { Item } from "@/lib/types";
import {} from "react";
import { FaCartShopping, FaEllipsisVertical, FaStar } from "react-icons/fa6";

export function ItemCard({item}: {item: Item}) {
  return (
    <div className="flex flex-col group basis-11/12 md:basis-6/12 2xl:basis-1/4 p-3 rounded-xl">
      <div className=" border-3 overflow-hidden border-highlight group-odd:rounded-br-4xl group-odd:rounded-tl-4xl group-even:rounded-bl-4xl group-even:rounded-tr-4xl">
        <div className="basis-1/3 mx-auto max-w-1/2 secondary">
        <img className="h-full" src={`data:image/jpeg;base64,${item.image}`}/>
        </div>
        <hr className="m-3 text-highlight border-2 rounded-full" />
        <h4 className="text-center text-xl font-semibold">{item.name}</h4>
        <div className="flex flex-row justify-between p-2">
          <p>
            <i>authored by</i> {item.author.name}
          </p>
          <div className="flex items-center gap-2 text-lg">
            <b>3.6</b>
            <FaStar className="text-highlight" />
          </div>
        </div>
        <p className="p-2">
          {item.description}
        </p>
        <div className="flex flex-row">
          <button className="basis-5/6 highlight flex items-center gap-2 p-2 text-2xl">
            <FaCartShopping />
            {item.price}
          </button>
          <button className="flex flex-1 items-center border border-highlight justify-center text-2xl text-center mx-auto">
            <FaEllipsisVertical />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
