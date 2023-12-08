import asyncHandler from "../utils/asyncHandler.js";

const login = asyncHandler((req, res) => {
    res.send("hello")
})

export default login