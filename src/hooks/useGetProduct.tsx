import { useEffect, useState } from 'react';
import { DetectedBarcode } from 'react-barcode-scanner';
import axios from 'axios';
import { ProductFood } from '../types/Product/Product.ts';
import { ProductCosmetic } from '../types/Product/ProductCosmetic.ts';

export const useGetProduct = () => {
  const [productFood, setProductFood] = useState<ProductFood | null>(null);
  const [productBeauty, setProductBeauty] = useState<ProductCosmetic | null>(
    null
  );
  const [scanProduct, setScanProduct] = useState<DetectedBarcode | null>(null);
  const [camera, setCamera] = useState(false);
  const [error, setError] = useState(false);

  const fields = [
    'product_name',
    'image_url',
    'image_front_small_url',
    'brands',
    'brands_tags',
    'nutriscore_grade',
    'ecoscore_score',
    'nutriscore',
    'nutriments',
    'nutrition_data_per',
    'ingredients_text',
    'result',
  ];

  const fieldsCosmetic = [
    'product_name',
    'image_url',
    'image_front_small_url',
    'brands',
    'brands_tags',
    'nutriments',
    'nutrition_data_per',
    'ingredients_text',
    'ingredients',
    'ingredients_text_fr',
    'result',
    'additives_tags',
  ];

  const fetchData = async () => {
    const [requestFood, requestBeauty] = await Promise.allSettled([
      axios.get(
        `https://world.openfoodfacts.org/api/v3/product/${scanProduct?.rawValue}.json?fields=${fields.toString()}`
      ),
      axios.get(
        `https://world.openbeautyfacts.org/api/v3/product/${scanProduct?.rawValue}.json?fields=${fieldsCosmetic}`
        //`https://world.openbeautyfacts.org/api/v3/product/${scanProduct?.rawValue}.json`
      ),
    ]);
    if (requestBeauty.status === 'fulfilled') {
      const beautyData = requestBeauty.value.data;
      if (!productBeauty || productBeauty.code !== beautyData.code) {
        setProductBeauty(beautyData);
        setProductFood(null);
        setCamera(true);
      }
    } else if (requestFood.status === 'fulfilled') {
      const foodData = requestFood.value.data;
      if (!productFood || productFood.code !== foodData.code) {
        setProductFood(foodData);
        setProductBeauty(null);
        setCamera(true);
      }
    } else if (
      requestFood.status === 'rejected' &&
      requestBeauty.status === 'rejected'
    ) {
      setError(true);
      setCamera(true);
    }
  };

  useEffect(() => {
    if (scanProduct) {
      fetchData();
    }
  }, [scanProduct]);

  return {
    productFood,
    productBeauty,
    setScanProduct,
    camera,
    error,
  };
};
