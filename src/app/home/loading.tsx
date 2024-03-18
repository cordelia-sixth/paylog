const Loading = () => {
  return (
    <div className="mt-10 flex items-center justify-center gap-6">
      <div className="size-10 animate-spin rounded-full border-[5px] border-sky-400  border-t-transparent"></div>
      <p className="text-[30px] font-bold">Loading</p>
    </div>
  );
};

export default Loading;
