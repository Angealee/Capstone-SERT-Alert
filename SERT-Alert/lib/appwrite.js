import { ID, Account, Client, Avatars, Databases } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '66923beb0025ee8308d2',
    databaseId: '669248d1001d9d29f489',
    collectionId: '669248d1001d9d29f489',
    userReportsId: '66924bdb002786b10f25',
    SERTmembersId: '66924a2d00099aee7ee5',
    storageId: '66aed87b0020ea8d8e8d'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId); // Your project ID

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, name) => {
    try {
        // Register User
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        );

        console.log('New account created:', newAccount);

        if (!newAccount) throw new Error('Account creation failed');
        const avatarUrl = avatars.getInitials(name);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.collectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username: name, // assuming username is the name
                avatar: avatarUrl
            }
        );

        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error(error.message);
    }
};

export const signIn = async (email, password) => {
    try {
        // Log out any existing sessions
        const sessions = await account.listSessions();
        for (let session of sessions.sessions) {
            await account.deleteSession(session.$id);
        }

        // Create a new session
        const session = await account.createEmailSession(email, password);
        console.log('New session created:', session);
        return session;

    } catch (error) {
        console.error('Error signing in:', error);
        throw new Error(error.message);
    }
};

export const listCollections = async () => {
    try {
        const collections = await databases.listCollections(appwriteConfig.databaseId);
        console.log('Collections:', collections);
    } catch (error) {
        console.error('Error listing collections:', error);
    }
};
