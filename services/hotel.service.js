import fs from 'fs';
import path from 'path';

const CLIENTS_FILE_PATH = path.join(path.resolve(), 'clients.json');

class HotelService {
    getClients() {
        try {
            const rawData = fs.readFileSync(CLIENTS_FILE_PATH, 'utf8');
            const clientsData = JSON.parse(rawData);
            return clientsData.clients;
        } catch (error) {
            console.error('Erreur lors de la lecture du fichier clients.json:', error);
            throw error; 
        }
    }

    getClientDetails(id) {
        try {
            const clients = this.getClients();
            const client = clients.find(client => client.id === parseInt(id, 10));
            return client || null;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du client:', error);
            throw error;
        }
    }
    addClient(clientData) {
        return "Client ajouté";
    }

    updateClient(id, clientData) {
        return `Informations du client ${id} mises à jour`;
    }

    bookRoomForClient(clientId, roomData) {
        return `Chambre réservée pour le client ${clientId}`;
    }

    cancelClientReservation(clientId) {
        return `Réservation annulée pour le client ${clientId}`;
    }
}

export const hotelService = new HotelService();
