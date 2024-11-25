import { readFileSync, statSync } from "fs";
import mustache from "mustache";

function renderTemplate(templatePath: string, data: Record<string, unknown>) {
  const template = readFileSync(templatePath, "utf-8");
  return mustache.render(template, data);
}

Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    // Servir o favicon
    if (url.pathname === "/favicon.ico") {
      return new Response(Bun.file("./public/favicon.ico"), {
        headers: { "Content-Type": "image/x-icon" },
      });
    }

    // Renderiza o template HTML para a raiz ou página de index
    if (url.pathname === "/" || url.pathname.endsWith("/index.mustache")) {
      const html = renderTemplate("./public/index.mustache", {
        title: "Bun + React + Mustache",
      });
      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    // Servir arquivos estáticos de assets (CSS, JS, imagens)
    if (url.pathname.startsWith("/assets/")) {
      const path = `.${url.pathname}`;  // Corrigido para servir corretamente os arquivos em "public/assets"
      try {
        const stats = statSync(path);
        if (stats.isFile()) {
          const fileExtension = path.split('.').pop();
          const contentType =
            fileExtension === 'css' ? 'text/css' :
            fileExtension === 'js' ? 'application/javascript' :
            fileExtension === 'ico' ? 'image/x-icon' : 'application/octet-stream';

          return new Response(Bun.file(path), { headers: { "Content-Type": contentType } });
        }
      } catch (e) {
        return new Response("Not Found", { status: 404 });
      }
    }

    // Para outros arquivos
    try {
      const path = "." + url.pathname;
      const stats = statSync(path);
      if (stats.isFile()) {
        return new Response(Bun.file(path));
      }
      return new Response("Not Found", { status: 404 });
    } catch (e) {
      return new Response("Not Found", { status: 404 });
    }
  },
});

console.log("Server running at http://localhost:3000");
