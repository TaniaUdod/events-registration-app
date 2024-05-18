const cron = require("node-cron");
const fetchEvents = require("../apiServices/fetchEvents.js");

const run = async () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("Running cron job to fetch and save events");
    await fetchEvents();
    console.log("Fetch and save events script executed");
  });
};

module.exports = run;
