import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../firebaseQueries";

const OrganizersPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["organizers"],
    queryFn: () => fetchData("organizatoriFestivala"),
  });
  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error : {error.message}</div>;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"></div>
  );
};

export default OrganizersPage;
