"use client";
import "chart.js/auto";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import { generateUniqueColor } from "./colorGenerator";
import Error from "@/app/(pages)/about/error";

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const BarChart = ({ width, title }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/users?limit=6");

        if (response.statusText !== "OK") {
          throw new Error("Failed fetch!");
        }

        setUsers(response.data.users);
      } catch (error) {
        <Error error={error.message} />;
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const labels = users.map((user) => user.firstName);
  const ages = users.map((user) => user.age);
  const BarUniqueColors = generateUniqueColor(6);

  return (
    <div
      style={{ width: width }}
      className="p-4 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105"
    >
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h1>
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: "Users Age",
                data: ages,
                backgroundColor: BarUniqueColors,
                borderColor: BarUniqueColors,
                borderWidth: 1,
              },
            ],
          }}
        />
      )}
    </div>
  );
};
export default BarChart;
