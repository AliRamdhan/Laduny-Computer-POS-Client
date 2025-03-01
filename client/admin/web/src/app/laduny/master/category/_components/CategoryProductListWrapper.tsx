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
import CategoryProductList from "@/laduny/app/laduny/master/category/_components/CategoryProductList";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/laduny/components/ui/dialog";
import { useAuth } from "@/laduny/provider/AuthProvider";
import { categoriesData } from "@/laduny/lib/dummy_data";
import CategoryProductFormWrapper from "./CategoryProductFormWrapper";

const CategoryProductListWrapper = () => {
  const [categories, setCategories] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchCategoriesData = async () => {
    try {
      // const categoriesData = await GetPOSCategoryProduct(token);
      setCategories(categoriesData);
    } catch (err) {
      setError("Failed to fetch categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
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
            <CardTitle>Category Product List</CardTitle>
            <CardDescription>Laduny Komputer Admin Panel</CardDescription>
          </div>
          <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger>
                <Button variant={`create`}>
                  <Plus /> Create Category
                </Button>
              </DialogTrigger>
              <DialogContent className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
                <CategoryProductFormWrapper
                  onSuccess={() => {
                    fetchCategoriesData();
                    setIsDialogOpen(false);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[550px] ag-theme-alpine">
        <CategoryProductList
          data={categories}
          token={token}
          refreshData={fetchCategoriesData}
        />
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm mt-8">
        <div className="flex gap-2 font-medium leading-none">
          Category Product Overview <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          This list displays all product categories currently available in the
          system. Use the search or filter options to refine the results.
        </div>
      </CardFooter>
    </Card>
  );
};

export default CategoryProductListWrapper;
