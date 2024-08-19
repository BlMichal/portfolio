
import { createClient } from "@/utils/supabase/server";
import ImageSwiperGallery from "./_components/ImageSwiperGallery";
import ImageUpload from "../_components/ImageUpload";
import { Grid2X2, Landmark, Phone, Wallet } from "lucide-react";
import DeleteAdForm from "../_components/DeleteAdForm";
import EditAdForm from "../_components/EditAdForm";


const DetailAdPage = async ({ params }: { params: { id: string } }) => {

  const supabase = createClient();

  const { data: advertisement, error } = await supabase
    .from("TabAdvertisement")
    .select("*")
    .eq("id", params.id)


  const { data: advertisementImages } = await supabase
    .from("TabAdsImages")
    .select("*, TabAdvertisement(user_id)")
    .eq("id_tasks", params.id)
    .order("id", { ascending: true });

  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;
  // const isAdmin = user?.email;    



  return (
    <section className="min-h-screen-content-md-footer md:min-h-screen-content-footer bg-black/80">
      <div className="max-w-7xl mx-auto">
        <ImageSwiperGallery images={advertisementImages} user={userId} />
      </div>
      <div className="max-w-7xl mx-auto">
        {advertisement?.map((ad: AdProps) => (
          <div className="flex flex-col gap-2 px-4 pt-4 text-white" key={ad.id}>
            <h2 className="font-bold text-lg">{ad.title}</h2>
            <hr className="my-2" />
            <p>{ad.desc}</p>
            <hr className="my-2" />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-3 my-4">
              <span className="flex gap-2"><Phone />Telefon:<p className="font-bold"> {ad.mobileNumber}</p></span>
              <span className="flex gap-2"><Wallet />Cena:<p className="font-bold"> {ad.price} kč</p></span>
              <span className="flex gap-2"><Landmark />Lokalita:<p className="font-bold"> {ad.city} - {ad.postcode}</p></span>
              <span className="flex gap-2"><Grid2X2 />Kategorie:<p className="font-bold">{ad.category}</p></span>
            </div>
            {/* Jenom uživatel který položku vytvořil, uvidí možnost DELETE/ UPDATE/ IMPORT IMAGE*/}
            {userId === ad.user_id &&
              <>
                <hr className="my-4" />
                <div className="flex md:flex-row-reverse flex-col md:items-end">

                  <div className="mt-4 pb-4 flex flex-auto justify-end">
                    <ImageUpload variant={"compact"} pageId={params.id} />
                  </div>
                  <div className="flex gap-4 pb-4">
                    <DeleteAdForm advertisementId={ad.id} className="" />
                    <EditAdForm advertisement={ad} className="" />
                  </div>
                </div>
              </>
            }
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailAdPage;
