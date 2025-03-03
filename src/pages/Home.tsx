import { useAuthentication } from "@/components/contexts/AuthenticationContext";
import { useTheme } from "@/components/contexts/ThemeContext";
import ItemCard from "@/components/item/ItemCard";
import { Button } from "@/components/ui/button";
import { initialValidation } from "@/lib/api/auth/General";
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useTheme();
  const { user, logout } = useAuthentication();
  console.log(user);
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-4xl font-semibold flex">
        Welcome, <p className="text-highlight font-bold">{user?.name}</p>
      </h1>
      <p className="flex gap-1">
        Take a look at our newest selection, curated for you, crafted with{" "}
        <p className="text-highlight">excellence.</p>
      </p>
      <Button
        onClick={() => {
          setTheme("dark");
        }}
      >
        toggle
      </Button>
      <Button
        onClick={() => {
          setTheme("light");
        }}
      >
        toggle
      </Button>
      <Button
        onClick={() => {
          logout();
        }}
      >
        logout
      </Button>
      <section className="flex  flex-row flex-wrap mt-2 justify-between flex-1">
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
