import { serve } from "https://deno.land/std@0.137.0/http/mod.ts";

function handler(req: Request): Response {
  const pathname = new URL(req.url);
  return new Response(`Hello world from ${pathname}`);
}

function run_server() {
  const port = 18888;
  console.log(`HTTP server listening on http://localhost:${port}`);
  serve(handler, { port: 18888 });
}

run_server();
