"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const StudentForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Department Form</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <Input
          fullWidth
          label="Department Name"
          placeholder="Enter Department Name"
        />
        <Input
          fullWidth
          label="Building Name"
          placeholder="Enter Building Name"
        />
        <Input
          fullWidth
          label="Budget"
          placeholder="Enter Budget in INR"
          type="number"
        />
        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default StudentForm;
