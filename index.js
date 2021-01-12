const mongoose = require("mongoose");
const app = require("./app");
const { API_VERSION, IP_SERVER, PORT_DB, PORT } = require("./config");

mongoose.set("useFindAndModify", false);
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/samuelbaronabad`,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("La conexión a la BBDD es correcta");

            app.listen(PORT, () => {
                console.log("######################");
                console.log("###### API REST ######");
                console.log("######################");
                console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}/`);
            })
        }
    }
);

