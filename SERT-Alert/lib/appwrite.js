import { ID, Account, Client } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.angeale.capstoneSERTalert',
    projectId: '66923beb0025ee8308d2',
    databaseId: '669248d1001d9d29f489',
    SERTmembersCollectionId: '66924a2d00099aee7ee5',
    userReportsId: '66924bdb002786b10f25',
    storageId: '66aed87b0020ea8d8e8d'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

    const account = new Account(client);

    export const createUser = () => {
        // Register User
        account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    }

    

;
