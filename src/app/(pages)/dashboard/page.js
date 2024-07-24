"use client";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { useAppSelector } from "@/lib/hooks";
import Loading from "./loading";
import Error from "./error";
import BarChart from "@/app/components/Charts/BarChart";
import LineChart from "@/app/components/Charts/LineChart";
import DoughnutChart from "@/app/components/Charts/DoughnutChart";
import RadarChart from "@/app/components/Charts/RadarChart";
import PieChart from "@/app/components/Charts/PieChart";

const Dashboard = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const gradientClass =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-800 to-gray-900"
      : "bg-gradient-to-r from-blue-100 to-purple-100";

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary fallback={<Error />}>
        <div className={`flex min-h-screen p-8 w-full ${gradientClass}`}>
          <div className="flex-1 flex flex-col space-y-8">
            <h2 className="text-4xl font-bold text-center">Chart Graphs</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <LineChart width="100%" height="425px" title="Products Data" />
              <BarChart width="100%" title="User Ages" />
              <DoughnutChart width="100%" title="Product Prices" />
              <RadarChart width="100%" height="425px" title="Product Metrics" />
              <PieChart width="100%" title="Product Prices Distribution" />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Dashboard;
