const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fileRoutes = require("./routes/fileRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/files", fileRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
