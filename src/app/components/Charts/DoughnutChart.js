"use client";
import "chart.js/auto";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { generateUniqueColor } from "./colorGenerator";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProducts } from "@/lib/features/productSlice";

const Doughnut = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Doughnut),
  {
    ssr: false,
  }
);

const DoughnutChart = ({ width, title }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const status = useAppSelector((state) => state.products.status);
  const labels = products.map((product) => product.title);
  const prices = products.map((product) => product.price);
  const DoughnutColors = generateUniqueColor(prices.length);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      style={{ width: width }}
      className="p-4 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105"
    >
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h1>
      {status === "loading" ? (
        <div className="h-full flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <Doughnut
          data={{
            labels: labels,
            datasets: [
              {
                data: prices,
                backgroundColor: DoughnutColors,
                borderColor: DoughnutColors,
                borderWidth: 1,
              },
            ],
          }}
        />
      )}
    </div>
  );
};
export default DoughnutChart;
