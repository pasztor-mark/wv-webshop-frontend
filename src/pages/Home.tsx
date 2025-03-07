import { useAuthentication } from "@/components/contexts/AuthenticationContext";
import ItemCard from "@/components/item/ItemCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getItems } from "@/lib/api/post/General";
import { Item } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { user, logout } = useAuthentication();
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  async function fetchItems() {
    const items = await getItems(page);
    console.log(items)
    if (items) {
      setItems(items.content);
    }
  }
  useEffect(() => {
    console.log("Page changed to", page);
    fetchItems()
    console.log(items)
  }, [page]);
  if (user)
  return (
    <div className="flex h-screen flex-col overflow-hidden p-4">
      <h1 className="text-4xl font-semibold flex">
        Welcome, <p className="text-highlight font-bold">{user?.username}</p>
      </h1>
      <p className="flex gap-1">
        Take a look at our newest selection, curated for you, crafted with{" "}
        <p className="text-highlight">excellence.</p>
      </p>
      <section className="flex flex-row flex-wrap overflow-x-hidden mt-2 justify-between flex-1">
        {
            items && items.length > 0 && items.map((item, index) => (
                <ItemCard key={index} item={item} userId={user!.id} />
            ))
        }
      </section>
        <Pagination className="mb-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => page > 0 && setPage(page - 1)}
              />
            </PaginationItem>
            <PaginationItem>{page}</PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={() => setPage(page + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
    </div>
  );
}
