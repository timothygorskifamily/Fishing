const fs = require("node:fs");
const net = require("node:net");
const path = require("node:path");
const { execFileSync, spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const host = "127.0.0.1";
const port = 4321;
const pidFile = path.join(root, ".astro-dev.pid");
const stdoutLog = path.join(root, "astro-dev.log");
const stderrLog = path.join(root, "astro-dev.err.log");

const command = process.argv[2];

if (command === "start") {
  startServer().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
} else if (command === "stop") {
  stopServer();
} else {
  console.error("Usage: node scripts\\dev-server-control.cjs <start|stop>");
  process.exit(1);
}

async function startServer() {
  if (await isListening()) {
    console.log(`Astro already appears to be running at http://${host}:${port}/`);
    return;
  }

  if (!fs.existsSync(path.join(root, "node_modules"))) {
    console.log("Installing dependencies first...");
    execFileSync("npm.cmd", ["install"], { cwd: root, stdio: "inherit" });
  }

  const out = fs.openSync(stdoutLog, "a");
  const err = fs.openSync(stderrLog, "a");
  const child = spawn(
    "cmd.exe",
    ["/d", "/s", "/c", `npm run dev -- --host ${host} --port ${port}`],
    {
      cwd: root,
      detached: true,
      stdio: ["ignore", out, err],
      windowsHide: true
    }
  );

  fs.writeFileSync(pidFile, String(child.pid));
  child.unref();

  console.log(`Started Astro dev server at http://${host}:${port}/`);
  console.log(`Logs: ${stdoutLog}`);
  console.log("Run stop.bat to stop it.");
}

function stopServer() {
  const pids = new Set();

  if (fs.existsSync(pidFile)) {
    const storedPid = Number(fs.readFileSync(pidFile, "utf8").trim());
    if (Number.isInteger(storedPid) && storedPid > 0) {
      pids.add(storedPid);
    }
  }

  for (const pid of getPortPids()) {
    pids.add(pid);
  }

  if (!pids.size) {
    cleanupPidFile();
    console.log(`No Astro dev server found on port ${port}.`);
    return;
  }

  let stopped = 0;
  for (const pid of pids) {
    try {
      execFileSync("taskkill.exe", ["/F", "/T", "/PID", String(pid)], {
        stdio: "ignore"
      });
      stopped += 1;
    } catch (_error) {
      // The process may already be gone if another PID in the same tree was killed.
    }
  }

  cleanupPidFile();
  console.log(stopped ? `Stopped Astro dev server on port ${port}.` : `No running process needed stopping.`);
}

function cleanupPidFile() {
  try {
    fs.rmSync(pidFile, { force: true });
  } catch (_error) {
    // Nothing to clean up.
  }
}

function isListening() {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host, port });
    socket.setTimeout(800);
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("timeout", () => {
      socket.destroy();
      resolve(false);
    });
    socket.once("error", () => resolve(false));
  });
}

function getPortPids() {
  try {
    const output = execFileSync("netstat.exe", ["-ano"], { encoding: "utf8" });
    return output
      .split(/\r?\n/)
      .filter((line) => line.includes(`:${port}`) && /\bLISTENING\b/i.test(line))
      .map((line) => Number(line.trim().split(/\s+/).at(-1)))
      .filter((pid) => Number.isInteger(pid) && pid > 0);
  } catch (_error) {
    return [];
  }
}
