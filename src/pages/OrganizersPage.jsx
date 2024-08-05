import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../firebaseQueries";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const OrganizersPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["organizatoriFestivala"],
    queryFn: () => fetchData("organizatoriFestivala"),
  });
  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error : {error.message}</div>;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {data.map((item) => (
        <div key={item.id} className="">
          {item.naziv}
        </div>
      ))}
    </div>
  );
};

export default OrganizersPage;
