import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
// import { useQuery } from '@tanstack/react-query';
// import { getUserById } from '../../services/usersServices';
// import { useParams } from 'react-router-dom';

const UserProfile = ({ user = {name: 'Jovan', email:'jovan.dyaz@example.com'} }) => {
    // const params = useParams();
    // const { id } = params;
    const { name, email} = user
    // const { data: user, isLoading } = useQuery(['user', id], () => getUserById(id));

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Name: {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Email: {email}
                </Typography>
                <Typography variant="body2">{user.phone}</Typography>
            </CardContent>
        </Card>
    );
}

export default UserProfile