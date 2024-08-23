import AsideBar from "@/components/AsideBar";
import { createClient } from "@/utils/supabase/server";
import FilteredAdView from "./_components/FilteredAdView";
import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";

export default async function TaskPage() {
  const supabase = createClient();

  const { data: advertisement, error } = await supabase
    .from("TabAdvertisement")
    .select("*, TabAdsImages(imageUrl)")
    .order("id", { ascending: false })
    .returns<AdProps[]>();

  if (error) {
    throw new Error(`Chyba při načítání dat ${error.message}`);
  }

  return (
    <section className="bg-peak-background md:min-h-screen-content-md-footer min-h-screen-content-sm-footer flex">
      <AsideBar />
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-auto">
            <span>
              <LoaderCircle size={50} className="animate-spin" />
            </span>
            <h2 className="">Načítáme data...</h2>
          </div>
        }
      >
        <FilteredAdView advertisementData={advertisement} />
      </Suspense>
    </section>
  );
}
