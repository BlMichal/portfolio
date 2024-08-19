import AsideBar from "@/components/AsideBar";
import { createClient } from "@/utils/supabase/server";
import AdView from "./_components/AdView";

export default async function TaskPage() {

  const supabase = createClient();

  const { data: advertisement, error } = await supabase
    .from("TabAdvertisement")
    .select("*, TabAdsImages(imageUrl)")
    .order('id', { ascending: false })

  return (
    <section className="bg-peak-background min-h-screen-content flex">
      <AsideBar />
      <AdView advertisementData={advertisement} />
    </section>
  );
}
