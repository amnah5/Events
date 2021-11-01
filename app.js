const express = require("express");
const eventRoutes = require("./apis/Event/routes");
const connectDB = require("./db/models/database");

const app = express();

app.use(express.json());
app.use("/api/events", eventRoutes);
connectDB();

// app.use((err, req, res, next) => {
//   res.status(err.status || 500).json({ message: err.message });
// });
const PORT = 8000;
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
