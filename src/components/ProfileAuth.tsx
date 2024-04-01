import { Authenticator } from "@aws-amplify/ui-react-native";
import ProfileScreen from "../screens/Profile";

export default function ProfileAuth() {
    return (
        <Authenticator.Provider>
            <Authenticator>
                <ProfileScreen />
            </Authenticator>
        </Authenticator.Provider>
    )
}