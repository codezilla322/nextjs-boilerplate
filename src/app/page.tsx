"use client";

import { useReduxDispatch, useReduxSelector, userSlice } from "@/lib/redux";

export default function Home() {
  const dispatch = useReduxDispatch();
  const user = useReduxSelector((state) => state.user);

  return (
    <main className="flex justify-center items-center h-screen">
      {user.loggedIn ? (
        <button
          className="border w-24 h-12 bg-blue-300"
          onClick={() => dispatch(userSlice.actions.logoutUser())}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="border w-24 h-12 bg-blue-300"
          onClick={() =>
            dispatch(userSlice.actions.loginUser("demo@gmail.com"))
          }
        >
          Sign In
        </button>
      )}
    </main>
  );
}
