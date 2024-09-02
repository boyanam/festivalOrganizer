import React from "react";
import { useOrganizers } from "../firebaseQueries";
import Card from "./Card";

const OrganizersPage = () => {
  const { data, error, isLoading } = useOrganizers();
  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error : {error.message}</div>;
  return (
    <div className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <Card
          title={item.naziv}
          imagePath={item.logo}
          link={`organizers/${item.naziv.replace(/\s/g, "").toLowerCase()}`}
        ></Card>
      ))}
    </div>
  );
};

export default OrganizersPage;
