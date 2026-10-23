export default {
  async fetch(request, env, ctx) {
    return new Response("Halo! Ini dibuat dari Tablet XPAD saya 🚀", {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
