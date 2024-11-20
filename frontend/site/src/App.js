import React from 'react';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';

function App() {
    return (
        <div>
            <h1>Gerenciador de Perfis</h1>
            <ProfileForm />
            <ProfileList />
        </div>
    );
}

export default App;
