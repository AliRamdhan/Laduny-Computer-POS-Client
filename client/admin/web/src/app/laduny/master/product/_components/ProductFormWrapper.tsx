import React from "react";
import ProductForm from "./ProductForm";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/laduny/components/ui/dialog";

const ProductFormWrapper = ({
  id,
  onSuccess,
}: {
  id?: string;
  onSuccess: () => void;
}) => {
  console.log("ProductFormWrapper id:", id || "No ID provided");
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
        <ProductForm />
      </div>
    </>
  );
};

export default ProductFormWrapper;
