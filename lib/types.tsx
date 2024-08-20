
type AdImagesProps = {
  id: number
  imageUrl: string;
  id_advertisement: number;
  TabAdvertisement: AdProps;
};

type AdProps = {
  id: number;
  user_id: string;
  city: string;
  title: string;
  price: number;
  desc: string;
  postcode: number
  category: string;
  mobileNumber: number;
  TabAdsImages: AdImagesProps[];
};
