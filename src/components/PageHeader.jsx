export default function PageHeader(props) {
  return (
    <div className="flex items-center justify-between p-4">
      
      {/* LEFT */}
      <div className="flex flex-col">
        
        {/* TITLE */}
        <span className="text-3xl font-semibold">
          {props.title}
        </span>

        {/* BREADCRUMB */}
        <div className="flex items-center font-medium space-x-2 mt-2">
          {Array.isArray(props.breadcrumb) ? (
            props.breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-gray-500">{item}</span>
                {index < props.breadcrumb.length - 1 && (
                  <span className="text-gray-500">/</span>
                )}
              </div>
            ))
          ) : (
            <span className="text-gray-500">
              {props.breadcrumb}
            </span>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div>
        {props.children}
      </div>

    </div>
  );
}