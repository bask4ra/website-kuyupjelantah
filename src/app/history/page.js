"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import SidePanel from "../components/sidepanels/page";

export default function History() {
  const allTransactions = [
    { name: "Mr. Budi Pujasera", amount: 229000, date: "2024-11-02", category: "Income" },
    { name: "Mr. Rangz", amount: 229000, date: "2024-1-19", category: "Income" },
    { name: "Mr. Kuli", amount: 229000, date: "2024-4-30", category: "Income" },
    { name: "Ms. Nicki Minaj", amount: -99000, date: "2024-10-11", category: "Expenditure" },
    { name: "Mr. Bento", amount: -699000, date: "2024-09-21", category: "Expenditure" },
    { name: "Mr. Afunk", amount: 199000, date: "2024-06-02", category: "Income" },
    { name: "Mr. Lily", amount: 155000, date: "2024-08-11", category: "Income" },
    { name: "Mrs. Siti", amount: -1010000, date: "2024-03-20", category: "Expenditure" },
    { name: "Mrs. Tem Tem", amount: -100000, date: "2024-03-20", category: "Expenditure" },
    { name: "Mr. Tem Tem", amount: -100000, date: "2025-03-20", category: "Income" },
  ];

  const [transactions, setTransactions] = useState(allTransactions);
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filterByDate = (days) => {
    const now = new Date();
    const filtered = allTransactions.filter((tx) => {
      const txDate = new Date(tx.date);
      return now - txDate <= days * 24 * 60 * 60 * 1000;
    });
    setTransactions(filtered);
    setCurrentPage(1);
  };

  const handleDateFilter = () => {
    if (!dateFilter) return;
    const filtered = allTransactions.filter(
      (tx) => new Date(tx.date).toDateString() === new Date(dateFilter).toDateString()
    );
    setTransactions(filtered);
    setCurrentPage(1);
  };

  const rupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  const monthlyIncome = {};
  const monthlyExpenditure = {};

  transactions.forEach((tx) => {
    const date = new Date(tx.date);
    const label = `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
    if (!monthlyIncome[label]) {
      monthlyIncome[label] = 0;
      monthlyExpenditure[label] = 0;
    }

    if (tx.category === "Income") {
      monthlyIncome[label] += tx.amount;
    } else {
      monthlyExpenditure[label] += Math.abs(tx.amount);
    }
  });

  const labels = Object.keys({ ...monthlyIncome, ...monthlyExpenditure }).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: labels.map((label) => monthlyIncome[label] || 0),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.4,
      },
      {
        label: "Expenditure",
        data: labels.map((label) => monthlyExpenditure[label] || 0),
        borderColor: "#FF4500",
        backgroundColor: "rgba(255, 69, 0, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentTransactions = transactions.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidePanel />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">History</h1>
          <img
            src="/svg/notification-logo.svg"
            alt="notifications"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-gray-700">Mutation</h2>
            <div className="flex space-x-2">
              <button onClick={() => setTransactions(allTransactions)} className="px-3 py-2 text-sm border rounded hover:bg-gray-200">
                All
              </button>
              <button onClick={() => filterByDate(365)} className="px-3 py-2 text-sm border rounded hover:bg-gray-200">
                12 months
              </button>
              <button onClick={() => filterByDate(30)} className="px-3 py-2 text-sm border rounded hover:bg-gray-200">
                30 days
              </button>
              <button onClick={() => filterByDate(7)} className="px-3 py-2 text-sm border rounded hover:bg-gray-200">
                7 days
              </button>
              <button onClick={() => filterByDate(1)} className="px-3 py-2 text-sm border rounded hover:bg-gray-200">
                24 hours
              </button>
            </div>
          </div>
          {transactions.length === 0 ? (
            <div className="text-center text-red-500 font-semibold py-6">
              No transaction history!
            </div>
          ) : (
            <Line data={data} />
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-gray-700">Transaction History</h2>
            <div className="flex items-center gap-2">
              <input
                type="date"
                className="border border-gray-300 p-2 rounded w-40"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
              <button
                className="bg-orange text-white px-4 py-2 rounded hover:bg-yellow-600"
                onClick={handleDateFilter}
              >
                Filter
              </button>
            </div>
          </div>

          {transactions.length === 0 ? (
            <div className="text-center text-red-500 font-semibold py-6">
              No transaction history!
            </div>
          ) : (
            <>
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 text-gray-600">No.</th>
                    <th className="px-4 py-2 text-gray-600">Transactions</th>
                    <th className="px-4 py-2 text-gray-600">Amount</th>
                    <th className="px-4 py-2 text-gray-600">Date</th>
                    <th className="px-4 py-2 text-gray-600">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map((tx, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 text-gray-700">{indexOfFirst + index + 1}</td>
                      <td className="px-4 py-2 text-gray-700">{tx.name}</td>
                      <td
                        className={`px-4 py-2 font-medium ${
                          tx.amount > 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {tx.amount > 0 ? "+" : "-"}{rupiah(Math.abs(tx.amount))}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {new Date(tx.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          tx.category === "Income" ? "text-green-500" : "text-red-500"
                        } font-medium`}
                      >
                        {tx.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center items-center mt-4 space-x-2">
                <button
                  className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>
                <div className="px-3 font-medium text-gray-600">{currentPage}</div>
                <button
                  className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  &gt;
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
