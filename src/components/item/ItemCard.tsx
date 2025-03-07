import { Item } from "@/lib/types";
import { useState } from "react";
import { FaCartShopping, FaEllipsisVertical, FaStar } from "react-icons/fa6";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { deleteItem } from "@/lib/api/post/General";
import { toast } from "sonner";

export function ItemCard({ item, userId }: { item: Item; userId: number }) {
  const [deleted, setDeleted] = useState<boolean>(false);
  async function handleAddToCart() {
    console.log("Adding to cart", item)
  }
  return (
    <div className={`${deleted ? "hidden":"flex"} flex-col group basis-11/12 md:basis-6/12 2xl:basis-1/4 p-3 rounded-xl`}>
      <div className=" border-3 overflow-hidden border-highlight group-odd:rounded-br-4xl group-odd:rounded-tl-4xl group-even:rounded-bl-4xl group-even:rounded-tr-4xl">
        <div className="basis-1/3 mx-auto max-w-1/2 secondary">
          <img
            className="h-full"
            src={`data:image/jpeg;base64,${item.image}`}
          />
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
        <p className="p-2">{item.description}</p>
        <div className="flex flex-row">
          <button onClick={() => handleAddToCart()} className={`${item.author.id === userId ? "basis-5/6" : "basis-full"} highlight flex items-center gap-2 p-2 text-2xl`}>
            <FaCartShopping />
            {item.price} Ft
          </button>
          {item.author.id === userId && (
            <Popover>
              <PopoverTrigger className="flex flex-1 items-center border border-highlight justify-center text-2xl text-center mx-auto">
                <button>
                  <FaEllipsisVertical />
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <AlertDialog>
                  <AlertDialogTrigger className="block w-full p-2 text-left">
                    Delete Item
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to delete this item?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="block w-full p-2 text-left">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={async () => {
                          const deleteRequest = await deleteItem(item.id);
                          if (deleteRequest) {
                            setDeleted(true);
                          }
                          else {
                            toast.error("Failed to delete item");
                          }
                        }}
                        className="block w-full p-2 text-left"
                      >
                        Delete Item
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <button className="block w-full p-2 text-left">
                  Edit Item
                </button>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
