import Form from "@/components/Form";
import TaskPage from "./tasks/page";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen p-5" >
      <Form />
      <TaskPage />
      {/*<NewsLetter />*/}
          </main>
  );
}
