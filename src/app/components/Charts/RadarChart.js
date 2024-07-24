"use client";
import "chart.js/auto";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProducts } from "@/lib/features/productSlice";
import { generateUniqueColor } from "./colorGenerator";

const Radar = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Radar),
  {
    ssr: false,
  }
);

const RadarChart = ({ width, height, title }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const RadarColors = generateUniqueColor(2);
  const labels = products.map((product) => product.title);
  const prices = products.map((product) => product.price);

  return (
    <div
      style={{ width: width, height: height }}
      className="p-4 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105"
    >
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h1>
      {status === "loading" ? (
        <div className="h-full flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <Radar
          data={{
            labels: labels,
            datasets: [
              {
                label: "Prices",
                data: prices,
                backgroundColor: RadarColors[0],
                borderColor: RadarColors[0] + "80",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
      )}
    </div>
  );
};
export default RadarChart;
