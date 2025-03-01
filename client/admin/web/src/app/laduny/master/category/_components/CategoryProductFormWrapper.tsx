import React from "react";
import CategoryProductForm from "./CategoryProductForm";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/laduny/components/ui/dialog";

const CategoryProductFormWrapper = ({
  id,
  onSuccess,
}: {
  id?: string;
  onSuccess: () => void;
}) => {
  console.log("CategoryProductFormWrapper id:", id || "No ID provided");
  return (
    <>
      <DialogHeader>
        <DialogTitle>Category Product Form</DialogTitle>
        <DialogDescription>
          {id
            ? "Edit your product category."
            : "Define and create your product category."}
        </DialogDescription>
      </DialogHeader>
      <div>
        <CategoryProductForm />
      </div>
    </>
  );
};

export default CategoryProductFormWrapper;
