"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const StudentForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Course Form</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <Input fullWidth label="Course ID" placeholder="Enter Course ID" />
        <Input fullWidth label="Course Name" placeholder="Enter Course Name" />
        <Input
          fullWidth
          label="Dept Name"
          placeholder="Enter Department Name"
        />
        <Input
          fullWidth
          label="Total Credits"
          placeholder="Enter Total Credits"
        />
        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default StudentForm;
