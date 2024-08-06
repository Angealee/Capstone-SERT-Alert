import { ID, Avatars, Account, Client, Databases, Query } from 'react-native-appwrite';

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
    const avatars = new Avatars(client);
    const databases = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.sertuserCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser;
    }   catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password, username) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    }   catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try{
        const getCurrentAccount = await account.get();

        if(!getCurrentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.sertuserCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0]
    }   catch (error) {
        console.log(error);
    }
}


