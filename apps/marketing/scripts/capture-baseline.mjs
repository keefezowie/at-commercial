import { mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { chromium, devices } from "playwright";

const root = process.cwd();
const outputDir = path.join(root, ".tmp-shots", "baseline");
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

const routes = [
  { path: "/", slug: "home" },
  { path: "/features", slug: "features" },
  { path: "/pricing", slug: "pricing" },
  { path: "/demo", slug: "demo" },
  { path: "/contact", slug: "contact" }
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForServer = async (url) => {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Server still booting.
    }
    await sleep(1000);
  }
  throw new Error(`Timed out waiting for ${url}`);
};

const captureAll = async () => {
  await mkdir(outputDir, { recursive: true });
  const devServer = spawn(
    "npm",
    ["run", "dev", "--workspace", "@at/marketing", "--", "--hostname", "127.0.0.1", "--port", String(port)],
    {
      cwd: root,
      stdio: "inherit",
      shell: true
    }
  );

  try {
    await waitForServer(`${baseUrl}/api/marketing/health`);
    const browser = await chromium.launch();

    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 }
    });
    const desktopPage = await desktopContext.newPage();
    for (const route of routes) {
      await desktopPage.goto(`${baseUrl}${route.path}`, { waitUntil: "networkidle" });
      await desktopPage.screenshot({
        path: path.join(outputDir, `${route.slug}-desktop.png`),
        fullPage: true
      });
    }

    const mobileContext = await browser.newContext({
      ...devices["Pixel 7"]
    });
    const mobilePage = await mobileContext.newPage();
    for (const route of routes) {
      await mobilePage.goto(`${baseUrl}${route.path}`, { waitUntil: "networkidle" });
      await mobilePage.screenshot({
        path: path.join(outputDir, `${route.slug}-mobile.png`),
        fullPage: true
      });
    }

    await desktopContext.close();
    await mobileContext.close();
    await browser.close();
  } finally {
    if (!devServer.killed && devServer.pid) {
      if (process.platform === "win32") {
        spawn("taskkill", ["/pid", String(devServer.pid), "/T", "/F"], {
          stdio: "ignore"
        });
      } else {
        devServer.kill("SIGTERM");
      }
    }
  }
};

captureAll().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
