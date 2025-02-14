import { useQuery } from "@tanstack/vue-query";

export function useFetchApi() {
  const query = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      ).then((res) => res.json());
      return response;
    },
  });

  return query;
}
