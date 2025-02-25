var axios = require("axios");
axios.post("http://localhost:4003/task/execute?lat=32.7761&long=-85.015&time=1740514975").then((res) => console.log(res));