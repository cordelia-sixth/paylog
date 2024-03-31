type Props = {
  className: string;
  children: React.ReactNode;
};

/**
 * スタイリング用のラッパーコンポーネント
 */
export const StyleComponent = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};
