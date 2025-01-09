const simpleGit = require("simple-git");

const git = simpleGit();
const updateBranch = async (src = "beta", target = "master") => {
  try {
    await git.checkout(src);
    const status = await git.status();
    const currentBranch = status.current;

    if (currentBranch === "master") {
      console.error("estas en master");
      return;
    }
    await git.pull("origin", "master");

    console.log(`Pusheando a ${currentBranch}...`);
    await git.push("origin", currentBranch);

    console.log("pusheado!");
  } catch (error) {
    console.error("err:", error);
  }
};

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("uso: node updateBranch.js <sourceBranch> <targetBranch>");
  process.exit(1);
}

const sourceBranch = args[0];
const targetBranch = args[1];

updateBranch(sourceBranch, targetBranch);
