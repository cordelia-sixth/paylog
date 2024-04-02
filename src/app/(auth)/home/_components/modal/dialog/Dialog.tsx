import React, { MouseEvent, useCallback, useEffect, useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

/** ダイアログコンポーネントが受け取るpropsの型 */
type DialogProps = {
  /** dialogの開閉状態 */
  isOpen: boolean;
  /** dialogに表示するコンテンツ */
  children: React.ReactNode;
  /** dialogを閉じる関数 */
  onClose: VoidFunction;
  /* 外側をクリックした時にdialogを閉じられないようにする場合に付与 */
  hasNotClosableOverlay?: boolean;
};

/**
 * ダイアログを表示するコンポーネント
 */
export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  children,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // ダイアログ要素を取得
    const dialogElement = dialogRef.current;

    // ダイアログがレンダリングされてなければ何もしない
    if (!dialogElement) {
      return;
    }
    // ダイアログが開状態になったら
    if (isOpen) {
      // ダイアログ要素にopen属性があったら何もしない
      if (dialogElement.hasAttribute("open")) {
        return;
      }
      // ダイアログを表示する
      dialogElement.showModal();

      // ダイアログが閉状態になったら
    } else {
      // ダイアログ要素にopen属性がなければ何もしない
      if (!dialogElement.hasAttribute("open")) {
        return;
      }
      // ダイアログを閉じる
      dialogElement.close();
    }

    // ダイアログの開閉状態が変更されたら
  }, [isOpen]);

  const handleClickDialog = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleClickContent = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      // ダイアログ領域のイベント伝播を防ぐ
      event.stopPropagation();
    },
    [],
  );

  return (
    <RemoveScroll removeScrollBar enabled={isOpen}>
      <dialog
        ref={dialogRef}
        onClick={handleClickDialog}
        className="w-3/5 rounded-md"
      >
        <div onClick={handleClickContent}>{children}</div>
      </dialog>
    </RemoveScroll>
  );
};
