import { createFileRoute } from "@tanstack/react-router";
import { HR } from "flowbite-react";
import { hostings } from "@/utils/hosting";
import { HostingItem } from "@/components/HostingItem";

export const Route = createFileRoute("/hosting")({
  component: RouteComponent,
  loader: async () => {
    return {
      hostings,
    };
  },
});

function RouteComponent() {
  const { hostings } = Route.useLoaderData();

  return (
    <section className="bg-white mt-8 lg:mt-16">
      {hostings.map((hosting, index) => (
        <>
          {index > 0 && <HR />} 
          <HostingItem key={hosting.title} {...hosting} />
        </>
      ))}
    </section>
  );
}
