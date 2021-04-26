import { useEffect, useState } from "react";

import { getEntryById } from "../graphql/api";

function useSingleEntry<T = any>(entryID: string) {
  const [entry, setEntry] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchEntry(id: string) {
    const data = await getEntryById(id);
    return data;
  }

  useEffect(() => {
    if (entryID)
      fetchEntry(entryID)
        .then((result: any) => {
          if (result) {
            setEntry(result);
          }
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entryID]);

  return { entry, loading };
}
export default useSingleEntry;
