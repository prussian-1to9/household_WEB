import { Router } from "express";
//import * as myiCOOPController from '@/controllers/myiCOOPController';
const router = Router();

//router.get('/', myiCOOPController.index);

router.get('/', (req, res) => {
    res.json({message :'Hello World'});
});

export default router;