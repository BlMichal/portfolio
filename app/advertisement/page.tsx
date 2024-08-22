import AsideBar from "@/components/AsideBar";
import { createClient } from "@/utils/supabase/server";
import FilteredAdView from "./_components/FilteredAdView";

export default async function TaskPage() {

  const supabase = createClient();

  const { data: advertisement, error } = await supabase
    .from("TabAdvertisement")
    .select("*, TabAdsImages(imageUrl)")
    .order('id', { ascending: false })

  

  return (
    <section className="bg-peak-background md:min-h-screen-content-md-footer min-h-screen-content-sm-footer flex">
      <AsideBar />
      <FilteredAdView advertisementData={advertisement} />
    </section>
  );
}
