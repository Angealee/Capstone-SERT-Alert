import { ID, Account, Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.capstone.sertalert',
    projectId: '66b1f1210032b8dc3fec',
    databaseId: '66b1f2cd00104e731197',
    sertuserCollectionId: '66b1f2f60016543718b6',
    reportsCollectionId: '66b1f3670018a6efe0db',
    reporterCollectionId: '66b1f5600037b222f679',
    storageId: '66b1fa000032b9e61836'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);

// Register User
export const createUser = () => {
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}



