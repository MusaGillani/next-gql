"use client";
import { getGames } from "@/source/api";
import { useQuery } from "@tanstack/react-query";

function FetchComponent() {
  const { data } = useQuery({
    queryKey: ["games"],
    queryFn: () => getGames(),
  });
  return <div>{JSON.stringify(data)}</div>;
}

export default FetchComponent;
