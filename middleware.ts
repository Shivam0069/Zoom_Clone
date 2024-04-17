import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
// import { createRouteMatcher } from "@clerk/nextjs/server";
// const protectedRoutes = createRouteMatcher([
//   "/",
//   "/upcoming",
//   "/previous",
//   "recordings",
//   "/personal-room",
// ]);
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
  //   publicRoutes: [
  //     "/",
  //     "/upcoming",
  //     "/previous",
  //     "recordings",
  //     "/personal-room",
  //     "/meeting(.*)",
  //   ],
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
