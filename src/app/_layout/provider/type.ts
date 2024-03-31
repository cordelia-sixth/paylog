/** ログインユーザーを表す型 */
export type LoginUser = {
  /** ユーザーID */
  id: string;
  /** ユーザー名 */
  name: string;
  /** アバター画像URL */
  photoUrl: string;
  /** メールアドレス */
  email: string;
  /** ユーザー作成日時 */
  createdAt: number;
};
