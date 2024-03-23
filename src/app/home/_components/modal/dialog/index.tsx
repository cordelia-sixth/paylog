import { Dialog as Component } from "@/app/home/_components/modal/dialog/Dialog";
import { ComponentProps, useCallback, useState } from "react";

// ダイアログ要素が受け取るpropsの型
type DialogProps = Omit<ComponentProps<typeof Component>, "isOpen" | "onClose">;

type Result = {
  handleOpen: () => void;
  handleClose: () => void;
  Dialog: React.FC<DialogProps>;
};

/**
 * ダイアログの開閉状態を管理するカスタムフック
 * @returns open, close, Dialog
 */
export const useDialog = (): Result => {
  // ダイアログの開閉状態
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ダイアログを開く関数
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  // ダイアログを開く関数
  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  // ダイアログを閉じる関数
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // ダイアログを閉じる関数
  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  const Dialog: React.FC<DialogProps> = useCallback(
    (props: DialogProps) => (
      <Component isOpen={isOpen} onClose={handleClose} {...props} />
    ),
    [handleClose, isOpen],
  );

  // ダイアログ要素
  // const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  //   return <Component isOpen={isOpen} onClose={handleClose} {...props} />;
  // };

  return {
    /** ダイアログを開く関数 */
    handleOpen,
    /** ダイアログを閉じる関数 */
    handleClose,
    /** ダイアログを表示するコンポーネント */
    Dialog,
  };
};
