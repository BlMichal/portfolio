
type AdImagesProps = {
    id: number
    imageUrl: string;
    id_tasks: number;    
    tasks: AdProps;
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
    tasksImages: AdImagesProps[];
  };
  