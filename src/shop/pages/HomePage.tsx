import { CustomPaginator } from "@/components/custom/CustomPaginator";
import { CustomJumbotron } from "../components/CustomJumbotron";
import { ProductsGrid } from "../components/ProductsGrid";
import { products } from "@/mocks/products.mock";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Bienvenido a Teslo Shop" />
      <ProductsGrid products={products} />
      <CustomPaginator totalPages={5} />
    </>
  );
};
