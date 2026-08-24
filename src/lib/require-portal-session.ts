import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, isValidSessionValue } from "@/lib/portal-auth";

export async function requirePortalSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!isValidSessionValue(session)) {
    redirect("/portal/login");
  }
}
