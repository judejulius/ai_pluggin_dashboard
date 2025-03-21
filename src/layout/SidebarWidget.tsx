import React from "react";
import Link from "next/link";
export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full absolute bottom-0 max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <Link
        href="/signin"
        target="_blank"
        rel="nofollow"
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        Logout
      </Link>
    </div>
  );
}
