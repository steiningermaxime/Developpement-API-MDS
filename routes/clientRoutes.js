import express from 'express';
import { clientController } from '../controller/client.controller.js';

const router = express.Router();

router.get('/info', clientController.getHotel());
router.get('/rooms', clientController.getHotelRooms());
router.get('/rooms/:id', clientController.getRoomDetails());
router.post('/rooms/:id/book', clientController.bookRoom());
router.delete('/rooms/:id/cancel', clientController.cancelBooking());
export default router;