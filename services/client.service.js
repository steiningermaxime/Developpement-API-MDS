import fs from 'fs';
import path from 'path';

const HOTEL_FILE_PATH = path.join(path.resolve(), 'hotel.json');

class ClientService {
    getHotel() {
        try {
            const rawData = fs.readFileSync(HOTEL_FILE_PATH, 'utf8');
            const hotelData = JSON.parse(rawData);
            return {
                name: hotelData.name,
                location: hotelData.location,
                contact: hotelData.contact,
                facilities: hotelData.facilities,
            };
        } catch (error) {
            console.error("Erreur lors de la lecture des fichiers hotel json")
            throw error;
        }
    }
    getHotelRooms() {
        try{
            const rawRoomData = fs.readFileSync(HOTEL_FILE_PATH, 'utf-8');
            const hotelRoomData= JSON.parse(rawRoomData);
            return hotelRoomData.rooms
        } catch(error){
            console.error("Impossible de lire les chambres du fichier hotel")
            throw error;
        }
    }
    getRoomDetails(id) {
        try {
            const rooms = this.getHotelRooms();
            const room = rooms.find(client => client.id === parseInt(id, 10));
            return room || null;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails de la chambre:', error);
            throw error;
        }
    }
    bookRoom(roomId) {
        return `Réservation de la chambre ${roomId} effectuée`;
    }
    cancelBooking(roomId) {
        return `Annulation de la réservation de la chambre ${roomId} effectuée`;
    }
}
export const clientService = new ClientService();