"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/laduny/components/ui/card";
import { Button } from "@/laduny/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/laduny/components/ui/dialog";
import { useAuth } from "@/laduny/provider/AuthProvider";
import { productsData } from "@/laduny/lib/dummy_data";
import ProductFormWrapper from "./ProductFormWrapper";
import ProductList from "./ProductList";

const ProductListWrapper = () => {
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchProductsData = async () => {
    try {
      // const ProductsData = await GetPOSCategoryProduct(token);
      setProducts(productsData);
    } catch (err) {
      setError("Failed to fetch Products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, [isAuthenticated, token, router]);

  if (loading) {
    return <div>....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="w-full flex justify-between items-center">
          <div>
            <CardTitle>Product List</CardTitle>
            <CardDescription>Laduny Komputer Admin Panel</CardDescription>
          </div>
          <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger>
                <Button variant={`create`}>
                  <Plus /> Create Product
                </Button>
              </DialogTrigger>
              <DialogContent className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
                <ProductFormWrapper
                  onSuccess={() => {
                    fetchProductsData();
                    setIsDialogOpen(false);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[550px] ag-theme-alpine">
        <ProductList
          data={products}
          token={token}
          refreshData={fetchProductsData}
        />
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm mt-8">
        <div className="flex gap-2 font-medium leading-none">
          Product Overview <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          This list displays all products currently available in the system. Use
          the search or filter options to refine the results.
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductListWrapper;
