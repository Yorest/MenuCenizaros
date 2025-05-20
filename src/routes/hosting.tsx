import { createFileRoute } from "@tanstack/react-router";

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
    <section className="bg-white">
      {hostings.map((hosting) => (
        <HostingItem key={hosting.title} hostingItems={hostings} />
      ))}
    </section>
  );
}
