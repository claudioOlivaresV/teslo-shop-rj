import { tesloApi } from "@/api/tesloApi";
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
  limit?: number | string;
  offset?: number | string;
}

export const getProductsAction = async (
  options?: Options,
): Promise<ProductsResponse> => {
  const { limit, offset } = options ?? { limit: 9, offset: 0 };
  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: {
      limit,
      offset,
    },
  });
  //localhost:3000/api/files/product/8764813-00-A_0_2000.jpg+
  const productsWhitImageUrl = data.products.map((product) => ({
    ...product,
    images: product.images.map(
      (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`,
    ),
  }));

  return {
    ...data,
    products: productsWhitImageUrl,
  };
};
