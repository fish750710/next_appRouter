"use client";
import Image from "next/image";
import { useRouter, notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ActivityData {
  eventId: string;
  eventTitle: string;
  activityTitle: string;
  activityDesc: string;
  uploadImage: string;
}
const Activity = ({ params }: { params: { eventId: string } }) => {
  const router = useRouter();
  const [activityData, setActivityData] = useState<ActivityData | null>(null);
  const isNotFound = false;
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const fetchActivity = async () => {
    const res = await fetch(`/api/activity/${params.eventId}`).then((res) =>
      res.json()
    );
    if (res.status === 200) {
      setActivityData(res.data);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

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
        <ul>
          <li>eventId: {activityData?.eventId}</li>
          <li>eventTitle:{activityData?.eventTitle}</li>
          <li>activityTitle:{activityData?.activityTitle}</li>
          <li>activityDesc:{activityData?.activityDesc}</li>
          <li>
            {activityData?.uploadImage && (
              <Image
                src={activityData.uploadImage}
                alt="image"
                width={300}
                height={150}
              />
            )}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Activity;
