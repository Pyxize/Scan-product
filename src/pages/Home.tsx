import { BarcodeScanner } from 'react-barcode-scanner';

export const Home = ({ camera, productScan }) => {
  return (
    <section
      className={
        camera
          ? 'hidden'
          : 'flex flex-col gap-4 justify-center items-center h-screen'
      }
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold">Scanner votre produit </h1>
        <p className="text-sm text-gray-400">
          Trouvez votre produit alimentaire ou de cosmétique pour en savoir plus
        </p>
      </div>
      <div className="w-96 h-96">
        <BarcodeScanner
          className="rounded-xl"
          options={{ formats: ['codabar'] }}
          onCapture={productScan}
          hidden={camera}
        />
      </div>
    </section>
  );
};
