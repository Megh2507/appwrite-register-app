import { Appwrite } from 'appwrite';
const appwrite = new Appwrite();

appwrite
    .setEndpoint('http://64.227.169.218/v1') // Your Appwrite Endpoint
    .setProject('626837229e51100ea1f0') // Your project ID
;
export default appwrite;