import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

const addr = "18888";
console.log(`HTTP server listening on http://localhost${addr}`);

function handler(req: Request): Response {
  const pathname = new URL(req.url)
  return new Response(`Hello world from ${pathname}`);
}

serve(handler, { port: 18888 });

