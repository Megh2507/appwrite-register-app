import { Appwrite } from 'appwrite';
const appwrite = new Appwrite();

appwrite
    .setEndpoint('https://www.megha25.me/v1') // Your Appwrite Endpoint
    .setProject('626837229e51100ea1f0') // Your project ID
;
export default appwrite;