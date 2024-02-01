
import express from 'express';
import { hotelController } from '../controller/hotel.controller.js';

const router = express.Router();

router.get('/clients', hotelController.getClients());

router.get('/clients/:id', hotelController.getClientDetails());

router.post('/clients', hotelController.addClient());

router.put('/clients/:id', hotelController.updateClient());

router.post('/clients/:id/book', hotelController.bookRoomForClient());

router.delete('/clients/:id/cancel', hotelController.cancelClientReservation());

export default router;
