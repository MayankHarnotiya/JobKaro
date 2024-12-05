import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { getCompanyById, registerCompany, updateCompany ,getCompany} from "../controllers/companyController.js"
import { singleUpload } from "../middlewares/multer.js"

const router =express.Router()

router.route("/register").post(isAuthenticated,registerCompany)
router.route("/get").get(isAuthenticated,getCompany)
router.route("/get/:id").get(isAuthenticated,getCompanyById)
router.route("/update/:id").put(isAuthenticated,singleUpload,updateCompany)

export default router