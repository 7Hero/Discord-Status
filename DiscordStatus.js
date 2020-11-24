const axios = require("axios");
const fs = require("fs");
// const api = require("windows-api-show-window");
// api.hideCurrentProcessWindow().then(() => {}).catch(err => {});
function changeStatus(str, auth) {
  axios.default.patch(
    "https://discordapp.com/api/v6/users/@me/settings",
    {
      custom_status: {
        text: str,
      },
    },
    {
      headers: {
        authorization: auth,
      },
    }
  );
}
string = fs.readFileSync("text.txt", "utf-8");
status = string.split("\r\n");
i = 2;

setInterval(() => {
  changeStatus(status[i], status[1]);
  i = i + 1;
  if (i == status.length) {
    i = 1;
  }
}, parseInt(status[0]));
