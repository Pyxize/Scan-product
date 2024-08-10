import { useGetProduct } from './hooks/useGetProduct.tsx';
import { ProductNutrition } from './components/product/ProductNutrition.tsx';
import { Home } from './pages/Home.tsx';
import { ProductBeauty } from './components/product/ProductBeauty.tsx';
import { NotFound } from './pages/NotFound.tsx';

export default function App() {
  const { productFood, productBeauty, setScanProduct, camera, error } =
    useGetProduct();

  return (
    <>
      <Home camera={camera} productScan={setScanProduct} />
      {/* FOOD PRODUCT */}
      <article className="flex justify-center pt-8 pb-8 mx-auto max-w-2xl">
        {productFood && productFood.status === 'success' ? (
          <div className="flex flex-col gap-8 max-w-xl">
            <div className="flex flex-col items-center">
              <img
                className="object-cover"
                src={productFood.product.image_front_small_url}
                alt={productFood.product.brands}
              />
              <div className="flex flex-col items-center mt-4">
                <h1 className="font-bold text-3xl text-emerald-800 uppercase text-center">
                  {productFood.product.product_name}
                </h1>
                <p className="font-normal text-emerald-800 uppercase">
                  {productFood.product.brands_tags[0]}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-items-start gap-3">
              <div>
                <h2 className="text-slate-800 font-bold text-xl">
                  Informations nutritionneles
                </h2>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">
                    Valeurs nutritionnelles
                  </p>
                  <p className="text-sm text-gray-400">
                    pour {productFood.product.nutrition_data_per}
                  </p>
                </div>
              </div>
              <ProductNutrition products={productFood.product.nutriments} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-slate-800 font-bold text-xl mb-2">
                Ingredient:{' '}
              </h2>
              <p>{productFood.product.ingredients_text}</p>
            </div>
          </div>
        ) : productBeauty && productBeauty.status === 1 ? (
          <ProductBeauty productsCosmetic={productBeauty} />
        ) : (
          error && <NotFound />
        )}
      </article>
    </>
  );
}
