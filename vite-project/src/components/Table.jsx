import React from "react";

export function Table({ data, selected, toggleSelect }) {
  return (
    <table className="w-full border mb-4">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2"></th>
          <th className="border p-2">#</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => (
          <tr key={p.id} className="text-center">
            <td className="border p-2">
              <input
                type="checkbox"
                checked={selected.includes(p.id)}
                onChange={() => toggleSelect(p.id)}
              />
            </td>
            <td className="border p-2">{p.id}</td>
            <td className="border p-2">{p.name}</td>
            <td className="border p-2">{p.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
