import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    /** Deklrasai state **/
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedTag, setSelectedTag] = useState("");
    
    // /Inisialisasi DataForm/
        const [dataForm, setDataForm] = useState({
            searchTerm: "",
            selectedTag: "",
            // /Tambah state lain beserta default value/
            });
        
        // /Inisialisasi Handle perubahan nilai input form/
        const handleChange = (evt) => {
            const { name, value } = evt.target;
            setDataForm({
                ...dataForm,
                [name]: value,
            });
        };

    /** Deklrasai Logic Search & Filter **/
    const _searchTerm =dataForm.searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name
                .toLowerCase()
                .includes(_searchTerm) ||
            framework.description
                .toLowerCase()
                .includes(_searchTerm)||
            framework.details.developer .toLowerCase()
                .includes(_searchTerm)||
            framework.details.releaseYear .toString()
                .includes(_searchTerm);


        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });
    /** Deklarasi pengambilan unique tags di frameworkData **/
    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    return (
        <div className="p-8 bg-[#fdfaff] min-h-screen font-sans">
            {/* Header dengan Gradient Text */}
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 inline-block">
                    Modern Frameworks
                </h1>
                <p className="text-gray-500 mt-2">Daftar teknologi terbaik untuk pengembangan web modern</p>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search framework..."
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    onChange={handleChange}
                />

                <select
                    name="selectedTag"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    onChange={handleChange}
                >
                    <option value="">All Tags</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>
                            {tag}
                        </option>
                    ))}
                    <option value="">All Tags</option>

                </select>

                {filteredFrameworks.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden group bg-white border border-purple-100 p-1 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(216,_180,_254,_0.3)] hover:scale-[1.02]"
                    >
                        {/* Aksen Dekorasi di Pojok (Hanya muncul saat hover) */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-300 opacity-0 group-hover:opacity-20 rounded-full transition-all duration-500"></div>

                        <div className="relative p-6 flex flex-col h-full">
                            <div className="flex justify-between items-center mb-6">
                                <div className="p-3 bg-purple-50 rounded-2xl group-hover:bg-purple-300 transition-colors duration-500">
                                    {/* Placeholder Icon - Menggunakan huruf depan nama framework */}
                                    <span className="text-2xl font-bold text-purple-400 group-hover:text-white">
                                        {item.name.charAt(0)}
                                    </span>
                                </div>
                                <span className="text-sm font-black text-purple-300 tracking-tighter">
                                    EST. {item.details.releaseYear}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800 mb-1 leading-tight">
                                {item.name}
                            </h2>
                            <p className="text-purple-400 text-sm font-medium mb-4 italic">
                                Crafted by {item.details.developer}
                            </p>

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-purple-50">
                                <a
                                    href={item.details.officialWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 font-bold hover:text-purple-600 transition-colors group/link"
                                >
                                    Explore Documentation
                                    <span className="inline-block transform group-hover/link:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </a>

                                {/* Badge Status */}
                                <div className="h-2 w-2 rounded-full bg-purple-300 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}