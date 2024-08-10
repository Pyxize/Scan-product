import { useEffect, useState } from 'react';
import { DetectedBarcode } from 'react-barcode-scanner';
import axios from 'axios';

export const useGetProduct = () => {
  const [productFood, setProductFood] = useState(null);
  const [productBeauty, setProductBeauty] = useState(null);
  const [scanProduct, setScanProduct] = useState<DetectedBarcode>('');
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

  const fetchData = async () => {
    const [requestFood, requestBeauty] = await Promise.allSettled([
      axios.get(
        `https://world.openfoodfacts.org/api/v3/product/${scanProduct.rawValue}.json}`
      ),

      axios.get(
        `https://world.openbeautyfacts.org/api/v3/product/${scanProduct.rawValue}.json`
      ),
    ]);
    try {
      if (requestFood.status === 'fulfilled') {
        const foodData = requestFood.value.data;
        if (!productFood || productFood.code !== foodData.code) {
          console.log(foodData);
          setProductFood(foodData);
          setProductBeauty(null);
          setCamera(true);
        }
      }

      if (requestBeauty.status === 'fulfilled') {
        const beautyData = requestBeauty.value.data;
        if (!productBeauty || productBeauty.code !== beautyData.code) {
          console.log(beautyData);
          setProductBeauty(beautyData);
          setProductFood(null);
          setCamera(true);
        }
      }
      if (
        requestFood.status === 'rejected' &&
        requestBeauty.status === 'rejected'
      ) {
        setError(true);
        setCamera(true);
      }
    } catch (error: Error) {
      setCamera(false);
    }
  };
  /*
       Promise.allSettled([requestFood, requestBeauty]).then(
         async ([foodResponse, beautyResponse]) => {
           const foodData = foodResponse.json();
           const beautyData = beautyResponse.json();
           if (foodResponse.ok) {
             setProductBeauty(null);
             setCamera(true);
             if (productFood && productFood.code === foodData.code) {
               console.log('ici', productFood);
               return;
             }
             setProductFood(await foodData);
           } else if (beautyResponse.ok) {
             setProductFood(null);
             setCamera(true);
             if (productBeauty && productBeauty.code === beautyData.code) {
               return;
             }
             setProductBeauty(productBeauty);
             console.log(beautyData);
           } else {
             setCamera(false);
           }
         }
       );

        */

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
