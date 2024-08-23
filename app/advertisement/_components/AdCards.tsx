import AdCardsLarge from "./AdCardsLarge";
import AdCardsSmall from "./AdCardsSmall";

const AdCards = ({ filteredAds, layout }: { filteredAds: AdProps[]|null, layout: string }) => {
  return (
    <>
      {layout === "layout1" ? (
        <AdCardsLarge adsItems={filteredAds} />
      ) : (
        <AdCardsSmall adsItems={filteredAds} />
      )}
    </>
  );
};

export default AdCards;
