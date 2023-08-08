import { useQueries } from "@tanstack/react-query";

const useCustomQueries = (queries) => {

  const results = useQueries({
    queries: queries.map(query => ({
      queryKey: query.queryKey,
      queryFn: () => query.queryFn,
    }))
    // queries: [
    //   { queryKey: ["actor"], queryFn: () => fetchFilmCredits(id), staleTime: 60000 },
    //   { queryKey: ["movie", id], queryFn: () => fetchFilmData(id), staleTime: 60000 },
    // ],
  });

  return results;
};

export default useCustomQueries;