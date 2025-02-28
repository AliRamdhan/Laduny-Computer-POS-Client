import React, { useState } from "react";
import { TrashIcon, EditIcon, FileText } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/laduny/components/ui/dialog";
import { CategoryProductResponse } from "@/laduny/types/category";

interface ActionButtonListProps {
  data: { id: string };
  token: string;
  name: string;
  refreshData: () => void;
  isCategoryProduct?: boolean;
  isProduct?: boolean;
  isProductStock?: boolean;
  categoriesData?: CategoryProductResponse[];
  isInvoice?: boolean;
}

const ActionButtonList = ({
  refreshData,
  data,
  token,
  name,
  isCategoryProduct,
  isProduct,
  categoriesData,
  isProductStock,
}: ActionButtonListProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [dataId, setDataId] = useState<string>(data.id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isExport, setIsExport] = useState(false);

  const onRemove = async (name: string, id: string, token: string) => {
    if (!token) return;
    if (confirm("Are you sure you want to delete this data?")) {
      try {
        setIsDeleting(true);
        // const response = await DeletePOSData(name, id, token);
        // if (response) {
        alert("Successfully removed data");
        refreshData();
        // }
      } catch (error) {
        alert("An error occurred while deleting the data.");
        console.error(error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const onExportPDF = async (id: string, token: string) => {
    if (!token) return;
    if (confirm("Are you sure you want to print PDF this data?")) {
      try {
        setIsExport(true);
        console.log("ID", id);
        // await ExportPOSInvoiceSalesPDF(token, id);

        alert("Successfully export pdf data");
      } catch (error) {
        alert("An error occurred while deleting the data.");
        console.error(error);
      } finally {
        setIsExport(false);
      }
    }
  };

  return (
    <div className="flex gap-2">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <Button variant="edit" size="icon">
            <EditIcon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
          Category Form
        </DialogContent>
      </Dialog>

      <Button
        variant="destructive"
        size="icon"
        onClick={() => onRemove(name, data.id, token)}
        disabled={isDeleting}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ActionButtonList;
