import React from "react";

export function Modal({ onClose, onSave }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");


    const handleSave = () => {
        if (!name || !age) return;
        onSave(name, age);
        onClose();
    };


    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl w-80">
                <h2 className="text-xl font-bold mb-4">Add Person</h2>
                <input className="border p-2 w-full mb-3" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input className="border p-2 w-full mb-4" type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="border px-3 py-1 rounded">Cancel</button>
                    <button onClick={handleSave} className="bg-green-600 text-white px-3 py-1 rounded">Save</button>
                </div>
            </div>
        </div>
    );
}