import { useState, useMemo } from "react";

export function usePeople() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const addPerson = (person) => {
    setPeople((prev) => [
      ...prev,
      { ...person, id: prev.length + 1 }
    ]);
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const deleteSelected = () => {
    setPeople((prev) =>
      prev.filter((p) => !selected.includes(p.id))
    );
    setSelected([]);
  };

  const filtered = people.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return {
    paginated,
    search,
    setSearch,
    addPerson,
    toggleSelect,
    deleteSelected,
    selected,
    page,
    setPage,
    totalPages,
  };
}
