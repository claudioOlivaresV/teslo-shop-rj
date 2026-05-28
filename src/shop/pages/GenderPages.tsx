import { CustomPaginator } from "@/components/custom/CustomPaginator";
import { CustomJumbotron } from "../components/CustomJumbotron";
import { ProductsGrid } from "../components/ProductsGrid";
import { useParams } from "react-router";
import { useProducts } from "../hooks/useProducts";

export const GenderPages = () => {
  const { data } = useProducts();
  const { gender } = useParams();

  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";
  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />
      <ProductsGrid products={data?.products ?? []} />
      <CustomPaginator totalPages={data?.pages ?? 1} />
    </>
  );
};
