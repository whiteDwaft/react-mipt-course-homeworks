import './App.css';
import {AppRouter} from "./components/AppRouter";
import {AuthContextProvider} from "./context/AuthContext";
import {QueryClient, QueryClientProvider} from 'react-query';
import React, {useMemo} from 'react';

export const App = () => {
    const queryClient = useMemo(() => new QueryClient(), []);

    return <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
            <AppRouter/>
        </QueryClientProvider>
    </AuthContextProvider>
}

export default App;
