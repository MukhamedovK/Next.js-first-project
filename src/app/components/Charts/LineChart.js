"use client";
import "chart.js/auto";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { generateUniqueColor } from "./colorGenerator";
import { fetchProducts } from "@/lib/features/productSlice";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const LineChart = ({ width, height, title }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const labels = products.map((product) => product.brand);
  const price = products.map((product) => product.price);
  const rating = products.map((product) => product.rating);
  const stock = products.map((product) => product.stock);
  const weight = products.map((product) => product.weight);

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
        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: "Products Price",
                data: price,
                fill: false,
                borderColor: generateUniqueColor(1),
                tension: 0.1,
              },
              {
                label: "Products Stock",
                data: stock,
                fill: false,
                borderColor: generateUniqueColor(1),
                tension: 0.1,
              },
              {
                label: "Products Rating",
                data: rating,
                fill: false,
                borderColor: generateUniqueColor(1),
                tension: 0.1,
              },
              {
                label: "Products Weight",
                data: weight,
                fill: false,
                borderColor: generateUniqueColor(1),
                tension: 0.1,
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
export default LineChart;
