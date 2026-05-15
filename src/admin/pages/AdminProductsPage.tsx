import React from "react";
import { AdminTitle } from "../components/AdminTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { CustomPaginator } from "@/components/custom/CustomPaginator";
export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <AdminTitle
          title="Productos"
          subTitle="Aqui puedes administrar los productos"
        />
        <Link to="/admin/products/new">
          <Button>Crear Producto</Button>
        </Link>
      </div>
      <Table className="bg-white p-10 shadow-xs border-gray-200 mb-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img src="/path/to/image.jpg" alt="Product Image" />
            </TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>In Stock</TableCell>
            <TableCell>Small, Medium, Large</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/products/teslo`}>Edit</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CustomPaginator totalPages={10} />
    </>
  );
};
