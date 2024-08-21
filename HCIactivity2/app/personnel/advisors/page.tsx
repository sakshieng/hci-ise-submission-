"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const AdvisorForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Advisor Form</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <Input
          fullWidth
          label="Advisor Name"
          placeholder="Enter Advisor Name"
        />
        <Input fullWidth label="Student ID" placeholder="Enter Student ID" />
        <Input
          fullWidth
          label="Instructor ID"
          placeholder="Enter Instructor ID"
        />
        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AdvisorForm;
