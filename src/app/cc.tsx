"use client";

import { useSession } from "next-auth/react";

export default function CC() {
  const { data: session, status } = useSession();
  return (
    <div>
      ClientComponent {status}{" "}
      {status === "authenticated" && session.user?.name}
    </div>
  );
}
