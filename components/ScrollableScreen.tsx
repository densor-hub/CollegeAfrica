import { ScrollView, View, Text } from "react-native";
import React, { ReactNode } from 'react';

interface iScrollableScreen {
    children: ReactNode;
}

const ScrollableScreen: React.FC<iScrollableScreen> = ({ children }) => {
    return (
        <ScrollView >
            <View style={{ padding: 16, backgroundColor: "#f4f4f5" }}>
                {children}
            </View>
        </ScrollView>
    );
};

export default ScrollableScreen