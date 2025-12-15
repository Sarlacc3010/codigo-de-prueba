import { useState } from "react";
import { usePeople } from "./hooks/usePeople";
import { SearchBar } from "./components/SearchBar";
import { Table } from "./components/Table";
import { Pagination } from "./components/Pagination";
import { Modal } from "./components/Modal";

export default function App() {
  const {
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
  } = usePeople();

  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">People List</h1>

      <SearchBar value={search} onChange={setSearch} />

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 mb-4 rounded"
      >
        Add
      </button>

      <button
        onClick={deleteSelected}
        disabled={!selected.length}
        className="bg-red-600 text-white px-4 py-2 mb-4 ml-2 rounded disabled:opacity-50"
      >
        Delete Selected
      </button>

      <Table
        data={paginated}
        selected={selected}
        toggleSelect={toggleSelect}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

      {open && (
        <Modal
          onClose={() => setOpen(false)}
          onSave={addPerson}
        />
      )}
    </div>
  );
}
