import { clientService } from "../services/client.service.js";

class ClientController {
    getHotel() {
        return (req, res) => {
            const hotels = clientService.getHotel();
            res.json(hotels);
        }
    }
    getHotelRooms(){
        return (req, res) =>{
            const hotelrooms = clientService.getHotelRooms();
            res.json(hotelrooms)
        }
    }
    getRoomDetails() {
        return (req, res) => {
            try {
                const roomDetails = clientService.getRoomDetails(req.params.id);
                if (roomDetails) {
                    res.json(roomDetails);
                } else {
                    res.status(404).send('chambre non trouvé');
                }
            } catch (error) {
                res.status(500).send('Erreur interne du serveur');
            }
        };
    }
    bookRoom() {
        return (req, res) => {
            const roomBooked = clientService.bookRoom(req.params.id, req.body);
            res.send(roomBooked);
        };
    }

    cancelBooking() {
        return (req, res) => {
            const reservationCancelled = clientService.cancelBooking(req.params.id);
            res.send(reservationCancelled);
        };
    }
}
export const clientController = new ClientController();