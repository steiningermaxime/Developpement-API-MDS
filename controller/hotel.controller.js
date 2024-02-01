
import { hotelService } from '../services/hotel.service.js';

class HotelController {
    getClients() {
        return (req, res) => {
            const clients = hotelService.getClients();
            res.json(clients);
        };
    }

    getClientDetails() {
        return (req, res) => {
            try {
                const clientDetails = hotelService.getClientDetails(req.params.id);
                if (clientDetails) {
                    res.json(clientDetails);
                } else {
                    res.status(404).send('Client non trouvé');
                }
            } catch (error) {
                res.status(500).send('Erreur interne du serveur');
            }
        };
    }
    addClient() {
        return (req, res) => {
            const clientAdded = hotelService.addClient(req.body);
            res.send(clientAdded);
        };
    }

    updateClient() {
        return (req, res) => {
            const clientUpdated = hotelService.updateClient(req.params.id, req.body);
            res.send(clientUpdated);
        };
    }

    bookRoomForClient() {
        return (req, res) => {
            const roomBooked = hotelService.bookRoomForClient(req.params.id, req.body);
            res.send(roomBooked);
        };
    }

    cancelClientReservation() {
        return (req, res) => {
            const reservationCancelled = hotelService.cancelClientReservation(req.params.id);
            res.send(reservationCancelled);
        };
    }
}

export const hotelController = new HotelController();
