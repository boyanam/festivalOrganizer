import React from "react";
import { useParams } from "react-router-dom";
//dodati funkcije za fetchovanje pojedincnog organizatora i pojedinacne grupe festivala
import { useFestivals } from "../firebaseQueries";

const Organizer = ({ title, logo, email, contact, year, festivals }) => {
  const { festivalsId } = useParams();
  debugger;
  const { data, error, isLoading } = useFestivals(festivalsId);
  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error : {error.message}</div>;
  debugger;
  return (
    <div className="flex">
      <div className="flex flex-col items-start p-4 bg-gray-800 text-white w-64 fixed left-4 top-28">
        <div className="mb-4">
          <img src={logo} alt={`${title} Logo`} className="w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="mb-2">
          Email:{" "}
          <a href={`mailto:${email}`} className="text-festival-300">
            {email}
          </a>
        </p>
        <p className="mb-2">Contact: {contact}</p>
        <p className="mt-auto">© {year}</p>
      </div>
      <div className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Card
            title={item.naziv}
            imagePath={item.logo}
            link={`organizers/${item.naziv.replace(/\s/g, "").toLowerCase()}`}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Organizer;
