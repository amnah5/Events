const express = require("express");
const {
  eventListFetch,
  eventCreate,
  eventUpdate,
  eventDelete,
} = require("./controllers");

// Create a mini express application
const router = express.Router();
router.get("/", eventListFetch);

router.post("/", eventCreate);

router.put("/:eventId", eventUpdate);

router.delete("/:eventId", eventDelete);

module.exports = router;
