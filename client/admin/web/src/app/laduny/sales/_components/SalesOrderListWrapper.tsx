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
import { salesOrdersData } from "@/laduny/lib/dummy_data";
import SalesOrderFormWrapper from "./SalesOrderFormWrapper";
import SalesOrderList from "./SalesOrderList";

const SalesOrderListWrapper = () => {
  const [salesOrders, setSalesOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchSalesOrdersData = async () => {
    try {
      // const categoriesData = await GetPOSCategoryProduct(token);
      setSalesOrder(salesOrdersData);
    } catch (err) {
      setError("Failed to fetch categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesOrdersData();
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
            <CardTitle>Category Sales Order List</CardTitle>
            <CardDescription>Laduny Komputer Admin Panel</CardDescription>
          </div>
          <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger>
                <Button variant={`create`}>
                  <Plus /> Create Sales Order
                </Button>
              </DialogTrigger>
              <DialogContent className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
                <SalesOrderFormWrapper />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[550px] ag-theme-alpine">
        <SalesOrderList
          data={salesOrders}
          token={token}
          refreshData={fetchSalesOrdersData}
        />
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm mt-8">
        <div className="flex gap-2 font-medium leading-none">
          Sales Order Overview <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          This list displays sales order currently available in the system. Use
          the search or filter options to refine the results.
        </div>
      </CardFooter>
    </Card>
  );
};

export default SalesOrderListWrapper;
