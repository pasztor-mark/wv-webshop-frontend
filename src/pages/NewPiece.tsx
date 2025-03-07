import { postItem } from "@/lib/api/post/General";
import { toBase64 } from "@/lib/functions";
import { CreateItemRequest, Item } from "@/lib/types";
import { validateNewItem } from "@/lib/validation/validation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaIdCard, FaMoneyBill1Wave, FaScroll } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function NewPiece() {
  const navigate = useNavigate()
  const [newPiece, setNewPiece] = useState<CreateItemRequest>({
    name: "",
    description: "",
    price: 0,
    image: "",
  });
  useEffect(() => {
    console.log(newPiece);
  }, [newPiece])
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validity = validateNewItem(newPiece.name, newPiece.price, newPiece.description);
    if (!validity.valid) {
        toast(validity.messages![0] || validity.message);
        return
    }
    const res = await postItem(newPiece);
    if (res) {
        toast("Item posted successfully")
      navigate("/")
    }    
    else toast("An error occurred")
  }
  return (
    <>
      <div className="flex flex-col gap-6 rounded-b-2xl p-4 primary border-3 border-highlight">
        <h1 className="text-2xl font-semibold text-center">
          Ready to make <span className="text-highlight font-bold">your</span>{" "}
          newest piece available?
        </h1>
        <form onSubmit={handleSubmit}>
          <span className="form-group">
            <label htmlFor="name">
              <FaIdCard /> Name
            </label>
            <input
              name="name"
              onChange={(e) =>
                setNewPiece(({
                  ...newPiece,
                  name: e.currentTarget.value,
                }))
              }
            />
          </span>
          <span className="form-group">
            <label htmlFor="description">
              <FaScroll /> Description
            </label>
            <textarea
              name="description"
              onChange={(e) =>
                setNewPiece(({
                  ...newPiece,
                  description: e.currentTarget.value,
                }))
              }
            />
          </span>
          <span className="form-group">
            <label htmlFor="price">
              <FaMoneyBill1Wave /> Price
            </label>
            <input
              type="number"
              name="price"
              onChange={(e) =>
                setNewPiece(({
                  ...newPiece,
                  price: Number(e.currentTarget.value),
                }))
              }
            />
          </span>
          <input
            type="file"
            accept="image/jpeg,image/jpg"
            max={1}
            onChange={async (e) => {
                if (e.currentTarget.files?.length === 0) return;
                
                const base64Image = await toBase64(e!.currentTarget!.files!.item(0)!);
                
                setNewPiece(({
                  ...newPiece,
                  image: base64Image,
                }));
            }}
          />
          <button type="submit" className="highlight w-full py-2">Submit</button>
        </form>
      </div>
    </>
  );
}
