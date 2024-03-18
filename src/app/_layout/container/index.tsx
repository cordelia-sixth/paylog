/**
 * 全体のスタイルを調整するコンポーネント
 * @returns div
 */
export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-sm flex-col gap-5 px-5 text-base sm:text-lg">
      {children}
    </div>
  );
};
