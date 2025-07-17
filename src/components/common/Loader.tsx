// src/components/common/Loader.tsx
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600"></div>
    </div>
  );
};

export default Loader;
