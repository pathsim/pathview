// Internal design aid, not part of the shipped site: opt out of the
// prerendering the root layout switches on, so the build doesn't fail
// looking for a route nothing links to. Still reachable via the SPA
// fallback when someone types the URL.
export const prerender = false;
