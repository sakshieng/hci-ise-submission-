"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const ClassroomForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Classroom Form</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <Input
          fullWidth
          label="Building Name"
          placeholder="Enter Building Name"
        />
        <Input fullWidth label="Room Number" placeholder="Enter Room Number" />
        <Input fullWidth label="Capacity" placeholder="Enter Capacity" />

        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ClassroomForm;
