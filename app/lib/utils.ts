import mongoose, { Connection } from 'mongoose';

interface ConnectionStatus {
    isConnected: boolean;
}

let connection: ConnectionStatus = { isConnected: false };

export const connectToDB = async () => {
    try {
        if (connection.isConnected) return;

        const db = await mongoose.connect(process.env.MONGO!);

        connection.isConnected = db.connections[0].readyState === 1;
        console.log("DB connected successfully")
    } catch (error) {
        console.log('Error connecting to database:', error);
        throw new Error('Could not connect to database');
    }
};

export default connectToDB;
