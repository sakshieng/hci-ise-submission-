"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const StudentForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Student Form</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <Input
          fullWidth
          label="Instructor ID"
          placeholder="Enter Instructor ID"
        />
        <Input
          fullWidth
          label="Instructor Name"
          placeholder="Enter Instructor Name"
        />
        <Input
          fullWidth
          label="Dept Name"
          placeholder="Enter Department Name"
        />
        <Input
          fullWidth
          type="number"
          label="Total Salary (INR)"
          placeholder="Enter Total Salary"
        />
        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default StudentForm;
