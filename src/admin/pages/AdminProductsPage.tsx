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
import { useProducts } from "@/shop/hooks/useProducts";
export const AdminProductsPage = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;

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
        <TableBody>
          {data!.products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={product.images[0]}
                  alt={product.title}
                />
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sizes.join(", ")}</TableCell>
              <TableCell className="text-right">
                <Link to={`/admin/products/${product.id}`}>Edit</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <CustomPaginator totalPages={data?.pages || 1} />
    </>
  );
};
