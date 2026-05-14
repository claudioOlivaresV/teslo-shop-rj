import { CustomPaginator } from "@/components/custom/CustomPaginator";
import { products } from "@/mocks/products.mock";
import React from "react";
import { CustomJumbotron } from "../components/CustomJumbotron";
import { ProductsGrid } from "../components/ProductsGrid";
import { useParams } from "react-router";

export const GenderPages = () => {
  const { gender } = useParams();

  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";
  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />
      <ProductsGrid products={products} />
      <CustomPaginator totalPages={5} />
    </>
  );
};
