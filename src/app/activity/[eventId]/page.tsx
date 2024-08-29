"use client";
import { useRouter, notFound } from "next/navigation";
const Activity = ({ params }: { params: { eventId: string } }) => {
  const router = useRouter();
  const isNotFound = false;

  if (isNotFound) return notFound();

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={() => router.back()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {"<"}
      </button>
      <section className="mt-4">
        content
        <h3 className="text-lg font-semibold">eventId: {params.eventId}</h3>
      </section>
    </div>
  );
};

export default Activity;
