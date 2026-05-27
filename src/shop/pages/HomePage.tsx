import { CustomPaginator } from "@/components/custom/CustomPaginator";
import { CustomJumbotron } from "../components/CustomJumbotron";
import { ProductsGrid } from "../components/ProductsGrid";
import { useProducts } from "../hooks/useProducts";

export const HomePage = () => {
  const { data, isLoading } = useProducts();
  console.log(data);

  return (
    <>
      <CustomJumbotron title="Bienvenido a Teslo Shop" />
      <ProductsGrid products={data?.products ?? []} />
      <CustomPaginator totalPages={data?.pages ?? 0} />
    </>
  );
};
