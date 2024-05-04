import { verifyToken } from "../utils/verifyUser.js";
import express from "express"
import { create } from "../controllers/post.controller.js";
import { getposts } from "../controllers/post.controller.js";
import { deletePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post('/create',verifyToken,create)
router.get('/getposts',getposts)
router.delete('/deletepost/:postId/:userId',verifyToken,deletePost)

export default router;