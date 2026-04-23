export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4">
      
      {/* LEFT */}
      <div id="pageheader-left" className="flex flex-col">
        
        {/* TITLE */}
        <span id="page-title" className="text-3xl font-semibold">
          {title}
        </span>

        {/* BREADCRUMB */}
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          {Array.isArray(breadcrumb)
            ? breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-gray-500">{item}</span>
                  {index < breadcrumb.length - 1 && (
                    <span className="text-gray-500">/</span>
                  )}
                </div>
              ))
            : <span className="text-gray-500">{breadcrumb}</span>
          }
        </div>
      </div>

      {/* RIGHT (ACTION / BUTTON / FILTER / DLL) */}
      <div id="action-button">
        {children}
      </div>

    </div>
  );
}