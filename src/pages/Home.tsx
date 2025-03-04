import { useAuthentication } from "@/components/contexts/AuthenticationContext";
import ItemCard from "@/components/item/ItemCard";

export default function Home() {
  const { user, logout } = useAuthentication();
  console.log(user);
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
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </section>
    </div>
  );
}
