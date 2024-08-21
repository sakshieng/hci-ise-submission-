"use client";

import { Link } from "@nextui-org/link";
import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      {/* Welcome Message */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to the University Management System
        </h1>
        <p className="text-lg text-gray-700">
          Easily manage classrooms, personnel, courses, and more.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/academics">
          <div className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition">
            Add New Entry
          </div>
        </Link>
        <Link href="/academics">
          <div className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition">
            View All Entries
          </div>
        </Link>
      </div>

      {/* Dashboard Overview */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Total Students</h2>
          <p className="text-3xl mt-2">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Total Instructors</h2>
          <p className="text-3xl mt-2">123</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Courses Offered</h2>
          <p className="text-3xl mt-2">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Classroom Capacity</h2>
          <p className="text-3xl mt-2">2,500</p>
        </div>
      </div>
    </section>
  );
}
