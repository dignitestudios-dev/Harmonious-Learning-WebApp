import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { FaCalendarAlt } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CalendarField from "../calendar/CalendarField";

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const SubscriptionStats = () => {
  const [filter, setFilter] = useState("monthly");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state for the first date
  const [isModalOpenSecond, setIsModalOpenSecond] = useState(false); // Modal state for the second date
  const [selectedDate, setSelectedDate] = useState("Nov, 15 2024"); // First date state
  const [selectedDateSecond, setSelectedDateSecond] = useState("Dec, 10 2024"); // Second date state

  // Function to toggle first modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); // Toggle the first calendar modal state
    setIsModalOpenSecond(false); // Close the second modal if it's open
  };

  // Function to toggle second modal
  const toggleModalSecond = () => {
    setIsModalOpenSecond((prev) => !prev); // Toggle the second calendar modal state
    setIsModalOpen(false); // Close the first modal if it's open
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(false); // Close the first modal when a date is selected
  };

  const handleDateClickSecond = (date) => {
    setSelectedDateSecond(date);
    setIsModalOpenSecond(false); // Close the second modal when a date is selected
  };

  const data = {
    monthly: {
      thisMonth: [
        1000, 20000, 5000, 12000, 24000, 15000, 7000, 10000, 24000, 18000,
        12000, 3000,
      ],
      lastMonth: [
        5000, 7000, 12000, 9000, 11000, 12000, 14000, 10000, 6000, 8000, 5000,
        2000,
      ],
    },
  };

  const labels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "This month",
        data: data[filter].thisMonth,
        borderColor: "#8171F9",
        backgroundColor: "#8171F9",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#8171F9",
        tension: 0.4,
      },
      {
        label: "Last month",
        data: data[filter].lastMonth,
        borderColor: "#F25C5C",
        backgroundColor: "#F25C5C",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#F25C5C",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="w-full p-6 bg-[#00000044] border-[#000] rounded-[26px] shadow-md relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b-[1px] border-[#ffffffbe] py-1.5">
        <div className="w-full">
          <h1 className="text-white text-[16px] ">
            Subscription Sales Overview
          </h1>
        </div>
        <div className="flex justify-end items-center gap-4 w-full">
          {/* Date and Calendar Icon for the first date */}
          <CalendarField
            toggleModal={toggleModal}
            selectedDate={selectedDate}
            isModalOpen={isModalOpen}
            handleDateClick={handleDateClick}
          />

          {/* Date and Calendar Icon for the second date */}
          <CalendarField
            toggleModal={toggleModalSecond}
            selectedDate={selectedDateSecond}
            isModalOpen={isModalOpenSecond}
            handleDateClick={handleDateClickSecond}
          />
        </div>
      </div>

      {/* Line Chart */}
      <div style={{ height: "400px" }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "#ffffff",
                  usePointStyle: true,
                  pointStyleWidth: 10,
                },
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) =>
                    `${tooltipItem.raw.toLocaleString()}K`,
                },
                backgroundColor: "#2E2239",
                titleColor: "#8171F9",
                bodyColor: "#8171F9",
                borderColor: "#8171F9",
                borderWidth: 1,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: "#8E8E8E",
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  color: "rgba(255,255,255,0.1)",
                },
                ticks: {
                  color: "#8E8E8E",
                  callback: (value) => `${value / 1000}K`,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default SubscriptionStats;
