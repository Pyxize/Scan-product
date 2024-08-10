import { BarcodeScanner, DetectedBarcode } from 'react-barcode-scanner';
import { toKcal } from '../utils/ConvertKcal.ts';
import { ProductNutritionInfo } from '../components/product/ProductNutritionInfo.tsx';

const scanProduct = (barcode: DetectedBarcode) => {
  const fields = [
    'product_name',
    'image_url',
    'image_front_small_url',
    'brands',
    'brands_tags',
    'nutriscore_grade',
    'nutrient_levels',
    'ecoscore_score',
    'nutriscore',
    'nutriments',
    'nutrition_data_per',
    'additives_n',
    'additives_tags',
    'additives_original_tags',
    'additives_prev_original_tags',
    'ingredients_text',
    'result',
  ];
  const requestFood = fetch(
    `https://world.openfoodfacts.net/api/v3/product/${barcode.rawValue}?fields=${fields.toString()}`
  );

  const requestBeauty = fetch(
    `https://fr.openbeautyfacts.org/api/v3/product/${barcode.rawValue}`
  );

  Promise.all([requestFood, requestBeauty])
    .then(([foodData, beautyData]) => {
      if (foodData.status === 200) {
        console.log('api food');
        setProductBeauty(null);
        setCamera(true);
        const f = foodData.json();
        f.then((dataFood) => {
          if (productFood && productFood.code === dataFood.code) {
            console.log('ici', productFood);
            return;
          }
          setProductFood(dataFood);
        });
      } else {
        console.log('api Beauty');
        setProductFood(null);
        setCamera(true);
        const b = beautyData.json();
        b.then((dataBeauty) => {
          if (productBeauty && productBeauty.code === dataBeauty.code) {
            return;
          }
          setProductBeauty(dataBeauty);
          console.log(dataBeauty);
        });
      }
    })
    .catch((error: Error) => {
      console.log(error);
    });

  return (
    <>
      <div className={camera === true ? 'hidden' : 'w-96 h-96'}>
        <BarcodeScanner
          options={{ formats: ['codabar'] }}
          onCapture={setScanProduct}
          hidden={camera}
        />
      </div>
      {/* FOOD PRODUCT */}
      <article className="flex justify-center pt-8">
        {productFood && productFood.status === 'success' ? (
          <div className="flex flex-col gap-8 max-w-xl">
            <div className="flex flex-col items-center">
              <img
                className="object-cover"
                src={productFood.product.image_front_small_url}
                alt={productFood.brands}
              />
              <div className="flex flex-col items-center mt-4">
                <h1 className="font-bold text-3xl text-emerald-800 uppercase">
                  {productFood.product.product_name}
                </h1>
                <p className="text-sm font-normal text-emerald-800">
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
              {productFood.product.nutriscore.component ? (
                <section>
                  {/*CALORIES*/}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
                        <img
                          width="24"
                          height="24"
                          src="../public/img/fire.svg"
                          alt=""
                        />
                      </div>
                      <h3>Calories</h3>
                    </div>
                    <div className="flex justify-center items-center">
                      {toKcal(productFood.product.nutriscore[2023].data.energy)}
                      {productFood.product.nutriments.energy_unit}
                    </div>
                  </div>
                  {/*PROTEINES*/}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
                        <img
                          width="24"
                          height="24"
                          src="../public/img/fish-cooked.svg"
                          alt=""
                        />
                      </div>
                      <h3>Protéines</h3>
                    </div>
                    <div className="flex justify-center items-center">
                      {productFood.product.nutriscore[2023].data.proteins}
                      {productFood.product.nutriments.proteins_unit}
                    </div>
                  </div>
                  {/*SALT*/}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
                        <img
                          width="24"
                          height="24"
                          src="../public/img/salt.svg"
                          alt=""
                        />
                      </div>
                      <h3>Sel</h3>
                    </div>
                    <div className="flex justify-center items-center">
                      {productFood.product.nutriscore[2023].data.salt}
                      {productFood.product.nutriments.proteins_unit}
                    </div>
                  </div>
                  {/*SUGAR*/}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
                        <img
                          width="24"
                          height="24"
                          src="../public/img/sugar.svg"
                          alt=""
                        />
                      </div>
                      <h3>Sucre</h3>
                    </div>
                    <div className="flex justify-center items-center">
                      {productFood.product.nutriscore[2023].data.sugars}
                      {productFood.product.nutriments.proteins_unit}
                    </div>
                  </div>
                  {/*GRAISSES SATURES */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
                        <img
                          width="24"
                          height="24"
                          src="../public/img/gras.svg"
                          alt=""
                        />
                      </div>
                      <h3>Graisses saturées</h3>
                    </div>
                    <div className="flex justify-center items-center">
                      {productFood.product.nutriscore[2023].data.saturated_fat}
                      {productFood.product.nutriments.proteins_unit}
                    </div>
                  </div>
                </section>
              ) : (
                <ProductNutritionInfo
                  products={
                    productFood.product.nutriscore[2023].data.components
                  }
                />
              )}
            </div>

            <div className="flex flex-col">
              <h2 className="text-slate-800 font-bold text-xl mb-2">
                Ingredient:{' '}
              </h2>
              <p>{productFood.product.ingredients_text}</p>
            </div>
          </div>
        ) : (
          <p>{productFood && productFood.result.lc_name}</p>
        )}

        {/*BEAUTY PRODUCT*/}

        {productBeauty && productBeauty.status === 1 ? (
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-xl uppercase">
              {productBeauty.product.brands_tags[0]}
            </h1>
            <img
              className="object-contain h-48 w-48"
              src={productBeauty.product.image_url}
              alt={productBeauty.brands}
            />
            <h2 className="font-medium text-xl mb-4">Ingredient: </h2>
            <p>{productBeauty.product.ingredients_text}</p>
          </div>
        ) : (
          <p>{productBeauty && productBeauty.status_verbose}</p>
        )}
      </article>
    </>
  );
};
