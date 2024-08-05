import { ID, Account, Client, Avatars, Databases } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.angeale.capstoneSERTalert',
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
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);
    
    export const createUser = async (email, password, name) => {
        // Register User
        try{
            const newAccount = await account.create(
                ID.unique(),
                email,
                password,
                name
            )

        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(name)

          await  signIn(email, password)

          const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.collectionId,
            ID.unique(),
            {
            accountId: newAccount.$id,
            email,
            name,
            avatar: avatarUrl
            }
          )

          return newUser;
        } catch (error){
            console.log(error);
            throw new Error(error);
        }
    }

    export async function signIn(email, password){
        try{
         // Log out any existing sessions
        const sessions = await account.listSessions();
        for (let session of sessions.sessions) {
            await account.deleteSession(session.$id);
        }

        // Create a new session
         const session = await account.createEmailSession(email, password)

         return session;

        }catch (error){
            throw new Error(error);
        }
    }
    
    export const listCollections = async () => {
        try {
            const collections = await databases.listCollections(appwriteConfig.databaseId);
            console.log('Collections:', collections);
        } catch (error) {
            console.log('Error listing collections:', error);
        }
    };
;
