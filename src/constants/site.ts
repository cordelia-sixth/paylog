/** サイト名 */
export const SITE_NAME = "Paylog";
/** サイトURL */
export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://paylog.vercel.app"
    : "http://localhost:3000";
/** サイト説明 */
export const SITE_DESCRIPTION = "An application to log expenses";
